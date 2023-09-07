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
    }
]

    ; (() => {
        const displayElement = document.getElementById("display")

        // HEADER
        const headerElement = document.querySelector("header")
        const addNumberElement = document.querySelector("p")
        addNumberElement.innerText = "Add Number"
        addNumberElement.style.visibility = "hidden"

        // MAIN
        const mainElement = document.querySelector("main")
        const callDeleteWrapperElement = document.getElementById("call-delete-wrapper")
        const callButtonElement = document.getElementById("call-button")
        callButtonElement.style.visibility = "hidden"
        const deleteButtonElement = document.getElementById("delete-button")
        deleteButtonElement.style.visibility = "hidden"

        const numbersToDisplay = []

        BUTTONS_ARRAY.forEach((button, index) => {
            const handleDisplayElement = () => {
                displayElement.innerHTML = numbersToDisplay.join("")

                addNumberElement.style.visibility = "visible"

                if (numbersToDisplay.length > 0) {
                    callButtonElement.style.visibility = "visible"
                    deleteButtonElement.style.visibility = "visible"
                }
            }

            const dialButtonElement = document.createElement("button")
            dialButtonElement.className = "dial-button"

            dialButtonElement.onclick = () => {
                numbersToDisplay.push(buttonValueElement.innerHTML)
                handleDisplayElement()
            }

            deleteButtonElement.onclick = () => {
                const alfa = numbersToDisplay.slice(0, numbersToDisplay.length - 1).join("")
                console.log({ alfa })
                console.log(numbersToDisplay)
                handleDisplayElement()
            }

            const buttonValueElement = document.createElement('p')
            buttonValueElement.innerHTML = button.value
            buttonValueElement.className = "dial-values"
            dialButtonElement.appendChild(buttonValueElement)

            if (button.characters !== undefined) {
                const buttonCharactersElement = document.createElement('p')
                buttonCharactersElement.innerHTML = button.characters
                dialButtonElement.appendChild(buttonCharactersElement)
            }

            mainElement.appendChild(dialButtonElement)
        })
    })()