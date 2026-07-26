import Carousel from "./demo/AnimatedCarousel";
import ApplePreloader from "./demo/ApplePreloader";
import BackgroundImageParallex from "./demo/BackgroundImageParallex";
import BentoGrid from "./demo/BentoGrid";
import CardRevealEffect from "./demo/card-reveal-effect";
import CardsStack from "./demo/cards-stack";
import CurvedNavbar from "./demo/curved-navbar";
import ImageSliders from "./demo/ImageSliders";
import LiquidGlass from "./demo/LiquidGlass";
import MagneticEffects from "./demo/MagneticEffects";
import MouseFollower from "./demo/MouseFollower";
import SmoothCounter from "./demo/SmoothCounter";
import TextGradientOnhover from "./demo/TextGradientOnhover";
import DefaultComponent from "./demo/DefaultComponent";
import ToastDemo from "./demo/ToastDemo";
import StickyScrollDemo from "./demo/StickyScroll";

const componentMapper = {
  "animated-carousel": Carousel,
  "apple-preloader": ApplePreloader,
  "background-image-parallex": BackgroundImageParallex,
  "interactive-bento-grid": BentoGrid,
  "card-reveal-effect": CardRevealEffect,
  "cards-stack": CardsStack,
  "curved-navbar": CurvedNavbar,
  "image-slider": ImageSliders,
  "liquid-glass": LiquidGlass,
  "magnetic-effect": MagneticEffects,
  "mouse-follower": MouseFollower,
  "smooth-counter": SmoothCounter,
  "text-gradient-onhover": TextGradientOnhover,
  "stackable-toast": ToastDemo,
  "sticky-scroll": StickyScrollDemo,
};

export default componentMapper;
export { DefaultComponent };
