import { auth } from "@/firebase/config";
import { ref } from "vue";

let user=ref(auth.currentUser);
// onAuthStateChanged is always run when auth change anything like (singUp,login,logout)
auth.onAuthStateChanged((_user)=>{
    user.value=_user
})

let getUser = () => {
    return user;
}

export default getUser;