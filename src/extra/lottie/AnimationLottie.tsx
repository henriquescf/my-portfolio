"use client";

// @ts-ignore
import Lottie from "lottie-react";

export const AnimationLottie = ({ animationPath }: any) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationPath,
    style: {
      width: '100%',
    }
  };

  return (
    <Lottie {...defaultOptions} />
  );
};