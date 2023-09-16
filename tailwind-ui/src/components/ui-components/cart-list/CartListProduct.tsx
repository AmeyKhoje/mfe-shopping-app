import CSSProvider from 'src/hoc/CSSProvider';

const CartListItem = () => {
  return (
    <div className="w-100 flex items-start">
      <div className="w-14 mr-2">
        <img
          className="w-14 h-14 rounded-sm"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXGrjO2J18__PeQCsJ7dTfGkakQtB4GJD_Wg_FjzzuKkpKmD_k6w0HYuUHVa4_--bb9gc&usqp=CAU"
          alt=""
        />
      </div>
      <div>
        <div className="">
          <h4 className="text-md font-medium text-primary font-rubik">
            Ice cream{'(Flavoured)'}
          </h4>
        </div>
        <span className="text-base font-rubik text-accent-text-1 font-medium">
          Strawberry
        </span>
      </div>
    </div>
  );
};

export default CSSProvider(CartListItem);
