import { useEffect, useState } from 'react';

export const usePlaySound = () => {
  const [audio, setAudio] = useState<any>(null);

  const playSound = () => {
    if (audio) {
      audio.currentTime = 0;
      audio.play();
    }
  };

  useEffect(() => {
    setAudio(new Audio('/sounds/click.mp3'));
  }, []);

  return {
    playSound,
  };
};
