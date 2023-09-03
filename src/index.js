const MAIN_DATA = [
    {
        number: 1,
        characters: ""
    },
    {
        number: 2,
        characters: "ABC"
    },
    {
        number: 3,
        characters: "DEF"
    },
    {
        number: 4,
        characters: "GHI"
    },
    {
        number: 5,
        characters: "JKL"
    },
    {
        number: 6,
        characters: "MNO"
    },
    {
        number: 7,
        characters: "PQRS"
    },
    {
        number: 8,
        characters: "TUV"
    },
    {
        number: 9,
        characters: "WXYZ"
    },
    {
        number: "*",
        characters: ""
    },
    {
        number: 0,
        characters: "+"
    },
    {
        number: "#",
        characters: ""
    }
]

const FOOTER_DATA = [
    {
        name: "Favourites"
    },
    {
        name: "Recents"
    },
    {
        name: "Contacts"
    },
    {
        name: "Keypad"
    },
    {
        name: "Voicemail"
    }
]

    ; (() => {

        // HEADER
        const headerElement = document.querySelector("header")
        const addNumberElement = document.querySelector("p")
        addNumberElement.innerText = "Add Number"

        // MAIN
        const mainElement = document.createElement("main")
        const buttonWrapperElement = document.createElement("div")
        buttonWrapperElement.id = "button-wrapper"

        headerElement.appendChild(mainElement)
        mainElement.appendChild(buttonWrapperElement)

        // FOOTER
        const footerElement = document.createElement("footer")
        const footerWrapperElement = document.createElement("div")
        footerWrapperElement.id = "footer-wrapper"

        mainElement.appendChild(footerElement)
        footerElement.appendChild(footerWrapperElement)
    })()