import { Button, IconButton } from '@chakra-ui/react';

import { TOAST_MESSAGES } from '~/constants/toast-messages.ts';
import { useCustomToast } from '~/hooks/use-custom-toast.tsx';
import { useScreenSize } from '~/hooks/use-screen-size.tsx';
import { BookmarkIcon } from '~/icons/counter-icons/bookmark-icon';
import { useBookmarkRecipeMutation } from '~/query/services/recipes/recipes-api.ts';
import { isRTKQueryError } from '~/utils/is-rtk-error.ts';

type SaveButtonProps = {
    recipeId: string;
};

const { ServerErrorToast } = TOAST_MESSAGES;

export const SaveButton = ({ recipeId }: SaveButtonProps) => {
    const { isTablet } = useScreenSize();
    const { toast } = useCustomToast();
    const [bookmarkRecipe] = useBookmarkRecipeMutation();

    const handleBookmark = async () => {
        try {
            await bookmarkRecipe(recipeId).unwrap();
        } catch (error: unknown) {
            if (isRTKQueryError(error)) {
                toast(ServerErrorToast);
            }
        }
    };

    return isTablet ? (
        <IconButton
            onClick={handleBookmark}
            aria-label='Сохранить'
            icon={<BookmarkIcon />}
            size='xs'
            variant='outline'
        />
    ) : (
        <Button onClick={handleBookmark} size='sm' variant='outline' leftIcon={<BookmarkIcon />}>
            Сохранить
        </Button>
    );
};
