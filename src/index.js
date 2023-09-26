// CONSTANTS
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
    newContactTitle: "new-contact",
}

const ELEMENT_IDS = {
    addDetailsElementWrapper: "add-details-element-wrapper",
    addNumber: "add-number",
    addPhoto: "add-photo",
    addPhotoElementWrapper: "add-photo-element-wrapper",
    app: "app",
    buttonCharacters: "button-characters",
    callButton: "call-button",
    callDeleteWrapper: "call-delete-wrapper",
    cancelSearchButton: "cancel-search-button",
    contact: "contact-element",
    contactsButton: "contacts-button",
    contactsHeader: "contacts-header-element",
    contactsTitle: "contacts-title",
    deleteButton: "delete-button",
    deleteSearchButton: "delete-search-button",
    dialButton: "dial",
    dialButtonPad: "dial-button-pad",
    display: "display",
    email: "email",
    endButton: "end-button",
    endButtonElementWrapper: "end-button-element-wrapper",
    favouritesButton: "favourites-button",
    firstName: "first-name",
    footer: "footer",
    header: "header",
    keypadButton: "keypad-button",
    lastName: "last-name",
    main: "main",
    modal: "modal",
    modalControlWrapper: "modal-control-wrapper",
    phoneNumber: "phone-number",
    recentsButton: "recents-button",
    searchField: "search-field",
    searchFieldWrapper: "search-field-wrapper",
    voicemailButton: "voicemail-button",
}

const INPUTS = [
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
        getValue: () => displayElement.innerText
    },
    {
        id: "email",
        className: "details",
        placeholder: "E-mail",
        attribute: "email"
    },
]

const INNER_TEXTS = {
    addNumberElement: "Add Number",
    addNumberElementInCall: "Calling...",
    addPhotoElement: "Add Photo",
    backButtonElement: "Back",
    cancelButtonElement: "Cancel",
    deleteSearchButton: "x",
    contactsTitleElement: "Contacts",
    displayElement: "",
    doneButttonElement: "Done",
    endButtonElement: "End",
    newContactTitleElement: "New Contact",
    plusButtonElement: "+",
}
//

// ELEMENTS
const addNumberElement = document.getElementById(ELEMENT_IDS.addNumber)
const appElement = document.getElementById(ELEMENT_IDS.app)
const callButtonElement = document.getElementById(ELEMENT_IDS.callButton)
const callDeleteWrapperElement = document.getElementById(ELEMENT_IDS.callDeleteWrapper)
const contactsButtonElement = document.getElementById(ELEMENT_IDS.contactsButton)
const deleteButtonElement = document.getElementById(ELEMENT_IDS.deleteButton)
const dialButtonPadElement = document.getElementById(ELEMENT_IDS.dialButtonPad)
const displayElement = document.getElementById(ELEMENT_IDS.display)
const favouritesButtonElement = document.getElementById(ELEMENT_IDS.favouritesButton)
const footerElement = document.querySelector(ELEMENT_IDS.footer)
const headerElement = document.querySelector(ELEMENT_IDS.header)
const keypadButtonElement = document.getElementById(ELEMENT_IDS.keypadButton)
const mainElement = document.querySelector(ELEMENT_IDS.main)
const recentsButtonElement = document.getElementById(ELEMENT_IDS.recentsButton)
const voicemailButtonElement = document.getElementById(ELEMENT_IDS.voicemailButton)
//

// HELPERS
const handleFooterElementOnClick = (tabName) => {
    const allTabIds = [
        ELEMENT_IDS.contactsButton,
        ELEMENT_IDS.favouritesButton,
        ELEMENT_IDS.recentsButton,
        ELEMENT_IDS.keypadButton,
        ELEMENT_IDS.voicemailButton
    ]

    const alfa = ELEMENT_IDS[`${tabName}Button`]

    const isTabNameCorrect = alfa !== undefined
    if (!isTabNameCorrect) {
        throw new Error("Error1")
    }

    allTabIds.forEach((tabId) => {
        document.getElementById(tabId).disabled = tabId === alfa
    })
}

const renderInCallButtons = () => {
    addNumberElement.innerText = INNER_TEXTS.addNumberElementInCall

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
            renderInCallButtons()
        }
    }
}
//

// MODULES
// MODAL
const renderAddNumberModal = () => {
    const modalElement = document.createElement("div")
    modalElement.id = ELEMENT_IDS.modal

    const modalControlWrapperElement = document.createElement("div")
    modalControlWrapperElement.id = ELEMENT_IDS.modalControlWrapper

    const cancelButtonElement = document.createElement("button")
    cancelButtonElement.innerText = INNER_TEXTS.cancelButtonElement
    cancelButtonElement.className = CLASS_NAMES.modalControls
    cancelButtonElement.onclick = () => {
        modalElement.remove()
    }

    const newContactTitleElement = document.createElement("p")
    newContactTitleElement.innerText = INNER_TEXTS.newContactTitleElement
    newContactTitleElement.className = CLASS_NAMES.newContactTitle

    const addDetailsElementWrapper = document.createElement("div")
    addDetailsElementWrapper.id = ELEMENT_IDS.addDetailsElementWrapper

    INPUTS.forEach((input) => {
        const inputElement = document.createElement("input")
        inputElement.id = input.id
        inputElement.className = input.className

        if (input.placeholder) {
            inputElement.placeholder = input.placeholder
        }

        if (input.getValue) {
            inputElement.value = input.getValue()
        }

        inputElement.setAttribute("type", input.attribute)

        addDetailsElementWrapper.appendChild(inputElement)
    })

    const doneButttonElement = document.createElement("button")
    doneButttonElement.innerText = INNER_TEXTS.doneButttonElement
    doneButttonElement.className = CLASS_NAMES.modalControls
    doneButttonElement.onclick = () => {

        const lastNameElement = document.getElementById(ELEMENT_IDS.lastName)
        const firstNameElement = document.getElementById(ELEMENT_IDS.firstName)
        const phoneNumberElement = document.getElementById(ELEMENT_IDS.phoneNumber)
        const emailElement = document.getElementById(ELEMENT_IDS.email)

        const newContact = {
            lastName: lastNameElement.value,
            phoneNumber: phoneNumberElement.value,
            eMail: emailElement.value,
            firstName: firstNameElement.value,
        }
        CONTACTS.push(newContact)

        modalElement.remove()
    }

    const addPhotoElementWrapper = document.createElement("div")
    addPhotoElementWrapper.id = ELEMENT_IDS.addPhotoElementWrapper

    const addPhotoElement = document.createElement("p")
    addPhotoElement.innerText = INNER_TEXTS.addPhotoElement
    addPhotoElement.id = ELEMENT_IDS.addPhoto
    addPhotoElement.onclick = () => {
        console.log("Select photo from Gallery")
    }

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
//

// VIEWS
const renderContacts = () => {
    handleFooterElementOnClick("contacts")

    // REMOVE everything from divs having tabNames

    document.querySelectorAll(`header, main`).forEach((oldElement) => oldElement.remove())

    const contactsHeaderElement = document.createElement("div")
    contactsHeaderElement.id = ELEMENT_IDS.contactsHeader

    const backButtonElement = document.createElement("button")
    backButtonElement.innerText = INNER_TEXTS.backButtonElement
    backButtonElement.className = CLASS_NAMES.contactsControls
    backButtonElement.onclick = () => {
        document.querySelectorAll("#contacts-header-element, #contact-element, #search-field-wrapper").forEach((oldElement) => oldElement.remove())

        document.getElementById(ELEMENT_IDS.contactsButton).disabled = false

        callDeleteWrapperElement.append(callButtonElement, deleteButtonElement)
        // callDeleteWrapperElement.appendChild(deleteButtonElement)
        mainElement.appendChild(callDeleteWrapperElement)

        appElement.append(headerElement, mainElement, footerElement)
        // appElement.appendChild(mainElement)
        // appElement.appendChild(footerElement)
    }

    const contactsTitleElement = document.createElement("p")
    contactsTitleElement.id = ELEMENT_IDS.contactsTitle
    contactsTitleElement.innerText = INNER_TEXTS.contactsTitleElement

    const plusButtonElement = document.createElement("button")
    plusButtonElement.innerText = INNER_TEXTS.plusButtonElement
    plusButtonElement.className = CLASS_NAMES.contactsControls
    plusButtonElement.onclick = renderAddNumberModal

    contactsHeaderElement.appendChild(backButtonElement)
    contactsHeaderElement.appendChild(contactsTitleElement)
    contactsHeaderElement.appendChild(plusButtonElement)
    appElement.insertBefore(contactsHeaderElement, footerElement)

    const searchFieldWrapperElement = document.createElement("div")
    searchFieldWrapperElement.id = ELEMENT_IDS.searchFieldWrapper

    const searchFieldElement = document.createElement("insert")
    searchFieldElement.id = ELEMENT_IDS.searchField
    searchFieldElement.placeholder = "Search"
    searchFieldElement.setAttribute("type", "text")

    const deleteSearchButtonElement = document.createElement("button")
    deleteSearchButtonElement.id = ELEMENT_IDS.deleteSearchButton
    deleteSearchButtonElement.innerText = INNER_TEXTS.deleteSearchButton

    const cancelSearchButtonElement = document.createElement("button")
    cancelSearchButtonElement.id = ELEMENT_IDS.cancelSearchButton
    cancelSearchButtonElement.innerText = INNER_TEXTS.cancelButtonElement

    searchFieldElement.appendChild(deleteSearchButtonElement)
    searchFieldWrapperElement.appendChild(searchFieldElement)
    searchFieldWrapperElement.appendChild(cancelSearchButtonElement)
    appElement.insertBefore(searchFieldWrapperElement, footerElement)

    CONTACTS.forEach((person) => {
        const contactElement = document.createElement("div")
        contactElement.id = ELEMENT_IDS.contact
        contactElement.innerText = `${person.firstName} ${person.lastName}`

        appElement.insertBefore(contactElement, footerElement)
    })
}

const renderFavourites = () => {
    handleFooterElementOnClick("favourites")
}

const renderRecents = () => {
    handleFooterElementOnClick("recents")
}

const renderKeypad = () => {
    handleFooterElementOnClick("keypad")

    // CREATE a separate helper function which similiar to above one which will remove everything from divs with IDs having tabName

    // RENDER_HEADER
    //RENDER_MAIN

    // ADD_NUMBER_ELEMENT
    addNumberElement.innerText = INNER_TEXTS.addNumberElement
    addNumberElement.style.visibility = "hidden"
    addNumberElement.onclick = () => {
        renderAddNumberModal()
    }

    // DELETE_BUTTON_ELEMENT
    deleteButtonElement.style.visibility = "hidden"
    deleteButtonElement.onclick = () => {
        renderDisplay()
    }

    DIAL_BUTTONS_ARRAY.forEach((button) => {
        const dialButtonElement = document.createElement("button")
        dialButtonElement.className = CLASS_NAMES.dialButton
        dialButtonElement.id = ELEMENT_IDS.dialButton

        // STILL_TO_FIX
        // let pressTimer

        dialButtonElement.onclick = () => {
            // clearTimeout(pressTimer);

            const numberToAdd = buttonValueElement.innerText

            // pressTimer = window.setTimeout(function () {
            //     numberToAdd = button.characters
            //     console.log(numberToAdd)
            // }, 1000);

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

const renderVoicemail = () => {
    handleFooterElementOnClick("voicemail")
}
//
//

// APP
const renderApp = () => {

    renderKeypad()
}
//

// START_APP
renderApp()