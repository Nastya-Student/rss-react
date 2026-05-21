import type { JSX } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { AboutBlock } from '../components/AboutBlock';

export const AboutPage = (): JSX.Element => {
  return (
    <>
      <Header></Header>
      <main>
        <AboutBlock></AboutBlock>
      </main>
      <Footer></Footer>
    </>
  );
};
