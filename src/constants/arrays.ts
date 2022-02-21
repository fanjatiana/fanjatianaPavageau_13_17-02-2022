
interface arrayInfoLink {
    href: string,
    class: string,
    display: string,
    classIcon: string,
    text: string
}

// array for the component LinksList (links list of the header)
export const navLinkListInfosIfConnected : arrayInfoLink[] = [
    {
        href: "/sign-in",
        class: "main-nav-item",
        display: "none",
        classIcon: "fa fa-user-circle",
        text: " Sign In"
    },
    {
        href: "/user",
        class: "main-nav-item",
        display: "block",
        classIcon: "fa fa-user-circle",
        text: " Tony"
    },
    {
        href: "/",
        class: "main-nav-item",
        display: "block",
        classIcon: "fa fa-sign-out",
        text: " Sign Out"
    }
];



// array for the component LinksList (links list of the header)
export const navLinkListInfosIfOffline : arrayInfoLink[] = [
    {
        href: "/sign-in",
        class: "main-nav-item",
        display: "block",
        classIcon: "fa fa-user-circle",
        text: " Sign In"
    },
    {
        href: "/user",
        class: "main-nav-item",
        display: "none",
        classIcon: "fa fa-user-circle",
        text: " Tony"
    },
    {
        href: "/",
        class: "main-nav-item",
        display: "none",
        classIcon: "fa fa-sign-out",
        text: " Sign Out"
    }
]



interface arrayDataAccount {
    title: string,
    value: string,
    status: string,
}
// array for the component Account (of User page)
export const dataAccount  : arrayDataAccount[]= [
    {
        title : "Argent Bank Checking (x8349)",
        value : "$2,082.79",
        status : "Available Balance"
    },
    {
        title : "Argent Bank Savings (x6712)",
        value : "$10,928.42",
        status : "Available Balance"
    },
    {
        title : "Argent Bank Credit Card (x8349)",
        value : "$184.30",
        status : "Current Balance"
    }
]