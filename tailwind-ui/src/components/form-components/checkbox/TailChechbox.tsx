import CSSProvider from 'src/hoc/CSSProvider';

const TailCheckbox = () => {
  return (
    <div className="flex rounded-xsm w-2.5 h-2.5 overflow-hidden">
      <input
        type="checkbox"
        className="peer relative appearance-none w-2.5 h-2.5 bg-accent-black-light text-primary  border-accent-black-border border-solid border-sm checked:bg-primary checked:border-primary"
      />
      <svg
        className="
          absolute 
          w-1.5 h-1.5 mt-0.5 ml-0.5
          hidden peer-checked:block stroke-light pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke-width="0.5rem"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
    </div>
  );
};

export default CSSProvider(TailCheckbox);
