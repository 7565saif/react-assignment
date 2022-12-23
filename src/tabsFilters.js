import "./tabsFilters.css";

function tabsFilters() {
  return (
    <div className="tabsFilters">
      <h1 className="heading">Latest Post</h1>
    
        <h3 className="filter">Filter by Category</h3>
   
      <div className="filter-box">
        <span className="box-category">All</span>
        <span className="box-category">Artificial Intelligence</span>
        <span className="box-category">Cloud Computing</span>
        <span className="box-category">DevOps</span>
        <span className="box-category">Programming Language</span>
        <span className="box-category">Mobile application Development</span>
        <span className="box-category">Technology and tools</span>
        <span className="box-category">Get job in a Tech Company</span>
        <span className="box-category">Other</span>
      </div>
    </div>
  );
}

export default tabsFilters;
