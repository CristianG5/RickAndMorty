import {
  IconContainer,
  SearchContainer,
  SearchIcon,
  SearchInput,
} from "./searchbar";

export default function SearchBar({onSearch, onChange}) {
  return (
    <SearchContainer>
      <SearchInput placeholder="Buscar..." type="search" onChange={onChange} />
      <IconContainer>
        <SearchIcon onClick={onSearch} />
      </IconContainer>
    </SearchContainer>
  );
}
