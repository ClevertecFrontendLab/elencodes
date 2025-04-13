import { BookmarkIcon } from '~/icons/CounterIcons/BookmarkIcon';
import ReactionIcon from '~/icons/CounterIcons/ReactionIcon';
import SecondCoursesIcon from '~/icons/NavMenuIcons/SecondCoursesIcon';
import { FirstCardsDataType } from '~/types/FirstCardsDataType';

export const veganCuisineData: FirstCardsDataType[] = [
    {
        id: 1,
        title: 'Картошка, тушеная с болгарским перцем и фасолью в томатном соусе',
        text: 'Картошка, тушеная с болгарским перцем, фасолью, морковью и луком, -  вариант сытного блюда на каждый день. Фасоль в данном случае заменяет мясо, делая рагу сытным и питательным. Чтобы сократить время приготовления, возьмём консервированную фасоль. Блюдо хоть и простое, но в полной мере наполнено ароматами и имеет выразительный вкус за счёт добавления томатной пасты.',
        iconCounters: [
            { icon: BookmarkIcon, countClick: 1, spacing: '6px', padding: '4px' },
            { icon: ReactionIcon, countClick: 1, spacing: '6px', padding: '4px' },
        ],
        tagIcon: SecondCoursesIcon,
        tagTitle: 'Вторые блюда',
        bgColorTag: 'lime.50',
    },
    {
        id: 2,
        title: 'Капустные котлеты',
        text: 'Капустные котлеты по этому рецепту получаются необычайно пышными и невероятно вкусными. Мягкий вкус и лёгкая пряная нотка наверняка помогут сделать эти чудесные котлеты из капусты одним из ваших любимых овощных блюд.',
        iconCounters: [
            { icon: BookmarkIcon, countClick: 2, spacing: '6px', padding: '4px' },
            { icon: ReactionIcon, countClick: 1, spacing: '6px', padding: '4px' },
        ],
        tagIcon: SecondCoursesIcon,
        tagTitle: 'Вторые блюда',
        bgColorTag: 'lime.50',
    },
];
