import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RecipeType } from '~/types/recipeType';

import basketsWithLemonImg from '../assets/images/newRecipesVeganCuisine/basketsWithLemonRecipe/korzinochki_s_limonnim_kremom.png';
import basketsWithLemonStepOneImg from '../assets/images/newRecipesVeganCuisine/basketsWithLemonRecipe/korzinochki_s_limonnim_kremom_1.png';
import basketsWithLemonStepTwoImg from '../assets/images/newRecipesVeganCuisine/basketsWithLemonRecipe/korzinochki_s_limonnim_kremom_2.png';
import basketsWithLemonStepThreeImg from '../assets/images/newRecipesVeganCuisine/basketsWithLemonRecipe/korzinochki_s_limonnim_kremom_3.png';
import basketsWithLemonStepFourImg from '../assets/images/newRecipesVeganCuisine/basketsWithLemonRecipe/korzinochki_s_limonnim_kremom_4.png';
import basketsWithLemonStepFiveImg from '../assets/images/newRecipesVeganCuisine/basketsWithLemonRecipe/korzinochki_s_limonnim_kremom_5.png';
import bulgurBallsImg from '../assets/images/newRecipesVeganCuisine/bulgurBallsRecipe/tefteli_is_bulgura.png';
import bulgurBallsStepOneImg from '../assets/images/newRecipesVeganCuisine/bulgurBallsRecipe/tefteli_is_bulgura_1.png';
import bulgurBallsStepTwoImg from '../assets/images/newRecipesVeganCuisine/bulgurBallsRecipe/tefteli_is_bulgura_2.png';
import bulgurBallsStepThreeImg from '../assets/images/newRecipesVeganCuisine/bulgurBallsRecipe/tefteli_is_bulgura_3.png';
import cabbagePattiesImg from '../assets/images/newRecipesVeganCuisine/cabbageCutletsRecipe/kapustnie_kotleti.png';
import cabbagePattiesStepOneImg from '../assets/images/newRecipesVeganCuisine/cabbageCutletsRecipe/kapustnie_kotleti_1.png';
import cabbagePattiesStepTwoImg from '../assets/images/newRecipesVeganCuisine/cabbageCutletsRecipe/kapustnie_kotleti_2.png';
import cabbagePattiesThreeImg from '../assets/images/newRecipesVeganCuisine/cabbageCutletsRecipe/kapustnie_kotleti_3.png';
import garlicPotatoesImg from '../assets/images/newRecipesVeganCuisine/garlicPotatoesRecipe/chesnochnaya_kartoshka.png';
import garlicPotatoesStepOneImg from '../assets/images/newRecipesVeganCuisine/garlicPotatoesRecipe/chesnochnaya_kartoshka_1.png';
import garlicPotatoesStepTwoImg from '../assets/images/newRecipesVeganCuisine/garlicPotatoesRecipe/chesnochnaya_kartoshka_2.png';
import garlicPotatoesStepThreeImg from '../assets/images/newRecipesVeganCuisine/garlicPotatoesRecipe/chesnochnaya_kartoshka_3.png';
import grilledSaladImg from '../assets/images/newRecipesVeganCuisine/grilledSaladWithVegetablesRecipe/grill_salat_s_ovoshami.png';
import grilledSaladStepOneImg from '../assets/images/newRecipesVeganCuisine/grilledSaladWithVegetablesRecipe/grill_salat_s_ovoshami_1.png';
import grilledSaladStepTwoImg from '../assets/images/newRecipesVeganCuisine/grilledSaladWithVegetablesRecipe/grill_salat_s_ovoshami_2.png';
import grilledSalmonImg from '../assets/images/newRecipesVeganCuisine/grilledSalmonRecipe/losos_s_limonom.png';
import grilledSalmonStepOneImg from '../assets/images/newRecipesVeganCuisine/grilledSalmonRecipe/losos_s_limonom_1.png';
import grilledSalmonStepTwoImg from '../assets/images/newRecipesVeganCuisine/grilledSalmonRecipe/losos_s_limonom_2.png';
import grilledSalmonStepThreeImg from '../assets/images/newRecipesVeganCuisine/grilledSalmonRecipe/losos_s_limonom_3.png';
import lasagnaImg from '../assets/images/newRecipesVeganCuisine/lasagnaRecipe/ovoshnaya_lazania.png';
import lasagnaStepOneImg from '../assets/images/newRecipesVeganCuisine/lasagnaRecipe/ovoshnaya_lazania_1.png';
import lasagnaStepTwoImg from '../assets/images/newRecipesVeganCuisine/lasagnaRecipe/ovoshnaya_lazania_2.png';
import lasagnaStepThreeImg from '../assets/images/newRecipesVeganCuisine/lasagnaRecipe/ovoshnaya_lazania_3.png';
import pancakesImg from '../assets/images/newRecipesVeganCuisine/pancakesRecipe/postnye_oladi_na_drojjax.png';
import pancakesStepOneImg from '../assets/images/newRecipesVeganCuisine/pancakesRecipe/postnye_oladi_na_drojjax_1.png';
import pancakesStepTwoImg from '../assets/images/newRecipesVeganCuisine/pancakesRecipe/postnye_oladi_na_drojjax_2.png';
import pancakesStepThreeImg from '../assets/images/newRecipesVeganCuisine/pancakesRecipe/postnye_oladi_na_drojjax_3.png';
import pastaWithChickenImg from '../assets/images/newRecipesVeganCuisine/pastaWithChickenRecipe/lapsha_s_kuritsei_i_shafranom.png';
import pastaWithChickenStepOneImg from '../assets/images/newRecipesVeganCuisine/pastaWithChickenRecipe/lapsha_s_kuritsei_i_shafranom_1.png';
import pastaWithChickenStepTwoImg from '../assets/images/newRecipesVeganCuisine/pastaWithChickenRecipe/lapsha_s_kuritsei_i_shafranom_2.png';
import pastaWithChickenStepThreeImg from '../assets/images/newRecipesVeganCuisine/pastaWithChickenRecipe/lapsha_s_kuritsei_i_shafranom_3.png';
import potatoImg from '../assets/images/newRecipesVeganCuisine/potatoRecipe/kartoshka_tushenaya.png';
import potatoStepOneImg from '../assets/images/newRecipesVeganCuisine/potatoRecipe/kartoshka_tushenaya_1.png';
import potatoStepTwoImg from '../assets/images/newRecipesVeganCuisine/potatoRecipe/kartoshka_tushenaya_2.png';
import potatoStepThreeImg from '../assets/images/newRecipesVeganCuisine/potatoRecipe/kartoshka_tushenaya_3.png';
import potatoStepFourImg from '../assets/images/newRecipesVeganCuisine/potatoRecipe/kartoshka_tushenaya_4.png';
import potatoRollsImg from '../assets/images/newRecipesVeganCuisine/potatoRollsRecipe/kartofelnie_ruletiki.png';
import potatoRollsStepOneImg from '../assets/images/newRecipesVeganCuisine/potatoRollsRecipe/kartofelnie_ruletiki_1.png';
import potatoRollsStepTwoImg from '../assets/images/newRecipesVeganCuisine/potatoRollsRecipe/kartofelnie_ruletiki_2.png';
import potatoRollsStepThreeImg from '../assets/images/newRecipesVeganCuisine/potatoRollsRecipe/kartofelnie_ruletiki_3.png';
import tomYamImg from '../assets/images/newRecipesVeganCuisine/tomYamRecipe/tom_yam.png';
import tomYamStepOneImg from '../assets/images/newRecipesVeganCuisine/tomYamRecipe/tom_yam_1.png';
import tomYamStepTwoImg from '../assets/images/newRecipesVeganCuisine/tomYamRecipe/tom_yam_2.png';
import tomYamStepThreeImg from '../assets/images/newRecipesVeganCuisine/tomYamRecipe/tom_yam_3.png';
import tomYamStepFourImg from '../assets/images/newRecipesVeganCuisine/tomYamRecipe/tom_yam_4.png';
import tomYamStepFiveImg from '../assets/images/newRecipesVeganCuisine/tomYamRecipe/tom_yam_5.png';
import vegetableStewImg from '../assets/images/newRecipesVeganCuisine/vegetableStewResipe/ovoshnoe_ragu.png';
import vegetableStewStepOneImg from '../assets/images/newRecipesVeganCuisine/vegetableStewResipe/ovoshnoe_ragu_1.png';
import vegetableStewStepTwoImg from '../assets/images/newRecipesVeganCuisine/vegetableStewResipe/ovoshnoe_ragu_2.png';
import vegetableStewStepThreeImg from '../assets/images/newRecipesVeganCuisine/vegetableStewResipe/ovoshnoe_ragu_3.png';

const initialState: RecipeType[] = [
    {
        id: '0',
        title: 'Картошка, тушенная с болгарским перцем и фасолью в томатном соусе',
        description:
            'Картошка, тушенная с болгарским перцем, фасолью, морковью и луком, - вариант сытного блюда на каждый день. Фасоль в данном случае заменяет мясо, делая рагу сытным и питательным. Чтобы сократить время приготовления, возьмём консервированную фасоль. Блюдо хоть и простое, но в полной мере наполнено ароматами и имеет выразительный вкус за счёт добавления томатной пасты.',
        category: ['vegan', 'second-dish'],
        subcategory: ['snacks', 'vegetables'],
        image: potatoImg,
        bookmarks: 85,
        likes: 152,
        date: '2025-02-28T00:00:00Z',
        time: '40 минут',
        portions: 2,
        nutritionValue: { calories: 250, proteins: 5, fats: 8, carbohydrates: 40 },
        ingredients: [
            { title: 'картошка', count: '4', measureUnit: 'шт.' },
            { title: 'болгарский перец', count: '2', measureUnit: 'шт.' },
            { title: 'фасоль', count: '200', measureUnit: 'г' },
            { title: 'томатный соус', count: '200', measureUnit: 'мл' },
            { title: 'лук', count: '1', measureUnit: 'шт.' },
            { title: 'специи', count: '0', measureUnit: 'по вкусу' },
        ],
        steps: [
            {
                stepNumber: 1,
                description: 'Нарезать картошку и перец.',
                image: potatoStepOneImg,
            },
            {
                stepNumber: 2,
                description: 'Обжарить лук до золотистого цвета.',
                image: potatoStepTwoImg,
            },
            {
                stepNumber: 3,
                description: 'Добавить картошку, перец и фасоль, залить соусом.',
                image: potatoStepThreeImg,
            },
            {
                stepNumber: 4,
                description: 'Тушить на медленном огне 30 минут.',
                image: potatoStepFourImg,
            },
        ],
        side: 'potatoes',
    },
    {
        id: '1',
        title: 'Картофельные рулетики с грибами',
        description:
            'Рекомендую всем приготовить постное блюдо из картофеля и грибов. Готовится это блюдо без яиц, без мяса и без сыра, из самых простых ингредиентов, а получается очень вкусно и сытно. Постный рецепт картофельных рулетиков с грибами, в томатном соусе, - на обед, ужин и даже на праздничный стол!',
        category: ['vegan', 'snacks'],
        subcategory: ['snacks', 'warm-snacks'],
        image: potatoRollsImg,
        bookmarks: 85,
        likes: 1152,
        date: '2024-02-20T00:00:00Z',
        time: '30 минут',
        portions: 2,
        nutritionValue: { calories: 180, proteins: 4, fats: 6, carbohydrates: 28 },
        ingredients: [
            { title: 'картошка', count: '3', measureUnit: 'шт.' },
            { title: 'грибы', count: '200', measureUnit: 'г' },
            { title: 'мука', count: '100', measureUnit: 'г' },
            { title: 'специи', count: '0', measureUnit: 'по вкусу' },
        ],
        steps: [
            {
                stepNumber: 1,
                description: 'Отварить картошку и сделать пюре.',
                image: potatoRollsStepOneImg,
            },
            {
                stepNumber: 2,
                description: 'Обжарить грибы до готовности.',
                image: potatoRollsStepTwoImg,
            },
            {
                stepNumber: 3,
                description: 'Сформировать рулетики и обжарить.',
                image: potatoRollsStepThreeImg,
            },
        ],
        side: 'potatoes',
    },
    {
        id: '2',
        title: 'Овощная лазанья из лаваша',
        description:
            'Большое, сытное блюдо для ценителей блюд без мяса! Такая лазанья готовится с овощным соусом и соусом бешамель, а вместо листов для лазаньи используется тонкий лаваш.',
        category: ['vegan', 'second-dish', 'national'],
        subcategory: ['second-dish', 'vegetables', 'italian', 'snacks'],
        image: lasagnaImg,
        bookmarks: 85,
        likes: 152,
        date: '2023-01-25T00:00:00Z',
        time: '1 час',
        portions: 1,
        nutritionValue: { calories: 300, proteins: 12, fats: 8, carbohydrates: 45 },
        ingredients: [
            { title: 'лаваш', count: '3', measureUnit: 'листов' },
            { title: 'овощной соус', count: '300', measureUnit: 'мл' },
            { title: 'соус бешамель', count: '200', measureUnit: 'мл' },
            { title: 'сыр', count: '100', measureUnit: 'г' },
        ],
        steps: [
            {
                stepNumber: 1,
                description: 'Приготовить соусы.',
                image: lasagnaStepOneImg,
            },
            {
                stepNumber: 2,
                description: 'Сложить слои лазаньи.',
                image: lasagnaStepTwoImg,
            },
            {
                stepNumber: 3,
                description: 'Запекать 30 минут.',
                image: lasagnaStepThreeImg,
            },
        ],
        side: 'otherVegetables',
    },
    {
        id: '3',
        title: 'Тефтели из булгура и чечевицы, запечённые в томатном соусе',
        description:
            'Тефтели из булгура и чечевицы – яркие и питательные, отлично подходят для постного и вегетарианского меню. Тефтели получаются нежными, а также сочными и ароматными благодаря использованию томатного соуса и душистых пряностей.',
        category: ['vegan', 'second-dish'],
        subcategory: ['second-dish', 'poultry-dish'],
        image: bulgurBallsImg,
        bookmarks: 85,
        likes: 152,
        date: '2023-02-15T00:00:00Z',
        time: '50 минут',
        portions: 4,
        nutritionValue: { calories: 200, proteins: 10, fats: 5, carbohydrates: 30 },
        ingredients: [
            { title: 'булгур', count: '150', measureUnit: 'г' },
            { title: 'чечевица', count: '100', measureUnit: 'г' },
            { title: 'томатный соус', count: '200', measureUnit: 'мл' },
            { title: 'лук', count: '1', measureUnit: 'шт.' },
        ],
        steps: [
            {
                stepNumber: 1,
                description: 'Смешать булгур и чечевицу.',
                image: bulgurBallsStepOneImg,
            },
            {
                stepNumber: 2,
                description: 'Сформировать тефтели и запечь.',
                image: bulgurBallsStepTwoImg,
            },
            {
                stepNumber: 3,
                description: 'Подавать с соусом.',
                image: bulgurBallsStepThreeImg,
            },
        ],
        side: 'beans',
    },
    {
        id: '4',
        title: 'Чесночная картошка',
        description:
            'Такая картошечка украсит любой семейный обед! Все будут в полном восторге, очень вкусно! Аромат чеснока, хрустящая корочка на картошечке - просто объедение! Отличная идея для обеда или ужина, готовится просто!',
        category: ['vegan', 'second-dish'],
        subcategory: ['side-dishes', 'second-dish', 'vegetables'],
        image: garlicPotatoesImg,
        bookmarks: 124,
        likes: 342,
        date: '2024-03-01T00:00:00Z',
        time: '30 минут',
        portions: 2,
        nutritionValue: { calories: 220, proteins: 4, fats: 7, carbohydrates: 35 },
        ingredients: [
            { title: 'картошка', count: '6', measureUnit: 'шт.' },
            { title: 'чеснок', count: '5', measureUnit: 'зубчиков' },
            { title: 'масло', count: '50', measureUnit: 'мл' },
            { title: 'специи', count: '0', measureUnit: 'по вкусу' },
        ],
        steps: [
            {
                stepNumber: 1,
                description: 'Очистить и нарезать картошку.',
                image: garlicPotatoesStepOneImg,
            },
            {
                stepNumber: 2,
                description: 'Обжарить с чесноком.',
                image: garlicPotatoesStepTwoImg,
            },
            {
                stepNumber: 3,
                description: 'Подавать горячей.',
                image: garlicPotatoesStepThreeImg,
            },
        ],
        side: 'potatoes',
    },
    {
        id: '5',
        title: 'Капустные котлеты',
        description:
            'Капустные котлеты по этому рецепту получаются необычайно пышными и невероятно вкусными. Мягкий вкус и лёгкая пряная нотка наверняка помогут сделать эти чудесные котлеты из капусты одним из ваших любимых овощных блюд.',
        category: ['vegan'],
        subcategory: ['second-dish', 'snacks'],
        image: cabbagePattiesImg,
        bookmarks: 2,
        likes: 1,
        date: '2024-02-05T00:00:00Z',
        time: '35 минут',
        portions: 4,
        nutritionValue: { calories: 150, proteins: 5, fats: 4, carbohydrates: 20 },
        ingredients: [
            { title: 'капуста', count: '300', measureUnit: 'г' },
            { title: 'мука', count: '50', measureUnit: 'г' },
            { title: 'специи', count: '0', measureUnit: 'по вкусу' },
        ],
        steps: [
            {
                stepNumber: 1,
                description: 'Нарезать капусту и отварить.',
                image: cabbagePattiesStepOneImg,
            },
            {
                stepNumber: 2,
                description: 'Смешать с мукой и сформировать котлеты.',
                image: cabbagePattiesStepTwoImg,
            },
            {
                stepNumber: 3,
                description: 'Обжарить до золотистой корочки.',
                image: cabbagePattiesThreeImg,
            },
        ],
        side: 'cabbage',
    },
    {
        id: '6',
        title: 'Овощное рагу',
        description: 'Сытное рагу из сезонных овощей, приправленное травами.',
        category: ['vegan', 'second-dish'],
        subcategory: ['side-dishes', 'vegetables', 'snacks'],
        image: vegetableStewImg,
        bookmarks: 8,
        likes: 60,
        date: '2023-03-12T00:00:00Z',
        time: '1 час',
        portions: 2,
        nutritionValue: { calories: 200, proteins: 5, fats: 8, carbohydrates: 30 },
        ingredients: [
            { title: 'цуккини', count: '1', measureUnit: 'шт.' },
            { title: 'болгарский перец', count: '1', measureUnit: 'шт.' },
            { title: 'морковь', count: '1', measureUnit: 'шт.' },
            { title: 'картошка', count: '2', measureUnit: 'шт.' },
            { title: 'специи', count: '0', measureUnit: 'по вкусу' },
        ],
        steps: [
            {
                stepNumber: 1,
                description: 'Нарезать все овощи.',
                image: vegetableStewStepOneImg,
            },
            {
                stepNumber: 2,
                description: 'Обжарить на сковороде.',
                image: vegetableStewStepTwoImg,
            },
            {
                stepNumber: 3,
                description: 'Добавить специи и тушить до готовности.',
                image: vegetableStewStepThreeImg,
            },
        ],
        side: 'otherVegetables',
    },
    {
        id: '7',
        title: 'Лапша с курицей и шафраном',
        description: 'Ароматная лапша с курицей и шафраном, идеальное сочетание для сытного обеда.',
        category: ['second-dish'],
        subcategory: ['poultry-dish'],
        image: pastaWithChickenImg,
        bookmarks: 258,
        likes: 1342,
        date: '2024-03-08T00:00:00Z',
        time: '40 минут',
        portions: 4,
        nutritionValue: { calories: 400, proteins: 30, fats: 15, carbohydrates: 50 },
        ingredients: [
            { title: 'лапша', count: '200', measureUnit: 'г' },
            { title: 'курица', count: '300', measureUnit: 'г' },
            { title: 'шафран', count: '1', measureUnit: 'ч. л.' },
            { title: 'лук', count: '1', measureUnit: 'шт.' },
        ],
        steps: [
            {
                stepNumber: 1,
                description: 'Отварить лапшу.',
                image: pastaWithChickenStepOneImg,
            },
            {
                stepNumber: 2,
                description: 'Обжарить курицу с луком и шафраном.',
                image: pastaWithChickenStepTwoImg,
            },
            {
                stepNumber: 3,
                description: 'Смешать лапшу с курицей и подавать.',
                image: pastaWithChickenStepThreeImg,
            },
        ],
        side: 'pasta',
        meat: 'chicken',
    },
    {
        id: '8',
        title: 'Гриль-салат с овощами',
        description: 'Салат с обжаренными на гриле овощами и легкой заправкой.',
        category: ['salads'],
        subcategory: ['warm-salads'],
        image: grilledSaladImg,
        bookmarks: 10,
        likes: 80,
        date: '2023-03-20T00:00:00Z',
        time: '25 минут',
        portions: 2,
        nutritionValue: { calories: 150, proteins: 4, fats: 6, carbohydrates: 20 },
        ingredients: [
            { title: 'цуккини', count: '1', measureUnit: 'шт.' },
            { title: 'болгарский перец', count: '1', measureUnit: 'шт.' },
            { title: 'баклажан', count: '1', measureUnit: 'шт.' },
            { title: 'оливковое масло', count: '0', measureUnit: 'по вкусу' },
        ],
        steps: [
            {
                stepNumber: 1,
                description: 'Обжарить овощи на гриле.',
                image: grilledSaladStepOneImg,
            },
            {
                stepNumber: 2,
                description: 'Смешать с заправкой и подавать.',
                image: grilledSaladStepTwoImg,
            },
        ],
        side: 'otherVegetables',
    },
    {
        id: '9',
        title: 'Том-ям на кокосовом молоке',
        description:
            'Популярное блюдо тайской кухни, которое отличается пряным, острым, кисловатым вкусом со сливочными нотками кокосового молока. Можно по праву назвать ресторанным изыском, ведь оно обладает гармоничным и ярким вкусом. Порадуйте себя и близких, приготовьте это замечательное блюдо',
        category: ['first-dish', 'national'],
        subcategory: ['vegetables', 'pan-asian'],
        image: tomYamImg,
        bookmarks: 95,
        likes: 301,
        date: '2023-03-12T00:00:00Z',
        time: '35 минут',
        portions: 4,
        nutritionValue: { calories: 166, proteins: 9, fats: 10, carbohydrates: 10 },
        ingredients: [
            { title: 'копчёный тофу', count: '100', measureUnit: 'г' },
            { title: 'вешенки', count: '200', measureUnit: 'г.' },
            { title: 'томаты черри', count: '6', measureUnit: 'шт.' },
            { title: 'кокосовое молоко', count: '250', measureUnit: 'мл.' },
            { title: 'соевый соус', count: '2', measureUnit: 'ст.л.' },
            { title: 'имбирь', count: '10', measureUnit: 'г' },
            { title: 'лемонграсс', count: '1', measureUnit: 'ст.л.' },
        ],
        steps: [
            {
                stepNumber: 1,
                description: 'Нарезать ингредиенты',
                image: tomYamStepOneImg,
            },
            {
                stepNumber: 2,
                description: 'В кастрюле обжарить вешенки, имбирь и лемонграсс',
                image: tomYamStepTwoImg,
            },
            {
                stepNumber: 3,
                description: 'Влить воду, добавить томаты черри, варить 10 минут',
                image: tomYamStepThreeImg,
            },
            {
                stepNumber: 4,
                description: 'Добавить соевый соус, кокосовое молоко, тофу и варить 3 минуты',
                image: tomYamStepFourImg,
            },
            {
                stepNumber: 5,
                description: 'Подавать горячим',
                image: tomYamStepFiveImg,
            },
        ],
    },
    {
        id: '10',
        title: 'Корзиночки с лимоном и сливами',
        description:
            'Очень вкусный и изысканный десерт. Лимонный крем готовится легко, а благодаря своей насыщенной текстуре и вкусу, становится настоящей звездой этого десерта.',
        category: ['desserts'],
        subcategory: ['custard-dough'],
        image: basketsWithLemonImg,
        bookmarks: 90,
        likes: 307,
        date: '2023-02-03T00:00:00Z',
        time: '40 минут',
        portions: 6,
        nutritionValue: { calories: 328, proteins: 6, fats: 21, carbohydrates: 29 },
        ingredients: [
            { title: 'мука', count: '200', measureUnit: 'г' },
            { title: 'сахар', count: '100', measureUnit: 'г.' },
            { title: 'растительное масло', count: '2', measureUnit: 'ст.л.' },
            { title: 'вода', count: '300', measureUnit: 'мл.' },
            { title: 'кукурузный крахмал', count: '2', measureUnit: 'ст.л.' },
            { title: 'лимон', count: '2', measureUnit: 'шт.' },
            { title: 'слива', count: '300', measureUnit: 'г.' },
            { title: 'соль', count: '1', measureUnit: 'ч.л.' },
        ],
        steps: [
            {
                stepNumber: 1,
                description:
                    'В воду добавить сахар, крахмал, цедру лимона и выжать сок в массу. Все перемешать и варить на медленном огне',
                image: basketsWithLemonStepOneImg,
            },
            {
                stepNumber: 2,
                description:
                    'Сделать корзинки под крем. Взбить миксером холодную воду, растительное масло, соль. Добавить муку и замесить тесто',
                image: basketsWithLemonStepTwoImg,
            },
            {
                stepNumber: 3,
                description:
                    'Раскатать тесто, сделать круги из него и поместить в формы для выпекания. Выпекать 10 минут при 180 гр.',
                image: basketsWithLemonStepThreeImg,
            },
            {
                stepNumber: 4,
                description: 'Сливы вымыть и нарезать ломтиками.',
                image: basketsWithLemonStepFourImg,
            },
            {
                stepNumber: 5,
                description:
                    'Готовые корзиночки наполнить кремом, сверху украсить ломтиками мякоти слив.',
                image: basketsWithLemonStepFiveImg,
            },
        ],
    },
    {
        id: '11',
        title: 'Постные оладьи на дрожжах',
        description:
            'Простые, пышные, мягкие оладьи на дрожжах многим знакомы еще с детства. По желанию дополните блюдо вареньем или джемом',
        category: ['desserts'],
        subcategory: ['pancakes'],
        image: pancakesImg,
        bookmarks: 95,
        likes: 302,
        date: '2022-03-12T00:00:00Z',
        time: '35 минут',
        portions: 4,
        nutritionValue: { calories: 230, proteins: 6, fats: 6, carbohydrates: 34 },
        ingredients: [
            { title: 'мука', count: '300', measureUnit: 'г' },
            { title: 'вода', count: '400', measureUnit: 'мл.' },
            { title: 'сахар', count: '1.5', measureUnit: 'ст.л.' },
            { title: 'растительное масло', count: '2', measureUnit: 'ст.л.' },
            { title: 'сухие дрожжи', count: '1', measureUnit: 'ч.л.' },
            { title: 'соль', count: '0.5', measureUnit: 'ч.л.' },
        ],
        steps: [
            {
                stepNumber: 1,
                description:
                    'В миске перемешать сахар, соль, воду сухие дрожжи. Оставить на 10 минут для активации дрожжей',
                image: pancakesStepOneImg,
            },
            {
                stepNumber: 2,
                description:
                    'Добавить муку (просеять через сито) и замесить тесто. Накрыть полотенцем и оставить на 30 минут',
                image: pancakesStepTwoImg,
            },
            {
                stepNumber: 3,
                description:
                    'Сформировать оладьи. Жарить на сковороде по 3-4 минуты с каждой стороны, до румяной корочки',
                image: pancakesStepThreeImg,
            },
            {
                stepNumber: 4,
                description: 'Готовые оладьи подавать к столу',
                image: pancakesImg,
            },
        ],
    },
    {
        id: '12',
        title: 'Стейк из лосося на гриле с лимоном',
        description:
            'Нежный лосось, приготовленный на гриле. Простое и изысканное блюдо для ужина.',
        category: ['grills'],
        subcategory: ['fish-grill'],
        image: grilledSalmonImg,
        bookmarks: 108,
        likes: 265,
        date: '2023-03-20T00:00:00Z',
        time: '35 минут',
        portions: 2,
        nutritionValue: { calories: 170, proteins: 15, fats: 11, carbohydrates: 2 },
        ingredients: [
            { title: 'стейк лосося', count: '2', measureUnit: 'шт.' },
            { title: 'лимон', count: '1', measureUnit: 'шт.' },
            { title: 'оливковое масло', count: '50', measureUnit: 'мл' },
            { title: 'специи', count: '0', measureUnit: 'по вкусу' },
            { title: 'салат', count: '0', measureUnit: 'по вкусу' },
        ],
        steps: [
            {
                stepNumber: 1,
                description:
                    'Смешать в небольшой миске цедру лимона и сок, оливковое масло, соль, перец. Полить смесью стейки лосося и замариновать на 1 час',
                image: grilledSalmonStepOneImg,
            },
            {
                stepNumber: 2,
                description:
                    'Разогреть гриль и обжарить рыбу по 6–8 минут с каждой стороны, пока лосось хорошо не подрумянится',
                image: grilledSalmonStepTwoImg,
            },
            {
                stepNumber: 3,
                description: 'Подавать к столу горячим, украсить свежими салатными листьями.',
                image: grilledSalmonStepThreeImg,
            },
        ],
        side: 'otherVegetables',
    },
];

const recipesSlice = createSlice({
    name: 'recipes',
    initialState,
    reducers: {
        addRecipe: (state, action: PayloadAction<RecipeType>) => {
            state.push(action.payload);
        },
    },
});

export const { addRecipe } = recipesSlice.actions;
export const recipesReducer = recipesSlice.reducer;
