import React, { useState } from 'react';
import { ImageZoom } from './animate-ui/primitives/effects/image-zoom';

const ImageLoader = ({ 
  src, 
  alt, 
  className = '', 
  wrapperClassName = '', 
  imgClassName = '',
  onClick,
  zoomEnabled = false,
  zoomScale = 2,
  zoomOnClick = true,
  zoomOnHover = true,
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const imgContent = (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onLoad={() => setIsLoaded(true)}
      className={`${imgClassName} ${className} transition-all duration-250 ease-out ${
        isLoaded ? 'opacity-100 scale-100 blur-0' : 'opacity-0 scale-95 blur-sm'
      }`}
      {...props}
    />
  );

  return (
    <div className={`relative overflow-hidden ${wrapperClassName}`} onClick={onClick}>
      {/* Premium Loader/Skeleton */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-zinc-900/80 animate-pulse flex items-center justify-center backdrop-blur-sm">
          <div className="w-6 h-6 border-[2px] border-white/10 border-t-white/60 rounded-full animate-spin"></div>
        </div>
      )}
      {zoomEnabled && isLoaded ? (
        <ImageZoom
          zoomScale={zoomScale}
          zoomOnClick={zoomOnClick}
          zoomOnHover={zoomOnHover}
          width="100%"
          height="100%"
        >
          {imgContent}
        </ImageZoom>
      ) : (
        imgContent
      )}
    </div>
  );
};

export default ImageLoader;
