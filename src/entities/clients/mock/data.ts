import { ColumnsFilterItem, filterItems } from "@entities/clients/types/types";

export const sortByItems: filterItems[] = [
  {
    label: "По дате создания",
    id: 1,
  },
  {
    label: "Вчера",
    id: 2,
  },
  {
    label: "Ранее",
    id: 3,
  },
];

export const actionItems: filterItems[] = [
  {
    label: "Удалить",
    id: 1,
  },
  {
    label: "Действие 1",
    id: 2,
  },
  {
    label: "Действие 2",
    id: 3,
  },
  {
    label: "Действие 3",
    id: 4,
  },
];

export const filterItemsData: ColumnsFilterItem[] = [
  { name: "CLIENT ID" },
  { name: "ФИО" },
  { name: "Телефон" },
  { name: "Email" },
  { name: "Сегменты" },
  { name: "Еще один пункт 1" },
  { name: "Еще один пункт 2" },
  { name: "Еще один пункт 3" },
];

export const DefaultFilterItems: ColumnsFilterItem[] = [
  { name: "CLIENT ID" },
  { name: "ФИО" },
  { name: "Телефон" },
  { name: "Email" },
  { name: "Сегменты" }
];
