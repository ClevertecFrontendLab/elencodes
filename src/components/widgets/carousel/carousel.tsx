import 'swiper/css';
import 'swiper/css/navigation';

import { Box, IconButton, useBreakpointValue } from '@chakra-ui/react';
import { ReactNode, useEffect, useRef, useState } from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';

import { DATA_TEST_ID } from '~/constants/data-test-ids';
import { ArrowLeftIcon } from '~/icons/swipe-section-icons/arrow-left-icon';
import { ArrowRightIcon } from '~/icons/swipe-section-icons/arrow-right-icon';

type CarouselProps = {
    children: ReactNode[];
};

export const Carousel = ({ children }: CarouselProps) => {
    const swiperRef = useRef<SwiperRef>(null);
    const [isReady, setIsReady] = useState(false);

    const cardWidth = useBreakpointValue({
        base: '158px',
        md: '277px',
        xl: '318px',
    });

    useEffect(() => {
        const swiper = swiperRef.current?.swiper;
        if (!swiper) return;

        const timeout = setTimeout(() => {
            swiper.update();
            swiper.slideToLoop(0); // очень важно, если loop: true
            setIsReady(true);
        }, 100);

        return () => clearTimeout(timeout);
    }, [children]);

    return (
        <Box position='relative'>
            <IconButton
                className='custom-prev'
                display={{ base: 'none', md: 'block' }}
                aria-label='Previous slide'
                data-test-id={DATA_TEST_ID.CAROUSEL_BACK}
                icon={<ArrowLeftIcon boxSize={{ base: '20px', xxl: '24px' }} color='white' />}
                position='absolute'
                fontSize='20px'
                left='0'
                top='40%'
                transform='translateY(-50%)'
                zIndex='999'
                bg='black'
                boxShadow='md'
                borderRadius={{ base: 0, md: '6px' }}
                _hover={{ bg: 'gray.700' }}
                isDisabled={!isReady}
            />
            <IconButton
                className='custom-next'
                display={{ base: 'none', md: 'block' }}
                aria-label='Next slide'
                data-test-id={DATA_TEST_ID.CAROUSEL_FORWARD}
                icon={<ArrowRightIcon boxSize={{ base: '20px', xxl: '24px' }} color='white' />}
                position='absolute'
                fontSize='20px'
                right='0'
                top='40%'
                transform='translateY(-50%)'
                zIndex='999'
                bg='black'
                boxShadow='md'
                borderRadius={{ base: 0, md: '6px' }}
                _hover={{ bg: 'gray.700' }}
                isDisabled={!isReady}
            />
            <Swiper
                data-test-id={DATA_TEST_ID.CAROUSEL}
                ref={swiperRef}
                modules={[Navigation]}
                watchSlidesProgress={true}
                navigation={{
                    nextEl: '.custom-next',
                    prevEl: '.custom-prev',
                }}
                observer={true}
                observeParents={true}
                initialSlide={0}
                loop={true}
                speed={100}
                slidesPerGroup={1}
                slidesPerView={4}
                breakpoints={{
                    0: {
                        spaceBetween: 8,
                        slidesPerView: 2,
                    },
                    766: {
                        spaceBetween: 12,
                        slidesPerView: 4,
                    },
                    1430: {
                        spaceBetween: 24,
                        slidesPerView: 3,
                    },
                    1915: {
                        spaceBetween: 31,
                        slidesPerView: 4,
                    },
                }}
            >
                {children.length > 0 &&
                    children.map((child, idx) => (
                        <SwiperSlide
                            style={{
                                maxWidth: cardWidth,
                                height: 'auto',
                            }}
                            key={idx}
                            data-test-id={`${DATA_TEST_ID.CAROUSEL_CARD}${idx}`}
                        >
                            {child}
                        </SwiperSlide>
                    ))}
            </Swiper>
        </Box>
    );
};
