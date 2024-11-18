import { postersGroup } from '@/src/utils/posters-group';
import type { FC } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { ContactMe } from '../ui/ContactMe';
import { useTranslation } from 'react-i18next';

export type PosterModalProps = {
  onRequestClose: () => void;
  selectedPosterIndex: number;
};

export const PosterModal: FC<PosterModalProps> = ({
  onRequestClose,
  selectedPosterIndex,
}) => {
  const { t } = useTranslation();
  const settings = {
    infinite: true,
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: selectedPosterIndex,
  };
  return (
    <div className="w-full h-[100dvh] fixed z-20 bg-mainBg inset-0 flex justify-center items-center overflow-hidden">
      <div className="max-w-[992px] w-full mx-auto relative max-h-screen overflow-y-auto overflow-x-hidden sm:overflow-visible pt-8">
        <button
          onClick={onRequestClose}
          className="absolute top-14 right-4 text-sand font-medium z-10"
        >
          <img className="w-7 h-7" src="/icons/close.svg" alt="close" />
        </button>
        <Slider {...settings}>
          {postersGroup.map(({ img, text, name }, idx: number) => (
            <div key={idx} className="relative">
              <div className="block gap-4 md:flex px-5 my-16">
                <div className="w-full p-4 border border-sand h-[400px] mb-4 md:ml-5">
                  <img
                    className="w-full h-full object-contain object-center mx-auto"
                    src={img}
                    alt="photo"
                  />
                </div>
                <div className="max-w-[500px] sm:mx-auto w-full flex flex-col justify-center items-start">
                  <h3 className="text-sand font-medium text-xl mb-3 w-full text-center md:text-left">
                    {t(text)}
                  </h3>
                  <p className="text-sand text-sm mb-10 md:w-11/12 w-full text-center md:text-left">
                    {t(name)}
                  </p>
                  <div className="w-full flex md:justify-start justify-center">
                    <ContactMe />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
