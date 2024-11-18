import { FC, ReactNode } from 'react';
import styles from './posters.module.css';
import clsx from 'clsx';

type PostersContainerProps = {
  children: ReactNode;
};

export const PostersContainer: FC<PostersContainerProps> = ({ children }) => {
  return (
    <div className={clsx(styles.container, 'border-t border-sand')}>
      {children}
    </div>
  );
};
