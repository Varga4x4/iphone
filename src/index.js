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

            } else {
                deleteButtonElement.style.visibility = "hidden"
                addNumberElement.style.visibility = "hidden"
            }

            callButtonElement.onclick = () => {
                if (newValue.length) {
                    renderDialButtons()
                }
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
                displayElement.innerHTML = ""

                document.querySelectorAll(".dial-button").forEach((oldButton) => oldButton.remove())
                document.querySelectorAll("#end-button-element-wrapper").forEach((oldwrapper) => oldwrapper.remove())

                mainElement.appendChild(callDeleteWrapperElement)
                callDeleteWrapperElement.appendChild(callButtonElement)
                callDeleteWrapperElement.appendChild(deleteButtonElement)
                appElement.appendChild(footerElement)

                renderDisplay()
                renderApp()
            }
        }

        const renderAddNumber = () => {
            const modalElement = document.createElement("div")
            modalElement.id = "modal"
            modalElement.style.visibility = "visible"

            const modalControlWrapperElement = document.createElement("div")
            modalControlWrapperElement.id = "modal-control-wrapper"

            const cancelButtonElement = document.createElement("button")
            cancelButtonElement.innerHTML = "Cancel"
            cancelButtonElement.className = "modal-controls"
            cancelButtonElement.onclick = () => {
                modalElement.style.visibility = "hidden"
            }

            const newContactElement = document.createElement("p")
            newContactElement.innerHTML = "New Contact"
            newContactElement.id = "new-contact-element"

            const doneButttonElement = document.createElement("button")
            doneButttonElement.innerHTML = "Done"
            doneButttonElement.className = "modal-controls"
            doneButttonElement.onclick = () => {
                modalElement.style.visibility = "hidden"
            }

            const addPhotoElementWrapper = document.createElement("div")
            addPhotoElementWrapper.id = "add-photo-element-wrapper"

            const addPhotoElement = document.createElement("p")
            addPhotoElement.innerHTML = "Add Photo"
            addPhotoElement.id = "add-photo"
            addPhotoElement.onclick = () => {
                console.log("Select photo from Gallery")
            }

            const addDetailsElementWrapper = document.createElement("div")
            addDetailsElementWrapper.id = "add-details-element-wrapper"

            const firstNameElement = document.createElement("input")
            firstNameElement.className = "details"
            firstNameElement.placeholder = "First name"
            firstNameElement.setAttribute("type", "text")

            const lastNameElement = document.createElement("input")
            lastNameElement.className = "details"
            lastNameElement.placeholder = "Last name"
            lastNameElement.setAttribute("type", "text")

            const phoneNumberElement = document.createElement("input")
            phoneNumberElement.className = "details"
            phoneNumberElement.value = displayElement.innerHTML

            const emailElement = document.createElement("input")
            emailElement.className = "details"
            emailElement.placeholder = "E-mail"
            emailElement.setAttribute("type", "email")

            document.body.insertBefore(modalElement, appElement)
            modalElement.appendChild(modalControlWrapperElement)
            modalControlWrapperElement.appendChild(cancelButtonElement)
            modalControlWrapperElement.appendChild(newContactElement)
            modalControlWrapperElement.appendChild(doneButttonElement)
            modalElement.appendChild(addPhotoElementWrapper)
            addPhotoElementWrapper.appendChild(addPhotoElement)
            modalElement.appendChild(addDetailsElementWrapper)
            addDetailsElementWrapper.appendChild(firstNameElement)
            addDetailsElementWrapper.appendChild(lastNameElement)
            addDetailsElementWrapper.appendChild(phoneNumberElement)
            addDetailsElementWrapper.appendChild(emailElement)
        }

        const renderApp = () => {
            // ADD_NUMBER_ELEMENT
            addNumberElement.innerText = "Add Number"
            addNumberElement.style.visibility = "hidden"
            addNumberElement.onclick = () => {
                renderAddNumber()
            }

            // DELETE_BUTTON_ELEMENT
            deleteButtonElement.style.visibility = "hidden"
            deleteButtonElement.onclick = () => {
                renderDisplay(undefined)
            }

            DIAL_BUTTONS_ARRAY.forEach((button) => {
                const dialButtonElement = document.createElement("button")
                dialButtonElement.className = "dial-button"
                dialButtonElement.id = "hal"

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