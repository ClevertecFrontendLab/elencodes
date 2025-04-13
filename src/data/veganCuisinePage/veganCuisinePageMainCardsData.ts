import { BookmarkIcon } from '~/icons/counterIcons/BookmarkIcon';
import ReactionIcon from '~/icons/counterIcons/ReactionIcon';
import GrilsIcon from '~/icons/NavMenuIcons/GrilsIcon';
import KidsCoursesIcon from '~/icons/NavMenuIcons/KidsCoursesIcon';
import NationalIcon from '~/icons/NavMenuIcons/NationalIcon';
import SecondCoursesIcon from '~/icons/NavMenuIcons/SecondCoursesIcon';
import { MainSectionDataType } from '~/types/HorizontalCardType';

import tomyamImg from '../../assets/images/theJuciest/tom_yam_s_kapustoi_kimchi.png';
import garlicPotatoesImg from '../../assets/images/veganCuisinePage/chesnochnaya_kartoshka.png';
import potatoRollsImg from '../../assets/images/veganCuisinePage/kartofelnie_ruletiki.png';
import potatoImg from '../../assets/images/veganCuisinePage/kartoshka_tushenaya.png';
import lasagnaImg from '../../assets/images/veganCuisinePage/ovoshnaya_lazania.png';
import puriImg from '../../assets/images/veganCuisinePage/puri.png';
import bulgurBallsImg from '../../assets/images/veganCuisinePage/tefteli_is_bulgura.png';

export const veganCuisinePageMainCardsData: MainSectionDataType[] = [
    {
        id: 1,
        img: potatoImg,
        altImg: 'Картошка тушеная',
        title: 'Картошка, тушеная с болгарским перцем и фасолью в томатном соусе',
        text: 'Картошка, тушеная с болгарским перцем, фасолью, морковью и луком, - вариант сытного блюда на каждый день. Фасоль в данном случае заменяет мясо, делая рагу сытным и питательным. Чтобы сократить время приготовления, возьмём консервированную фасоль. Блюдо хоть и простое, но в полной мере наполнено ароматами и имеет выразительный вкус за счёт добавления томатной пасты.',
        iconCounters: [
            { icon: BookmarkIcon, countClick: 85, spacing: '6px', padding: '4px' },
            { icon: ReactionIcon, countClick: 152, spacing: '6px', padding: '4px' },
        ],
        tagIcon: NationalIcon,
        tagTitle: 'Национальные',
        bgColorTag: 'lime.50',
    },
    {
        id: 2,
        img: potatoRollsImg,
        altImg: 'Картофельные рулетики',
        title: 'Картофельные рулетики с грибами',
        text: 'Рекомендую всем приготовить постное блюдо из картофеля и грибов. Готовится это блюдо без яиц, без мяса и без сыра, из самых простых  ингредиентов, а получается очень вкусно и сытно. Постный рецепт картофельных рулетиков с грибами, в томатном соусе, - на обед, ужин и даже на праздничный стол!',
        iconCounters: [
            { icon: BookmarkIcon, countClick: 85, spacing: '6px', padding: '4px' },
            { icon: ReactionIcon, countClick: 152, spacing: '6px', padding: '4px' },
        ],
        tagIcon: KidsCoursesIcon,
        tagTitle: 'Детские блюда',
        bgColorTag: 'lime.50',
    },
    {
        id: 3,
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
        id: 4,
        img: lasagnaImg,
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
        id: 5,
        img: bulgurBallsImg,
        altImg: 'Тефтели из булгура и чечевицы',
        title: 'Тефтели из булгура и чечевицы, запечённые в томатном соусе',
        text: 'Тефтели из булгура и чечевицы – яркие и питательные, отлично подходят для постного и вегетарианского меню. Тефтели получаются нежными, а также сочными и ароматными благодаря использованию томатного соуса и душистых пряностей.',
        iconCounters: [
            { icon: BookmarkIcon, countClick: 85, spacing: '6px', padding: '4px' },
            { icon: ReactionIcon, countClick: 152, spacing: '6px', padding: '4px' },
        ],
        tagIcon: SecondCoursesIcon,
        tagTitle: 'Вторые блюда',
        bgColorTag: 'lime.50',
    },
    {
        id: 6,
        img: bulgurBallsImg,
        altImg: 'Тефтели из булгура и чечевицы',
        title: 'Тефтели из булгура и чечевицы, запечённые в томатном соусе',
        text: 'Тефтели из булгура и чечевицы – яркие и питательные, отлично подходят для постного и вегетарианского меню. Тефтели получаются нежными, а также сочными и ароматными благодаря использованию томатного соуса и душистых пряностей.',
        iconCounters: [
            { icon: BookmarkIcon, countClick: 85, spacing: '6px', padding: '4px' },
            { icon: ReactionIcon, countClick: 152, spacing: '6px', padding: '4px' },
        ],
        tagIcon: SecondCoursesIcon,
        tagTitle: 'Вторые блюда',
        bgColorTag: 'lime.50',
    },
    {
        id: 7,
        img: garlicPotatoesImg,
        altImg: 'Чесночная картошка',
        title: 'Чесночная картошка',
        text: 'Такая картошечка украсит любой семейный обед! Все будут в полном  восторге, очень вкусно! Аромат чеснока, хрустящая корочка на картошечке - просто объедение! Отличная идея для обеда или ужина, готовится просто!',
        iconCounters: [
            { icon: BookmarkIcon, countClick: 124, spacing: '6px', padding: '4px' },
            { icon: ReactionIcon, countClick: 324, spacing: '6px', padding: '4px' },
        ],
        tagIcon: NationalIcon,
        tagTitle: 'Национальные',
        bgColorTag: 'lime.50',
    },
    {
        id: 8,
        img: puriImg,
        altImg: 'Пури',
        title: 'Пури',
        text: 'Пури - это индийские жареные лепешки, которые готовятся из пресного теста. Рецепт лепешек пури требует самых доступных ингредиентов, и времени на приготовление хрустящих лепешек уйдет мало.',
        iconCounters: [
            { icon: BookmarkIcon, countClick: 124, spacing: '6px', padding: '4px' },
            { icon: ReactionIcon, countClick: 324, spacing: '6px', padding: '4px' },
        ],
        tagIcon: NationalIcon,
        tagTitle: 'Национальные',
        bgColorTag: 'lime.50',
    },
];
