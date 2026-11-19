import React, { useState } from 'react';
import { Home } from 'lucide-react';

interface SmartImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackLabel?: string;
}

export const SmartImage: React.FC<SmartImageProps> = ({
  src,
  alt,
  className = '',
  fallbackLabel,
}) => {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center bg-[#EFECE5] text-[#475569] p-6 text-center ${className}`}
      >
        <div className="w-11 h-11 rounded-xl bg-white/80 border border-[#DFDBD2] flex items-center justify-center mb-2.5 text-teal-700">
          <Home className="w-5 h-5" />
        </div>
        <span className="text-xs font-medium text-[#334155] max-w-[180px] truncate">
          {fallbackLabel || alt}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
      loading="lazy"
    />
  );
};
