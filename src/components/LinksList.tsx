import React from 'react';
import SignLink from "../components/SignLink"


const LinksList = () => {
    /*const url = window.location;
    const userUrl = url.href
    console.log(userUrl)*/

    //if (userUrl) {
       return (<div>
            <SignLink
                href="/sign-in"
                class="main-nav-item"
                display="block"
                classIcon="fa fa-user-circle"
                text=" Sign In" />

            <SignLink
                href="/user"
                class="main-nav-item"
                display="block"
                classIcon="fa fa-user-circle"
                text=" Tony" />

            <SignLink
                href="/"
                class="main-nav-item"
                display="block"
                classIcon="fa fa-sign-out"
                text=" Sign Out" />
        </div>)
    /*}else{
        return (<div>
        <SignLink
            href="/sign-in"
            class="main-nav-item"
            display="block"
            classIcon="fa fa-user-circle"
            text=" Sign In" />

        <SignLink
            href="/user"
            class="main-nav-item"
            display="none"
            classIcon="fa fa-user-circle"
            text=" Tony" />

        <SignLink
            href="/"
            class="main-nav-item"
            display="none"
            classIcon="fa fa-sign-out"
            text=" Sign Out" />
    </div>)
    }*/
    
}


export default LinksList;