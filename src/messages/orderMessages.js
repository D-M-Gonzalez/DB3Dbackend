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
        this.data.id = docData.id;
        this.data.text = docData.text;
    }
}