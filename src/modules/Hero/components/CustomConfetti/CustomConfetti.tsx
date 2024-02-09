'use client';
import React from 'react';
import Confetti from 'react-confetti';
import useWindowSize from 'react-use/lib/useWindowSize';

const CustomConfetti = () => {
  let { width, height } = useWindowSize();
  return (
    <>
      <Confetti
        width={width}
        height={height}
        colors={['#FFA5F4']}
        numberOfPieces={70}
      />
    </>
  );
};

export default CustomConfetti;
