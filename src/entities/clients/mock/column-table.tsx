import { TableColumn } from '@consta/table/Table';
import { Client } from "@entities/clients/types/types";
import DataCellSegments  from '@entities/clients/ui/client-table/components/data-cell-segments'
import { DataCellName, HeaderCell } from '@entities/clients/ui/client-table/components/data-cell/data-cell-name';
import { rows } from './rows-table';


export const columns = (
  checkedClientIds: Set<string>,
  handleHeaderCheckboxChange: (isChecked: boolean) => void,
  handleRowCheckboxChange: (id: string, isChecked: boolean) => void
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
    {
      title: 'CLIENT ID',
      accessor: 'id',
      width: 'auto',
      minWidth: 120,
    },
    {
      title: 'ФИО',
      accessor: 'name',
      width: 'auto',
      minWidth: 200,
    },
    {
      title: 'ТЕЛЕФОН',
      accessor: 'phone',
      width: 'auto',
      minWidth: 200,
    },
    {
      title: 'EMAIL',
      accessor: 'email',
      width: 'auto',
      minWidth: 300,
      maxWidth: 400,
    },
    {
      title: 'СЕГМЕНТЫ',
      accessor: 'segments',
      width: 'auto',
      minWidth: 300,
      
      renderCell: DataCellSegments,
    },
  ];



