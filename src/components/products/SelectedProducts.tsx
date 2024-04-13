import React from 'react'

const SelectedProducts = ({products}) => {
  return (
    <div>
        {products && products.map(product => (
            <span>{product.title}</span>
        ))}
    </div>
  )
}
export default SelectedProducts;