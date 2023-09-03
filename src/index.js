const BUTTONS_ARRAY = [
    {
        value: 1,
        characters: ""
    },
    {
        value: 2,
        characters: "ABC"
    },
    {
        value: 3,
        characters: "DEF"
    },
    {
        value: 4,
        characters: "GHI"
    },
    {
        value: 5,
        characters: "JKL"
    },
    {
        value: 6,
        characters: "MNO"
    },
    {
        value: 7,
        characters: "PQRS"
    },
    {
        value: 8,
        characters: "TUV"
    },
    {
        value: 9,
        characters: "WXYZ"
    },
    {
        value: "*",
        characters: ""
    },
    {
        value: 0,
        characters: "+"
    },
    {
        value: "#",
        characters: ""
    },
    {
        value: "Call",
        characters: ""
    },
    {
        value: "X",
        characters: ""
    }
]

    ; (() => {

        // HEADER
        const headerElement = document.querySelector("header")
        const addNumberElement = document.querySelector("p")
        addNumberElement.innerText = "Add Number"

        // MAIN
        const mainElement = document.querySelector("main")

        BUTTONS_ARRAY.forEach((button, index) => {
            const dialButtonElement = document.createElement("div")
            dialButtonElement.className = "dial-button"

            const buttonValueElement = document.createElement('h2')
            buttonValueElement.innerHTML = button.value
            dialButtonElement.appendChild(buttonValueElement)

            const buttonCharactersElement = document.createElement('p')
            buttonCharactersElement.innerHTML = button.characters
            dialButtonElement.appendChild(buttonCharactersElement)

            mainElement.appendChild(dialButtonElement)
        })
    })()