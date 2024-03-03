import { useRouter } from 'next/router';
import type { GetStaticProps, InferGetStaticPropsType } from 'next';

import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import i18nextConfig from '../next-i18next.config';
import { AboutSection } from 'components/AboutSection';
import { ServiceSection } from 'components/ServiceSection';
import { ContactSection } from 'components/ContactSection';
import { Footer } from 'components/Footer';
import { Header } from 'components/Header';
import { HeroSection } from 'components/HeroSection';
import { TrainersSection } from 'components/TrainersSection';

type Props = {
  // Add custom props here
};

const Homepage = (_props: InferGetStaticPropsType<typeof getStaticProps>) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div>
        <Header></Header>
        <HeroSection></HeroSection>
        <AboutSection></AboutSection>
        <ServiceSection></ServiceSection>
        <TrainersSection></TrainersSection>
        <ContactSection></ContactSection>
        <Footer></Footer>
      </div>
    </>
  );
};

// or getServerSideProps: GetServerSideProps<Props> = async ({ locale })
export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['common'])),
  },
});

export default Homepage;
