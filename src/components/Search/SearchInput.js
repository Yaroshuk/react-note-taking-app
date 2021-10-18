import classes from "./SearchInput.module.scss";

const PLACEHOLDER = "Search for notes...";

const SearchInput = () => {
  return <input type="search" placeholder={PLACEHOLDER} />
};

export default SearchInput;
