//Object to handle server responses on Products
export default class ProductMessage {
    constructor (message){
        this.status = 0;
        this.message = message;
        this.data = {
            id: "",
            name: "",
            price: "",
            category: "",
            subcategory: "",
            description1: "",
            description2: "",
            images: []
        }
    }
    setStatusMessage(code){ //Setups a generic message depending on the status passed
        this.status = code
        this.status === 200 && (this.message = `Producto ${this.message}do con éxito`);
        this.status === 400 && (this.message = `Parámetros inválidos para ${this.message}r producto`);
        this.status === 406 && (this.message = `Faltan parámetros para ${this.message}r producto`);
        this.status === 404 && (this.message = `Producto no encontrado`);
        this.status === 401 && (this.message = `Credenciales inválidas para realizar ${this.message}r producto`);
        this.status === 500 && (this.message = `Error desconocido al ${this.message}r producto`);
        this.status === 504 && (this.message = `Tiempo de espera superado al hacer ${this.message}r producto`);
    }
    setData(docData){ //Stores the document data
        this.data.id = docData.id;
        this.data.name = docData.name;
        this.data.price = docData.price;
        this.data.category = docData.category;
        this.data.subcategory = docData.subcategory;
        this.data.description1 = docData.description1;
        this.data.description2 = docData.description2;
        this.data.tags = docData.tags;
        this.data.date = docData.date;
        this.data.images = docData.images;
    }
}
