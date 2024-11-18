import { useScrollDown } from '@/src/hooks/useScrollDown';
import { useTranslation } from 'react-i18next';
import { SocialButtons } from './SocialButtons';

export const MainInfo = () => {
  const { t } = useTranslation();

  const { handleClick, ref } = useScrollDown();

  return (
    <div className="h-[100dvh] max-w-[880px] w-full mx-auto flex flex-col items-center justify-between">
      <span className="absolute bottom-0" ref={ref} />
      <div>
        <h1 className="pt-36 sm:pt-24 text-4xl sm:text-7xl font-medium tracking-wider text-center text-sand pointer-events-none">
          Olha Sausya
        </h1>
      </div>
      <div className="text-sand">
        <div className="mb-8">
          <p className="text-center mb-1 font-medium text-base pointer-events-none">
            {t('photographerFrom')}
          </p>
        </div>
        <div>
          <SocialButtons />

          <div className="w-full mt-12 pb-5">
            <span
              onClick={handleClick}
              className="text-white cursor-pointer text-center w-10 h-10 animate-pulse hover:animate-none rounded-full mx-auto flex items-center justify-center"
            >
              <img className="w-7 h-7" src="/icons/arrow-down.svg" alt="logo" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
