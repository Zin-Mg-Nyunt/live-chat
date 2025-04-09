import { auth } from "@/firebase/config";
import { ref } from "vue"

let error = ref(null);
let loginAccount = async (email,password) => {
    try {
        let res = await auth.signInWithEmailAndPassword(email, password)
        if (!res) {
            throw new Error("User can't login");
        }
        return res;
    } catch (err) {
        // error.value = JSON.parse(err.message).error.message;
        if (err.code=="auth/internal-error") {
            error.value = "Invalid password or email"
        }
        // tutorial ထဲကလို error message ကို readable မရဘူး JSON API တစ်ခုပုံစံနဲ့ ပြန်လာနေလို့ error code ကိုကိုင်ပြီး manually ပဲ စစ်ချလိုက်တယ်
    }
}

let loginUser = () => {
    return {error,loginAccount}
}

export default loginUser;