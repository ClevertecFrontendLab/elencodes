import 'swiper/swiper-bundle.css';

import { Box, IconButton, useBreakpointValue } from '@chakra-ui/react';
import { ReactNode, useEffect, useRef, useState } from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper/types';

import { DATA_TEST_ID } from '~/constants/data-test-ids';
import { ArrowLeftIcon } from '~/icons/swipe-section-icons/arrow-left-icon';
import { ArrowRightIcon } from '~/icons/swipe-section-icons/arrow-right-icon';

type CarouselProps = {
    children: ReactNode[];
};

type SwiperWithInit = SwiperType & { initialized: boolean };

export const Carousel = ({ children }: CarouselProps) => {
    const swiperRef = useRef<SwiperRef>(null);
    const [isReady, setIsReady] = useState(false);

    const cardWidth = useBreakpointValue({
        base: '158px',
        md: '277px',
        xl: '318px',
    });

    useEffect(() => {
        const swiper = swiperRef.current?.swiper as SwiperWithInit;
        if (!swiper) return;

        const interval = setInterval(() => {
            if (swiper.initialized && swiper.slides.length > 0) {
                swiper.update();
                swiper.slideToLoop(0, 0);
                setIsReady(true);
                clearInterval(interval);
            }
        }, 50);

        return () => clearInterval(interval);
    }, [children]);

    const scrollLeft = () => {
        if (isReady) {
            swiperRef.current?.swiper.slidePrev();
        }
    };

    const scrollRight = () => {
        if (isReady) {
            swiperRef.current?.swiper.slideNext();
        }
    };

    return (
        <Box
            width={{ base: '95%', sm: '100%' }}
            px={{ base: 0, xl: '10px' }}
            position={{ base: 'absolute', sm: 'relative' }}
        >
            <Swiper
                data-test-id={DATA_TEST_ID.CAROUSEL}
                ref={swiperRef}
                modules={[Navigation]}
                loop={true}
                navigation={false}
                speed={0}
                breakpoints={{
                    350: {
                        spaceBetween: 12,
                        slidesPerView: 2,
                    },
                    1560: {
                        spaceBetween: 24,
                        slidesPerView: 5,
                    },
                    1915: {
                        spaceBetween: 24,
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
                                paddingBottom: '5px',
                            }}
                            key={idx}
                            data-test-id={`${DATA_TEST_ID.CAROUSEL_CARD}${idx}`}
                        >
                            {child}
                        </SwiperSlide>
                    ))}
            </Swiper>
            <>
                <IconButton
                    display={{ base: 'none', md: 'block' }}
                    aria-label='Scroll left'
                    data-test-id={DATA_TEST_ID.CAROUSEL_BACK}
                    icon={<ArrowLeftIcon boxSize={{ base: '20px', xxl: '24px' }} color='white' />}
                    onClick={scrollLeft}
                    position='absolute'
                    fontSize='20px'
                    left='0'
                    top='40%'
                    transform='translateY(-50%)'
                    zIndex='1'
                    bg='black'
                    boxShadow='md'
                    borderRadius={{ base: 0, md: '6px' }}
                    _hover={{ bg: 'gray.700' }}
                />
                <IconButton
                    display={{ base: 'none', md: 'block' }}
                    aria-label='Scroll right'
                    data-test-id={DATA_TEST_ID.CAROUSEL_FORWARD}
                    icon={<ArrowRightIcon boxSize={{ base: '20px', xxl: '24px' }} color='white' />}
                    onClick={scrollRight}
                    position='absolute'
                    fontSize='20px'
                    right='0'
                    top='40%'
                    transform='translateY(-50%)'
                    zIndex='1'
                    bg='black'
                    boxShadow='md'
                    borderRadius={{ base: 0, md: '6px' }}
                    _hover={{ bg: 'gray.700' }}
                />
            </>
        </Box>
    );
};
