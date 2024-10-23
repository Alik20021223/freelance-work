import { TableColumn } from '@consta/table/Table';
import { Client } from "@entities/clients/types/types";
import { DataCellName, HeaderCell } from '@entities/clients/ui/client-table/components/data-cell/data-cell-name';
import { rows } from './rows-table';


// Теперь columns становится функцией, которая вызывает хук внутри себя
export const columns = (
  checkedClientIds: Set<string>,
  handleHeaderCheckboxChange: (isChecked: boolean) => void,
  handleRowCheckboxChange: (id: string, isChecked: boolean) => void,
  defaultColumns: TableColumn<Client>[],
): TableColumn<Client>[] => [
    {
      title: '',
      accessor: 'checkbox',
      width: 'auto',
      maxWidth: 60,
      renderHeaderCell: () => (
        <HeaderCell
          onChange={handleHeaderCheckboxChange}
          checked={checkedClientIds.size === rows.length}
        />
      ),
      renderCell: ({ row }) => (
        <DataCellName
          row={row}
          checkedClientIds={checkedClientIds}
          onChange={handleRowCheckboxChange}
        />
      ),
    },
    ...defaultColumns, // Добавляем остальные столбцы из состояния
  ];
