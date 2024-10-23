import { rows } from '@entities/clients/mock/rows-table';
import { useState } from 'react';

// Создание интерфейса для управления состоянием
interface CheckboxState {
    checkedClientIds: Set<string>;
    handleHeaderCheckboxChange: (isChecked: boolean) => void;
    handleRowCheckboxChange: (id: string, isChecked: boolean) => void;
    setCheckedClientIds: (value: Set<string>) => void
}

const useCheckboxState = (): CheckboxState => {
    const [checkedClientIds, setCheckedClientIds] = useState<Set<string>>(new Set());

    const handleHeaderCheckboxChange = (isChecked: boolean) => {
        if (isChecked) {
            // Если чекбокс заголовка выбран, добавляем все id клиентов
            setCheckedClientIds(new Set(rows.map(row => row.id)));
        } else {
            // Если чекбокс заголовка снят, очищаем все id клиентов
            setCheckedClientIds(new Set());
        }
    };

    const handleRowCheckboxChange = (id: string, isChecked: boolean) => {
        const newCheckedIds = new Set(checkedClientIds);
        if (isChecked) {
            newCheckedIds.add(id);
        } else {
            newCheckedIds.delete(id);
        }
        setCheckedClientIds(newCheckedIds);
    };

    return {
        checkedClientIds,
        handleHeaderCheckboxChange,
        handleRowCheckboxChange,
        setCheckedClientIds,
    };
};

export default useCheckboxState
