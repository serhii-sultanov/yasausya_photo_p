import { PosterItem } from '@/src/components/posters/PosterItem';
import { PosterModal } from '@/src/components/posters/PosterModal';
import { PostersContainer } from '@/src/components/posters/PostersContainer';
import { PageTitle } from '@/src/components/ui/PageTitle';
import { usePlaySound } from '@/src/hooks/usePlaySound';
import { postersGroup } from '@/src/utils/posters-group';
import { FC, useState } from 'react';

const Posters: FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedPosterIndex, setSelectedPosterIndex] = useState(0);
  const { playSound } = usePlaySound();

  const openModal = (index: number) => {
    setSelectedPosterIndex(index);
    setModalIsOpen(true);
    playSound();
  };

  const closeModal = () => {
    setModalIsOpen(false);
    playSound();
  };

  return (
    <div>
      <PageTitle title="posters" text={'postersSubtitle'} />
      <PostersContainer>
        {postersGroup.map(({ img, text }, idx) => (
          <PosterItem
            onClick={() => openModal(idx)}
            key={idx}
            img={img}
            text={text}
          />
        ))}
      </PostersContainer>
      {modalIsOpen ? (
        <PosterModal
          onRequestClose={() => closeModal()}
          selectedPosterIndex={selectedPosterIndex}
        />
      ) : null}
    </div>
  );
};

export default Posters;
