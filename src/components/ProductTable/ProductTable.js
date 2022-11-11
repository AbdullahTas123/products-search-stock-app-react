import React from 'react';
import "./style.css";

// kahverengimsi
function ProductCategoryRow ({category}) {
  return (
    <tr className='category-row'> 
      <th colSpan="2">
        {category}
      </th>
    </tr>
  );
};

// yeşilimsi
function ProductRow ({product}) {
  const name = product.stocked ? 
    <span style={{color:"rgb(71, 200, 111)"}}> 
      {product.name}
    </span> :
    <span style={{color:"red"}}> 
      {product.name}
    </span>
  return (
    <tr className='product-row'>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
};

// mavimsi
const ProductTable = ({products, filterText, inStockOnly}) => {
  const rows = [];
  let lastCategory = null;

  products.forEach(product => {
    if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
      return;
    }

    if (inStockOnly && !product.stocked) {
      return;
    }

    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow 
          category={product.category}
          key={product.category} />
      );
    }

    rows.push(
      <ProductRow
        product={product}
        key={product.name} />
    );

    lastCategory = product.category;
  });

  return (
    <table style={{marginTop:"10px"}}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>
  );
};

export default ProductTable;