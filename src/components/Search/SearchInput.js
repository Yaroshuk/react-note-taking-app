import classes from "./SearchInput.module.scss";

const PLACEHOLDER = "Search for notes...";

const SearchInput = () => {
  return <input className={classes["search-input"]} type="text" placeholder={PLACEHOLDER} />
};

export default SearchInput;
