//Object to handle server responses on Messages
export default class ProductMessage {
    constructor (message){
        this.status = 0;
        this.message = message;
        this.data = {
            id: "",
            text:"",
        }
    }
    setStatusMessage(code){ //Setups a generic message depending on the status passed
        this.status = code
        this.status === 200 && (this.message = `Message ${this.message}d successfully`);
        this.status === 400 && (this.message = `Invalid parameters when doing ${this.message} message`);
        this.status === 406 && (this.message = `Missing parameters to ${this.message} message`);
        this.status === 404 && (this.message = `Message not found`);
        this.status === 401 && (this.message = `Invalid credentials to ${this.message} message to database`);
        this.status === 500 && (this.message = `Unexpected error when doing ${this.message} message`);
        this.status === 504 && (this.message = `Gateway Time-Out when doing ${this.message} message`);
    }
    setData(docData){ //Stores the document data
        this.data.id = docData.id;
        this.data.text = docData.text;
    }
}