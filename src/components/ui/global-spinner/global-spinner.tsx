import { Modal, ModalContent, ModalOverlay } from '@chakra-ui/icons';

import { Loader } from '~/components/ui/loader/loader.tsx';
import { APP_LOADER } from '~/constants/data-test-ids';

type GlobalSpinnerProps = {
    isOpen: boolean;
};

export const GlobalSpinner = ({ isOpen }: GlobalSpinnerProps) => (
    <Modal isOpen={isOpen} onClose={() => {}} closeOnEsc={false} isCentered={true}>
        <ModalOverlay
            bgColor='rgba(0, 0, 0, 0.16)'
            backdropFilter='blur(3px)'
            pointerEvents='none'
        />
        <ModalContent bg='transparent' border='none' shadow='none' alignItems='center'>
            <Loader dataTestId={APP_LOADER} />
        </ModalContent>
    </Modal>
);
