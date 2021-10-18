import classes from "./SearchInput.module.scss";

const PLACEHOLDER = "Search for notes...";

const SearchInput = ({ value, onTextChange }) => {

  const onChangeHandler = (event) => {
    let text = event.target.value;

    onTextChange(text);
  }

  return (
    <input
      className={classes["search-input"]}
      type="text"
      placeholder={PLACEHOLDER}
      value={value}
      onChange={onChangeHandler}
    />
  );
};

export default SearchInput;
