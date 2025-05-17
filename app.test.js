//Pruebas jest
//npm init -y
//npm i jest
//npm i jest -dev
//iniciamos test con "npm test"
const {execPath}=require('process');
const {addProduct,removeProduct,getProduct,updateProduct} =require('./app.js');

describe('addProduct',()=>{
    it('Should import new product',()=>{
        expect(()=>addProduct('Cerveza',0.8).toBe(true));
    })
    it('Name not be a string',()=>{
        expect(()=>addProduct(cerveza,0.8).toThrow('Name not be a string'));
    })
    it('Price not be a numbre',()=>{
        expect(()=>addProduct(cerveza,'0.8').toThrow('Name not be a numbre'));
    })
})

describe('removeProduct',()=>{
    it('Should remove a product by id',()=>{
        expect(()=>removeProduct(1).toBe(true));
    })
    it('Id is not a number',()=>{
        expect(()=>removeProduct('1').toThrow('Id is not a number'))
    })
})

describe('getProduct',()=>{
    it('Should get a product by id',()=>{
        expect(()=>getProduct(1).toBe(true));
    })
    it('Id is not a number',()=>{
        expect(()=>getProduct('1').toThrow('Id is not a number'))
    })
})

describe('updateProduct',()=>{
    it('Should update a producto by id, name and price',()=>{
        expect(()=>updateProduct(1,'Coca cola',0.8).toBe(true));
    })
    it('Id is not a number',()=>{
        expect(()=>updateProduct(1,'Coca cola',0.8).toThrow('Id is not a number'));
    })
    it('Price is not a number',()=>{
        expect(()=>updateProduct(1,'Coca cola','0.8').toThrow('Id is not a number'));
    })
})