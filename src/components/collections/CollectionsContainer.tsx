import {
  eightCollection,
  fiveCollection,
  fourCollection,
  morningCollection,
  ninethCollection,
  secondCollection,
  seventhCollection,
  sixCollection,
  tenthCollection,
  thirdCollection,
} from '@/src/utils/collections-group';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { PageTitle } from '../ui/PageTitle';
import { CollectionMap } from './CollectionMap';
import { HighPhotoCollection } from './HighPhotoCollection';

export const CollectionsContainer: FC = () => {
  const {
    query: { name },
  } = useRouter();
  return (
    <div className="pb-10">
      <PageTitle title={name as string} />
      {name === 'firstCollection' ? (
        <CollectionMap collection={morningCollection} />
      ) : null}
      {name === 'secondCollection' ? (
        <CollectionMap collection={secondCollection} />
      ) : null}
      {name === 'thirdCollection' ? (
        <CollectionMap collection={thirdCollection} />
      ) : null}
      {name === 'fourthCollection' ? (
        <CollectionMap collection={fourCollection} />
      ) : null}
      {name === 'fifthCollection' ? (
        <CollectionMap collection={fiveCollection} />
      ) : null}
      {name === 'sixCollcetion' ? (
        <HighPhotoCollection collection={sixCollection} />
      ) : null}
      {name === 'seventhCollection' ? (
        <HighPhotoCollection collection={seventhCollection} />
      ) : null}
      {name === 'eightCollection' ? (
        <CollectionMap collection={eightCollection} />
      ) : null}
      {name === 'ninethCollection' ? (
        <HighPhotoCollection collection={ninethCollection} />
      ) : null}
      {name === 'tenthCollection' ? (
        <HighPhotoCollection collection={tenthCollection} />
      ) : null}
    </div>
  );
};
