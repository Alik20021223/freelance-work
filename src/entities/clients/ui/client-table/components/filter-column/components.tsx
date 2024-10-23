import { useAppStore } from '@app/store/store';
import { IconSearchStroked } from '@consta/icons/IconSearchStroked';
import { IconClose } from '@consta/icons/IconClose';
import { Button } from '@consta/uikit/Button';
import { Sidebar } from '@consta/uikit/Sidebar';
import { TextField } from '@consta/uikit/TextField';
import { CheckboxGroup } from '@consta/uikit/CheckboxGroup';
import { useState } from 'react';
import { ColumnsFilterItem } from '@entities/clients/types/types';
import { Text } from '@consta/uikit/Text';
import { DefaultFilterItems, filterItemsData } from '@entities/clients/mock/data';



const FilterColumn = () => {

    const filterColumn = useAppStore((state) => state.filterColumn)
    const onOpenFilterColumn = useAppStore((state) => state.onOpenFilterColumn)
    const onChangeFilterItems = useAppStore((state) => state.onChangeFilterItems)

    const [isValue, setValue] = useState<ColumnsFilterItem[] | null>(DefaultFilterItems);

    const handleFilter = (value: ColumnsFilterItem[] | null) => {
        
        
        if (value) {
            console.log(value);
            onChangeFilterItems(value)
        }
        onOpenFilterColumn(false)
    }

    return (
        <>
            <Sidebar
                className='grid grid-rows-[repeat(5,_auto)] p-4 bg-[var(--color-bg-default)]  border border-[var(--color-bg-border)]'
                position='right'
                size='m'
                style={{ zIndex: 10 }}
                isOpen={filterColumn}
                onEsc={() => onOpenFilterColumn(false)}
                onClickOutside={() => onOpenFilterColumn(false)}
                hasOverlay={false}
            >
                <Sidebar.Content>
                    <div className='flex justify-between items-center'>
                        <div className='flex space-x-2'>
                            <Text>Столбцы</Text>
                            <Button onClick={() => setValue(DefaultFilterItems)} label="По умолчанию" view="ghost" size="xs" />
                        </div>
                        <Button label="Закрыть" iconRight={IconClose} onClick={() => onOpenFilterColumn(false)} view="ghost" size="s" onlyIcon />
                    </div>
                    <TextField
                        style={{ padding: '16px 16px 16px 0px' }}
                        size="s"
                        leftSide={IconSearchStroked}
                        placeholder="Найти в списке"
                    />
                    <div>
                        <Button className='!animation-none !shadow-none' onClick={() => setValue(filterItemsData)} label="Выбрать все" view="clear" size="s" />
                        <Button className='!animation-none !shadow-none' onClick={() => setValue(null)} label="Сбросить все" view="clear" size="s" />
                    </div>
                    <div className='border-2 rounded-md p-3 h-full'>
                        <CheckboxGroup
                            value={isValue}
                            items={filterItemsData}
                            getItemLabel={(item) => item.name}
                            getItemDisabled={(item) => item.disabled}
                            onChange={setValue}
                            name={'CheckboxGroup'}
                        />
                    </div>
                </Sidebar.Content>
                <Sidebar.Actions className='flex justify-between items-center pt-5'>
                    <Button label="Применить" onClick={() => handleFilter(isValue)} view="primary" size="s" />
                    <Button label="Отмена" onClick={() => onOpenFilterColumn(false)} view="ghost" size="s" />
                </Sidebar.Actions>
            </Sidebar>
        </>
    )
}

export default FilterColumn