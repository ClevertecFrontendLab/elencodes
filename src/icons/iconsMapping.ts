import { ComponentWithAs, IconProps } from '@chakra-ui/react';

import DessertsIcon from './navMenuIcons/dessertsIcon.js';
import DrinksIcon from './navMenuIcons/drinksIcon.js';
import FirstCoursesIcon from './navMenuIcons/firstCoursesIcon.js';
import GrilsIcon from './navMenuIcons/grilsIcon.js';
import KidsCoursesIcon from './navMenuIcons/kidsCoursesIcon.js';
import NationalIcon from './navMenuIcons/nationalIcon.js';
import PreparationsIcon from './navMenuIcons/preparationsIcon.js';
import SaladsIcon from './navMenuIcons/saladsIcon.js';
import SaucesIcon from './navMenuIcons/saucesIcon.js';
import SecondCoursesIcon from './navMenuIcons/secondCoursesIcon.js';
import SnacksIcon from './navMenuIcons/snacksIcon.js';
import TherapeuticNutritionIcon from './navMenuIcons/therapeuticNutritionIcon.js';
import VeganIcon from './navMenuIcons/veganIcon.js';

export const iconsMap: Record<string, ComponentWithAs<'svg', IconProps>> = {
    desserts: DessertsIcon,
    drinks: DrinksIcon,
    firstCourses: FirstCoursesIcon,
    grills: GrilsIcon,
    kidsCourses: KidsCoursesIcon,
    national: NationalIcon,
    preparations: PreparationsIcon,
    salads: SaladsIcon,
    sauces: SaucesIcon,
    secondCourses: SecondCoursesIcon,
    snacks: SnacksIcon,
    therapeuticNutrition: TherapeuticNutritionIcon,
    vegan: VeganIcon,
};
