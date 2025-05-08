export const formatImageUrl = (url?: string): string | undefined => {
    if (!url) return undefined;
    return `${import.meta.env.VITE_API_IMG_URL}${url}`;
};

export const formatEntityWithImages = <
    T extends {
        image?: string;
        icon?: string;
        steps?: { image?: string }[];
    },
>(
    entity: T,
): T => {
    const formattedSteps = entity.steps?.map((step) => ({
        ...step,
        ...(step.image && { image: formatImageUrl(step.image) }),
    }));

    return {
        ...entity,
        ...(entity.image && { image: formatImageUrl(entity.image) }),
        ...(entity.icon && { icon: formatImageUrl(entity.icon) }),
        ...(formattedSteps && { steps: formattedSteps }),
    };
};
