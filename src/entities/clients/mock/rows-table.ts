import { getRandomId } from "@utils/functions";
import { Client } from "@entities/clients/types/types";

export const rows: Client[] = [
    {
      id: String(getRandomId()),
      name: 'Иван Фролов',
      phone: '+7 950 202-92-79',
      email: 'ivan.frolov@example.com',
      segments: [
        { text: 'День рождения', color: 'success' },
        { text: 'Бросил корзину', color: 'system' },
        { text: 'Сгорят бонусы 29.02', color: 'warning' },
        { text: 'Потерянные', color: 'error' },
        { text: 'Лояльные', color: 'normal' },
        { text: 'Потенциально лояльные', color: 'system' },
        { text: 'Новые', color: 'success' },
        { text: 'Риск потерять', color: 'warning' },
        { text: 'До 50 бонусов на счету', color: 'system' },
        { text: 'Мужчины создали аккаунты', color: 'warning' },
        { text: 'Женщины с брошенной корзиной', color: 'warning' }
      ]
    },
    {
      id: String(getRandomId()),
      name: 'Егор Рудой',
      phone: '+7 960 230-92-79',
      email: 'egor.rudoy@example.com',
      segments: [
        { text: 'День рождения', color: 'success' },
        { text: 'Бросил корзину', color: 'system' },
        { text: 'Сгорят бонусы 29.02', color: 'warning' },
        { text: 'Потерянные', color: 'error' },
        { text: 'Лояльные', color: 'normal' },
        { text: 'Потенциально лояльные', color: 'system' },
        { text: 'Новые', color: 'success' },
        { text: 'Риск потерять', color: 'warning' },
        { text: 'До 50 бонусов на счету', color: 'system' },
        { text: 'Мужчины создали аккаунты', color: 'warning' },
        { text: 'Женщины с брошенной корзиной', color: 'warning' }
      ]
    },
    {
      id: String(getRandomId()),
      name: 'Петр Банных',
      phone: '+7 950 204-92-79',
      email: 'petr.bannyh@example.com',
      segments: [
        { text: 'День рождения', color: 'success' },
        { text: 'Бросил корзину', color: 'system' },
        { text: 'Сгорят бонусы 29.02', color: 'warning' },
        { text: 'Потерянные', color: 'error' },
        { text: 'Лояльные', color: 'normal' },
        { text: 'Потенциально лояльные', color: 'system' },
        { text: 'Новые', color: 'success' },
        { text: 'Риск потерять', color: 'warning' },
        { text: 'До 50 бонусов на счету', color: 'system' },
        { text: 'Мужчины создали аккаунты', color: 'warning' },
        { text: 'Женщины с брошенной корзиной', color: 'warning' }
      ]
    },
    {
      id: String(getRandomId()),
      name: 'Иван Молотов',
      phone: '+7 940 200-92-39',
      email: 'ivan.molotov@example.com',
      segments: [
        { text: 'День рождения', color: 'success' },
        { text: 'Бросил корзину', color: 'system' }
      ]
    },
    {
      id: String(getRandomId()),
      name: 'Семен Колов',
      phone: '+7 950 200-92-29',
      email: 'semen.kolov@example.com',
      segments: [
        { text: 'День рождения', color: 'success' },
        { text: 'Бросил корзину', color: 'system' },
        { text: 'Сгорят бонусы 29.02', color: 'warning' },
        { text: 'Потерянные', color: 'error' },
        { text: 'Лояльные', color: 'normal' },
        { text: 'Потенциально лояльные', color: 'system' },
        { text: 'Новые', color: 'success' },
        { text: 'Риск потерять', color: 'warning' },
        { text: 'До 50 бонусов на счету', color: 'system' },
      ]
    },
    {
      id: String(getRandomId()),
      name: 'Антон Корнев',
      phone: '+7 960 300-91-88',
      email: 'anton.kornev@example.com',
      segments: [
        { text: 'День рождения', color: 'success' },
        { text: 'Бросил корзину', color: 'system' },
        { text: 'Сгорят бонусы 29.02', color: 'warning' },
        { text: 'Потерянные', color: 'error' },
        { text: 'Лояльные', color: 'normal' },
        { text: 'Потенциально лояльные', color: 'system' },
        { text: 'Новые', color: 'success' },
        { text: 'Риск потерять', color: 'warning' },
        { text: 'До 50 бонусов на счету', color: 'system' },
        { text: 'Мужчины создали аккаунты', color: 'warning' },
        { text: 'Женщины с брошенной корзиной', color: 'warning' }
      ]
    },
    {
      id: String(getRandomId()),
      name: 'Дмитрий Громов',
      phone: '+7 960 300-91-77',
      email: 'dmitry.gromov@example.com',
      segments: [
        { text: 'День рождения', color: 'success' },
        { text: 'Бросил корзину', color: 'system' },
        { text: 'Сгорят бонусы 29.02', color: 'warning' },
        { text: 'Потерянные', color: 'error' },
        { text: 'Лояльные', color: 'normal' },
        { text: 'Потенциально лояльные', color: 'system' },
        { text: 'Новые', color: 'success' },
        { text: 'Риск потерять', color: 'warning' },
        { text: 'До 50 бонусов на счету', color: 'system' },
        { text: 'Мужчины создали аккаунты', color: 'warning' },
        { text: 'Женщины с брошенной корзиной', color: 'warning' }
      ]
    },
    {
      id: String(getRandomId()),
      name: 'Максим Тихонов',
      phone: '+7 960 300-91-66',
      email: 'maxim.tikhonov@example.com',
      segments: [
        { text: 'День рождения', color: 'success' },
        { text: 'Бросил корзину', color: 'system' },
        { text: 'Сгорят бонусы 29.02', color: 'warning' },
        { text: 'Потерянные', color: 'error' },
        { text: 'Лояльные', color: 'normal' },
        { text: 'Потенциально лояльные', color: 'system' },
        { text: 'Новые', color: 'success' },
        { text: 'Риск потерять', color: 'warning' },
        { text: 'До 50 бонусов на счету', color: 'system' },
        { text: 'Мужчины создали аккаунты', color: 'warning' },
        { text: 'Женщины с брошенной корзиной', color: 'warning' }
      ]
    },
    {
      id: String(getRandomId()),
      name: 'Алексей Ковальчук',
      phone: '+7 950 203-92-79',
      email: 'alexey.kovalchuk@example.com',
      segments: [
        { text: 'День рождения', color: 'success' },
        { text: 'Бросил корзину', color: 'system' },
        { text: 'Сгорят бонусы 29.02', color: 'warning' },
        { text: 'Потерянные', color: 'error' },
        { text: 'Лояльные', color: 'normal' },
        { text: 'Потенциально лояльные', color: 'system' },
        { text: 'Новые', color: 'success' },
        { text: 'Риск потерять', color: 'warning' },
        { text: 'До 50 бонусов на счету', color: 'system' },
        { text: 'Мужчины создали аккаунты', color: 'warning' },
        { text: 'Женщины с брошенной корзиной', color: 'warning' }
      ]
    },
    {
      id: String(getRandomId()),
      name: 'Роман Козлов',
      phone: '+7 950 204-93-79',
      email: 'roman.kozlov@example.com',
      segments: [
        { text: 'День рождения', color: 'success' },
        { text: 'Бросил корзину', color: 'system' },
        { text: 'Сгорят бонусы 29.02', color: 'warning' },
        { text: 'Потерянные', color: 'error' },
        { text: 'Лояльные', color: 'normal' },
        { text: 'Потенциально лояльные', color: 'system' },
        { text: 'Новые', color: 'success' },
        { text: 'Риск потерять', color: 'warning' },
        { text: 'До 50 бонусов на счету', color: 'system' },
        { text: 'Мужчины создали аккаунты', color: 'warning' },
        { text: 'Женщины с брошенной корзиной', color: 'warning' }
      ]
    },
    {
      id: String(getRandomId()),
      name: 'Виктор Поляков',
      phone: '+7 950 204-94-79',
      email: 'victor.polyakov@example.com',
      segments: [
        { text: 'День рождения', color: 'success' },
        { text: 'Бросил корзину', color: 'system' },
        { text: 'Сгорят бонусы 29.02', color: 'warning' },
        { text: 'Потерянные', color: 'error' },
        { text: 'Лояльные', color: 'normal' },
        { text: 'Потенциально лояльные', color: 'system' },
        { text: 'Новые', color: 'success' },
        { text: 'Риск потерять', color: 'warning' },
        { text: 'До 50 бонусов на счету', color: 'system' },
        { text: 'Мужчины создали аккаунты', color: 'warning' },
        { text: 'Женщины с брошенной корзиной', color: 'warning' }
      ]
    },
    {
      id: String(getRandomId()),
      name: 'Александр Карпов',
      phone: '+7 950 204-95-79',
      email: 'alexander.karpov@example.com',
      segments: [
        { text: 'День рождения', color: 'success' },
        { text: 'Бросил корзину', color: 'system' },
        { text: 'Сгорят бонусы 29.02', color: 'warning' },
        { text: 'Потерянные', color: 'error' },
        { text: 'Лояльные', color: 'normal' },
        { text: 'Потенциально лояльные', color: 'system' },
        { text: 'Новые', color: 'success' },
        { text: 'Риск потерять', color: 'warning' },
        { text: 'До 50 бонусов на счету', color: 'system' },
        { text: 'Мужчины создали аккаунты', color: 'warning' },
        { text: 'Женщины с брошенной корзиной', color: 'warning' }
      ]
    },
    {
      id: String(getRandomId()),
      name: 'Игорь Петров',
      phone: '+7 950 204-96-79',
      email: 'igor.petrov@example.com',
      segments: [
        { text: 'День рождения', color: 'success' },
        { text: 'Бросил корзину', color: 'system' },
        { text: 'Сгорят бонусы 29.02', color: 'warning' },
        { text: 'Потерянные', color: 'error' },
        { text: 'Лояльные', color: 'normal' },
        { text: 'Потенциально лояльные', color: 'system' },
        { text: 'Новые', color: 'success' },
        { text: 'Риск потерять', color: 'warning' },
        { text: 'До 50 бонусов на счету', color: 'system' },
        { text: 'Мужчины создали аккаунты', color: 'warning' },
        { text: 'Женщины с брошенной корзиной', color: 'warning' }
      ]
    },
    {
      id: String(getRandomId()),
      name: 'Николай Васильев',
      phone: '+7 950 204-97-79',
      email: 'nikolay.vasiliev@example.com',
      segments: [
        { text: 'День рождения', color: 'success' },
        { text: 'Бросил корзину', color: 'system' },
        { text: 'Сгорят бонусы 29.02', color: 'warning' },
        { text: 'Потерянные', color: 'error' },
        { text: 'Лояльные', color: 'normal' },
        { text: 'Потенциально лояльные', color: 'system' },
        { text: 'Новые', color: 'success' },
        { text: 'Риск потерять', color: 'warning' },
        { text: 'До 50 бонусов на счету', color: 'system' },
        { text: 'Мужчины создали аккаунты', color: 'warning' },
        { text: 'Женщины с брошенной корзиной', color: 'warning' }
      ]
    },
    {
      id: String(getRandomId()),
      name: 'Михаил Сидоров',
      phone: '+7 950 204-98-79',
      email: 'mikhail.sidorov@example.com',
      segments: [
        { text: 'День рождения', color: 'success' },
        { text: 'Бросил корзину', color: 'system' },
        { text: 'Сгорят бонусы 29.02', color: 'warning' },
        { text: 'Потерянные', color: 'error' },
        { text: 'Лояльные', color: 'normal' },
        { text: 'Потенциально лояльные', color: 'system' },
        { text: 'Новые', color: 'success' },
        { text: 'Риск потерять', color: 'warning' },
        { text: 'До 50 бонусов на счету', color: 'system' },
        { text: 'Мужчины создали аккаунты', color: 'warning' },
        { text: 'Женщины с брошенной корзиной', color: 'warning' }
      ]
    },
    {
      id: String(getRandomId()),
      name: 'Владимир Лебедев',
      phone: '+7 950 204-99-79',
      email: 'vladimir.lebedev@example.com',
      segments: [
        { text: 'День рождения', color: 'success' },
        { text: 'Бросил корзину', color: 'system' },
        { text: 'Сгорят бонусы 29.02', color: 'warning' },
        { text: 'Потерянные', color: 'error' },
        { text: 'Лояльные', color: 'normal' },
        { text: 'Потенциально лояльные', color: 'system' },
        { text: 'Новые', color: 'success' },
        { text: 'Риск потерять', color: 'warning' },
        { text: 'До 50 бонусов на счету', color: 'system' },
        { text: 'Мужчины создали аккаунты', color: 'warning' },
        { text: 'Женщины с брошенной корзиной', color: 'warning' }
      ]
    },
    {
      id: String(getRandomId()),
      name: 'Павел Морозов',
      phone: '+7 950 205-00-79',
      email: 'pavel.morozov@example.com',
      segments: [
        { text: 'День рождения', color: 'success' },
        { text: 'Бросил корзину', color: 'system' },
        { text: 'Сгорят бонусы 29.02', color: 'warning' },
        { text: 'Потерянные', color: 'error' },
        { text: 'Лояльные', color: 'normal' },
        { text: 'Потенциально лояльные', color: 'system' },
        { text: 'Новые', color: 'success' },
        { text: 'Риск потерять', color: 'warning' },
        { text: 'До 50 бонусов на счету', color: 'system' },
        { text: 'Мужчины создали аккаунты', color: 'warning' },
        { text: 'Женщины с брошенной корзиной', color: 'warning' }
      ]
    },
    {
      id: String(getRandomId()),
      name: 'Артем Киселев',
      phone: '+7 950 205-01-79',
      email: 'artem.kiselev@example.com',
      segments: [
        { text: 'День рождения', color: 'success' },
        { text: 'Бросил корзину', color: 'system' },
        { text: 'Сгорят бонусы 29.02', color: 'warning' },
        { text: 'Потерянные', color: 'error' },
        { text: 'Лояльные', color: 'normal' },
        { text: 'Потенциально лояльные', color: 'system' },
        { text: 'Новые', color: 'success' },
        { text: 'Риск потерять', color: 'warning' },
        { text: 'До 50 бонусов на счету', color: 'system' },
        { text: 'Мужчины создали аккаунты', color: 'warning' },
        { text: 'Женщины с брошенной корзиной', color: 'warning' }
      ]
    },
    {
      id: String(getRandomId()),
      name: 'Олег Ермаков',
      phone: '+7 950 205-02-79',
      email: 'oleg.ermakov@example.com',
      segments: [
        { text: 'День рождения', color: 'success' },
        { text: 'Бросил корзину', color: 'system' },
        { text: 'Сгорят бонусы 29.02', color: 'warning' },
        { text: 'Потерянные', color: 'error' },
        { text: 'Лояльные', color: 'normal' },
        { text: 'Потенциально лояльные', color: 'system' },
        { text: 'Новые', color: 'success' },
        { text: 'Риск потерять', color: 'warning' },
        { text: 'До 50 бонусов на счету', color: 'system' },
        { text: 'Мужчины создали аккаунты', color: 'warning' },
        { text: 'Женщины с брошенной корзиной', color: 'warning' }
      ]
    },
    {
      id: String(getRandomId()),
      name: 'Сергей Никитин',
      phone: '+7 950 205-03-79',
      email: 'sergey.nikitin@example.com',
      segments: [
        { text: 'День рождения', color: 'success' },
        { text: 'Бросил корзину', color: 'system' },
        { text: 'Сгорят бонусы 29.02', color: 'warning' },
        { text: 'Потерянные', color: 'error' },
        { text: 'Лояльные', color: 'normal' },
        { text: 'Потенциально лояльные', color: 'system' },
        { text: 'Новые', color: 'success' },
        { text: 'Риск потерять', color: 'warning' },
        { text: 'До 50 бонусов на счету', color: 'system' },
        { text: 'Мужчины создали аккаунты', color: 'warning' },
        { text: 'Женщины с брошенной корзиной', color: 'warning' }
      ]
    },
    {
      id: String(getRandomId()),
      name: 'Евгений Ковалев',
      phone: '+7 950 205-04-79',
      email: 'evgeniy.kovalev@example.com',
      segments: [
        { text: 'День рождения', color: 'success' },
        { text: 'Бросил корзину', color: 'system' },
        { text: 'Сгорят бонусы 29.02', color: 'warning' },
        { text: 'Потерянные', color: 'error' },
        { text: 'Лояльные', color: 'normal' },
        { text: 'Потенциально лояльные', color: 'system' },
        { text: 'Новые', color: 'success' },
        { text: 'Риск потерять', color: 'warning' },
        { text: 'До 50 бонусов на счету', color: 'system' },
        { text: 'Мужчины создали аккаунты', color: 'warning' },
        { text: 'Женщины с брошенной корзиной', color: 'warning' }
      ]
    },
    {
      id: String(getRandomId()),
      name: 'Андрей Зайцев',
      phone: '+7 950 205-05-79',
      email: 'andrey.zaytsev@example.com',
      segments: [
        { text: 'День рождения', color: 'success' },
        { text: 'Бросил корзину', color: 'system' },
        { text: 'Сгорят бонусы 29.02', color: 'warning' },
        { text: 'Потерянные', color: 'error' },
        { text: 'Лояльные', color: 'normal' },
        { text: 'Потенциально лояльные', color: 'system' },
        { text: 'Новые', color: 'success' },
        { text: 'Риск потерять', color: 'warning' },
        { text: 'До 50 бонусов на счету', color: 'system' },
        { text: 'Мужчины создали аккаунты', color: 'warning' },
        { text: 'Женщины с брошенной корзиной', color: 'warning' }
      ]
    },
    {
      id: String(getRandomId()),
      name: 'Денис Литвинов',
      phone: '+7 950 205-06-79',
      email: 'denis.litvinov@example.com',
      segments: [
        { text: 'День рождения', color: 'success' },
        { text: 'Бросил корзину', color: 'system' },
        { text: 'Сгорят бонусы 29.02', color: 'warning' },
        { text: 'Потерянные', color: 'error' },
        { text: 'Лояльные', color: 'normal' },
        { text: 'Потенциально лояльные', color: 'system' },
        { text: 'Новые', color: 'success' },
        { text: 'Риск потерять', color: 'warning' },
        { text: 'До 50 бонусов на счету', color: 'system' },
        { text: 'Мужчины создали аккаунты', color: 'warning' },
        { text: 'Женщины с брошенной корзиной', color: 'warning' }
      ]
    },
    {
      id: String(getRandomId()),
      name: 'Виталий Беляев',
      phone: '+7 950 205-07-79',
      email: 'vitaliy.belyaev@example.com',
      segments: [
        { text: 'День рождения', color: 'success' },
        { text: 'Бросил корзину', color: 'system' },
        { text: 'Сгорят бонусы 29.02', color: 'warning' },
        { text: 'Потерянные', color: 'error' },
        { text: 'Лояльные', color: 'normal' },
        { text: 'Потенциально лояльные', color: 'system' },
        { text: 'Новые', color: 'success' },
        { text: 'Риск потерять', color: 'warning' },
        { text: 'До 50 бонусов на счету', color: 'system' },
        { text: 'Мужчины создали аккаунты', color: 'warning' },
        { text: 'Женщины с брошенной корзиной', color: 'warning' }
      ]
    },
    {
      id: String(getRandomId()),
      name: 'Константин Орлов',
      phone: '+7 950 205-08-79',
      email: 'konstantin.orlov@example.com',
      segments: [
        { text: 'День рождения', color: 'success' },
        { text: 'Бросил корзину', color: 'system' },
        { text: 'Сгорят бонусы 29.02', color: 'warning' },
        { text: 'Потерянные', color: 'error' },
        { text: 'Лояльные', color: 'normal' },
        { text: 'Потенциально лояльные', color: 'system' },
        { text: 'Новые', color: 'success' },
        { text: 'Риск потерять', color: 'warning' },
        { text: 'До 50 бонусов на счету', color: 'system' },
        { text: 'Мужчины создали аккаунты', color: 'warning' },
        { text: 'Женщины с брошенной корзиной', color: 'warning' }
      ]
    },
    {
      id: String(getRandomId()),
      name: 'Петр Петров',
      phone: '+7 950 205-09-79',
      email: 'petr.petrov@example.com',
      segments: [
        { text: 'День рождения', color: 'success' },
        { text: 'Бросил корзину', color: 'system' },
        { text: 'Сгорят бонусы 29.02', color: 'warning' },
        { text: 'Потерянные', color: 'error' },
        { text: 'Лояльные', color: 'normal' },
        { text: 'Потенциально лояльные', color: 'system' },
        { text: 'Новые', color: 'success' },
        { text: 'Риск потерять', color: 'warning' },
        { text: 'До 50 бонусов на счету', color: 'system' },
        { text: 'Мужчины создали аккаунты', color: 'warning' },
        { text: 'Женщины с брошенной корзиной', color: 'warning' }
      ]
    },
    {
      id: String(getRandomId()),
      name: 'Иван Фролов',
      phone: '+7 950 202-92-79',
      email: 'ivan.frolov@example.com',
      segments: [
        { text: 'День рождения', color: 'success' },
        { text: 'Бросил корзину', color: 'system' },
        { text: 'Сгорят бонусы 29.02', color: 'warning' },
        { text: 'Потерянные', color: 'error' },
        { text: 'Лояльные', color: 'normal' },
        { text: 'Потенциально лояльные', color: 'system' },
        { text: 'Новые', color: 'success' },
        { text: 'Риск потерять', color: 'warning' },
        { text: 'До 50 бонусов на счету', color: 'system' },
        { text: 'Мужчины создали аккаунты', color: 'warning' },
        { text: 'Женщины с брошенной корзиной', color: 'warning' }
      ]
    },
    {
      id: String(getRandomId()),
      name: 'Егор Рудой',
      phone: '+7 960 230-92-79',
      email: 'egor.rudoy@example.com',
      segments: [
        { text: 'День рождения', color: 'success' },
        { text: 'Бросил корзину', color: 'system' },
        { text: 'Сгорят бонусы 29.02', color: 'warning' },
        { text: 'Потерянные', color: 'error' },
        { text: 'Лояльные', color: 'normal' },
        { text: 'Потенциально лояльные', color: 'system' },
        { text: 'Новые', color: 'success' },
        { text: 'Риск потерять', color: 'warning' },
        { text: 'До 50 бонусов на счету', color: 'system' },
        { text: 'Мужчины создали аккаунты', color: 'warning' },
        { text: 'Женщины с брошенной корзиной', color: 'warning' }
      ]
    },
    {
      id: String(getRandomId()),
      name: 'Петр Банных',
      phone: '+7 950 204-92-79',
      email: 'petr.bannyh@example.com',
      segments: [
        { text: 'День рождения', color: 'success' },
        { text: 'Бросил корзину', color: 'system' },
        { text: 'Сгорят бонусы 29.02', color: 'warning' },
        { text: 'Потерянные', color: 'error' },
        { text: 'Лояльные', color: 'normal' },
        { text: 'Потенциально лояльные', color: 'system' },
        { text: 'Новые', color: 'success' },
        { text: 'Риск потерять', color: 'warning' },
        { text: 'До 50 бонусов на счету', color: 'system' },
        { text: 'Мужчины создали аккаунты', color: 'warning' },
        { text: 'Женщины с брошенной корзиной', color: 'warning' }
      ]
    },
    {
      id: String(getRandomId()),
      name: 'Иван Молотов',
      phone: '+7 940 200-92-39',
      email: 'ivan.molotov@example.com',
      segments: [
        { text: 'День рождения', color: 'success' },
        { text: 'Бросил корзину', color: 'system' }
      ]
    },
    {
      id: String(getRandomId()),
      name: 'Семен Колов',
      phone: '+7 950 200-92-29',
      email: 'semen.kolov@example.com',
      segments: [
        { text: 'День рождения', color: 'success' },
        { text: 'Бросил корзину', color: 'system' },
        { text: 'Сгорят бонусы 29.02', color: 'warning' },
        { text: 'Потерянные', color: 'error' },
        { text: 'Лояльные', color: 'normal' },
        { text: 'Потенциально лояльные', color: 'system' },
        { text: 'Новые', color: 'success' },
        { text: 'Риск потерять', color: 'warning' },
        { text: 'До 50 бонусов на счету', color: 'system' },
      ]
    },
    {
      id: String(getRandomId()),
      name: 'Антон Корнев',
      phone: '+7 960 300-91-88',
      email: 'anton.kornev@example.com',
      segments: [
        { text: 'День рождения', color: 'success' },
        { text: 'Бросил корзину', color: 'system' },
        { text: 'Сгорят бонусы 29.02', color: 'warning' },
        { text: 'Потерянные', color: 'error' },
        { text: 'Лояльные', color: 'normal' },
        { text: 'Потенциально лояльные', color: 'system' },
        { text: 'Новые', color: 'success' },
        { text: 'Риск потерять', color: 'warning' },
        { text: 'До 50 бонусов на счету', color: 'system' },
        { text: 'Мужчины создали аккаунты', color: 'warning' },
        { text: 'Женщины с брошенной корзиной', color: 'warning' }
      ]
    },
    {
      id: String(getRandomId()),
      name: 'Дмитрий Громов',
      phone: '+7 960 300-91-77',
      email: 'dmitry.gromov@example.com',
      segments: [
        { text: 'День рождения', color: 'success' },
        { text: 'Бросил корзину', color: 'system' },
        { text: 'Сгорят бонусы 29.02', color: 'warning' },
        { text: 'Потерянные', color: 'error' },
        { text: 'Лояльные', color: 'normal' },
        { text: 'Потенциально лояльные', color: 'system' },
        { text: 'Новые', color: 'success' },
        { text: 'Риск потерять', color: 'warning' },
        { text: 'До 50 бонусов на счету', color: 'system' },
        { text: 'Мужчины создали аккаунты', color: 'warning' },
        { text: 'Женщины с брошенной корзиной', color: 'warning' }
      ]
    },
    {
      id: String(getRandomId()),
      name: 'Максим Тихонов',
      phone: '+7 960 300-91-66',
      email: 'maxim.tikhonov@example.com',
      segments: [
        { text: 'День рождения', color: 'success' },
        { text: 'Бросил корзину', color: 'system' },
        { text: 'Сгорят бонусы 29.02', color: 'warning' },
        { text: 'Потерянные', color: 'error' },
        { text: 'Лояльные', color: 'normal' },
        { text: 'Потенциально лояльные', color: 'system' },
        { text: 'Новые', color: 'success' },
        { text: 'Риск потерять', color: 'warning' },
        { text: 'До 50 бонусов на счету', color: 'system' },
        { text: 'Мужчины создали аккаунты', color: 'warning' },
        { text: 'Женщины с брошенной корзиной', color: 'warning' }
      ]
    },
    {
      id: String(getRandomId()),
      name: 'Алексей Ковальчук',
      phone: '+7 950 203-92-79',
      email: 'alexey.kovalchuk@example.com',
      segments: [
        { text: 'День рождения', color: 'success' },
        { text: 'Бросил корзину', color: 'system' },
        { text: 'Сгорят бонусы 29.02', color: 'warning' },
        { text: 'Потерянные', color: 'error' },
        { text: 'Лояльные', color: 'normal' },
        { text: 'Потенциально лояльные', color: 'system' },
        { text: 'Новые', color: 'success' },
        { text: 'Риск потерять', color: 'warning' },
        { text: 'До 50 бонусов на счету', color: 'system' },
        { text: 'Мужчины создали аккаунты', color: 'warning' },
        { text: 'Женщины с брошенной корзиной', color: 'warning' }
      ]
    },
    {
      id: String(getRandomId()),
      name: 'Роман Козлов',
      phone: '+7 950 204-93-79',
      email: 'roman.kozlov@example.com',
      segments: [
        { text: 'День рождения', color: 'success' },
        { text: 'Бросил корзину', color: 'system' },
        { text: 'Сгорят бонусы 29.02', color: 'warning' },
        { text: 'Потерянные', color: 'error' },
        { text: 'Лояльные', color: 'normal' },
        { text: 'Потенциально лояльные', color: 'system' },
        { text: 'Новые', color: 'success' },
        { text: 'Риск потерять', color: 'warning' },
        { text: 'До 50 бонусов на счету', color: 'system' },
        { text: 'Мужчины создали аккаунты', color: 'warning' },
        { text: 'Женщины с брошенной корзиной', color: 'warning' }
      ]
    },
    {
      id: String(getRandomId()),
      name: 'Виктор Поляков',
      phone: '+7 950 204-94-79',
      email: 'victor.polyakov@example.com',
      segments: [
        { text: 'День рождения', color: 'success' },
        { text: 'Бросил корзину', color: 'system' },
        { text: 'Сгорят бонусы 29.02', color: 'warning' },
        { text: 'Потерянные', color: 'error' },
        { text: 'Лояльные', color: 'normal' },
        { text: 'Потенциально лояльные', color: 'system' },
        { text: 'Новые', color: 'success' },
        { text: 'Риск потерять', color: 'warning' },
        { text: 'До 50 бонусов на счету', color: 'system' },
        { text: 'Мужчины создали аккаунты', color: 'warning' },
        { text: 'Женщины с брошенной корзиной', color: 'warning' }
      ]
    },
    {
      id: String(getRandomId()),
      name: 'Александр Карпов',
      phone: '+7 950 204-95-79',
      email: 'alexander.karpov@example.com',
      segments: [
        { text: 'День рождения', color: 'success' },
        { text: 'Бросил корзину', color: 'system' },
        { text: 'Сгорят бонусы 29.02', color: 'warning' },
        { text: 'Потерянные', color: 'error' },
        { text: 'Лояльные', color: 'normal' },
        { text: 'Потенциально лояльные', color: 'system' },
        { text: 'Новые', color: 'success' },
        { text: 'Риск потерять', color: 'warning' },
        { text: 'До 50 бонусов на счету', color: 'system' },
        { text: 'Мужчины создали аккаунты', color: 'warning' },
        { text: 'Женщины с брошенной корзиной', color: 'warning' }
      ]
    },
    {
      id: String(getRandomId()),
      name: 'Игорь Петров',
      phone: '+7 950 204-96-79',
      email: 'igor.petrov@example.com',
      segments: [
        { text: 'День рождения', color: 'success' },
        { text: 'Бросил корзину', color: 'system' },
        { text: 'Сгорят бонусы 29.02', color: 'warning' },
        { text: 'Потерянные', color: 'error' },
        { text: 'Лояльные', color: 'normal' },
        { text: 'Потенциально лояльные', color: 'system' },
        { text: 'Новые', color: 'success' },
        { text: 'Риск потерять', color: 'warning' },
        { text: 'До 50 бонусов на счету', color: 'system' },
        { text: 'Мужчины создали аккаунты', color: 'warning' },
        { text: 'Женщины с брошенной корзиной', color: 'warning' }
      ]
    },
    {
      id: String(getRandomId()),
      name: 'Николай Васильев',
      phone: '+7 950 204-97-79',
      email: 'nikolay.vasiliev@example.com',
      segments: [
        { text: 'День рождения', color: 'success' },
        { text: 'Бросил корзину', color: 'system' },
        { text: 'Сгорят бонусы 29.02', color: 'warning' },
        { text: 'Потерянные', color: 'error' },
        { text: 'Лояльные', color: 'normal' },
        { text: 'Потенциально лояльные', color: 'system' },
        { text: 'Новые', color: 'success' },
        { text: 'Риск потерять', color: 'warning' },
        { text: 'До 50 бонусов на счету', color: 'system' },
        { text: 'Мужчины создали аккаунты', color: 'warning' },
        { text: 'Женщины с брошенной корзиной', color: 'warning' }
      ]
    },
    {
      id: String(getRandomId()),
      name: 'Михаил Сидоров',
      phone: '+7 950 204-98-79',
      email: 'mikhail.sidorov@example.com',
      segments: [
        { text: 'День рождения', color: 'success' },
        { text: 'Бросил корзину', color: 'system' },
        { text: 'Сгорят бонусы 29.02', color: 'warning' },
        { text: 'Потерянные', color: 'error' },
        { text: 'Лояльные', color: 'normal' },
        { text: 'Потенциально лояльные', color: 'system' },
        { text: 'Новые', color: 'success' },
        { text: 'Риск потерять', color: 'warning' },
        { text: 'До 50 бонусов на счету', color: 'system' },
        { text: 'Мужчины создали аккаунты', color: 'warning' },
        { text: 'Женщины с брошенной корзиной', color: 'warning' }
      ]
    },
    {
      id: String(getRandomId()),
      name: 'Владимир Лебедев',
      phone: '+7 950 204-99-79',
      email: 'vladimir.lebedev@example.com',
      segments: [
        { text: 'День рождения', color: 'success' },
        { text: 'Бросил корзину', color: 'system' },
        { text: 'Сгорят бонусы 29.02', color: 'warning' },
        { text: 'Потерянные', color: 'error' },
        { text: 'Лояльные', color: 'normal' },
        { text: 'Потенциально лояльные', color: 'system' },
        { text: 'Новые', color: 'success' },
        { text: 'Риск потерять', color: 'warning' },
        { text: 'До 50 бонусов на счету', color: 'system' },
        { text: 'Мужчины создали аккаунты', color: 'warning' },
        { text: 'Женщины с брошенной корзиной', color: 'warning' }
      ]
    },
    {
      id: String(getRandomId()),
      name: 'Павел Морозов',
      phone: '+7 950 205-00-79',
      email: 'pavel.morozov@example.com',
      segments: [
        { text: 'День рождения', color: 'success' },
        { text: 'Бросил корзину', color: 'system' },
        { text: 'Сгорят бонусы 29.02', color: 'warning' },
        { text: 'Потерянные', color: 'error' },
        { text: 'Лояльные', color: 'normal' },
        { text: 'Потенциально лояльные', color: 'system' },
        { text: 'Новые', color: 'success' },
        { text: 'Риск потерять', color: 'warning' },
        { text: 'До 50 бонусов на счету', color: 'system' },
        { text: 'Мужчины создали аккаунты', color: 'warning' },
        { text: 'Женщины с брошенной корзиной', color: 'warning' }
      ]
    },
    {
      id: String(getRandomId()),
      name: 'Артем Киселев',
      phone: '+7 950 205-01-79',
      email: 'artem.kiselev@example.com',
      segments: [
        { text: 'День рождения', color: 'success' },
        { text: 'Бросил корзину', color: 'system' },
        { text: 'Сгорят бонусы 29.02', color: 'warning' },
        { text: 'Потерянные', color: 'error' },
        { text: 'Лояльные', color: 'normal' },
        { text: 'Потенциально лояльные', color: 'system' },
        { text: 'Новые', color: 'success' },
        { text: 'Риск потерять', color: 'warning' },
        { text: 'До 50 бонусов на счету', color: 'system' },
        { text: 'Мужчины создали аккаунты', color: 'warning' },
        { text: 'Женщины с брошенной корзиной', color: 'warning' }
      ]
    },
    {
      id: String(getRandomId()),
      name: 'Олег Ермаков',
      phone: '+7 950 205-02-79',
      email: 'oleg.ermakov@example.com',
      segments: [
        { text: 'День рождения', color: 'success' },
        { text: 'Бросил корзину', color: 'system' },
        { text: 'Сгорят бонусы 29.02', color: 'warning' },
        { text: 'Потерянные', color: 'error' },
        { text: 'Лояльные', color: 'normal' },
        { text: 'Потенциально лояльные', color: 'system' },
        { text: 'Новые', color: 'success' },
        { text: 'Риск потерять', color: 'warning' },
        { text: 'До 50 бонусов на счету', color: 'system' },
        { text: 'Мужчины создали аккаунты', color: 'warning' },
        { text: 'Женщины с брошенной корзиной', color: 'warning' }
      ]
    },
    {
      id: String(getRandomId()),
      name: 'Сергей Никитин',
      phone: '+7 950 205-03-79',
      email: 'sergey.nikitin@example.com',
      segments: [
        { text: 'День рождения', color: 'success' },
        { text: 'Бросил корзину', color: 'system' },
        { text: 'Сгорят бонусы 29.02', color: 'warning' },
        { text: 'Потерянные', color: 'error' },
        { text: 'Лояльные', color: 'normal' },
        { text: 'Потенциально лояльные', color: 'system' },
        { text: 'Новые', color: 'success' },
        { text: 'Риск потерять', color: 'warning' },
        { text: 'До 50 бонусов на счету', color: 'system' },
        { text: 'Мужчины создали аккаунты', color: 'warning' },
        { text: 'Женщины с брошенной корзиной', color: 'warning' }
      ]
    },
    {
      id: String(getRandomId()),
      name: 'Евгений Ковалев',
      phone: '+7 950 205-04-79',
      email: 'evgeniy.kovalev@example.com',
      segments: [
        { text: 'День рождения', color: 'success' },
        { text: 'Бросил корзину', color: 'system' },
        { text: 'Сгорят бонусы 29.02', color: 'warning' },
        { text: 'Потерянные', color: 'error' },
        { text: 'Лояльные', color: 'normal' },
        { text: 'Потенциально лояльные', color: 'system' },
        { text: 'Новые', color: 'success' },
        { text: 'Риск потерять', color: 'warning' },
        { text: 'До 50 бонусов на счету', color: 'system' },
        { text: 'Мужчины создали аккаунты', color: 'warning' },
        { text: 'Женщины с брошенной корзиной', color: 'warning' }
      ]
    },
    {
      id: String(getRandomId()),
      name: 'Антон Зайцев',
      phone: '+7 950 205-05-79',
      email: 'andrey.zaytsev@example.com',
      segments: [
        { text: 'День рождения', color: 'success' },
        { text: 'Бросил корзину', color: 'system' },
        { text: 'Сгорят бонусы 29.02', color: 'warning' },
        { text: 'Потерянные', color: 'error' },
        { text: 'Лояльные', color: 'normal' },
        { text: 'Потенциально лояльные', color: 'system' },
        { text: 'Новые', color: 'success' },
        { text: 'Риск потерять', color: 'warning' },
        { text: 'До 50 бонусов на счету', color: 'system' },
        { text: 'Мужчины создали аккаунты', color: 'warning' },
        { text: 'Женщины с брошенной корзиной', color: 'warning' }
      ]
    },
    {
      id: String(getRandomId()),
      name: 'Денис Литвинов',
      phone: '+7 950 205-06-79',
      email: 'denis.litvinov@example.com',
      segments: [
        { text: 'День рождения', color: 'success' },
        { text: 'Бросил корзину', color: 'system' },
        { text: 'Сгорят бонусы 29.02', color: 'warning' },
        { text: 'Потерянные', color: 'error' },
        { text: 'Лояльные', color: 'normal' },
        { text: 'Потенциально лояльные', color: 'system' },
        { text: 'Новые', color: 'success' },
        { text: 'Риск потерять', color: 'warning' },
        { text: 'До 50 бонусов на счету', color: 'system' },
        { text: 'Мужчины создали аккаунты', color: 'warning' },
        { text: 'Женщины с брошенной корзиной', color: 'warning' }
      ]
    },
    {
      id: String(getRandomId()),
      name: 'Виталий Беляев',
      phone: '+7 950 205-07-79',
      email: 'vitaliy.belyaev@example.com',
      segments: [
        { text: 'День рождения', color: 'success' },
        { text: 'Бросил корзину', color: 'system' },
        { text: 'Сгорят бонусы 29.02', color: 'warning' },
        { text: 'Потерянные', color: 'error' },
        { text: 'Лояльные', color: 'normal' },
        { text: 'Потенциально лояльные', color: 'system' },
        { text: 'Новые', color: 'success' },
        { text: 'Риск потерять', color: 'warning' },
        { text: 'До 50 бонусов на счету', color: 'system' },
        { text: 'Мужчины создали аккаунты', color: 'warning' },
        { text: 'Женщины с брошенной корзиной', color: 'warning' }
      ]
    },
    {
      id: String(getRandomId()),
      name: 'Константин Орлов',
      phone: '+7 950 205-08-79',
      email: 'konstantin.orlov@example.com',
      segments: [
        { text: 'День рождения', color: 'success' },
        { text: 'Бросил корзину', color: 'system' },
        { text: 'Сгорят бонусы 29.02', color: 'warning' },
        { text: 'Потерянные', color: 'error' },
        { text: 'Лояльные', color: 'normal' },
        { text: 'Потенциально лояльные', color: 'system' },
        { text: 'Новые', color: 'success' },
        { text: 'Риск потерять', color: 'warning' },
        { text: 'До 50 бонусов на счету', color: 'system' },
        { text: 'Мужчины создали аккаунты', color: 'warning' },
        { text: 'Женщины с брошенной корзиной', color: 'warning' }
      ]
    },
    {
      id: String(getRandomId()),
      name: 'Петр Петров',
      phone: '+7 950 205-09-79',
      email: 'petr.petrov@example.com',
      segments: [
        { text: 'День рождения', color: 'success' },
        { text: 'Бросил корзину', color: 'system' },
        { text: 'Сгорят бонусы 29.02', color: 'warning' },
        { text: 'Потерянные', color: 'error' },
        { text: 'Лояльные', color: 'normal' },
        { text: 'Потенциально лояльные', color: 'system' },
        { text: 'Новые', color: 'success' },
        { text: 'Риск потерять', color: 'warning' },
        { text: 'До 50 бонусов на счету', color: 'system' },
        { text: 'Мужчины создали аккаунты', color: 'warning' },
        { text: 'Женщины с брошенной корзиной', color: 'warning' }
      ]
    },
  ];