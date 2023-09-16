import {
  MinusIcon,
  PlusIcon,
} from '@heroicons/react/24/outline';

const TailCounter = () => {
  return (
    <div className="w-100 border-t-sm border-b-sm border-l-sm border-r-sm rounded-xmd overflow-hidden">
      <div className="flex w-100 items-stretch place-content-center">
        <div className="w-1/3 border-r-sm">
          <button className="w-100 h-4 bg-white flex items-center justify-center hover:bg-accent-black-light transition-all duration-200">
            <MinusIcon width={'2rem'} />
          </button>
        </div>
        <div className="w-1/3 flex items-center justify-center border-r-sm bg-white">
          <p className="text-base select-none">
            1
          </p>
        </div>
        <div className="w-1/3">
          <button className="w-100 h-4 bg-white flex items-center justify-center hover:bg-accent-black-light transition-all duration-200">
            <PlusIcon width={'2rem'} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TailCounter;
