import { usePlaySound } from '@/src/hooks/usePlaySound';
import { type FC } from 'react';

export const SocialButtons: FC = () => {
  const { playSound } = usePlaySound();

  return (
    <div className="flex items-center justify-center gap-3">
      <a
        onClick={playSound}
        className="border-sand mx-1 hover:bg-sand hover:bg-opacity-50 transition-all duration-150 w-10 h-10 rounded-full flex items-center justify-center group relative"
        href={'mailto:olga.sausya@gmail.com'}
        target="_blank"
      >
        <img
          className="w-6 h-6 custom-image"
          src="/icons/mail-logo.svg"
          alt="email"
        />
        <span className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 bg-mainBgOpacity p-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none text-sand">
          olga.sausya@gmail.com
        </span>
      </a>
      <a
        onClick={playSound}
        className="border-sand mx-1 hover:bg-sand hover:bg-opacity-50 transition-all duration-150 w-10 h-10 rounded-full flex items-center justify-center"
        href={'https://instagram.com/yasausya?igshid=MzRlODBiNWFlZA=='}
        target="_blank"
      >
        <img
          className="w-6 h-6 custom-image"
          src="/icons/instagram-logo.svg"
          alt="instagram"
        />
      </a>
      <a
        onClick={playSound}
        className="border-sand hover:bg-sand hover:bg-opacity-50 transition-all duration-150 p-1 rounded-full flex items-center justify-center"
        href={'https://t.me/sunnyze'}
        target="_blank"
      >
        <img
          className="w-8 h-8 -ml-0.5 custom-image"
          src="/icons/telegram-logo.svg"
          alt="telegram"
        />
      </a>
      <a
        onClick={playSound}
        className="border-sand mx-1 hover:bg-sand hover:bg-opacity-50 transition-all duration-150 w-10 h-10 rounded-full flex items-center justify-center"
        href={'https://wa.me/+380509327131'}
        target="_blank"
      >
        <img
          className="w-6 h-6 custom-image"
          src="/icons/whatsapp-logo.svg"
          alt="whatsapp"
        />
      </a>
    </div>
  );
};
