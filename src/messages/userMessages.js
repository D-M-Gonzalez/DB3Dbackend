//Object to handle server responses on Users
export default class UserMessage {
    constructor (message){
        this.status = 0;
        this.message = message;
        this.data = new Object();
        }
    setStatusMessage(code){ //Setups a generic message depending on the status passed
        this.status = code
        this.status === 200 && (this.message = `Usuario ${this.message}do con éxito`);
        this.status === 400 && (this.message = `Parámetros inválidos para ${this.message}r usuario`);
        this.status === 406 && (this.message = `Faltan parámetros para ${this.message}r usuario`);
        this.status === 404 && (this.message = `Usuario no encontrado`);
        this.status === 401 && (this.message = `Credenciales inválidas para realizar ${this.message}r usuario`);
        this.status === 500 && (this.message = `Error desconocido al ${this.message}r usuario`);
        this.status === 504 && (this.message = `Tiempo de espera superado al hacer ${this.message}r usuario`);
        this.status === 409 && (this.message = `No se puede ${this.message}r usuario debido a que ya existe uno registrado`);
    }
    setData(docData,token){ //Stores the document data
        this.data.id = docData.id;
        this.data.email = docData.email;
        this.data.password = docData.password;
        this.data.name = docData.name;
        this.data.surname = docData.surname;
        this.data.phone = docData.phone;
        this.data.orders= docData.orders;
        this.data.accessToken = token;
    }
}