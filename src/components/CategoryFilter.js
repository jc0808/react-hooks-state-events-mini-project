import React from "react";

function CategoryFilter({ categories, selectedCategory, onSelectCategory }) {
  const displayC = categories.map(category => {
    const className = category === selectedCategory ? "selected" : null;
    return (<button key={category} onClick={() => onSelectCategory(category)} className={className}>{category}</button>)
  })



  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {displayC}
    </div>
  );
}

export default CategoryFilter;
