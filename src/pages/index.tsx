import { type FC } from 'react';
import { MainInfo } from '../components/header/MainInfo';
import { GridContainer } from '../components/main/GridContainer';
import { useScrollDown } from '../hooks/useScrollDown';

const Home: FC = () => {
  return (
    <>
      <div className='h-screen bg-[url("/pictures/main.webp")] bg-no-repeat bg-cover bg-center w-full'>
        <MainInfo />
      </div>
      <GridContainer />
    </>
  );
};
export default Home;
