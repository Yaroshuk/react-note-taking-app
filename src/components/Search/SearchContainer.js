import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import SearchInput from "./SearchInput";

import classes from "./SearchContainer.module.scss";

const SearchContainer = () => {
  return (
    <div className={classes["search-container"]}>
      <FontAwesomeIcon icon={faSearch} />
      <SearchInput />
    </div>
  );
};

export default SearchContainer;
