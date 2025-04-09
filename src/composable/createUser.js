import { auth } from "@/firebase/config";
import { ref } from "vue";

let error = ref("")
let createAccount = async (email,password,displayName)=>{
    try {
        let res = await auth.createUserWithEmailAndPassword(email,password);
        // firebase already check any error but only this error check byself
        if(!res){
            throw new Error("Couldn't create new user")
        }
        res.user.updateProfile({ displayName })
        return res;
    } catch (err) {
        error.value = err.message
    }
}
let createUser = () => {
    return {createAccount,error}
}

export default createUser;