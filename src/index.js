const BUTTONS_ARRAY = [
    {
        value: 1,
        inCallButtons: "mute"
    },
    {
        value: 2,
        characters: "ABC",
        inCallButtons: "keypad"
    },
    {
        value: 3,
        characters: "DEF",
        inCallButtons: "speaker"
    },
    {
        value: 4,
        characters: "GHI",
        inCallButtons: "add call"
    },
    {
        value: 5,
        characters: "JKL",
        inCallButtons: "FaceTime"
    },
    {
        value: 6,
        characters: "MNO",
        inCallButtons: "contacts"
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
            } else {
                deleteButtonElement.style.visibility = "hidden"
                addNumberElement.style.visibility = "hidden"
            }
        }

        const renderDials = () => {

        }

        // ADD_NUMBER_ELEMENT
        addNumberElement.innerText = "Add Number"
        addNumberElement.style.visibility = "hidden"
        addNumberElement.onclick = () => {
            console.log("a")
        }

        // DELETE_BUTTON_ELEMENT
        deleteButtonElement.style.visibility = "hidden"
        deleteButtonElement.onclick = () => {
            renderDisplay(undefined)
        }

        // CALL_BUTTON_ELEMENT
        callButtonElement.onclick = () => {
            addNumberElement.innerText = "calling..."
        }

        BUTTONS_ARRAY.forEach((button) => {
            const dialButtonElement = document.createElement("button")
            dialButtonElement.className = "dial-button"

            dialButtonElement.onclick = () => {
                const numberToAdd = buttonValueElement.innerHTML
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