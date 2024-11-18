import { usePlaySound } from '@/src/hooks/usePlaySound';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import { useState, type FC, useEffect } from 'react';
import { BurgerButton } from './BurgerButton';
import { LangButtonts } from './LangButtonts';
import { NavMenu } from './NavMenu';

export const Header: FC = () => {
  const [isOpenNav, setToggleNav] = useState(false);
  const { playSound } = usePlaySound();
  const { route } = useRouter();

  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const toggleNav = () => {
    setToggleNav(!isOpenNav);
    playSound();
  };

  return (
    <header
      className={clsx(
        'px-4 py-4 fixed w-full top-0 z-30 transition-all duration-500',
        route === '/' ? null : 'bg-mainBg bg-opacity-100',
        route === '/' && isVisible
          ? 'bg-mainBg bg-opacity-90 hover:bg-opacity-100'
          : 'bg-opacity-0',
      )}
    >
      <div className="flex items-center justify-end gap-8">
        <div className="text-white z-20">
          <LangButtonts />
        </div>
        <BurgerButton isOpenNav={isOpenNav} toggleBurger={toggleNav} />
      </div>
      <NavMenu isOpenNav={isOpenNav} closeNav={toggleNav} />
    </header>
  );
};
