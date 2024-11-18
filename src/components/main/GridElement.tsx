import clsx from 'clsx';
import { FC, useEffect, useRef } from 'react';
import styles from './grid-container.module.css';
import { usePlaySound } from '@/src/hooks/usePlaySound';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useRouter } from 'next/router';
import type { CollectionList } from '@/src/utils/collections-group';
import { useTranslation } from 'react-i18next';

type GridElementProps = {
  img: CollectionList;
};

const GridElement: FC<GridElementProps> = ({ img: { img, name } }) => {
  const { t } = useTranslation();
  const { playSound } = usePlaySound();
  const elementRef = useRef(null);
  const { push } = useRouter();

  const handleClick = () => {
    playSound();
    push(`/collections/${name}`);
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.create({
      trigger: elementRef.current,
      start: 'top 100%',
      end: 'bottom 40%',
      scrub: 1,
      onEnter: () => {
        gsap.fromTo(
          elementRef.current,
          { autoAlpha: 0, y: 50 },
          { autoAlpha: 1, y: 0, ease: 'power3.out', duration: 3 },
        );
      },
    });
    return () => ScrollTrigger.killAll();
  }, []);
  return (
    <div
      ref={elementRef}
      onClick={handleClick}
      className={clsx(
        styles.div,
        'relative overflow-hidden cursor-pointer after:absolute after:w-full after:h-full after:bg-mainBg after:inset-0 after:bg-opacity-50 hover:after:opacity-0 hover:after:transition-all hover:after:duration-500 after:transition-all after:duration-500',
      )}
    >
      <img src={img} alt={name} />
      <p className="text-sand absolute top-0 w-full px-5 z-10 text-center text-xl lg:text-2xl  uppercase transition-all duration-500 h-full flex justify-center items-center tracking-wide">
        {t(name)}
      </p>
    </div>
  );
};

export default GridElement;
