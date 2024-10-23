import { DefaultNavbarRailItem } from '@consta/header/Navbar';
import { IconAreaChart } from '@consta/icons/IconAreaChart';
import { IconUser } from '@consta/icons/IconUser';
import { IconShape } from '@consta/icons/IconShape';
import { IconTarget } from '@consta/icons/IconTarget';
import { IconLightningBolt } from '@consta/icons/IconLightningBolt';
import { IconLogicalElement } from '@consta/icons/IconLogicalElement';
import { IconSettings } from '@consta/icons/IconSettings';
import { IconQuestion } from '@consta/icons/IconQuestion';

export const menu: DefaultNavbarRailItem[] = [
    {
        label: 'Аналитика',
        icon: IconAreaChart,
    },
    {
        label: 'Клиенты',
        icon: IconUser,
        active: true,
    },
    {
        label: 'Сегменты',
        icon: IconShape,
    },
    {
        label: 'Цели',
        icon: IconTarget,
    },
    {
        label: 'Триггеры',
        icon: IconLightningBolt,
    },
    {
        label: 'Интеграции',
        icon: IconLogicalElement,
    },
    {
        label: 'Настройки',
        icon: IconSettings,
    },
];

export const help = [
    {
        label: 'Вопросы',
        icon: IconQuestion,
    },
]
