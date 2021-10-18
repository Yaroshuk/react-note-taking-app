import classes from "./SearchInput.module.scss";

const PLACEHOLDER = "Search for notes...";

const SearchInput = ({ value, onTextChange, onFocusChange }) => {
  const onChangeHandler = (event) => {
    let text = event.target.value;

    onTextChange(text);
  };

  const onFocusHandler = () => {
    onFocusChange(true);
  };

  const onBlurHandler = () => {
    onFocusChange(false);
  };

  return (
    <input
      className={classes["search-input"]}
      type="text"
      placeholder={PLACEHOLDER}
      value={value}
      onChange={onChangeHandler}
      onFocus={onFocusHandler}
      onBlur={onBlurHandler}
    />
  );
};

export default SearchInput;
