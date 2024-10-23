import { Button } from "@consta/uikit/Button"
import ClientTable from "@entities/clients/ui/client-table/component"
import { IconAdd } from '@consta/icons/IconAdd'


const ClientsContent = () => {
    return (
        <>
            <div>
                <div className="flex justify-between w-full items-center pb-4">
                    <h1 className="text-2xl font-bold">Клиенты</h1>
                    <Button iconLeft={IconAdd} label="Добавить клиента" />
                </div>
                <ClientTable />
            </div>
        </>
    )
}

export default ClientsContent