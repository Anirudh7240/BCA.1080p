import React, { useState } from 'react';

const ImageLoader = ({ 
  src, 
  alt, 
  className = '', 
  wrapperClassName = '', 
  imgClassName = '',
  onClick,
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden ${wrapperClassName}`} onClick={onClick}>
      {/* Premium Loader/Skeleton */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-zinc-900/80 animate-pulse flex items-center justify-center backdrop-blur-sm">
          <div className="w-6 h-6 border-[2px] border-white/10 border-t-white/60 rounded-full animate-spin"></div>
        </div>
      )}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        className={`${imgClassName} ${className} transition-all duration-700 ease-out ${
          isLoaded ? 'opacity-100 scale-100 blur-0' : 'opacity-0 scale-95 blur-sm'
        }`}
        {...props}
      />
    </div>
  );
};

export default ImageLoader;
