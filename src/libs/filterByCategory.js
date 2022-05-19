export default function filterByCategory(products,category){
    let normalCategory = category.toUpperCase()
    let filteredProducts = products

    if(normalCategory != 'ALL'){filteredProducts = filteredProducts.filter((product)=>{
        let category = product.category.toUpperCase()
        return category.includes(normalCategory)
    })}

    return filteredProducts
}