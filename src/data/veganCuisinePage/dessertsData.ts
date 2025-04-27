import { BookmarkIcon } from '~/icons/counterIcons/BookmarkIcon';
import ReactionIcon from '~/icons/counterIcons/ReactionIcon';
import { FirstCardsDataType } from '~/types/FirstCardsDataType';

export const dessertsData: FirstCardsDataType[] = [
    {
        id: 1,
        title: 'Бананово-молочное желе',
        description:
            'Молочное желе – это просто, вкусно и полезно, ведь для его приготовления в качестве основы используется молоко.',
        iconCounters: [
            { icon: BookmarkIcon, countClick: 1, spacing: '6px', padding: '4px' },
            { icon: ReactionIcon, countClick: 1, spacing: '6px', padding: '4px' },
        ],
        category: 'kids-dish',
        bgColorTag: 'lime.50',
    },
    {
        id: 2,
        title: 'Нежный сливочно-сырный крем для кексов',
        description:
            'Сливочно-сырным кремом можно украсить кексы, либо другую выпечку, а также этим кремом можно наполнить заварные пирожные.',
        iconCounters: [
            { icon: BookmarkIcon, countClick: 2, spacing: '6px', padding: '4px' },
            { icon: ReactionIcon, countClick: 1, spacing: '6px', padding: '4px' },
        ],
        category: 'kids-dish',
        bgColorTag: 'lime.50',
    },
];
