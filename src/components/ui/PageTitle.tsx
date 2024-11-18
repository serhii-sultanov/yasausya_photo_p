import { FC } from 'react';
import { Logo } from '../logo/Logo';
import { useTranslation } from 'react-i18next';

export type PageTitleProps = {
  title: string;
  text?: string;
};

export const PageTitle: FC<PageTitleProps> = ({ title, text }) => {
  const { t } = useTranslation();
  return (
    <>
      <Logo />
      <div className="max-w-[800px] w-full mx-auto px-5 pt-16 sm:pt-24 text-center mb-12 sm:mb-24">
        {text ? (
          <p className="text-sand mb-12 sm:mb-24 text-base sm:text-lg pointer-events-none">
            {t(text as string)}
          </p>
        ) : null}
        <h1 className="text-sand font-medium text-4xl tracking-wide pointer-events-none capitalize">
          {t(title as string)}
        </h1>
      </div>
    </>
  );
};
