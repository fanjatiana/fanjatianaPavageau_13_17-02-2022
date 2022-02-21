import React from 'react';
import SignLink from "../components/SignLink"
import { infosNavLinksIfIsLoging, infosNavLinksIfIsNoLoging } from "../js/arrays.js"

const LinksList = () => {
    const isLoging: boolean = true; // gestion du state
    
    return <div>
        {
            isLoging ?
                infosNavLinksIfIsLoging.map((obj) =>
                    <SignLink
                        href={obj.href}
                        class={obj.class}
                        display={obj.display}
                        classIcon={obj.classIcon}
                        text={obj.text}
                    />
                )
                :
                infosNavLinksIfIsNoLoging.map((obj) =>
                    <SignLink
                        href={obj.href}
                        class={obj.class}
                        display={obj.display}
                        classIcon={obj.classIcon}
                        text={obj.text}
                    />)
        }
    </div >
}


export default LinksList;