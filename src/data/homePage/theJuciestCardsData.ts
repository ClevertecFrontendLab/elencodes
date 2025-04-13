import { BookmarkIcon } from '~/icons/counterIcons/BookmarkIcon';
import ReactionIcon from '~/icons/counterIcons/ReactionIcon';
import NationalIcon from '~/icons/NavMenuIcons/NationalIcon';
import SecondCoursesIcon from '~/icons/NavMenuIcons/SecondCoursesIcon';
import { MainSectionDataType } from '~/types/HorizontalCardType';

import knelliImg from '../../assets/images/theJuciest/knelli_so_spagetti.png';
import lapshaImg from '../../assets/images/theJuciest/lapsha_s_kuritsei_i_shafranom.png';
import vetchinaImg from '../../assets/images/theJuciest/pryanaya_vetchina.png';
import tomyamImg from '../../assets/images/theJuciest/tom_yam_s_kapustoi_kimchi.png';

export const theJuciestCardsData: MainSectionDataType[] = [
    {
        id: 1,
        img: knelliImg,
        altImg: 'Кнели со спагетти',
        title: 'Кнели со спагетти',
        text: 'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        iconCounters: [
            { icon: BookmarkIcon, countClick: 85, spacing: '6px', padding: '4px' },
            { icon: ReactionIcon, countClick: 152, spacing: '6px', padding: '4px' },
        ],
        tagIcon: SecondCoursesIcon,
        tagTitle: 'Вторые блюда',
        bgColorTag: 'lime.50',
    },
    {
        id: 2,
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
        id: 3,
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
        id: 4,
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
];
