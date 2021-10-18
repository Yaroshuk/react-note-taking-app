import SearchInput from "./SearchInput";

import classes from "./SearchContainer.module.scss";

const SearchContainer = () => {
  return (
    <div className={classes["search-container"]}>
      <SearchInput />
    </div>
  );
};

export default SearchContainer;
