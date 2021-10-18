import HeaderCard from "../UI/HeaderCard";
import FilterContainer from "../Filter/FilterContainer";

import classes from "./Header.module.scss";

const Header = () => {
  return (
    <header>
      <HeaderCard>
        <FilterContainer />
      </HeaderCard>
      <HeaderCard>Second</HeaderCard>
    </header>
  );
};

export default Header;
