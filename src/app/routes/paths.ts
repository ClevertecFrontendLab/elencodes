export const PATHS = {
    ROOT: '/',
    VEGAN: 'vegan/main-dishes',
    JUICIEST: '/the-juiciest',
    CATEGORY_SUBCATEGORY: ':category/:subcategory',
    RECIPE_DETAILS: ':category/:subcategory/:id',
    EDIT_RECIPE: '/edit-recipe/:category/:subcategory/:id',
    NOT_FOUND: '/not-found',
    ERROR: '*',
    SIGN_IN: '/sign-in',
    SIGN_UP: '/sign-up',
    RECOVERY: '/sign-in/recovery',
    VERIFICATION: '/verification',
    NEW_RECIPE: '/new-recipe',
    BLOGS: '/blogs',
    BLOGGER: '/blogs/:userId',
};

export const staticRoutes = {
    [PATHS.ROOT]: 'Главная',
    [PATHS.JUICIEST]: 'Самое сочное',
    [PATHS.NEW_RECIPE]: 'Новый рецепт',
    [PATHS.BLOGS]: 'Блоги',
};

export const HIDE_ASIDE_PATHS = ['/new-recipe', '/edit-recipe'];
