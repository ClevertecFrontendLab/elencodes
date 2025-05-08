import { ComponentWithAs, IconProps } from '@chakra-ui/react';

import { DessertsIcon } from './desserts-icon.js';
import { DrinksIcon } from './drinks-icon.js';
import { FirstCoursesIcon } from './first-courses-icon.js';
import { GrilsIcon } from './grils-icon.js';
import { KidsCoursesIcon } from './kids-courses-icon.js';
import { NationalIcon } from './national-icon.js';
import { PreparationsIcon } from './preparations-icon.js';
import { SaladsIcon } from './salads-icon.js';
import { SaucesIcon } from './sauces-icon.js';
import { SecondCoursesIcon } from './second-courses-icon.js';
import { SnacksIcon } from './snacks-icon.js';
import { TherapeuticNutritionIcon } from './therapeutic-nutrition-icon.js';
import { VeganIcon } from './vegan-icon.js';

export const icons: Record<string, ComponentWithAs<'svg', IconProps>> = {
    desserts: DessertsIcon,
    drinks: DrinksIcon,
    'main-dishes': SecondCoursesIcon,
    grill: GrilsIcon,
    child: KidsCoursesIcon,
    national: NationalIcon,
    preparations: PreparationsIcon,
    salads: SaladsIcon,
    sauces: SaucesIcon,
    soups: FirstCoursesIcon,
    snaks: SnacksIcon,
    health: TherapeuticNutritionIcon,
    vegan: VeganIcon,
} as const;

export type IconKey = keyof typeof icons;
