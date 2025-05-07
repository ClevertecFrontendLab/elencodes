export const PATHS = {
    ROOT: '/',
    VEGAN: 'vegan/main-dishes',
    JUICIEST: '/the-juiciest',
    CATEGORY_SUBCATEGORY: ':category/:subcategory',
    RECIPE_DETAILS: ':category/:subcategory/:id',
    NOT_FOUND: '/not-found',
    ERROR: '*',
};

export const staticRoutes = {
    [PATHS.ROOT]: 'Главная',
    [PATHS.JUICIEST]: 'Самое сочное',
};
