import { auth } from "@/firebase/config"

let logoutUser = async() => {
    try {
        await auth.signOut();
    } catch (error) {
        console.log(error.message)
    }
}
export default logoutUser;