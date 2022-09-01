import { useState } from "react";

import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../firebase.init";

const provider = new GoogleAuthProvider();


const useFirebase = () => {
    const [user, setUser] = useState({});

    const googleSignIn = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                console.log('success');
            })
            .then(error => {
                console.log('error');
            })


    }


    return {
        user,
        googleSignIn
    }

}

export default useFirebase;