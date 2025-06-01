export const DATA_TEST_ID = {
    HEADER: 'header',
    FOOTER: 'footer',
    CAROUSEL: 'carousel',
    CAROUSEL_CARD: 'carousel-card-',
    CAROUSEL_BACK: 'carousel-back',
    CAROUSEL_FORWARD: 'carousel-forward',
    ACTIVE_LINK: '-active',
    JUICIEST_LINK: 'juiciest-link',
    JUICIEST_LINK_MOB: 'juiciest-link-mobile',
    CHECKBOX: 'checkbox-',
    FOOD_CARD: 'food-card-',
    BURGER_NAV: 'nav',
    BURGER_ICON: 'hamburger-icon',
    BURGER_CLOSE_ICON: 'close-icon',
    ALLERGENS_SWITCHER: 'allergens-switcher',
    ADD_OTHER_ALLERGEN: 'add-other-allergen',
    ADD_ALLERGEN_BUTTON: 'add-allergen-button',
    ALLERGENS_MENU: 'allergens-menu',
    ALLERGEN: 'allergen-',
    VEGAN: 'vegan',
    VEGAN_CUISINE: 'vegan-cuisine',
    BREADCRUMBS: 'breadcrumbs',
    LOAD_MORE_BUTTON: 'load-more-button',
    ERROR_PAGE_GO_HOME: 'error-page-go-home',
    CLOSE_FILTER_DRAWER: 'close-filter-drawer',
    ALLERGENS_SWITCHER_FILTER: 'allergens-switcher-filter',
    ALLERGENS_MENU_BUTTON: 'allergens-menu-button',
    ALLERGEN_MENU_BUTTON_FILTER: 'allergens-menu-button-filter',
    CLEAR_FILTER_BUTTON: 'clear-filter-button',
    FILTER_DRAWER: 'filter-drawer',
    FIND_RECIPE_BUTTON: 'find-recipe-button',
    INCREMENT_STEPPER: 'increment-stepper',
    DECREMENT_STEPPER: 'decrement-stepper',
    FILTER_TAG: 'filter-tag',
    SEARCH_BUTTON: 'search-button',
    SEARCH_INPUT: 'search-input',
    FILTER_BUTTON: 'filter-button',
    FILTER_MENU_BUTTON_CATEGORY: 'filter-menu-button-категория',
    ERROR_NOTIFICATION: 'error-notification',
    CLOSE_ALERT_BUTTON: 'close-alert-button',
    APP_LOADER: 'app-loader',
    LOADER_SEARCH_BLOCK: 'loader-search-block',
    FORM_SIGN_IN: 'sign-in-form',
    FORM_LOGIN_INPUT: 'login-input',
    FORM_PASSWORD_INPUT: 'password-input',
    FORM_PASSWORD_VISIBILITY: 'password-visibility-button',
    FORM_SUBMIT_BUTTON: 'submit-button',
    FORM_FORGOT_PASSWORD: 'forgot-password',
    MODAL_ERROR_SIGN_IN: 'sign-in-error-modal',
    MODAL_CLOSE_BUTTON: 'close-button',
    MODAL_REPEAT_BUTTON: 'repeat-button',
    SIGN_UP_PROGRESS: 'sign-up-progress',
    SIGN_UP_FORM: 'sign-up-form',
    SIGN_UP_FIRST_NAME: 'first-name-input',
    SIGN_UP_LAST_NAME: 'last-name-input',
    SIGN_UP_EMAIL: 'email-input',
    SIGN_UP_CONFIRM_PASSWORD: 'confirm-password-input',
    MODAL_SIGN_UP_SUCCESS: 'sign-up-success-modal',
    MODAL_SIGN_UP_ERROR: 'email-verification-failed-modal',
    MODAL_SEND_EMAIL: 'send-email-modal',
    MODAL_VERIFICATION_CODE: 'verification-code-modal',
    VERIFICATION_CODE_INPUT: 'verification-code-input',
    MODAL_RESET_CREDS: 'reset-credentials-modal',
};

//Форма рецепта
export const RECIPE_FORM = 'recipe-form';
export const RECIPE_IMAGE_BLOCK = 'recipe-image-block';
export const RECIPE_IMAGE_BLOCK_INPUT = 'recipe-image-block-input-file';
export const RECIPE_CATEGORIES = 'recipe-categories';
export const RECIPE_TITLE = 'recipe-title';
export const RECIPE_DESCRIPTION = 'recipe-description';
export const RECIPE_PORTIONS = 'recipe-portions';
export const RECIPE_TIME = 'recipe-time';
export const RECIPE_INGREDIENTS_TITLE = (index: number) => `recipe-ingredients-title-${index}`;
export const RECIPE_INGREDIENTS_COUNT = (index: number) => `recipe-ingredients-count-${index}`;
export const RECIPE_INGREDIENTS_MEASURE = (index: number) =>
    `recipe-ingredients-measureUnit-${index}`;
export const RECIPE_STEP_IMAGE = (index: number) => `recipe-steps-image-block-${index}`;
export const RECIPE_STEP_IMAGE_INPUT = (index: number) =>
    `recipe-steps-image-block-${index}-input-file`;
export const RECIPE_STEP_DESCRIPTION = (index: number) => `recipe-steps-description-${index}`;
export const RECIPE_SAVE_DRAFT = 'recipe-save-draft-button';
export const RECIPE_PUBLISH = 'recipe-publish-recipe-button';

//Удаление и добавление ингредиентов
export const RECIPE_REMOVE_INGREDIENT = (index: number) =>
    `recipe-ingredients-remove-ingredients-${index}`;
export const RECIPE_ADD_INGREDIENT = 'recipe-ingredients-add-ingredients';

//Превью картинки и иконка удаления в шаге рецепта
export const RECIPE_STEP_IMAGE_BLOCK = (index: number) =>
    `recipe-steps-image-block-${index}-preview-image`;
export const RECIPE_STEP_REMOVE = (index: number) => `recipe-steps-remove-button-${index}`;

export const RECIPE_PREVIEW_IMAGE = 'recipe-image-block-preview-image';
export const RECIPE_IMAGE_MODAL = 'recipe-image-modal';
export const RECIPE_IMAGE_MODAL_BLOCK = 'recipe-image-modal-image-block';
export const RECIPE_IMAGE_MODAL_PREVIEW = 'recipe-image-modal-preview-image';
export const RECIPE_PREVENTIVE_MODAL = 'recipe-preventive-modal';
export const RECIPE_DELETE_BUTTON = 'recipe-delete-button';
export const HEADER_LOGO = 'header-logo';
export const ADD_RECIPE_BTN = 'add-recipe-button';
