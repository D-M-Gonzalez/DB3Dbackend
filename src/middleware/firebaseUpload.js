import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { storage } from '../firebase';

const storeImages = async (req,res,next) => {
    if ( req.files ){
        let array = [];
        let array2 = [];
        for ( const el of req.files){
            const imageRef = ref(storage,`images/${el.originalname}`)
            const response = await uploadBytes(imageRef, el.buffer)
            array.push(response.ref)
        }

        for ( const el of array){
            const image = await getDownloadURL(el)
            array2.push(image)
        }
        
        res.locals.images = array2;
        next();
    } else {
        next();
    }
}

export default storeImages;