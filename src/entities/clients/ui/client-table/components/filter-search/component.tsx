import { useState } from 'react'
import { IconColumns } from '@consta/icons/IconColumns';
import { TextField } from '@consta/uikit/TextField';
import { IconSearchStroked } from '@consta/icons/IconSearchStroked';
import { filterItems } from '@entities/clients/types/types';
import { Select } from '@consta/uikit/Select';
import { sortByItems } from '@entities/clients/mock/data';
import { useAppStore } from '@app/store/store';
import { Button } from '@consta/uikit/Button';

const FilterSearch = () => {

    const [sortValue, setSortValue] = useState<filterItems>(sortByItems[0]);
    const onOpenFilterColumn = useAppStore((state) => state.onOpenFilterColumn)
    return (
        <>
            <div className=' flex bg-white p-4 justify-between rounded-t-md border-b-2'>
                <div className='flex gap-4'>
                    <TextField
                        style={{ height: '32px', width: '256px' }}
                        size="s"
                        leftSide={IconSearchStroked}
                        placeholder="Поиск"
                    />
                    <Select
                        style={{ height: '32px', width: '256px', zIndex: 3 }}
                        size="s"
                        items={sortByItems}
                        value={sortValue}
                        onChange={(value) => setSortValue(value as filterItems)}
                        dropdownClassName="selectDropDown"
                    />
                </div>
                <Button
                    onlyIcon
                    view="secondary"
                    iconRight={IconColumns}
                    onClick={() => onOpenFilterColumn(true)}
                    className='border !animate-none !shadow-none rounded px-3 py-2 icon-filter'
                />
            </div>
        </>
    )
}

export default FilterSearch