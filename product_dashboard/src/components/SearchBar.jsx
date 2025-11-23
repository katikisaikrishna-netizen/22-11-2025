

function SearchBar() {  
    return (
        <input type = "text" placeholder="Search products..."
        className="form-control mb-3"    
        onChange={(e) => console.log(e.target.value)} />    
    );
}       
export default SearchBar;   