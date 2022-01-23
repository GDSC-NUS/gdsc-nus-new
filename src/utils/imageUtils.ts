import { useEffect } from "react";

export const processCloudinaryUrl = (url: string): string => {
  const parts = url.split("upload", 2);
  return `${parts[0]}upload/w_1500,f_auto,q_auto${parts[1]}`;
};

export const processSmallerCloudinaryUrl = (url: string): string => {
  const parts = url.split("upload", 2);
  return `${parts[0]}upload/w_1000,f_auto,q_auto${parts[1]}`;
};

declare global {
  interface Window {
    usePreloadImagesData?: Record<string, unknown[]>;
  }
}

export const usePreloadImages = (imageSrcs: string[]): void => {
  useEffect(() => {
    const randomStr = Math.random().toString(32).slice(2) + Date.now();
    window.usePreloadImagesData = window.usePreloadImagesData ?? {};
    window.usePreloadImagesData[randomStr] = [];
    for (const src of imageSrcs) {
      // Preload the image
      const img = new Image();
      img.src = src;
      // Keep a reference to the image
      window.usePreloadImagesData[randomStr]?.push(img);
    }
    return (): void => {
      delete window.usePreloadImagesData?.[randomStr];
    };
  }, [imageSrcs]);
};
