import { FC } from 'react';
import GridElement from './GridElement';
import styles from './grid-container.module.css';
import { collectionsList } from '@/src/utils/collections-group';

export const GridContainer: FC = () => {
  return (
    <div className={styles.container}>
      {collectionsList.map((img) => {
        return <GridElement key={img.name} img={img} />;
      })}
    </div>
  );
};
