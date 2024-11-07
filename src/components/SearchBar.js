import { useState } from "react";
import "./SearchBar.css";

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(term);
  };

  const handleOnChange = (event) => {
    return setTerm(event.target.value);

  };

  const handleResetClick = () => {
    setTerm("")
  }
  return (
    <div className="search-bar" onClick={handleResetClick}>
      <form onSubmit={handleFormSubmit}>
        <label>Enter Search Term</label>
        <input value={term} onChange={handleOnChange} />
      </form>
    </div>
  );
}

export default SearchBar;
