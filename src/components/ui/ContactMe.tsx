import { FC, useState } from 'react';
import { SocialButtons } from '../header/SocialButtons';
import { usePlaySound } from '@/src/hooks/usePlaySound';
import { useTranslation } from 'react-i18next';

export const ContactMe: FC = () => {
  const { t } = useTranslation();
  const { playSound } = usePlaySound();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const hanldeOpen = () => {
    playSound();
    setIsOpen(true);
  };

  return (
    <div className="h-[40px]">
      {isOpen ? (
        <SocialButtons />
      ) : (
        <button
          onClick={hanldeOpen}
          className="px-2.5 py-1.5 border border-sand text-sand hover:text-mainBg hover:border-mainBg hover:bg-sand hover:font-medium transition-all duration-200"
        >
          {t('contactme')}
        </button>
      )}
    </div>
  );
};
