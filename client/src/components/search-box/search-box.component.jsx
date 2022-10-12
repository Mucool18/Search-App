import './search-box.styles.css';
const SearchBoxComponent = ({onChangeHandler})=>  (
    <input type="search" placeholder= "Enter Keyword" className="search-box" onChange={onChangeHandler} />
)
    


export default SearchBoxComponent