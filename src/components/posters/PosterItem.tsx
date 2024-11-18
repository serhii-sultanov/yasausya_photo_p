import clsx from 'clsx';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { FC, useEffect, useRef } from 'react';
import styles from './posters.module.css';
import { useTranslation } from 'react-i18next';

type PosterItemProps = {
  img: string;
  text: string;
  onClick?: () => void;
};

export const PosterItem: FC<PosterItemProps> = ({ img, text, onClick }) => {
  const elementRef = useRef(null);
  const { t } = useTranslation();

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
      className="w-full flex items-center justify-center flex-col cursor-pointer"
      ref={elementRef}
      onClick={onClick}
    >
      <div className="max-w-[400px] flex-1 flex justify-center items-center">
        <div
          className={clsx('relative mb-4 p-8 border-2 border-sand', styles.div)}
        >
          <img className="w-full h-full object-cover" src={img} alt="img" />
        </div>
      </div>
      <div className="text-sand text-lg font-medium tracking-wider">
        {t(text)}
      </div>
    </div>
  );
};
