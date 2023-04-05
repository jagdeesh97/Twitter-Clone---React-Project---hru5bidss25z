import { useContext, createContext, useEffect, useState } from "react";
import React from "react";
import {
    GoogleAuthProvider,
    signInWithRedirect,
    signInWithPopup,
    signOut,
    onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase";

const AuthContext = createContext();


const profile = [{
    profileImg: 'https://tse1.mm.bing.net/th?id=OIP.y-nGyqT5AwES8oqp344z4gHaHa&pid=Api&P=0',
    username: "recs.cse17904@gmail.com",
    active: false,
    tweets: [
        {
            createdAt: 'Mon Mar 21 2023 11:02:56 GMT+0530 (India Standard Time)',
            text: 'Hello Developers!',
            image: 'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190626123927/untitlsssssed.png',
        },
        {
            createdAt: 'Sun Mar 23 2023 10:02:40 GMT+0530 (India Standard Time)',
            text: 'Hi Guys!',
            image: 'https://previews.123rf.com/images/andreysuslov/andreysuslov1905/andreysuslov190500001/122585893-web-design-and-coding-in-internet-page-development-languages-designer-develops-site-layout-in.jpg',
        },
    ]

}]

export const AuthContextProvider = ({ children }) => {

    const [user, setUser] = useState({})

    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                console.log(result.user)
            }).catch((error) => {
                console.error(error);
            })
    };

    const logOut = () => {
        signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })
        return () => {
            unsubscribe()
        }
    }, [])

    return (
        <AuthContext.Provider value={{ googleSignIn, logOut, user }}>
            {children}
        </AuthContext.Provider>
    );
};

export const UserAuth = () => {
    return useContext(AuthContext);
};