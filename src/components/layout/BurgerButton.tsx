import clsx from 'clsx';
import { type FC } from 'react';

type BurgerButtonProps = {
  isOpenNav: boolean;
  toggleBurger: () => void;
};

export const BurgerButton: FC<BurgerButtonProps> = ({
  isOpenNav,
  toggleBurger,
}) => {
  return (
    <button className="cursor-pointer z-20" onClick={toggleBurger}>
      <div
        className={clsx(
          'flex flex-col gap-1.5 transition-all duration-700 ease-[cubic-bezier(0.68,-0.35,0.265,1.35)]',
          isOpenNav ? 'rotate-180' : 'burger',
        )}
      >
        <div
          className={clsx(
            'w-6 h-0.5 bg-sand transition-all delay-200',
            isOpenNav
              ? 'rotate-45 translate-y-[8px] duration-300'
              : 'duration-100',
          )}
        ></div>
        <div
          className={clsx(
            'w-6 h-0.5 transition-all delay-200 duration-100',
            isOpenNav ? 'bg-transparent' : 'bg-sand',
          )}
        ></div>
        <div
          className={clsx(
            'w-6 h-0.5 bg-sand transition-all delay-200',
            isOpenNav
              ? '-rotate-45 -translate-y-[8px] duration-300'
              : 'duration-100',
          )}
        ></div>
      </div>
    </button>
  );
};
