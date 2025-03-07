'use client';
import React, { Suspense, useState } from 'react';
import {
  GalleryItems,
  getGridClasses,
  getItemHeight,
} from './galleryGrid/GridSectionStore';

const LazyComponent = React.lazy(() => import('@/app/components/modals/FullImageModal'));

type Props = {
  noOfImages?: number;
  enableClick?: boolean;
};

const BentoGrid: React.FC<Props> = ({
  noOfImages = GalleryItems.length,
  enableClick = false,
}) => {
  const [storeImg, setStoreImg] = useState<string | null>(null);

  const handleSelect = (imgUrl: string, enabled: boolean) => {
    if (enabled) {
      setStoreImg(imgUrl);
    } else {
      setStoreImg(null);
    }
  };
  return (
    <div className="">
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {GalleryItems.slice(0, noOfImages).map((item, index) => (
          <div
            key={item.id}
            className={`
                relative overflow-hidden rounded-xl cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-xl
                ${getGridClasses(item.size)}
              `}
            style={{
              height: getItemHeight(item.size),
              maxHeight: '600px',
            }}
            onClick={() => handleSelect(item.imageUrl, enableClick)}
          >
            {/* Background image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${item.imageUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            ></div>

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10"></div>
          </div>
        ))}
      </div>
      <div>
        {storeImg && (
          <Suspense fallback={null}>
            <LazyComponent imgUrl={storeImg} setImgUrl={() => setStoreImg(null)} />
          </Suspense>
        )}
      </div>
    </div>
  );
};

export default BentoGrid;
