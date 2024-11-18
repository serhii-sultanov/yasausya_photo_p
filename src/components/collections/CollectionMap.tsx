import { FC } from 'react';
import type { CollectionsGroup } from '@/src/utils/collections-group';
import styles from './collections.module.css';

export type CollectionProps = {
  collection: CollectionsGroup;
};

export const CollectionMap: FC<CollectionProps> = ({ collection }) => {
  return (
    <div className="max-w-[992px] mx-auto w-full px-3.5 border-t border-sand pt-16">
      {collection ? (
        <>
          <div className={styles.container}>
            {collection.top.map(({ img, style }, idx) => (
              <div key={idx} className={style}>
                <img
                  className="w-full h-full object-cover border-sand border border-opacity-40"
                  src={img}
                  alt="collection_img"
                />
              </div>
            ))}
          </div>
          <div className={styles.container2}>
            {collection.bottom.map(({ img, style }, idx) => (
              <div key={idx} className={style}>
                <img
                  className="w-full h-full object-cover border-sand border border-opacity-40"
                  src={img}
                  alt="collection_img"
                />
              </div>
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
};
