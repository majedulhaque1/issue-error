// unexpeced token u in json postion at 0?


const handleDelevered = () =>{
    let itemQuantity = product.quantity;
    const quantity = parseInt(itemQuantity) - 1;
    console.log(quantity);
    const url = `url here`;
    fetch(url,{
        method: "PUT",
        headers:{
            'content-type' : 'application/json'
        },
        body : JSON.stringify(quantity)
    })
    .then(res => res.json())
    .then(data => {
        setProducts(data);
    })
}