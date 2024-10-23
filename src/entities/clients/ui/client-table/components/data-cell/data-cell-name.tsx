import React from 'react';
import { DataCell } from '@consta/table/DataCell';
import { Checkbox } from '@consta/uikit/Checkbox';
import { Client } from '@entities/clients/types/types';
import { HeaderDataCell } from '@consta/table/HeaderDataCell';

interface DataCellNameProps {
    row: Client;
    checkedClientIds: Set<string>; // Используйте Set<string> для четкости типов
    onChange: (id: string, isChecked: boolean) => void; // Уточнение типа функции
}

const DataCellName: React.FC<DataCellNameProps> = ({ row, checkedClientIds, onChange }) => {
    const isChecked = checkedClientIds.has(row.id);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(row.id, event.target.checked);
    };

    return (
        <DataCell
            control={<Checkbox checked={isChecked} size="m" onChange={handleChange} />}
        />
    );
};

interface HeaderCellProps {
    onChange: (isChecked: boolean) => void; // Уточнение типа функции
    checked: boolean;
}

const HeaderCell: React.FC<HeaderCellProps> = ({ onChange, checked }) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.checked);
    };

    return (
        <HeaderDataCell
            controlLeft={<Checkbox checked={checked} size="m" onChange={handleChange} />}
        />
    );
};

// Экспорт по отдельности, чтобы упростить импорт в других файлах
export { DataCellName, HeaderCell };
