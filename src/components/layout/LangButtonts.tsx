import { usePlaySound } from '@/src/hooks/usePlaySound';
import i18n from '@/src/utils/i18next';
import clsx from 'clsx';
import { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

export const LangButtonts: FC = () => {
  const { playSound } = usePlaySound();
  const { t } = useTranslation();

  const changeLanguage = useCallback(
    (lang: string) => {
      i18n.changeLanguage(lang);
      playSound();
    },
    [playSound]
  );
  return (
    <div>
      <button
        className={clsx(
          i18n.language === 'ua' ? 'text-langBtnActive' : 'text-sand',
          'px-1 font-medium'
        )}
        onClick={() => changeLanguage('ua')}
      >
        {t('ua')}
      </button>
      <span className='text-sand'>|</span>
      <button
        className={clsx(
          i18n.language === 'en' ? 'text-langBtnActive' : 'text-sand',
          'px-1 font-medium'
        )}
        onClick={() => changeLanguage('en')}
      >
        {t('en')}
      </button>
      <span className='text-sand'>|</span>

      <button
        className={clsx(
          i18n.language === 'es' ? 'text-langBtnActive' : 'text-sand',
          'px-1 font-medium'
        )}
        onClick={() => changeLanguage('es')}
      >
        {t('es')}
      </button>
    </div>
  );
};
