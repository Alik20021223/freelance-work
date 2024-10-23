import { TextField } from '@consta/uikit/TextField';
import { IconSearchStroked } from '@consta/icons/IconSearchStroked';
import { Select } from '@consta/uikit/Select';
import { actionItems, sortByItems } from '@entities/clients/mock/data';
import { useMemo, useState } from 'react';
import { Client, filterItems } from '@entities/clients/types/types';
import { IconColumns } from '@consta/icons/IconColumns';
import { Table } from '@consta/table/Table';
import { columns } from '@entities/clients/mock/column-table';
import { rows } from '@entities/clients/mock/rows-table';
import useCheckboxState from './components/checkbox-cell-state';
import { Text } from '@consta/uikit/Text';
import { Button } from '@consta/uikit/Button';
import { Pagination } from '@consta/uikit/Pagination';



const ClientTable = () => {
    const VISIBLE_ROWS_COUNT = 20;
    const [sortValue, setSortValue] = useState<filterItems>(sortByItems[0]);
    const [actionValue, setActionValue] = useState<filterItems | null>();
    const { checkedClientIds, handleHeaderCheckboxChange, handleRowCheckboxChange, setCheckedClientIds } = useCheckboxState();
    const [visibleRows, setVisibleRows] = useState<Client[]>([]);
    const [page, setPage] = useState(1);

    const handleActionClick = () => {
        if (actionValue?.label === 'Удалить') {
            setVisibleRows(prevRows =>
                prevRows.filter(visibleRow => !checkedClientIds.has(visibleRow.id))
            );
            setCheckedClientIds(new Set());
        }
    }

    useMemo(() => {
        const startIndex = (page - 1) * VISIBLE_ROWS_COUNT;
        const endIndex = startIndex + VISIBLE_ROWS_COUNT;

        setVisibleRows(rows.slice(startIndex, endIndex));
    }, [page])

    return (
        <>
            <section className="w-full h-full">
                <div className=' flex bg-white p-4 justify-between rounded-t-md border-b-2'>
                    <div className='flex gap-4'>
                        <TextField
                            style={{ height: '32px', width: '256px' }}
                            size="s"
                            leftSide={IconSearchStroked}
                            placeholder="Поиск"
                        />
                        <Select
                            style={{ height: '32px', width: '256px', zIndex: 1000 }}
                            size="s"
                            items={sortByItems}
                            value={sortValue}
                            onChange={(value) => setSortValue(value as filterItems)}
                            dropdownClassName="selectDropDown"

                        />
                    </div>
                    <div className='border rounded px-3 pt-2 pb-1 icon-filter' >
                        <IconColumns
                            size='s'
                            className="pointer h-4 w-4"
                        // onClick={() => setIsColumnsFilterActive(!isColumnsFilterActive)}
                        />
                    </div>
                </div>
                <Table
                    className="tableClients"
                    rows={visibleRows}
                    columns={columns(checkedClientIds, handleHeaderCheckboxChange, handleRowCheckboxChange)}
                    style={{ maxHeight: 570 }}
                    stickyHeader
                    virtualScroll
                // resizable="inside"
                />
                <div className='flex bg-white border-t-2 px-4 py-3 justify-between'>
                    {checkedClientIds.size > 0 ?
                        <div className='flex space-x-4'>
                            <Text>Выбрано {checkedClientIds.size}</Text>
                            <Select
                                style={{ height: '32px', width: '164px' }}
                                size="s"
                                placeholder="Действие"
                                items={actionItems}
                                value={actionValue}
                                onChange={(value) => setActionValue(value)}
                                dropdownClassName="selectDropDown"
                            />
                            <Button
                                label="Применить"
                                view="ghost"
                                size="s"
                                onClick={handleActionClick}
                            />
                        </div> :
                        <>
                            <Text className='text-[#00203399]'>{visibleRows.length} из {rows.length} записей</Text>
                        </>
                    }
                    <Pagination
                        type="input"
                        items={Math.floor(rows.length / VISIBLE_ROWS_COUNT) + 1}
                        value={page}
                        onChange={setPage}
                        arrows={[{ label: '' }, { label: '' }]}
                        outerMostArrows={[true, true]}
                        showFirstPage
                        showLastPage
                        size="s"
                    />
                </div>
            </section>
        </>
    )
}

export default ClientTable