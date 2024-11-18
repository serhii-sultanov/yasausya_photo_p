import { useRef } from 'react';
import { usePlaySound } from './usePlaySound';

export const useScrollDown = () => {
  const ref = useRef(null);
  const { playSound } = usePlaySound();

  const handleClick = () => {
    //@ts-ignore
    ref.current?.scrollIntoView({ behavior: 'smooth' });
    playSound();
  };

  return { handleClick, ref };
};
