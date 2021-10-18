import { useSelector, useDispatch } from "react-redux";
import { searchActions } from "../../store/actions";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import SearchInput from "./SearchInput";

import classes from "./SearchContainer.module.scss";

const SearchContainer = () => {
  const dispatch = useDispatch();
  const searchText = useSelector((state) => state.search.text);
  const searchIsFocused = useSelector((state) => state.search.isFocused);

  const changeSearchTextHandler = (text) => {
    dispatch(searchActions.setSearchText(text));
  };

  const setSearchIsFocusedHandler = (isFocused) => {
    dispatch(searchActions.setSearchIsFocused(isFocused));
  };

  return (
    <div className={`${classes["search-container"]} ${searchIsFocused && classes.focused}`}>
      <FontAwesomeIcon icon={faSearch}/>
      <SearchInput
        onTextChange={changeSearchTextHandler}
        value={searchText}
        onFocusChange={setSearchIsFocusedHandler}
      />
    </div>
  );
};

export default SearchContainer;
