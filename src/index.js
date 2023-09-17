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

const CLASS_NAMES = {
    dialButton: "dial-button",
    dialValues: "dial-values",
    modalControls: "modal-controls"
}

const ELEMENT_IDS = {
    addDetailsElementWrapper: "add-details-element-wrapper",
    addPhoto: "add-photo",
    addPhotoElementWrapper: "add-photo-element-wrapper",
    callDeleteWrapper: "call-delete-wrapper",
    endButton: "end-button",
    endButtonElementWrapper: "end-button-element-wrapper",
    modal: "modal",
    modalControlWrapper: "modal-control-wrapper",
    newContactTitle: "new-contact",
}

// ELEMENTS

// TODO: update addNumberElement with id
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

const INNER_TEXTS = {
    addNumberElement: "calling...",
    addPhotoElement: "Add Photo",
    cancelButtonElement: "Cancel",
    displayElement: "",
    doneButttonElement: "Done",
    endButtonElement: "End",
    newContactTitleElement: "New Contact",
}


    ; (() => {
        // HELPERS
        const renderDisplay = (numberToAdd) => {
            const oldValue = displayElement.innerText;

            let newValue
            if (numberToAdd) {
                newValue = oldValue + numberToAdd
            } else {
                newValue = oldValue.slice(0, oldValue.length - 1)
            }

            displayElement.innerText = newValue

            if (newValue.length) {
                deleteButtonElement.style.visibility = "visible"
                addNumberElement.style.visibility = "visible"
            } else {
                deleteButtonElement.style.visibility = "hidden"
                addNumberElement.style.visibility = "hidden"
            }

            // TODO: fix it later
            callButtonElement.onclick = () => {
                if (newValue.length) {
                    renderDialButtons()
                }
            }
        }

        const renderDialButtons = () => {
            addNumberElement.innerText = INNER_TEXTS.addNumberElement

            document.querySelectorAll(`.${CLASS_NAMES.dialButton}, footer, #${ELEMENT_IDS.callDeleteWrapper}`).forEach((oldElement) => oldElement.remove())

            IN_CALL_BUTTONS_ARRAY.forEach((button) => {
                const inCallButtonElement = document.createElement("button")
                inCallButtonElement.className = CLASS_NAMES.dialButton
                inCallButtonElement.innerText = button.value

                dialButtonPadElement.appendChild(inCallButtonElement)
            })

            const endButtonElementWrapper = document.createElement("div")
            endButtonElementWrapper.id = ELEMENT_IDS.endButtonElementWrapper

            const endButtonElement = document.createElement("button")
            endButtonElement.id = ELEMENT_IDS.endButton
            endButtonElement.className = CLASS_NAMES.dialButton
            endButtonElement.onclick = () => {
                displayElement.innerText = INNER_TEXTS.displayElement

                document.querySelectorAll(`.${CLASS_NAMES.dialButton}, #${ELEMENT_IDS.endButtonElementWrapper}`).forEach((oldElement) => oldElement.remove())

                callDeleteWrapperElement.append(callButtonElement, deleteButtonElement)
                mainElement.appendChild(callDeleteWrapperElement)
                appElement.appendChild(footerElement)

                renderDisplay()
                renderApp()
            }

            const endButtonTextElement = document.createElement("p")
            endButtonTextElement.className = CLASS_NAMES.dialValues
            endButtonTextElement.innerText = INNER_TEXTS.endButtonElement

            endButtonElement.appendChild(endButtonTextElement)
            endButtonElementWrapper.appendChild(endButtonElement)
            mainElement.appendChild(endButtonElementWrapper)
        }

        const renderAddNumber = () => {
            const modalElement = document.createElement("div")
            modalElement.id = ELEMENT_IDS.modal

            const modalControlWrapperElement = document.createElement("div")
            modalControlWrapperElement.id = ELEMENT_IDS.modalControlWrapper

            const cancelButtonElement = document.createElement("button")
            cancelButtonElement.innerText = INNER_TEXTS.cancelButtonElement
            cancelButtonElement.className = CLASS_NAMES.modalControls
            cancelButtonElement.onclick = () => {
                modalElement.style.visibility = "hidden"

                const lastNameElement = document.getElementById("last-name")
                const firstNameElement = document.getElementById("first-name")
                const emailElement = document.getElementById("email")

                firstNameElement.value = ""
                lastNameElement.value = ""
                emailElement.value = ""
            }

            const newContactTitleElement = document.createElement("p")
            newContactTitleElement.innerText = INNER_TEXTS.newContactTitleElement
            newContactTitleElement.className = CLASS_NAMES.newContactTitle

            const doneButttonElement = document.createElement("button")
            doneButttonElement.innerText = INNER_TEXTS.doneButttonElement
            doneButttonElement.className = CLASS_NAMES.modalControls
            doneButttonElement.onclick = () => {
                modalElement.style.visibility = "hidden"

                const lastNameElement = document.getElementById("last-name")
                const firstNameElement = document.getElementById("first-name")
                const phoneNumberElement = document.getElementById("phone-number")
                const emailElement = document.getElementById("email")



                console.log(lastNameElement)
                const newContact = {
                    lastName: lastNameElement.value,
                    phoneNumber: phoneNumberElement.value,
                    eMail: emailElement.value,
                    firstName: firstNameElement.value,
                }
                console.log(newContact)
                CONTACTS.push(newContact)

                lastNameElement.value = ""
                firstNameElement.value = ""
                phoneNumberElement.value = ""
                emailElement.value = ""
            }

            const addPhotoElementWrapper = document.createElement("div")
            addPhotoElementWrapper.id = ELEMENT_IDS.addPhotoElementWrapper

            const addPhotoElement = document.createElement("p")
            addPhotoElement.innerText = INNER_TEXTS.addPhotoElement
            addPhotoElement.id = ELEMENT_IDS.addPhoto
            addPhotoElement.onclick = () => {
                console.log("Select photo from Gallery")
            }

            const addDetailsElementWrapper = document.createElement("div")
            addDetailsElementWrapper.id = ELEMENT_IDS.addDetailsElementWrapper

            const inputs = [
                {
                    id: "first-name",
                    className: "details",
                    placeholder: "First name",
                    attribute: "text"
                },
                {
                    id: "last-name",
                    className: "details",
                    placeholder: "Last name",
                    attribute: "text"
                },
                {
                    id: "phone-number",
                    className: "details",
                    value: displayElement.innerText
                },
                {
                    id: "email",
                    className: "details",
                    placeholder: "E-mail",
                    attribute: "email"
                },
            ]

            inputs.forEach((input) => {
                const inputElement = document.createElement("input")
                inputElement.id = input.id
                inputElement.className = input.className

                if (input.placeholder) {
                    inputElement.placeholder = input.placeholder
                }

                if (input.value) {
                    inputElement.value = input.value
                }

                inputElement.setAttribute("type", input.attribute)

                addDetailsElementWrapper.appendChild(inputElement)
            })

            modalControlWrapperElement.append(
                cancelButtonElement,
                newContactTitleElement,
                doneButttonElement
            )
            addPhotoElementWrapper.appendChild(addPhotoElement)
            modalElement.append(
                modalControlWrapperElement,
                addPhotoElementWrapper,
                addDetailsElementWrapper
            )
            document.body.insertBefore(modalElement, appElement)
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
            backButtonElement.innerText = "Back"
            backButtonElement.className = "contacts-controls"
            backButtonElement.onclick = () => {
                document.querySelectorAll("#contacts-header-element, #contact-element").forEach((oldHeader) => oldHeader.remove())

                appElement.appendChild(headerElement)
                appElement.appendChild(mainElement)
                mainElement.appendChild(callDeleteWrapperElement)
                callDeleteWrapperElement.appendChild(callButtonElement)
                callDeleteWrapperElement.appendChild(deleteButtonElement)
                appElement.appendChild(footerElement)
            }

            const contactsTitleElement = document.createElement("p")
            contactsTitleElement.id = "contacts-title"
            contactsTitleElement.innerText = "Contacts"

            const plusButtonElement = document.createElement("button")
            plusButtonElement.innerText = "+"
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
                contactElement.innerText = person.firstName + " " + person.lastName

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

                // let pressTimer

                dialButtonElement.onclick = () => {
                    // clearTimeout(pressTimer);

                    // pressTimer = window.setTimeout(function () {
                    //     console.log("hello")
                    // }, 1000);

                    const numberToAdd = buttonValueElement.innerText

                    renderDisplay(numberToAdd)
                }

                const buttonValueElement = document.createElement('p')
                buttonValueElement.innerText = button.value
                buttonValueElement.className = "dial-values"
                dialButtonElement.appendChild(buttonValueElement)

                if (button.characters !== undefined) {
                    const buttonCharactersElement = document.createElement('p')
                    buttonCharactersElement.innerText = button.characters
                    dialButtonElement.appendChild(buttonCharactersElement)
                }

                dialButtonPadElement.appendChild(dialButtonElement)
            })
        }

        renderApp()
    })()