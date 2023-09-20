const DIAL_BUTTONS_ARRAY = [
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
        value: "*"
    },
    {
        value: 0,
        characters: "+"
    },
    {
        value: "#"
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
    contactsControls: "contacts-controls",
    dialButton: "dial-button",
    dialValues: "dial-values",
    modalControls: "modal-controls",
}

const ELEMENT_IDS = {
    addDetailsElementWrapper: "add-details-element-wrapper",
    addPhoto: "add-photo",
    addPhotoElementWrapper: "add-photo-element-wrapper",
    buttonCharacters: "button-characters",
    callDeleteWrapper: "call-delete-wrapper",
    contact: "contact-element",
    contactsHeader: "contacts-header-element",
    contactsTitle: "contacts-title",
    dialButton: "dial",
    endButton: "end-button",
    endButtonElementWrapper: "end-button-element-wrapper",
    modal: "modal",
    modalControlWrapper: "modal-control-wrapper",
    newContactTitle: "new-contact",
}

// ELEMENTS
const addNumberElement = document.getElementById("add-number")
const appElement = document.getElementById("app")
const callButtonElement = document.getElementById("call-button")
const callDeleteWrapperElement = document.getElementById("call-delete-wrapper")
const contactsButtonElement = document.getElementById("contacts")
const deleteButtonElement = document.getElementById("delete-button")
const dialButtonPadElement = document.getElementById("dial-button-pad")
const displayElement = document.getElementById("display")
const favouritesButtonElement = document.getElementById("favourites")
const footerElement = document.querySelector("footer")
const headerElement = document.querySelector("header")
const keypadButtonElement = document.getElementById("keypad")
const mainElement = document.querySelector("main")
const recentsButtonElement = document.getElementById("recents")
const voicemailButtonElement = document.getElementById("voicemail")

const INNER_TEXTS = {
    addNumberElement: "Add Number",
    addPhotoElement: "Add Photo",
    backButtonElement: "Back",
    cancelButtonElement: "Cancel",
    contactsTitleElement: "Contacts",
    displayElement: "",
    doneButttonElement: "Done",
    endButtonElement: "End",
    newContactTitleElement: "New Contact",
    plusButtonElement: "+",
}

    ; (() => {
        // HELPERS
        const renderDisplay = (numberToAdd) => {

            // console.log(displayElement.innerText)

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
            addNumberElement.innerText = "Calling..."

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

                const newContact = {
                    lastName: lastNameElement.value,
                    phoneNumber: phoneNumberElement.value,
                    eMail: emailElement.value,
                    firstName: firstNameElement.value,
                }
                CONTACTS.push(newContact)

                lastNameElement.value = ""
                firstNameElement.value = ""
                phoneNumberElement.value = ""
                emailElement.value = ""

                renderDisplay()
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
            document.querySelectorAll(`header, main, footer`).forEach((oldElement) => oldElement.remove())

            const contactsHeaderElement = document.createElement("div")
            contactsHeaderElement.id = ELEMENT_IDS.contactsHeader

            const backButtonElement = document.createElement("button")
            backButtonElement.innerText = INNER_TEXTS.backButtonElement
            backButtonElement.className = CLASS_NAMES.contactsControls
            backButtonElement.onclick = () => {
                document.querySelectorAll("#contacts-header-element, #contact-element").forEach((oldElement) => oldElement.remove())

                callDeleteWrapperElement.appendChild(callButtonElement)
                callDeleteWrapperElement.appendChild(deleteButtonElement)
                mainElement.appendChild(callDeleteWrapperElement)
                appElement.append(
                    headerElement,
                    mainElement,
                    footerElement
                )
            }

            const contactsTitleElement = document.createElement("p")
            contactsTitleElement.id = ELEMENT_IDS.contactsTitle
            contactsTitleElement.innerText = INNER_TEXTS.contactsTitleElement

            const plusButtonElement = document.createElement("button")
            plusButtonElement.innerText = INNER_TEXTS.plusButtonElement
            plusButtonElement.className = CLASS_NAMES.contactsControls
            plusButtonElement.onclick = () => {
                renderAddNumber()
            }

            contactsHeaderElement.appendChild(backButtonElement)
            contactsHeaderElement.appendChild(contactsTitleElement)
            contactsHeaderElement.appendChild(plusButtonElement)
            appElement.appendChild(contactsHeaderElement)

            CONTACTS.forEach((person) => {
                const contactElement = document.createElement("div")
                contactElement.id = ELEMENT_IDS.contact
                contactElement.innerText = `${person.firstName} ${person.lastName}`

                appElement.appendChild(contactElement)
            })
        }

        const renderKeypad = () => {

        }

        const renderVoicemail = () => {

        }

        const renderApp = () => {
            // ADD_NUMBER_ELEMENT
            addNumberElement.innerText = INNER_TEXTS.addNumberElement
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
                console.log(CONTACTS)
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
                dialButtonElement.className = CLASS_NAMES.dialButton
                dialButtonElement.id = ELEMENT_IDS.dialButton

                // STILL_TO_FIX
                let pressTimer

                dialButtonElement.onclick = () => {
                    clearTimeout(pressTimer);

                    pressTimer = window.setTimeout(function () {
                        numberToAdd = button.characters
                        console.log(button.characters)
                    }, 1000);

                    let numberToAdd = buttonValueElement.innerText

                    renderDisplay(numberToAdd)
                }

                const buttonValueElement = document.createElement('p')
                buttonValueElement.innerText = button.value
                buttonValueElement.className = CLASS_NAMES.dialValues
                dialButtonElement.appendChild(buttonValueElement)

                if (button.characters !== undefined) {
                    const buttonCharactersElement = document.createElement('p')
                    buttonCharactersElement.id = ELEMENT_IDS.buttonCharacters
                    buttonCharactersElement.innerText = button.characters
                    dialButtonElement.appendChild(buttonCharactersElement)
                }

                dialButtonPadElement.appendChild(dialButtonElement)
            })
        }

        renderApp()
    })()