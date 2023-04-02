import animation from './circleAnimation.json';
import { useMediaQuery } from 'usehooks-ts';

const useViewModel = () => {
  const matches = useMediaQuery('(min-width: 1024px)');

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
  };

  return { defaultOptions, matches };
};

export default useViewModel;
