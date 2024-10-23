import Header from "@shared/components/header"
import Sidebar from "@shared/components/sidebar/component"
import { Outlet } from "react-router-dom"

const DefaultLayout = () => {
    return (
        <>
            <Header />
            <section className="flex">
                <Sidebar />
                <main className="container mx-auto pt-[92px]">
                    <Outlet />
                </main>
            </section>
        </>
    )
}

export default DefaultLayout



