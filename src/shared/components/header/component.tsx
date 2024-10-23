import { useAppStore } from '@app/store/store';
import { IconHamburger } from '@consta/icons/IconHamburger';
import { IconRing } from '@consta/icons/IconRing';
import { IconBento } from '@consta/icons/IconBento';
import logo from '@assets/logo.svg'
import userImg from '@assets/Rectangle 2.png'
import { User } from '@consta/uikit/User';
import { NavLink } from 'react-router-dom';

const Header = () => {

    const onOpenMenu = useAppStore((state) => state.onOpenMenu)

    return (
        <header className="bg-white border-b fixed inset-y-0 z-10 left-0 h-[60px] w-full flex items-center">
            <IconHamburger
                size="m"
                onClick={onOpenMenu}
                className="inline-block cursor-pointer w-[72px]"
                style={{ display: 'inline-block' }}
            />
            <section className='container sticky flex items-center gap-4 mx-auto justify-between'>
                <NavLink to='/'>
                    <img src={logo} alt="logo" />
                </NavLink>
                <ul className='flex items-center space-x-4'>
                    <li><IconRing size="s" /></li>
                    <li><IconBento /></li>
                    <li><User avatarUrl={userImg} name="Имя Фамилия" info="Доп. информация" /></li>
                </ul>
            </section>
        </header>
    )
}

export default Header