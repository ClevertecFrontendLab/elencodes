import { BookmarkIcon } from '~/icons/CounterIcons/BookmarkIcon';
import ReactionIcon from '~/icons/CounterIcons/ReactionIcon';
import GrilsIcon from '~/icons/NavMenuIcons/GrilsIcon';
import KidsCoursesIcon from '~/icons/NavMenuIcons/KidsCoursesIcon';
import NationalIcon from '~/icons/NavMenuIcons/NationalIcon';
import SecondCoursesIcon from '~/icons/NavMenuIcons/SecondCoursesIcon';
import { MainSectionDataType } from '~/types/HorizontalCardType';

import knelliImg from '../../assets/images/theJuciest/knelli_so_spagetti.png';
import lapshaImg from '../../assets/images/theJuciest/lapsha_s_kuritsei_i_shafranom.png';
import vetchinaImg from '../../assets/images/theJuciest/pryanaya_vetchina.png';
import tomyamImg from '../../assets/images/theJuciest/tom_yam_s_kapustoi_kimchi.png';
import potatoRolls from '../../assets/images/veganCuisinePage/kartofelnie_ruletiki.png';
import potatoImg from '../../assets/images/veganCuisinePage/kartoshka_tushenaya.png';
import lasagna from '../../assets/images/veganCuisinePage/ovoshnaya_lazania.png';
import bulgurBalls from '../../assets/images/veganCuisinePage/tefteli_is_bulgura.png';

export const theJuciestPageMainCardsData: MainSectionDataType[] = [
    {
        id: 1,
        img: lapshaImg,
        altImg: 'Лапша с курицей',
        title: 'Лапша с курицей и шафраном',
        text: 'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        iconCounters: [
            { icon: BookmarkIcon, countClick: 258, spacing: '6px', padding: '4px' },
            { icon: ReactionIcon, countClick: 342, spacing: '6px', padding: '4px' },
        ],
        tagIcon: SecondCoursesIcon,
        tagTitle: 'Вторые блюда',
        bgColorTag: 'lime.50',
    },
    {
        id: 2,
        img: tomyamImg,
        altImg: 'Том-ям',
        title: 'Том-ям с капустой кимчи',
        text: 'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        iconCounters: [
            { icon: BookmarkIcon, countClick: 124, spacing: '6px', padding: '4px' },
            { icon: ReactionIcon, countClick: 324, spacing: '6px', padding: '4px' },
        ],
        tagIcon: NationalIcon,
        tagTitle: 'Национальные',
        bgColorTag: 'lime.50',
    },
    {
        id: 3,
        img: vetchinaImg,
        altImg: 'Ветчина',
        title: 'Пряная ветчина по итальянски',
        text: 'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        iconCounters: [
            { icon: BookmarkIcon, countClick: 159, spacing: '6px', padding: '4px' },
            { icon: ReactionIcon, countClick: 257, spacing: '6px', padding: '4px' },
        ],
        tagIcon: SecondCoursesIcon,
        tagTitle: 'Вторые блюда',
        bgColorTag: 'lime.50',
    },
    {
        id: 4,
        img: knelliImg,
        altImg: 'Кнели со спагетти',
        title: 'Кнели со спагетти',
        text: 'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        iconCounters: [
            { icon: BookmarkIcon, countClick: 124, spacing: '6px', padding: '4px' },
            { icon: ReactionIcon, countClick: 231, spacing: '6px', padding: '4px' },
        ],
        tagIcon: SecondCoursesIcon,
        tagTitle: 'Вторые блюда',
        bgColorTag: 'lime.50',
    },
    {
        id: 5,
        img: potatoImg,
        altImg: 'Картошка тушеная',
        title: 'Картошка, тушеная с болгарским перцем и фасолью в томатном соусе',
        text: 'Картошка, тушеная с болгарским перцем, фасолью, морковью и луком, - вариант сытного блюда на каждый день. Фасоль в данном случае заменяет мясо, делая рагу сытным и питательным. Чтобы сократить время приготовления, возьмём консервированную фасоль. Блюдо хоть и простое, но в полной мере наполнено ароматами и имеет выразительный вкус за счёт добавления томатной пасты.',
        iconCounters: [
            { icon: BookmarkIcon, countClick: 120, spacing: '6px', padding: '4px' },
            { icon: ReactionIcon, countClick: 180, spacing: '6px', padding: '4px' },
        ],
        tagIcon: SecondCoursesIcon,
        tagTitle: 'Вторые блюда',
        bgColorTag: 'lime.50',
    },
    {
        id: 6,
        img: potatoRolls,
        altImg: 'Картофельные рулетики',
        title: 'Картофельные рулетики с грибами',
        text: 'Рекомендую всем приготовить постное блюдо из картофеля и грибов. Готовится это блюдо без яиц, без мяса и без сыра, из самых простых  ингредиентов, а получается очень вкусно и сытно. Постный рецепт картофельных рулетиков с грибами, в томатном соусе, - на обед, ужин и даже на праздничный стол!',
        iconCounters: [
            { icon: BookmarkIcon, countClick: 85, spacing: '6px', padding: '4px' },
            { icon: ReactionIcon, countClick: 180, spacing: '6px', padding: '4px' },
        ],
        tagIcon: KidsCoursesIcon,
        tagTitle: 'Детские блюда',
        bgColorTag: 'lime.50',
    },
    {
        id: 7,
        img: lasagna,
        altImg: 'Овощная лазанья',
        title: 'Овощная лазанья из лаваша',
        text: 'Большое, сытное блюдо для ценителей блюд без мяса! Такая лазанья готовится с овощным соусом и соусом бешамель, а вместо листов для лазаньи используется тонкий лаваш.',
        iconCounters: [
            { icon: BookmarkIcon, countClick: 85, spacing: '6px', padding: '4px' },
            { icon: ReactionIcon, countClick: 152, spacing: '6px', padding: '4px' },
        ],
        tagIcon: GrilsIcon,
        tagTitle: 'Блюда на гриле',
        bgColorTag: 'lime.50',
    },
    {
        id: 8,
        img: bulgurBalls,
        altImg: 'Тефтели из булгура и чечевицы',
        title: 'Тефтели из булгура и чечевицы, запечённые в томатном соусе',
        text: 'Тефтели из булгура и чечевицы – яркие и питательные, отлично подходят для постного и вегетарианского меню. Тефтели получаются нежными, а также сочными и ароматными благодаря использованию томатного соуса и душистых пряностей.',
        iconCounters: [
            { icon: BookmarkIcon, countClick: 85, spacing: '6px', padding: '4px' },
            { icon: ReactionIcon, countClick: 150, spacing: '6px', padding: '4px' },
        ],
        tagIcon: SecondCoursesIcon,
        tagTitle: 'Вторые блюда',
        bgColorTag: 'lime.50',
    },
];
