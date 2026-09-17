import React, { ComponentProps } from 'react';

type MockImageProps = ComponentProps<'img'> & {
  fill?: boolean;
  priority?: boolean;
  sizes?: string;
};

export default function MockImage({
  src,
  alt = '',
  width,
  height,
  className,
  style,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  fill,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  priority,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  sizes,
  ...props
}: MockImageProps) {
  return (
    <img
      src={typeof src === 'object' && src !== null ? (src as { src: string }).src : src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      style={{ objectFit: 'cover', ...style }}
      {...props}
    />
  );
}
