import { BookmarkIcon } from '~/icons/CounterIcons/BookmarkIcon';
import ReactionIcon from '~/icons/CounterIcons/ReactionIcon';
import KidsCoursesIcon from '~/icons/NavMenuIcons/KidsCoursesIcon';
import { FirstCardsDataType } from '~/types/FirstCardsDataType';

export const dessertsData: FirstCardsDataType[] = [
    {
        id: 1,
        title: 'Бананово-молочное желе',
        text: 'Молочное желе – это просто, вкусно и полезно, ведь для его приготовления в качестве основы используется молоко.',
        iconCounters: [
            { icon: BookmarkIcon, countClick: 1, spacing: '6px', padding: '4px' },
            { icon: ReactionIcon, countClick: 1, spacing: '6px', padding: '4px' },
        ],
        tagIcon: KidsCoursesIcon,
        tagTitle: 'Детские блюда',
        bgColorTag: 'lime.50',
    },
    {
        id: 2,
        title: 'Нежный сливочно-сырный крем для кексов',
        text: 'Сливочно-сырным кремом можно украсить кексы, либо другую выпечку, а также этим кремом можно наполнить заварные пирожные.',
        iconCounters: [
            { icon: BookmarkIcon, countClick: 2, spacing: '6px', padding: '4px' },
            { icon: ReactionIcon, countClick: 1, spacing: '6px', padding: '4px' },
        ],
        tagIcon: KidsCoursesIcon,
        tagTitle: 'Детские блюда',
        bgColorTag: 'lime.50',
    },
];
