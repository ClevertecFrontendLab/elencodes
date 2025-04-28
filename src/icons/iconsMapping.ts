import { ComponentWithAs, IconProps } from '@chakra-ui/react';

import DessertsIcon from './NavMenuIcons/DessertsIcon.tsx';
import DrinksIcon from './NavMenuIcons/DrinksIcon.tsx';
import FirstCoursesIcon from './NavMenuIcons/FirstCoursesIcon.tsx';
import GrilsIcon from './NavMenuIcons/GrilsIcon.tsx';
import KidsCoursesIcon from './NavMenuIcons/KidsCoursesIcon.tsx';
import NationalIcon from './NavMenuIcons/NationalIcon.tsx';
import PreparationsIcon from './NavMenuIcons/PreparationsIcon.tsx';
import SaladsIcon from './NavMenuIcons/SaladsIcon.tsx';
import SaucesIcon from './NavMenuIcons/SaucesIcon.tsx';
import SecondCoursesIcon from './NavMenuIcons/SecondCoursesIcon.tsx';
import SnacksIcon from './NavMenuIcons/SnacksIcon.tsx';
import TherapeuticNutritionIcon from './NavMenuIcons/TherapeuticNutritionIcon.tsx';
import VeganIcon from './NavMenuIcons/VeganIcon.tsx';

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
