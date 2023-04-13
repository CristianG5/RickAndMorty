import SearchBar from "../searchbar/SearchBar.jsx";

import "./navbar.css";

export default function Navbar({onSearch, onChange, random}) {
  return (
    <div className="nav-container">
      <SearchBar onSearch={onSearch} onChange={onChange} />
      <button className="random" onClick={random}>
        ADD RANDOM
      </button>
    </div>
  );
}
