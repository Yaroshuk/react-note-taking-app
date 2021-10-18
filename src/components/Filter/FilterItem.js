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
  }

  return (
    <div
      className={`${classes["filter-item"]} ${
        isActive && classes["active-filter"]
      }`}
      onClick={onClickHandler}
    >
      <div
        className={`${classes["filter-content"]} ${filterClasses[filter]}`}
      ></div>
    </div>
  );
};

export default FilterItem;
