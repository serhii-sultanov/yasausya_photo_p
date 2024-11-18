import React, { FC } from 'react';
import { Josefin_Sans, Italianno } from 'next/font/google';
import clsx from 'clsx';
import Link from 'next/link';
import { usePlaySound } from '@/src/hooks/usePlaySound';

const josefinSans = Josefin_Sans({ subsets: ['latin'] });
const italianno = Italianno({ weight: '400', subsets: ['latin'] });

export const Logo: FC = () => {
  const { playSound } = usePlaySound();
  return (
    <Link
      href={'/'}
      onClick={playSound}
      className="pt-16 block w-fit m-auto hover:opacity-90 transition-all duration-300 group relative z-20"
    >
      <div className="relative flex flex-col justify-center pt-8 items-center w-28">
        <span
          className={clsx(josefinSans.className, 'text-sand tracking-[.23em]')}
        >
          yasausya
        </span>
        <span
          className={clsx(
            italianno.className,
            'text-sand ml-4 -my-2 -skew-x-[17deg] tracking-wide',
          )}
        >
          photo
        </span>
        <div className="absolute -top-[12px] left-[20px] w-24 h-24 rotate-45 group-hover:rotate-0 group-hover:left-[8px] transition-all duration-500">
          {' '}
          <img src="/icons/arc.svg" alt="arc" />
        </div>
        <div className="absolute top-[2px] left-6 w-16 h-16 group-hover:rotate-45 group-hover:left-[32px] group-hover:top-[20px] group-hover:w-10 transition-all duration-500">
          {' '}
          <img src="/icons/arc.svg" alt="arc" />
        </div>
        <div className="absolute top-[28px] right-[26px] w-16 h-16 rotate-180 group-hover:rotate-[230deg] group-hover:left-[32px] group-hover:top-[20px] group-hover:w-10 transition-all duration-500">
          {' '}
          <img src="/icons/arc.svg" alt="arc" />
        </div>
        <div className="absolute top-[10px] -left-[8px] w-24 h-24 rotate-[230deg] group-hover:rotate-180 group-hover:left-[4px] group-hover:top-[12px] transition-all duration-500">
          {' '}
          <img src="/icons/arc.svg" alt="arc" />
        </div>
      </div>
    </Link>
  );
};
