import { Recipe } from '~/query/services/recipes/types.ts';
import { CreateRecipeSchemaType } from '~/schemas/create-recipe.schema.ts';

export const transformRecipeToFormData = (recipe: Recipe): CreateRecipeSchemaType => ({
    title: recipe.title,
    description: recipe.description,
    time: Number(recipe.time),
    portions: Number(recipe.portions),
    image: recipe.image || '',
    categoriesIds: recipe.categoriesIds,
    ingredients: recipe.ingredients.map((ingredient) => ({
        title: ingredient.title,
        count: Number(ingredient.count),
        measureUnit: ingredient.measureUnit,
    })),
    steps: recipe.steps.map((step) => ({
        stepNumber: step.stepNumber,
        description: step.description,
        image: step.image ?? '',
    })),
});
