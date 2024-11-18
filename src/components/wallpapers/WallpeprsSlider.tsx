import { WallpapersData } from '@/src/utils/wallpaper-groups';
import clsx from 'clsx';
import { FC, ReactNode, useState } from 'react';
import { FreeMode, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ContactMe } from '../ui/ContactMe';
import { usePlaySound } from '@/src/hooks/usePlaySound';
import { useTranslation } from 'react-i18next';

export type WallpeprsSliderProps = {
  thumbsSwiper: any;
  setThumbsSwiper: any;
  wallpapers: WallpapersData[];
  swiperFirst: string;
  swiperSecond: string;
  children: string | ReactNode;
};

export const WallpeprsSlider: FC<WallpeprsSliderProps> = ({
  setThumbsSwiper,
  thumbsSwiper,
  wallpapers,
  swiperFirst,
  swiperSecond,
  children,
}) => {
  const [isOpenInfo, setOpenInfo] = useState<string | null>(null);
  const { playSound } = usePlaySound();
  const { t } = useTranslation();
  return (
    <div className="flex justify-center items-center flex-col max-w-[300px]">
      <h3 className="text-sand text-base mb-4 uppercase tracking-widest font-medium">
        {t(children as string)}
      </h3>
      <Swiper
        spaceBetween={10}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Thumbs]}
        className={swiperFirst}
      >
        {wallpapers.map((photo) => (
          <SwiperSlide key={photo.img}>
            <div className="relative">
              <button
                className="bg-mainBgOpacity flex gap-1 items-center justify-center w-9 h-9 rounded-full absolute top-2 right-2 z-20 border border-slate-900"
                onClick={() => {
                  if (isOpenInfo === photo.img) {
                    playSound();
                    setOpenInfo(null);
                  } else {
                    playSound();
                    setOpenInfo(photo.img);
                  }
                }}
              >
                <img
                  className="custom-image animate-pulse"
                  src={
                    isOpenInfo === photo.img
                      ? '/icons/close.svg'
                      : '/icons/dots.svg'
                  }
                  alt="logo"
                />
              </button>
              <img
                className="object-contain border border-sand border-opacity-40"
                src={photo.img}
              />
              <div
                className={clsx(
                  'bg-mainBgOpacity w-full flex flex-col justify-center gap-5 px-3 visible absolute top-0 left-0 h-full transition-all duration-500 ease-[cubic-bezier(0.68,-0.35,0.265,1.35)]',
                  isOpenInfo !== photo.img
                    ? 'invisible opacity-0 h-0 -translate-y-full'
                    : null,
                )}
              >
                <p className="text-sm text-sand">{t(photo.text)}</p>
                <ContactMe />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Thumbs]}
        className={swiperSecond}
      >
        {wallpapers.map((photo) => (
          <SwiperSlide
            className="cursor-pointer"
            key={photo.img}
            onClick={playSound}
          >
            <img
              className="object-contain border border-sand border-opacity-40"
              src={photo.img}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
