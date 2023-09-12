const DIAL_BUTTONS_ARRAY = [
    {
        value: 1,
    },
    {
        value: 2,
        characters: "ABC",
    },
    {
        value: 3,
        characters: "DEF",
    },
    {
        value: 4,
        characters: "GHI",
    },
    {
        value: 5,
        characters: "JKL",
    },
    {
        value: 6,
        characters: "MNO",
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

const IN_CALL_BUTTONS_ARRAY = [
    {
        value: "mute"
    },
    {
        value: "keypad"
    },
    {
        value: "speaker"
    },
    {
        value: "add call"
    },
    {
        value: "FaceTime"
    },
    {
        value: "contacts"
    }
]

    ; (() => {
        // ELEMENTS
        const addNumberElement = document.querySelector("p")
        const displayElement = document.getElementById("display")
        const callButtonElement = document.getElementById("call-button")
        const deleteButtonElement = document.getElementById("delete-button")
        const dialButtonPadElement = document.getElementById("dial-button-pad")
        const callDeleteWrapperElement = document.getElementById("call-delete-wrapper")
        const footerElement = document.querySelector("footer")
        const appElement = document.getElementById("app")
        const mainElement = document.querySelector("main")

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
                callButtonElement.onclick = () => {
                    renderDialButtons()
                }
            } else {
                deleteButtonElement.style.visibility = "hidden"
                addNumberElement.style.visibility = "hidden"
            }
        }

        const renderDialButtons = () => {
            addNumberElement.innerText = "calling..."

            document.querySelectorAll('.dial-button').forEach((oldButton) => oldButton.remove())
            document.querySelectorAll('footer').forEach((oldFooter) => oldFooter.remove())
            document.querySelectorAll('#call-delete-wrapper').forEach((oldwrapper) => oldwrapper.remove())

            IN_CALL_BUTTONS_ARRAY.forEach((button) => {
                const inCallButtonElement = document.createElement("button")
                inCallButtonElement.className = "dial-button"
                inCallButtonElement.innerHTML = button.value

                dialButtonPadElement.appendChild(inCallButtonElement)
            })

            const endButtonElementWrapper = document.createElement("div")
            endButtonElementWrapper.id = "end-button-element-wrapper"
            endButtonElementWrapper.style.border = "2px solid red"
            endButtonElementWrapper.style.paddingTop = "100px"
            endButtonElementWrapper.style.paddingBottom = "100px"
            endButtonElementWrapper.style.display = "flex"
            endButtonElementWrapper.style.justifyContent = "center"

            const endButtonElement = document.createElement("button")
            endButtonElement.id = "end-button"
            endButtonElement.className = "dial-button"
            endButtonElement.innerHTML = "End"
            endButtonElement.style.background = "red"
            endButtonElement.style.color = "white"

            mainElement.appendChild(endButtonElementWrapper)
            endButtonElementWrapper.appendChild(endButtonElement)

            // END_BUTTON_ELEMENT
            endButtonElement.onclick = () => {
                document.querySelectorAll('.dial-button').forEach((oldButton) => oldButton.remove())
                document.querySelectorAll("#end-button-element-wrapper").forEach((oldwrapper) => oldwrapper.remove())

                mainElement.appendChild(callDeleteWrapperElement)
                callDeleteWrapperElement.appendChild(callButtonElement)
                callDeleteWrapperElement.appendChild(deleteButtonElement)
                appElement.appendChild(footerElement)

                renderDisplay()
                renderApp()
            }
        }

        const renderApp = () => {
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

            DIAL_BUTTONS_ARRAY.forEach((button) => {
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

                dialButtonPadElement.appendChild(dialButtonElement)
            })
        }
        renderApp()
    })()