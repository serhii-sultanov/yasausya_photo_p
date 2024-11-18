import { PageTitle } from '@/src/components/ui/PageTitle';
import { WallpeprsSlider } from '@/src/components/wallpapers/WallpeprsSlider';
import {
  kolyuchkaWallpapers,
  lightWallpapers,
  nightWallpapers,
  summerWallpapers,
} from '@/src/utils/wallpaper-groups';
import { FC, useState } from 'react';

const Wallpapers: FC = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const [thumbsSwiper2, setThumbsSwiper2] = useState<any>(null);
  const [thumbsSwiper3, setThumbsSwiper3] = useState<any>(null);
  const [thumbsSwiper4, setThumbsSwiper4] = useState<any>(null);

  return (
    <div className="pb-10">
      <PageTitle text="wallpapersSubtitle" title="wallpapers" />
      <div className="grid gap-y-20 grid-cols-1 md:grid-cols-2 gap-4 max-w-[992px] w-full mx-auto px-5 place-items-center pt-8 border-t border-sand">
        <WallpeprsSlider
          setThumbsSwiper={setThumbsSwiper3}
          swiperFirst="mySwiper6"
          swiperSecond="mySwiper5"
          thumbsSwiper={thumbsSwiper3}
          wallpapers={nightWallpapers}
          children={'night'}
        />
        <WallpeprsSlider
          setThumbsSwiper={setThumbsSwiper2}
          swiperFirst="mySwiper4"
          swiperSecond="mySwiper3"
          thumbsSwiper={thumbsSwiper2}
          wallpapers={summerWallpapers}
          children={'summer'}
        />
        <WallpeprsSlider
          setThumbsSwiper={setThumbsSwiper}
          swiperFirst="mySwiper2"
          swiperSecond="mySwiper"
          thumbsSwiper={thumbsSwiper}
          wallpapers={lightWallpapers}
          children={'psheno'}
        />
        <WallpeprsSlider
          setThumbsSwiper={setThumbsSwiper4}
          swiperFirst="mySwiper8"
          swiperSecond="mySwiper7"
          thumbsSwiper={thumbsSwiper4}
          wallpapers={kolyuchkaWallpapers}
          children={'kolyuchki'}
        />
      </div>
    </div>
  );
};

export default Wallpapers;
