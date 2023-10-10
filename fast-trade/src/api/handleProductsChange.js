async function handleProductsChange(searchQuery, category, sortBy){
    let Url = "https://api.mercadolibre.com/sites/MLB/search?";
    if(searchQuery !== "") {
        Url += `q=${searchQuery}&&`;
    }
    if(category !== "") {
        Url += `category=${category}&&`;
    }
    if(sortBy !== "" && sortBy !== "price_desc") {
        Url += `sort=${sortBy}`;
    }
    console.log(Url);
    const response = await fetch(Url).then(response => response.json());
    let productsResults;
    if(sortBy === "price_desc") {
        productsResults = response.results.sort((a, b) => b.price - a.price);
    } else {
        productsResults = response.results;
    }
    return productsResults;
}

export default handleProductsChange;