import DessertsIcon from '~/icons/NavMenuIcons/DessertsIcon';
import DrinksIcon from '~/icons/NavMenuIcons/DrinksIcon';
import FirstCoursesIcon from '~/icons/NavMenuIcons/FirstCoursesIcon';
import GrilsIcon from '~/icons/NavMenuIcons/GrilsIcon';
import KidsCoursesIcon from '~/icons/NavMenuIcons/KidsCoursesIcon';
import NationalIcon from '~/icons/NavMenuIcons/NationalIcon';
import PreparationsIcon from '~/icons/NavMenuIcons/PreparationsIcon';
import SaladsIcon from '~/icons/NavMenuIcons/SaladsIcon';
import SaucesIcon from '~/icons/NavMenuIcons/SaucesIcon';
import SecondCoursesIcon from '~/icons/NavMenuIcons/SecondCoursesIcon';
import SnacksIcon from '~/icons/NavMenuIcons/SnacksIcon';
import TherapeuticNutritionIcon from '~/icons/NavMenuIcons/TherapeuticNutritionIcon';
import VeganIcon from '~/icons/NavMenuIcons/VeganIcon';
import { NavMenuItemPropsType } from '~/types/NavMenuItemType';

export const navMenuItemsData: NavMenuItemPropsType[] = [
    {
        id: 1,
        title: 'Салаты',
        icon: SaladsIcon,
        listItems: ['Мясные салаты', 'Рыбные салаты', 'Овощные салаты', 'Теплые салаты'],
    },
    {
        id: 2,
        title: 'Закуски',
        icon: SnacksIcon,
        listItems: [
            'Мясные закуски',
            'Рыбные закуски',
            'Овощные закуски',
            'Теплые закуски',
            'Бутерброды',
            'Фастфуд',
        ],
    },
    {
        id: 3,
        title: 'Первые блюда',
        icon: FirstCoursesIcon,
        listItems: ['Мясные супы', 'Овощные супы', 'Бульоны', 'Холодные супы', 'Диетические супы'],
    },
    {
        id: 4,
        title: 'Вторые блюда',
        icon: SecondCoursesIcon,
        listItems: [
            'Мясные',
            'Рыбные',
            'Овощные',
            'Из птицы',
            'Из грибов',
            'Из субпродуктов',
            'На пару',
            'Пельмени, вареники',
            'Мучные гарниры',
            'Овощные гарниры',
            'Пицца',
            'Суши',
        ],
    },
    {
        id: 5,
        title: 'Десерты, выпечка',
        icon: DessertsIcon,
        listItems: [
            'Блины и оладьи',
            'Пироги и пончики',
            'Торты',
            'Рулеты',
            'Кексы и маффины',
            'Сырники и ватрушки',
            'Из слоеного теста',
            'Из заварного теста',
            'Из дрожжевого теста',
            'Булочки и сдоба',
            'Хлеб',
            'Тесто на пиццу',
            'Кремы',
        ],
    },
    {
        id: 6,
        title: 'Блюда на гриле',
        icon: GrilsIcon,
        listItems: ['Говядина', 'Свинина', 'Птица', 'Рыба', 'Грибы', 'Овощи'],
    },
    {
        id: 7,
        title: 'Веганская кухня',
        icon: VeganIcon,
        listItems: [
            'Закуски',
            'Первые блюда',
            'Вторые блюда',
            'Гарниры',
            'Десерты',
            'Выпечка',
            'Сыроедческие блюда',
            'Напитки',
        ],
        linkTo: '/vegan',
    },
    {
        id: 8,
        title: 'Детские блюда',
        icon: KidsCoursesIcon,
        listItems: [
            'Первые блюда',
            'Вторые блюда',
            'Гарниры',
            'Выпечка',
            'Без глютена',
            'Без сахара',
            'Без аллергенов',
            'Блюда для прикорма',
        ],
    },
    {
        id: 9,
        title: 'Лечебное питание',
        icon: TherapeuticNutritionIcon,
        listItems: [
            'Детская диета',
            'Диета №1',
            'Диета №2',
            'Диета №3',
            'Диета №4',
            'Диета №5',
            'Диета №6',
            'Диета №7',
            'Диета №8',
            'Диета №9',
            'Диета №10',
            'Диета №12',
            'Диета №13',
            'Диета №14',
            'Без глютена',
            'Без аллергенов',
        ],
    },
    {
        id: 10,
        title: 'Национальные',
        icon: NationalIcon,
        listItems: [
            'Американская кухня',
            'Армянская кухня',
            'Греческая кухня',
            'Грузинская кухня',
            'Итальянская кухня',
            'Испанская кухня',
            'Китайская кухня',
            'Мексиканская кухня',
            'Паназиатская кухня',
            'Русская кухня',
            'Турецкая кухня',
            'Французская кухня',
            'Шведская кухня',
            'Японская кухня',
            'Другая кухня',
        ],
    },
    {
        id: 11,
        title: 'Соусы',
        icon: SaucesIcon,
        listItems: ['Соусы мясные', 'Соусы сырные', 'Маринады'],
    },
    {
        id: 12,
        title: 'Напитки',
        icon: DrinksIcon,
        listItems: [
            'Соки и фреши',
            'Смузи',
            'Компоты',
            'Кисели',
            'Кофе',
            'Лечебный чай',
            'Квас',
            'Коктейли',
            'Алкогольные',
        ],
    },
    {
        id: 13,
        title: 'Домашние заготовки',
        icon: PreparationsIcon,
        listItems: [
            'Мясные заготовки',
            'Рыбные заготовки',
            'Из огурцов',
            'Из томатов',
            'Из грибов',
            'Овощные заготовки',
            'Салаты, икра',
            'Из фруктов и ягод',
        ],
    },
];
