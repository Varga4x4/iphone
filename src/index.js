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
        // ELEMENTS
        const headerElement = document.querySelector("header")
        const addNumberElement = document.querySelector("p")
        const displayElement = document.getElementById("display")
        const mainElement = document.querySelector("main")
        const callButtonElement = document.getElementById("call-button")
        const deleteButtonElement = document.getElementById("delete-button")
        const dialButtonsElement = document.getElementById("dial-buttons")

        // HELPERS
        const renderDisplay = (numberToAdd) => {
            const oldValue = displayElement.innerHTML;
            let newValue
            if (numberToAdd) {
                newValue = oldValue + numberToAdd
            } else {
                newValue = oldValue.slice(0, oldValue.length - 1)
            }

            displayElement.innerHTML = newValue

            addNumberElement.style.visibility = "visible"

            if (newValue.length) {
                deleteButtonElement.style.visibility = "visible"
            }
        }



        // ADD_NUMBER_ELEMENT
        addNumberElement.innerText = "Add Number"
        addNumberElement.style.visibility = "hidden"

        // DELETE_BUTTON_ELEMENT
        deleteButtonElement.style.visibility = "hidden"
        deleteButtonElement.onclick = () => {
            renderDisplay(undefined)
        }

        BUTTONS_ARRAY.forEach((button) => {
            const dialButtonElement = document.createElement("button")
            dialButtonElement.className = "dial-button"

            dialButtonElement.onclick = () => {
                const numberToAdd = buttonValueElement.innerHTML
                console.log(numberToAdd)
                renderDisplay(numberToAdd)
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

            dialButtonsElement.appendChild(dialButtonElement)
        })
    })()