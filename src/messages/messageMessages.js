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
        this.status === 200 && (this.message = `Mensaje ${this.message}do con éxito`);
        this.status === 400 && (this.message = `Parámetros inválidos para ${this.message}r mensaje`);
        this.status === 406 && (this.message = `Faltan parámetros para ${this.message}r mensaje`);
        this.status === 404 && (this.message = `Mensaje no encontrado`);
        this.status === 401 && (this.message = `Credenciales inválidas para realizar ${this.message}r mensaje`);
        this.status === 500 && (this.message = `Error desconocido al ${this.message}r mensaje`);
        this.status === 504 && (this.message = `Tiempo de espera superado al hacer ${this.message}r mensaje`);
    }
    setData(docData){ //Stores the document data
        this.data.id = docData.id;
        this.data.text = docData.text;
    }
}

//"crea"
//"elimina"
//"modifica"
//"busca"