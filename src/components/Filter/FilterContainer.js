import { useSelector, useDispatch } from "react-redux";

import FilterItem from "./FilterItem";

import { COLOR_FILTER } from "../../store/constants";
import { filterActions } from "../../store/actions";

import classes from "./FilterContainer.module.scss";

const FilterContainer = () => {
  const activeFilter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const onChangeFilterHandler = (filter) => {
    dispatch(filterActions.setActiveFilter(filter));
  };

  return (
    <div className={classes["filter-container"]}>
      {Object.keys(COLOR_FILTER).map((filterKey) => {
        let filter = COLOR_FILTER[filterKey];
        let isActive = filter === activeFilter;

        return (
          <FilterItem
            key={filterKey}
            filter={filter}
            isActive={isActive}
            onChangeFilter={onChangeFilterHandler}
          />
        );
      })}
    </div>
  );
};

export default FilterContainer;
