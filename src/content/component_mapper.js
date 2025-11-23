import Carousel from './demo/AnimatedCarousel';
import ApplePreloader from './demo/ApplePreloader';
import BackgroundImageParallex from './demo/BackgroundImageParallex';
import CardRevealEffect from './demo/CardRevealEffect';
import CardsStack from './demo/CardsStack';
import CurvedNavbar from './demo/CurvedNavbar';
import ImageSliders from './demo/ImageSliders';
import MagneticEffects from './demo/MagneticEffects';
import MouseFollower from './demo/MouseFollower';
import TextGradientOnhover from './demo/TextGradientOnhover';
import DefaultComponent from './demo/DefaultComponent';

const componentMapper = {
    'animated-carousel': Carousel,
    'apple-preloader': ApplePreloader,
    'background-image-parallex': BackgroundImageParallex,
    'card-reveal-effect': CardRevealEffect,
    'cards-stack': CardsStack,
    'curved-navbar': CurvedNavbar,
    'image-slider': ImageSliders,
    'magnetic-effect': MagneticEffects,
    'mouse-follower': MouseFollower,
    'text-gradient-onhover': TextGradientOnhover
}

export default componentMapper;
export { DefaultComponent };