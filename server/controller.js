function getProducts(req, res){
    req.app.get('db').get_inventory().then( response => {
        res.status(200).json(response);
    }).catch(err=>{console.log(err);});

}

function addProduct(req, res){
    const db = req.app.get('db');
    let { name, price, image } = req.body;
    db.create_product(name, price, image).then( response =>{
        res.status(200).json(response);
    }).catch(err=>{console.log(err);});
}

module.exports = {
    getProducts,
    addProduct
}