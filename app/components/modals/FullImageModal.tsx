import { X } from 'lucide-react';
import React from 'react';

interface IProps {
  imgUrl: string;
  setImgUrl: () => void;
}

const FullImageModal: React.FC<IProps> = ({ imgUrl, setImgUrl }) => {
  return (
    <div className="fixed min-[480px]:top-[50px] top-0 inset-x-0 inset-y-0 z-50 mx-auto w-[80vw] max-[480px]:w-screen h-[80vh] max-[480px]:h-[100vh] bg-black rounded-lg">
      <div className="relative w-[100%] h-[100%]  ">
        <img src={imgUrl} alt="Full Image" className="w-full h-full object-contain" />
        <span
          onClick={setImgUrl}
          className="absolute right-6 top-6 text-white cursor-pointer border border-white p-2 rounded-full"
        >
          <X />{' '}
        </span>
      </div>
    </div>
  );
};

export default FullImageModal;
