import { DefaultFilterItems } from "@entities/clients/mock/data";
import { Client, ColumnsFilterItem } from "@entities/clients/types/types";
import { create } from "zustand";
import DataCellSegments from "@entities/clients/ui/client-table/components/data-cell-segments";
import { TableColumn } from "@consta/table/Table";

const initialValue: TableColumn<Client>[] = [
  {
    title: "CLIENT ID",
    accessor: "id",
    width: "auto",
    minWidth: 120,
  },
  {
    title: "ФИО",
    accessor: "name",
    width: "auto",
    minWidth: 200,
  },
  {
    title: "ТЕЛЕФОН",
    accessor: "phone",
    width: "auto",
    minWidth: 200,
  },
  {
    title: "EMAIL",
    accessor: "email",
    width: "auto",
    minWidth: 300,
    maxWidth: 400,
  },
  {
    title: "СЕГМЕНТЫ",
    accessor: "segments",
    width: "auto",
    minWidth: 300,
    renderCell: DataCellSegments,
  },
];

type State = {
  open: boolean;
  filterColumn: boolean;
  filterItemsName: ColumnsFilterItem[];
  defaultColumns: TableColumn<Client>[];
  filteredItems: TableColumn<Client>[];
};

type Actions = {
  onOpenMenu: () => void;
  onOpenFilterColumn: (value: boolean) => void;
  onChangeFilterItems: (value: ColumnsFilterItem[]) => void;
};

export const useAppStore = create<State & Actions>((set) => ({
  open: false,
  defaultColumns: initialValue,
  filteredItems: initialValue,
  filterItemsName: DefaultFilterItems,
  filterColumn: false, // Инициализация состояния
  onOpenMenu: () => set((state) => ({ open: !state.open })),
  onOpenFilterColumn: (value) =>
    set(() => {
      return { filterColumn: value }; // Правильный возврат объекта
    }),
  onChangeFilterItems: (value) =>
    set((state) => {
      const filteredColumns = state.defaultColumns.filter((column) =>
        value.some(
          (item) =>
            item.name.toLocaleLowerCase() === column.title?.toLocaleLowerCase()
        )
      );

      return { filterItemsName: value, filteredItems: filteredColumns };
    }),
}));
