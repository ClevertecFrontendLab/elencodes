import alex from '@public/images/avatars/avatar_blog_cook.svg';
import elena from '@public/images/avatars/avatar_blog_konstantinopolskaya.svg';
import ekaterina from '@public/images/avatars/avatar_blog_konstantinopolskaya.svg';

import { Blog } from '~/types/blog-type';

export const BLOGS: Blog[] = [
    {
        name: 'Елена Высоцкая',
        username: '@elenapovar',
        image: elena,
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
    },
    {
        name: 'Alex Cook',
        username: '@funtasticooking',
        image: alex,
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
    },
    {
        name: 'Екатерина Константинопольская',
        username: '@bake_and_pie',
        image: ekaterina,
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
    },
];
