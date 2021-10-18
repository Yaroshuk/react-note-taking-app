import HeaderCard from "../UI/HeaderCard";
import FilterContainer from "../Filter/FilterContainer";
import SearchContainer from "../Search/SearchContainer";

import classes from "./Header.module.scss";

const Header = () => {
  return (
    <header>
      <HeaderCard>
        <FilterContainer />
      </HeaderCard>
      <HeaderCard>
        <SearchContainer />
      </HeaderCard>
    </header>
  );
};

export default Header;
