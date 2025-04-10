import { db } from "@/firebase/config";
import { ref } from "vue";

let useCollection = (collectionName) => {
    let error = ref(null);
    let addDoc = async (doc) => {
        try {
            await db.collection(collectionName).add(doc)
        } catch (err) {
            console.log(err.message)
            error.value = "Could not send message!"
        }
    }

    return {error,addDoc}
}
export default useCollection;