import { Balloons, Container, Section } from '@/components';
import balloonsLeft from '../../assets/img/pink-balloons-left.png';
import balloonsRight from '../../assets/img/pink-balloons-right.png';
import React from 'react';
import dynamic from 'next/dynamic';

const CustomConfetti = dynamic(
  () => import('./components/CustomConfetti/CustomConfetti'),
  { ssr: false }
);

const Hero = () => {
  return (
    <Section className="pt-[0] overflow-hidden" id="hero">
      <Container className="flex items-center justify-center min-h-screen">
        <CustomConfetti />
        <div className="flex relative items-center justify-center max-w-[295px] md:max-w-[470px] xl:max-w-[650px]">
          <h1 className="font-anzeigen uppercase text-center text-accent text-[40px] font-medium -tracking-[1%] leading-[32px] md:text-[64px] md:leading-[51px] xl:text-[88px] xl:leading-[90%]">
            Tworzymy unikalne i niepowtarzalne
            <span className="text-main"> dekoracje balonowe </span>
            na imprezy
          </h1>
          <Balloons
            img={balloonsLeft}
            alt="pink balloons one"
            className="w-[155px] h-[165px]  -top-[130px] -left-[90px] md:w-[272px] md:h-[285px] md:-top-[110px] md:-left-[250px] xl:w-[398px] xl:h-[415px] xl:-top-[110px] xl:-left-[330px] xl:-rotate-[25deg]"
          />
          <Balloons
            img={balloonsRight}
            alt="pink balloons two"
            className="w-[178px] h-[180px] -bottom-[150px] -right-[70px]  md:w-[306px] md:h-[312px] md:-bottom-[250px] md:-right-[200px] xl:w-[460px] xl:h-[468px] xl:-bottom-[250px] xl:-right-[335px]"
          />
        </div>
      </Container>
    </Section>
  );
};

export default Hero;
