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

    const slidesPerView =
        useBreakpointValue({
            base: 2,
            md: 4,
            xl: 4,
        }) ?? 4;

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (swiperRef.current?.swiper) {
                swiperRef.current.swiper.update();
                swiperRef.current.swiper.slideToLoop(0);
                setIsReady(true);
            }
        }, 100);

        return () => clearTimeout(timeout);
    }, [children]);

    const scrollLeft = () => {
        const swiper = swiperRef.current?.swiper;
        if (!swiper || !isReady) return;

        if (swiper.realIndex === 0) {
            // Переход на последний слайд
            const lastIndex = Math.max(children.length - slidesPerView, 0);
            swiper.slideTo(lastIndex);
        } else {
            swiper.slidePrev();
        }
    };

    const scrollRight = () => {
        const swiper = swiperRef.current?.swiper;
        if (!swiper || !isReady) return;

        const lastIndex = Math.max(children.length - slidesPerView, 0);
        if (swiper.realIndex >= lastIndex) {
            swiper.slideTo(0);
        } else {
            swiper.slideNext();
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
                navigation={false}
                speed={0}
                loop={false}
                breakpoints={{
                    350: {
                        spaceBetween: 8,
                        slidesPerView: 2,
                    },
                    766: {
                        spaceBetween: 12,
                        slidesPerView: 4,
                    },
                    1430: {
                        spaceBetween: 42,
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
