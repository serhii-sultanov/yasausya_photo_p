import { FC } from 'react';
import type { Collection } from '@/src/utils/collections-group';
import styles from './high-photo-collection.module.css';

export type CollectionProps = {
  collection: Collection[];
};

export const HighPhotoCollection: FC<CollectionProps> = ({ collection }) => {
  return (
    <div className="max-w-[992px] mx-auto w-full px-3.5 border-t border-sand pt-16">
      <div className={styles.container}>
        {collection.map(({ img }) => (
          <div key={img} className={styles.div}>
            <img
              className="w-full h-full object-cover border-sand border border-opacity-40"
              src={img}
              alt="collection_img"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
