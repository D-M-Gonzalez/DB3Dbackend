export default function filterBySearch(products,searchParams){

    let filteredBySearch = products;
    if(searchParams && searchParams != "undefined") {filteredBySearch = filteredBySearch.filter((el)=>{
        let normalParams = searchParams.toUpperCase()
        let normalTags = el.tags.map((tag)=>{
            return tag.toUpperCase()
        })
        let normalName = el.name.toUpperCase()
        normalName = normalName.split(" ")
        normalName.forEach((name)=>{
            normalTags.push(name)
        })

        let found = normalTags.filter((tag)=>{
            return tag.includes(normalParams)
        })
        if (found.length > 0){
            return el
        }
    })}   
    return filteredBySearch;
}