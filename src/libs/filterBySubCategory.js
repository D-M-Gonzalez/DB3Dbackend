export default function filterBySubCategory(products,subcategory){
    let normalSubCategory = subcategory.toUpperCase()
    let filteredProducts = products

    if(normalSubCategory != 'ALL'){filteredProducts = filteredProducts.filter((product)=>{
        let subcategory = product.subcategory.toUpperCase()
        return subcategory.includes(normalSubCategory)
    })}

    return filteredProducts
}