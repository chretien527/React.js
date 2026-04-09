import "./ShowcaseGrid.css";

function ShowcaseGrid(){
    const sites = [
        {title: "Portfolio Example", category: "Portfolio"},
        {title: "Ecommerce Demo", category: "Ecommerce"},
        {title: "CMS Template", category: "CMS"}
    ];

    return (
        <div className="grid">
            {sites.map((site, idx) => (
                <div key={idx} className="card">
                    <h3>{site.title}</h3>
                    <p>{site.category}</p>
                    <button>Clone</button>
                </div>
            ))}
        </div>
    );
}

export default ShowcaseGrid;