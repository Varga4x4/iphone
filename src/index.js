const BUTTONS_ARRAY = [
    {
        value: 1,
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
    },
    {
        value: 0,
        characters: "+"
    },
    {
        value: "#",
    },
    {
        value: "Call",
    },
    {
        value: "X",
    }
]

    ; (() => {
        // HEADER
        const headerElement = document.querySelector("header")
        const addNumberElement = document.querySelector("p")
        addNumberElement.innerText = "Add Number"

        const handleDisplayElement = () => {
            const displayElement = document.getElementById("display")
            console.log(displayElement)
        }

        // MAIN

        const mainElement = document.querySelector("main")
        const numbersToDisplay = []

        BUTTONS_ARRAY.forEach((button, index) => {
            const handleDialButtonOnClick = () => {
                numbersToDisplay.push(buttonValueElement.innerHTML)
                console.log(numbersToDisplay)
            }
            const dialButtonElement = document.createElement("div")
            dialButtonElement.className = "dial-button"
            dialButtonElement.onclick = handleDialButtonOnClick

            const buttonValueElement = document.createElement('h2')
            buttonValueElement.innerHTML = button.value
            dialButtonElement.appendChild(buttonValueElement)

            const buttonCharactersElement = document.createElement('p')
            buttonCharactersElement.innerHTML = button.characters
            if (button.characters !== undefined) {
                dialButtonElement.appendChild(buttonCharactersElement)
            }

            mainElement.appendChild(dialButtonElement)

        })
        handleDisplayElement()


    })()