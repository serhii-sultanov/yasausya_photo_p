import type { FC } from 'react';
import { useTranslation } from 'react-i18next';

export const Footer: FC = () => {
  const { t } = useTranslation();
  const data = new Date();
  return (
    <footer className="border-t border-sand border-opacity-40 relative z-20 bg-mainBg py-5">
      <div className="max-w-[1320px] mx-auto w-full px-5 flex items-center justify-between max-[768px]:flex-col max-[768px]:gap-2">
        <span className="text-sand text-sm text-center">
          {t('copyright')} {data.getFullYear()}
        </span>
        <a
          className="flex items-center"
          target="_blank"
          href="https://www.fiverr.com/nextechcrew"
        >
          <span className="text-[#ebd7db] text-sm font-semibold">
            {t('developed')}
          </span>
          <img
            className="invert w-[120px]"
            src="/pictures/nextech-logo.png"
            alt=""
          />
        </a>
      </div>
    </footer>
  );
};
