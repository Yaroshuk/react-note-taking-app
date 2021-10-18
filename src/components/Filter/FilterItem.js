import { COLOR_FILTER } from "../../store/constants";

import classes from "./FilterItem.module.scss";

export const filterClasses = {
  [COLOR_FILTER.none]: classes["none-filter"],
  [COLOR_FILTER.orange]: classes["orange-filter"],
  [COLOR_FILTER.blue]: classes["blue-filter"],
  [COLOR_FILTER.green]: classes["green-filter"],
};

const FilterItem = ({ filter, isActive, onChangeFilter }) => {
  const onClickHandler = () => {
    onChangeFilter(filter);
  };

  const itemClasses = `${classes["filter-item"]} 
                        ${filterClasses[filter]} 
                        ${isActive && classes["active-filter"]}`;

  return <div className={itemClasses} onClick={onClickHandler}></div>;
};

export default FilterItem;
