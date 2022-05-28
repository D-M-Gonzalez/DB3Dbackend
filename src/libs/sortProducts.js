export default function sortProducts(products,sort){
    const sortCriteria = sort.split(".")
    const sortName = sortCriteria[0].replace("sortby","")
    const sortDirection = sortCriteria[1] === "asc" ? 1 : -1
    products.sort(function(item1,item2){
        if (item1[sortName] < item2[sortName]) return -1*sortDirection;
        else if(item1[sortName] > item2[sortName]) return  1*sortDirection;
        else return  0;
            
    })

    return products
}