import { help, menu } from "@utils/menuItems"
import { DefaultNavbarRailItem, NavbarRail, Navbar } from "@consta/header/Navbar"
import { useAppStore } from "@app/store/store";

const Sidebar = () => {
    const getItemLabel = () => undefined;
    const getItemTooltip = (item: DefaultNavbarRailItem) => item.label;

    const onItemClick = () => { };
    const open = useAppStore((state) => state.open)

    return (
        <aside className={`bg-white sticky inset-y-12 transition-all duration-100 ease-in-out left-0 overflow-hidden 2xl:h-screen max-2xl:h-[calc(100vh-40px)] ${open ? `w-[340px]` : `w-[72px]`} border-r 2xl:pt-[60px] border-neutral-100 text-white`}>
            <nav className={`flex flex-col h-full px-1 py-4 justify-between `}>
                {open ?
                    <>
                        <Navbar items={menu} onItemClick={onItemClick} />
                        <Navbar items={help} onItemClick={onItemClick} />
                    </>
                    : <>
                        <NavbarRail
                            items={menu}
                            getItemLabel={getItemLabel}
                            getItemTooltip={getItemTooltip}
                            onItemClick={onItemClick}
                        />
                        <NavbarRail
                            items={help}
                            getItemLabel={getItemLabel}
                            getItemTooltip={getItemTooltip}
                            onItemClick={onItemClick}
                        />
                    </>}
            </nav>
        </aside>
    )
}

export default Sidebar