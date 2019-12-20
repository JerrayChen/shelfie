function getProducts(req, res){
    req.app.get('db').get_inventory().then( response => {
        res.status(200).json(response);
    }).catch(err=>{console.log(err);});

}

function getProduct(req, res){
    const id = req.params.id;
    req.app.get('db').get_product(id).then( response => {
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

function deleteProduct(req, res){
    const db = req.app.get('db');
    const id = req.params.id;
    db.delete_product(id).then(response=>{
        res.status(200).json(response);
    }).catch(err=>{console.log(err);});
}

function updateProduct(req, res){
    const db = req.app.get('db');
    const id = req.params.id;
    const { name, price, image } = req.body;
    db.update_product(id, name, price, image).then( response => {
        res.status(200).json(response);
    }).catch(err=>{console.log(err);});
}

module.exports = {
    getProducts,
    getProduct,
    addProduct,
    deleteProduct,
    updateProduct
}