import { CulinaryBlogsDataType } from '~/types/culinaryBlogType';

import blogAlexImg from '../../assets/images/avatars/avatar_blog_cook.svg';
import blogEkaterinaImg from '../../assets/images/avatars/avatar_blog_konstantinopolskaya.svg';
import blogElenaImg from '../../assets/images/avatars/avatar_blog_visockaya.svg';

export const culinaryBlogsData: CulinaryBlogsDataType[] = [
    {
        id: 1,
        avatar: blogElenaImg,
        name: 'Елена Высоцкая',
        login: '@elenapovar',
        text: 'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
    },
    {
        id: 2,
        avatar: blogAlexImg,
        name: 'Alex Cook',
        login: '@funtasticooking',
        text: 'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
    },
    {
        id: 3,
        avatar: blogEkaterinaImg,
        name: 'Екатерина Константинопольская',
        login: '@bake_and_pie',
        text: 'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
    },
];
