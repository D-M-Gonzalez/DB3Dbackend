//Object to handle server responses on Orders
export default class ProductMessage {
    constructor (message){
        this.status = 0;
        this.message = message;
        this.data = {
            id: "",
            name: "",
            surname: "",
            phone: "",
            email: "",
            date: "",
            status: "",
            products: [],
        }
    }
    setStatusMessage(code){ //Setups a generic message depending on the status passed
        this.status = code
        this.status === 200 && (this.message = `Orden ${this.message}da con éxito`);
        this.status === 400 && (this.message = `Parámetros inválidos para ${this.message}r orden`);
        this.status === 406 && (this.message = `Faltan parámetros para ${this.message}r orden`);
        this.status === 404 && (this.message = `Orden no encontrado`);
        this.status === 401 && (this.message = `Credenciales inválidas para realizar ${this.message}r orden`);
        this.status === 500 && (this.message = `Error desconocido al ${this.message}r orden`);
        this.status === 504 && (this.message = `Tiempo de espera superado al hacer ${this.message}r orden`);
    }
    setData(docData){ //Stores the document data
        this.data.id= docData.id;
        this.data.name = docData.name;
        this.data.surname = docData.surname;
        this.data.phone = docData.phone;
        this.data.email = docData.email;
        this.data.date = docData.date;
        this.data.status = docData.status;
        this.data.products = docData.products;
    }
}