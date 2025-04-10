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
        await res.user.updateProfile({ displayName }) // wait to complete update user if don't wait, it will show displayName null in chatroom
        return res;
    } catch (err) {
        error.value = err.message
    }
}
let createUser = () => {
    return {createAccount,error}
}

export default createUser;