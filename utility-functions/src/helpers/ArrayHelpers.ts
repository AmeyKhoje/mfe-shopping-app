import { FilterConditionInterface } from "src/internals/Interfaces";

export const customFilter = (
  array: Array<any>,
  filterCondition: FilterConditionInterface,
  valueToCheck: any
) => {
  const newArray =
    !!filterCondition.condition.equalTo ?
      array.filter(
        item => item[filterCondition.condition.compareFrom] === valueToCheck
      ) :
      array.filter(
        item => item[filterCondition.condition.compareFrom] !== valueToCheck
      );

  return newArray;
}