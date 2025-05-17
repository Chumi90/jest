/*
- resetProducts(): reinicia la lista de productos y el id.
- addProduct(name, price): agrega un producto a la lista de productos.
- removeProduct(id): elimina un producto de la lista de productos.
- getProducts(): devuelve todos los productos.
- resetProducts(): reinicia la lista de productos.
- getProduct(id): devuelve un producto por su id.
- updateProduct(id, name, price): actualiza un producto por su id.
- products: array de productos. Por defecto, estará vacío.
- id: id del producto. Por defecto, será 0. Cada vez que se añada un producto, se incrementará en 1.
*/

let productos=[];

//Agregar un producto
function addProduct(name, price){
        if((typeof(name)==='string')&&typeof(price)==='number'){
            productos[productos.length]={
            idProduct:productos.length,
            nameProduct:name,
            priceProduct:price
            };
            return true;
        }else{
            throw new Error('name must be a string and price must be numbers');
    }
    
};

//Modifica un prouducto
function removeProduct(id){
    if(typeof(id)==='number'){
        productos=productos.splice(id);
        return true
    }else{
        throw new Error('id must be a number');
    }
}

//Obtiene los productos
function getProducts(){
    return console.log(productos);
}

//Reseteamos la lista de productos
function resetProducts(){
    productos=[];
    return productos;
}

//Obtenemos un producto
function getProduct(id){
    if(typeof(id)==='number'){
        console.log(productos[id]);
        return true;
    }else{
        throw new Error('id must be a number');
    }
}

//Actualizamos un producto
function updateProduct(id, name, price){
    if((typeof(id)==='number')&&(typeof(name)==='string')&&(typeof(price)==='number')){
        productos[id]={
            nameProduct:name,
            priceProduct:price
        }
        return true;
    }else{
        throw new Error('id or price must be a number or name must be an string');
    }
}

module.exports={   
    addProduct,
    removeProduct,
    getProduct,
    updateProduct
};