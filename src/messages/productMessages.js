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
        this.status === 200 && (this.message = `Product ${this.message}d successfully`);
        this.status === 400 && (this.message = `Invalid parameters when doing ${this.message} product`);
        this.status === 406 && (this.message = `Missing parameters to ${this.message} product`);
        this.status === 404 && (this.message = `Product not found`);
        this.status === 401 && (this.message = `Invalid credentials to ${this.message} product to database`);
        this.status === 500 && (this.message = `Unexpected error when doing ${this.message} product`);
        this.status === 504 && (this.message = `Gateway Time-Out when doing ${this.message} product`);
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
