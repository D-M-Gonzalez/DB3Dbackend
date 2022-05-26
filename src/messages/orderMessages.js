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
        this.status === 200 && (this.message = `Order ${this.message}d successfully`);
        this.status === 400 && (this.message = `Invalid parameters when doing ${this.message} order`);
        this.status === 406 && (this.message = `Missing parameters to ${this.message} order`);
        this.status === 404 && (this.message = `Order not found`);
        this.status === 401 && (this.message = `Invalid credentials to ${this.message} order to database`);
        this.status === 500 && (this.message = `Unexpected error when doing ${this.message} order`);
        this.status === 504 && (this.message = `Gateway Time-Out when doing ${this.message} order`);
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