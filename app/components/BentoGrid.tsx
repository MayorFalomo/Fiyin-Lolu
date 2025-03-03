import React from 'react';
import {
  GalleryItems,
  getGridClasses,
  getItemHeight,
} from './galleryGrid/GridSectionStore';

type Props = {};

const BentoGrid = (props: Props) => {
  return (
    <div className="w-[90%] mx-auto ">
      <div className="mb-12">
        <h2 className="text-[50px] font-belleze mt-[60px] font-bold mb-2">Our Gallery</h2>
        <p className="text-gray-600 max-w-2xl w-[400px]">
          Explore our gallery of captured timeless moments, The beginning of a journey we
          cannot wait to share with you.
        </p>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {GalleryItems.slice(0, 4).map((item, index) => (
          <div
            key={item.id}
            className={`
                relative overflow-hidden rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-xl
                ${getGridClasses(item.size)}
              `}
            style={{
              height: getItemHeight(item.size),
              maxHeight: '600px',
            }}
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
          // <div
          //   key={item.id}
          //   className={`
          //     relative h-full overflow-hidden bg-red-500 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-xl
          //     ${getGridClasses(item.size)}
          //   `}
          // >
          //   <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10"></div>
          //   <div className="h-[500px]">
          //     <img
          //       src={item.imageUrl}
          //       alt={item.title}
          //       className="w-full h-full object-cover"
          //       style={{
          //         minHeight: getItemHeight(item.size),
          //         objectFit: 'cover',
          //         // maxHeight: '500px',
          //       }}
          //     />
          //   </div>
          //   {/* <div className="absolute bottom-0 left-0 p-4 z-20 text-white">
          //     <h3 className="text-xl font-semibold">{item.title}</h3>
          //     <p className="text-sm text-gray-200">{item.description}</p>
          //   </div> */}
          // </div>
        ))}
      </div>
    </div>
  );
};

export default BentoGrid;
