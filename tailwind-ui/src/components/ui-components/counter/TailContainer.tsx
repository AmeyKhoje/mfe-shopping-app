import {
  MinusIcon,
  PlusIcon,
} from '@heroicons/react/24/outline';

type SelfProps = {
  count: number;
  handleIncrement: (count: number) => void;
  handleDecrement: (count: number) => void;
};

const TailCounter = ({
  count,
  handleDecrement,
  handleIncrement,
}: SelfProps) => {
  const increment = () =>
    handleIncrement(count + 1);
  const decrement = () =>
    handleDecrement(count - 1);

  return (
    <div className="w-100 border-t-sm border-b-sm border-l-sm border-r-sm rounded-xmd overflow-hidden">
      <div className="flex w-100 items-stretch place-content-center">
        <div className="w-1/3 border-r-sm">
          <button
            onClick={decrement}
            className="w-100 h-4 bg-white flex items-center justify-center hover:bg-accent-black-light transition-all duration-200"
          >
            <MinusIcon width={'2rem'} />
          </button>
        </div>
        <div className="w-1/3 flex items-center justify-center border-r-sm bg-white">
          <p className="text-base select-none">
            {count}
          </p>
        </div>
        <div className="w-1/3">
          <button
            onClick={increment}
            className="w-100 h-4 bg-white flex items-center justify-center hover:bg-accent-black-light transition-all duration-200"
          >
            <PlusIcon width={'2rem'} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TailCounter;
