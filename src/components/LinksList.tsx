import React from 'react';
import SignLink from "../components/SignLink"
import { navLinkListInfosIfConnected, navLinkListInfosIfOffline } from "../constants/arrays"

const LinksList = () => {
    const isLoging: boolean = false; // gestion du state

    return <div>
        {
            isLoging ?
                navLinkListInfosIfConnected.map((obj) =>
                    <SignLink
                        href={obj.href}
                        class={obj.class}
                        display={obj.display}
                        classIcon={obj.classIcon}
                        text={obj.text}
                    />
                )
                :
                navLinkListInfosIfOffline.map((obj) =>
                    <SignLink
                        key={obj.href}
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