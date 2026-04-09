import "Filters.css";

function Filters(){
    return (
        <div className="filters">
            <div className="categories">
                {["All","Animation","Interactions","CMS","Ecommerce","Portfolio"].map(cat => (
                    <button key={cat}>{cat}</button>
                ))}
            </div>
            <div className="options">
                <select>
                    <option>Popular</option>
                    <option>Newest</option>
                </select>
                <label>
                    <input type="checkbox"/> Cloneable sites only
                </label>
            </div>
        </div>
    );
}

export default Filters;