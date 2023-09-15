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

const CONTACTS = []

    ; (() => {
        // ELEMENTS
        const addNumberElement = document.querySelector("p")
        const displayElement = document.getElementById("display")
        const callButtonElement = document.getElementById("call-button")
        const deleteButtonElement = document.getElementById("delete-button")
        const dialButtonPadElement = document.getElementById("dial-button-pad")
        const callDeleteWrapperElement = document.getElementById("call-delete-wrapper")
        const headerElement = document.querySelector("header")
        const footerElement = document.querySelector("footer")
        const appElement = document.getElementById("app")
        const mainElement = document.querySelector("main")
        const favouritesButtonElement = document.getElementById("favourites")
        const recentsButtonElement = document.getElementById("recents")
        const contactsButtonElement = document.getElementById("contacts")
        const keypadButtonElement = document.getElementById("keypad")
        const voicemailButtonElement = document.getElementById("voicemail")
        const firstNameElement = document.getElementById("first-name")
        const lastNameElement = document.getElementById("last-name")
        const phoneNumberElement = document.getElementById("phone-number")
        const emailElement = document.getElementById("email")

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
                firstNameElement.value = ""
                lastNameElement.value = ""
                emailElement.value = ""
            }

            const newContactTitleElement = document.createElement("p")
            newContactTitleElement.innerHTML = "New Contact"
            newContactTitleElement.className = "new-contact"

            const doneButttonElement = document.createElement("button")
            doneButttonElement.innerHTML = "Done"
            doneButttonElement.className = "modal-controls"
            doneButttonElement.onclick = () => {
                modalElement.style.visibility = "hidden"
                const newContact = {}
                newContact.firstName = firstNameElement.value
                newContact.lastName = lastNameElement.value
                newContact.phoneNumber = phoneNumberElement.value
                newContact.eMail = emailElement.value

                CONTACTS.push(newContact)
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
            firstNameElement.id = "first-name"
            firstNameElement.className = "details"
            firstNameElement.placeholder = "First name"
            firstNameElement.setAttribute("type", "text")

            const lastNameElement = document.createElement("input")
            lastNameElement.id = "last-name"
            lastNameElement.className = "details"
            lastNameElement.placeholder = "Last name"
            lastNameElement.setAttribute("type", "text")

            const phoneNumberElement = document.createElement("input")
            phoneNumberElement.id = "phone-number"
            phoneNumberElement.className = "details"
            phoneNumberElement.value = displayElement.innerHTML

            const emailElement = document.createElement("input")
            emailElement.id = "email"
            emailElement.className = "details"
            emailElement.placeholder = "E-mail"
            emailElement.setAttribute("type", "email")

            document.body.insertBefore(modalElement, appElement)
            modalElement.appendChild(modalControlWrapperElement)
            modalControlWrapperElement.appendChild(cancelButtonElement)
            modalControlWrapperElement.appendChild(newContactTitleElement)
            modalControlWrapperElement.appendChild(doneButttonElement)
            modalElement.appendChild(addPhotoElementWrapper)
            addPhotoElementWrapper.appendChild(addPhotoElement)
            modalElement.appendChild(addDetailsElementWrapper)
            addDetailsElementWrapper.appendChild(firstNameElement)
            addDetailsElementWrapper.appendChild(lastNameElement)
            addDetailsElementWrapper.appendChild(phoneNumberElement)
            addDetailsElementWrapper.appendChild(emailElement)
        }

        const renderFavourites = () => {

        }

        const renderRecents = () => {

        }

        const renderContacts = () => {
            document.querySelectorAll('header').forEach((oldHeader) => oldHeader.remove())
            document.querySelectorAll('main').forEach((oldMain) => oldMain.remove())
            document.querySelectorAll('footer').forEach((oldFooter) => oldFooter.remove())

            const contactsHeaderElement = document.createElement("div")
            contactsHeaderElement.id = "contacts-header-element"

            const backButtonElement = document.createElement("button")
            backButtonElement.innerHTML = "Back"
            backButtonElement.className = "contacts-controls"
            backButtonElement.onclick = () => {
                document.querySelectorAll("#contacts-header-element").forEach((oldHeader) => oldHeader.remove())

                appElement.appendChild(headerElement)
                appElement.appendChild(mainElement)
                mainElement.appendChild(callDeleteWrapperElement)
                callDeleteWrapperElement.appendChild(callButtonElement)
                callDeleteWrapperElement.appendChild(deleteButtonElement)
                appElement.appendChild(footerElement)
            }

            const contactsTitleElement = document.createElement("p")
            contactsTitleElement.id = "contacts-title"
            contactsTitleElement.innerHTML = "Contacts"

            const plusButtonElement = document.createElement("button")
            plusButtonElement.innerHTML = "+"
            plusButtonElement.className = "contacts-controls"
            plusButtonElement.onclick = () => {
                renderAddNumber()
            }

            appElement.appendChild(contactsHeaderElement)
            contactsHeaderElement.appendChild(backButtonElement)
            contactsHeaderElement.appendChild(contactsTitleElement)
            contactsHeaderElement.appendChild(plusButtonElement)

            CONTACTS.forEach((person) => {
                console.log(person)
                const contactElement = document.createElement("div")
                contactElement.id = "contact-element"
                contactElement.innerHTML = person.firstName + " " + person.lastName

                appElement.appendChild(contactElement)
            })
        }

        const renderKeypad = () => {

        }

        const renderVoicemail = () => {

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

            // FAVOURITES_BUTTON_ELEMENT
            favouritesButtonElement.onclick = () => {
                renderFavourites()
            }

            // RECENTS_BUTTON_ELEMENT
            recentsButtonElement.onclick = () => {
                renderRecents()
            }

            // CONTACTS_BUTTON_ELEMENT
            contactsButtonElement.onclick = () => {
                renderContacts()
            }

            // KEYPAD_BUTTON_ELEMENT
            keypadButtonElement.onclick = () => {
                renderKeypad()
            }

            // VOICEMAIL_BUTTON_ELEMENT
            voicemailButtonElement.onclick = () => {
                renderVoicemail()
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