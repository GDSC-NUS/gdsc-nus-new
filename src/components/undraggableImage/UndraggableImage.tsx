import { ImgHTMLAttributes, ReactElement } from "react";

import "./UndraggableImage.scss";

interface UndraggableImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string | undefined;
  alt: string;
}

const UndraggableImage = ({
  src,
  alt,
  ...props
}: UndraggableImageProps): ReactElement<
  UndraggableImageProps,
  "img"
> | null => {
  if (src == null) {
    return null;
  }

  return (
    <img
      {...props}
      alt={alt}
      className="undraggable-image"
      draggable="false"
      src={src}
    />
  );
};

export default UndraggableImage;
