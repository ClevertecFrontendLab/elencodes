import { BookmarkIcon } from '~/icons/CounterIcons/BookmarkIcon';
import ReactionIcon from '~/icons/CounterIcons/ReactionIcon';
import DessertsIcon from '~/icons/NavMenuIcons/DessertsIcon';
import FirstCoursesIcon from '~/icons/NavMenuIcons/FirstCoursesIcon';
import SaladsIcon from '~/icons/NavMenuIcons/SaladsIcon';
import VeganIcon from '~/icons/NavMenuIcons/VeganIcon';
import { NewRecipesCardDataType } from '~/types/NewRecipesCardType';

import kotletiImg from '../../assets/images/newRecipes/kapustnie_kotleti.png';
import oladyiImg from '../../assets/images/newRecipes/oladyi_na_kefire.png';
import salatImg from '../../assets/images/newRecipes/salat_zdorovie.png';
import solyankaImg from '../../assets/images/newRecipes/solyanka_s_gribami.png';

export const newRecipesCardsData: NewRecipesCardDataType[] = [
    {
        id: 1,
        img: solyankaImg,
        altImg: 'Солянка',
        title: 'Солянка с грибами',
        text: 'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        iconCounters: [{ icon: BookmarkIcon, countClick: 1, spacing: '6px', padding: '4px' }],
        tagIcon: FirstCoursesIcon,
        tagTitle: 'Первые блюда',
        bgColorTag: 'lime.150',
    },
    {
        id: 2,
        img: kotletiImg,
        altImg: 'Котлеты',
        title: 'Капустные котлеты',
        text: 'Капустные котлеты по этому рецепту получаются необычайно пышными и невероятно вкусными. Мягкий вкус и лёгкая пряная нотка наверняка помогут сделать эти чудесные котлеты из капусты одним из ваших любимых овощных  блюд.',
        iconCounters: [
            { icon: BookmarkIcon, countClick: 2, spacing: '6px', padding: '4px' },
            { icon: ReactionIcon, countClick: 1, spacing: '6px', padding: '4px' },
        ],
        tagIcon: VeganIcon,
        tagTitle: 'Веганские блюда',
        bgColorTag: 'lime.150',
    },
    {
        id: 3,
        img: oladyiImg,
        altImg: 'Оладьи',
        title: 'Оладьи на кефире "Пышные"',
        text: 'Очень вкусные и нежные оладьи на кефире. Настоятельно рекомендую пышные кефирные оладьи на завтрак.',
        iconCounters: [{ icon: ReactionIcon, countClick: 1, spacing: '6px', padding: '4px' }],
        tagIcon: DessertsIcon,
        tagTitle: 'Десерты, выпечка',
        bgColorTag: 'lime.150',
    },
    {
        id: 4,
        img: salatImg,
        altImg: 'Салат',
        title: 'Салат "Здоровье"',
        text: 'Сельдерей очень полезен для здоровья, пора набираться витаминов. Не  салат, а сплошное удовольствие:) Вкусный, необычный, а главное быстрый.',
        iconCounters: [],
        tagIcon: SaladsIcon,
        tagTitle: 'Салаты',
        bgColorTag: 'lime.150',
    },
    {
        id: 5,
        img: solyankaImg,
        altImg: 'Солянка',
        title: 'Солянка с грибами',
        text: 'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        iconCounters: [{ icon: BookmarkIcon, countClick: 1, spacing: '6px', padding: '4px' }],
        tagIcon: FirstCoursesIcon,
        tagTitle: 'Первые блюда',
        bgColorTag: 'lime.150',
    },
    {
        id: 6,
        img: kotletiImg,
        altImg: 'Котлеты',
        title: 'Капустные котлеты',
        text: 'Капустные котлеты по этому рецепту получаются необычайно пышными и невероятно вкусными. Мягкий вкус и лёгкая пряная нотка наверняка помогут сделать эти чудесные котлеты из капусты одним из ваших любимых овощных  блюд.',
        iconCounters: [
            { icon: BookmarkIcon, countClick: 2, spacing: '6px', padding: '4px' },
            { icon: ReactionIcon, countClick: 1, spacing: '6px', padding: '4px' },
        ],
        tagIcon: VeganIcon,
        tagTitle: 'Веганские блюда',
        bgColorTag: 'lime.150',
    },
    {
        id: 7,
        img: oladyiImg,
        altImg: 'Оладьи',
        title: 'Оладьи на кефире "Пышные"',
        text: 'Очень вкусные и нежные оладьи на кефире. Настоятельно рекомендую пышные кефирные оладьи на завтрак.',
        iconCounters: [{ icon: ReactionIcon, countClick: 1, spacing: '6px', padding: '4px' }],
        tagIcon: DessertsIcon,
        tagTitle: 'Десерты, выпечка',
        bgColorTag: 'lime.150',
    },
    {
        id: 8,
        img: salatImg,
        altImg: 'Салат',
        title: 'Салат "Здоровье"',
        text: 'Сельдерей очень полезен для здоровья, пора набираться витаминов. Не салат, а сплошное удовольствие:) Вкусный, необычный, а главное быстрый.',
        iconCounters: [],
        tagIcon: SaladsIcon,
        tagTitle: 'Салаты',
        bgColorTag: 'lime.150',
    },
];
