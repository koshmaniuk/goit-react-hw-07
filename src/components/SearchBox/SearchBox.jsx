import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectNameFilter);

  return (
    <div className={css.searchBoxContainer}>
      <p className={css.searchBoxTitle}>Find contacts by name</p>
      <input
        className={css.searchBoxInput}
        type="text"
        value={value}
        onChange={(event) => dispatch(changeFilter(event.target.value))}
      />
    </div>
  );
};

export default SearchBox;
