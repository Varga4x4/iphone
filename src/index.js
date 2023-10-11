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
    contact: "contact-element",
    contactsControls: "contacts-controls",
    details: "details",
    dialButton: "dial-button",
    dialValues: "dial-values",
    displayText: "display-text",
    headerButtons: "header-buttons",
    modalControls: "modal-controls",
    newContactTitle: "new-contact",
}

const ELEMENT_IDS = {
    // ADD_CONTACT_MODAL
    addEmail: "email",
    addFirstName: "first-name",
    addLastName: "last-name",
    addPhoneNumber: "phone-number",
    addPhoto: "add-photo",
    addPhotoWrapper: "add-photo-wrapper",
    addContactModal: "add-contact-modal",

    // CONTACTS_TAB
    contactsTab: "contacts-tab",
    contactsTabButton: "contacts-button",
    contactsTabSearchWrapper: 'contacts-tab-search-wrapper',
    contactsHeader: "contacts-header-element",
    contactsTitle: "contacts-title",
    contactsWrapper: "contacts-wrapper",
    searchField: "search-field",
    //

    // RECENTS_TAB
    recentsTab: "recents-tab",
    recentsTabButton: "recents-button",
    //

    // FAVOURITES_TAB
    favouritesTab: "favourites-tab",
    favouritesTabButton: "favourites-button",
    //

    // VOICEMAIL_TAB
    voicemailTab: "voicemail-tab",
    voicemailTabButton: "voicemail-button",
    //

    // KEYPAD_TAB
    addNumber: "add-number",
    buttonCharacters: "button-characters",
    callTab: 'call-tab',
    callButton: "call-button",
    callRemoveButtonWrapper: "call-remove-button-wrapper",
    deleteButton: "delete-button",
    dialButton: "dial",
    dialButtonPad: "dial-button-pad",
    keypadTabHeaderDisplay: "display",
    header: "header",
    keypadTab: "keypad-tab",
    keypadTabButton: "keypad-button",
    main: "main",
    //

    // IN_CALL_TAB
    endButton: "end-button",
    endButtonElementWrapper: "end-button-element-wrapper",
    inCallFooter: "in-call-footer",
    inCallOptionsButton: "in-call-options-button",
    inCallTabHeaderDisplay: "in-call-header-display",
    //

    app: "app",
}

const INPUTS = [
    {
        id: ELEMENT_IDS.addFirstName,
        className: CLASS_NAMES.details,
        placeholder: "First name",
        attribute: "text"
    },
    {
        id: ELEMENT_IDS.addLastName,
        className: CLASS_NAMES.details,
        placeholder: "Last name",
        attribute: "text"
    },
    {
        id: ELEMENT_IDS.addPhoneNumber,
        className: CLASS_NAMES.details,
        getValue: (element) => element.innerText,
        idOfElementHavingValue: ELEMENT_IDS.keypadTabHeaderDisplay
    },
    {
        id: ELEMENT_IDS.addEmail,
        className: CLASS_NAMES.details,
        placeholder: "E-mail",
        attribute: "email"
    },
]

const INNER_TEXTS = {
    addNumberElement: "Add Number",
    callHeader: "Calling...",
    addPhotoElement: "Add Photo",
    backButtonElement: "Back",
    cancelButtonElement: "Cancel",
    deleteSearchButton: "x",
    dialValuesCall: "Call",
    dialValuesDelete: "X",
    contactsTitleElement: "Contacts",
    doneButttonElement: "Done",
    endButtonElement: "End",
    newContactTitleElement: "New Contact",
    plusButtonElement: "+",
}
//

// ELEMENTS
const appElement = document.getElementById(ELEMENT_IDS.app)
const callButtonElement = document.getElementById(ELEMENT_IDS.callButton)
const callDeleteWrapperElement = document.getElementById(ELEMENT_IDS.callRemoveButtonWrapper)
const contactsButtonElement = document.getElementById(ELEMENT_IDS.contactsTabButton)
const deleteButtonElement = document.getElementById(ELEMENT_IDS.deleteButton)
const dialButtonPadElement = document.getElementById(ELEMENT_IDS.dialButtonPad)
const favouritesButtonElement = document.getElementById(ELEMENT_IDS.favouritesTabButton)
const appfooterElement = document.querySelector(`#${ELEMENT_IDS.app} > footer`)


// WRONG
const headerElement = document.getElementById(ELEMENT_IDS.header)
const keypadButtonElement = document.getElementById(ELEMENT_IDS.keypadTabButton)
// WRONG
const mainElement = document.getElementById(ELEMENT_IDS.main)
const callTabElement = document.getElementById(ELEMENT_IDS.callTab)
const recentsButtonElement = document.getElementById(ELEMENT_IDS.recentsTabButton)
const voicemailButtonElement = document.getElementById(ELEMENT_IDS.voicemailTabButton)

//// TABS
const contactsTabElement = document.getElementById(ELEMENT_IDS.contactsTab)
const favouritesTabElement = document.getElementById(ELEMENT_IDS.favouritesTab)
const keypadTabElement = document.getElementById(ELEMENT_IDS.keypadTab)
const recentsTabElement = document.getElementById(ELEMENT_IDS.recentsTab)
const voicemailTabElement = document.getElementById(ELEMENT_IDS.voicemailTab)
////
//

// HELPERS
const handleFooterElementOnClick = (tabName) => {
    const allTabIds = Object.entries(ELEMENT_IDS)
        .filter(entry => entry[0].endsWith('TabButton'))
        .map(entry => entry[1])
    const tabNameTabButtonIdValue = ELEMENT_IDS[`${tabName}TabButton`]

    allTabIds.forEach((tabId) => {
        document.getElementById(tabId).disabled = tabId === tabNameTabButtonIdValue
    })
}

const removeElementsOnTabChange = (tabName) => {
    const allTabIds = Object.entries(ELEMENT_IDS)
        .filter(entry => entry[0].endsWith('Tab'))
        .map(entry => entry[1])
    const tabNameIdValue = ELEMENT_IDS[`${tabName}Tab`]

    allTabIds.forEach(id => {
        const tabElement = document.getElementById(id)
        tabElement.style.display = tabNameIdValue === id ? 'flex' : 'none'
        tabElement.innerHTML = ''
    })
}

const createElement = (tagType, attrObj, parentElement) => {
    if (!tagType) {
        throw new Error("Error 2");
    }

    const newElement = document.createElement(tagType)

    if (attrObj) {
        Object.entries(attrObj).forEach((entry) => {
            newElement[entry[0]] = entry[1]
        })
    }

    if (parentElement) {
        parentElement.append(newElement)
    }

    return newElement
}
//

// MODULES
// HIDDEN VIEWS
// RENDER_CALL working!
const renderCall = (phoneNumber) => {
    handleFooterElementOnClick("call")
    removeElementsOnTabChange('call')

    appfooterElement.style.visibility = "hidden"

    // HEADER
    const headerElement = createElement('header', undefined, callTabElement)

    createElement('p', {
        id: ELEMENT_IDS.inCallTabHeaderDisplay,
        innerText: phoneNumber
    }, headerElement)

    createElement('p', {
        className: CLASS_NAMES.displayText,
        innerText: INNER_TEXTS.callHeader
    }, headerElement)
    // 

    // MAIN
    const mainElement = createElement('main', undefined, callTabElement)
    IN_CALL_BUTTONS_ARRAY.forEach((button) => {
        createElement("button", {
            id: ELEMENT_IDS.inCallOptionsButton,
            className: CLASS_NAMES.dialButton,
            innerText: button.value
        }, mainElement)
    })
    //

    // FOOTER
    const footerElement = createElement("footer", {
        id: ELEMENT_IDS.inCallFooter
    }, callTabElement)

    const endButtonElement = createElement("button", {
        id: ELEMENT_IDS.endButton,
        className: CLASS_NAMES.dialButton,
        onclick: () => {
            appfooterElement.style.visibility = "visible"
            renderKeypad()
        }
    }, footerElement)

    createElement("p", {
        className: CLASS_NAMES.dialValues,
        innerText: INNER_TEXTS.endButtonElement
    }, endButtonElement)
    // 
}

// ADD CONTACT MODAL
const renderAddContactModal = () => {
    const modalElement = createElement("aside", {
        id: ELEMENT_IDS.addContactModal
    })

    // HEADER
    const headerElement = createElement("header", undefined, modalElement)

    createElement("button", {
        innerText: INNER_TEXTS.cancelButtonElement,
        className: CLASS_NAMES.headerButtons,
        onclick: () => {
            modalElement.remove()
        }
    }, headerElement)

    createElement("p", {
        innerText: INNER_TEXTS.newContactTitleElement,
        className: CLASS_NAMES.newContactTitle
    }, headerElement)

    createElement("button", {
        innerText: INNER_TEXTS.doneButttonElement,
        className: CLASS_NAMES.headerButtons,
        // TODO: fix it
        // disabled: true,
        onclick: () => {
            const lastNameElement = document.getElementById(ELEMENT_IDS.addLastName)
            const firstNameElement = document.getElementById(ELEMENT_IDS.addFirstName)
            const phoneNumberElement = document.getElementById(ELEMENT_IDS.addPhoneNumber)
            const emailElement = document.getElementById(ELEMENT_IDS.addEmail)
            const newContact = {
                lastName: lastNameElement.value,
                phoneNumber: phoneNumberElement.value,
                eMail: emailElement.value,
                firstName: firstNameElement.value,
            }
            CONTACTS.push(newContact)

            modalElement.remove()
        }
    }, headerElement)
    //

    // MAIN
    const mainElement = createElement("main", undefined, modalElement)

    //// ADD PHOTO
    const addPhotoElementWrapper = createElement("div", {
        id: ELEMENT_IDS.addPhotoWrapper
    }, mainElement)

    createElement('button', {
        innerText: INNER_TEXTS.addPhotoElement,
        id: ELEMENT_IDS.addPhoto,
        onclick: () => console.log("Select photo from Gallery")
    }, addPhotoElementWrapper)
    ////

    // TODO: when fields has some values, then DONE button should be on/off
    INPUTS.forEach((input) => {
        const inputElement = createElement("input", {
            id: input.id,
            className: input.className
        }, mainElement)

        if (input.placeholder) {
            inputElement.placeholder = input.placeholder
        }

        if (input.getValue && input.idOfElementHavingValue) {
            const elementHavingValue = document.getElementById(input.idOfElementHavingValue)
            inputElement.value = input.getValue(elementHavingValue)
        }

        inputElement.setAttribute("type", input.attribute)
    })
    //

    document.body.insertBefore(modalElement, appElement)
}
//

// VIEWS
const renderContacts = () => {
    handleFooterElementOnClick("contacts")
    removeElementsOnTabChange("contacts")

    // HEADER
    const headerElement = createElement("header", undefined, contactsTabElement)
    createElement("button", {
        innerText: INNER_TEXTS.backButtonElement,
        className: CLASS_NAMES.headerButtons,
        onclick: renderKeypad
    }, headerElement)

    createElement("p", {
        id: ELEMENT_IDS.contactsTitle,
        innerText: INNER_TEXTS.contactsTitleElement
    }, headerElement)

    createElement("button", {
        innerText: INNER_TEXTS.plusButtonElement,
        className: CLASS_NAMES.headerButtons,
        onclick: renderAddContactModal
    }, headerElement)
    //

    // MAIN
    const mainElement = createElement("main", undefined, contactsTabElement)

    //// SEARCH
    // TODO: improve styling
    const searchWrapperElement = createElement('div', {
        id: ELEMENT_IDS.contactsTabSearchWrapper
    }, mainElement)

    createElement("input", {
        id: ELEMENT_IDS.searchField,
        placeholder: "Search",
        type: "text"
    }, searchWrapperElement)

    createElement("button", {
        innerText: INNER_TEXTS.deleteSearchButton
    }, searchWrapperElement)

    createElement("button", {
        innerText: INNER_TEXTS.cancelButtonElement
    }, searchWrapperElement)
    ////

    //// CONTACTS
    const contactsWrapperElement = createElement("div", {
        id: ELEMENT_IDS.contactsWrapper
    })

    CONTACTS.forEach((person) => {
        const contactElement = createElement("button", {
            className: CLASS_NAMES.contact,
            innerText: `${person.firstName} ${person.lastName}`,
            onclick: () => console.log(person)
        })

        contactsWrapperElement.append(contactElement)
    }, contactsWrapperElement)

    mainElement.append(contactsWrapperElement)
    ////
    //
}

const renderFavourites = () => {
    handleFooterElementOnClick("favourites")
    removeElementsOnTabChange("favourites")
}

const renderRecents = () => {
    handleFooterElementOnClick("recents")
}

// RENDER_KEYPAD working!
const renderKeypad = () => {
    handleFooterElementOnClick("keypad")
    removeElementsOnTabChange("keypad")

    const headerElement = createElement("header", {
    }, keypadTabElement)

    const renderDisplay = (numberToAdd) => {
        // Remove old elements
        document.getElementById(ELEMENT_IDS.addNumber)?.remove()
        document.getElementById(ELEMENT_IDS.deleteButton)?.remove()
        callButtonElement.onclick = undefined

        const existingDisplayElement = document.getElementById(ELEMENT_IDS.keypadTabHeaderDisplay)
        const oldValue = existingDisplayElement?.innerText ?? ''
        existingDisplayElement?.remove()

        let newValue
        if (numberToAdd) {
            newValue = oldValue + numberToAdd
        } else {
            newValue = oldValue.slice(0, oldValue.length - 1)
        }

        if (newValue.length) {
            createElement("div", {
                id: ELEMENT_IDS.keypadTabHeaderDisplay,
                innerText: newValue
            }, headerElement)

            createElement('button', {
                id: ELEMENT_IDS.addNumber,
                innerText: INNER_TEXTS.addNumberElement,
                onclick: renderAddContactModal
            }, headerElement)

            const deleteButtonElement = createElement('button', {
                id: ELEMENT_IDS.deleteButton,
                className: CLASS_NAMES.dialButton,
                onclick: () => renderDisplay()
            })

            createElement('p', {
                className: CLASS_NAMES.dialValues,
                innerText: INNER_TEXTS.dialValuesDelete
            }, deleteButtonElement)

            callDeleteWrapperElement.append(deleteButtonElement)

            callButtonElement.onclick = () => renderCall(newValue)
        }
    }

    // MAIN THREAD
    const mainElement = createElement("main", {
    }, keypadTabElement)

    const dialButtonPadElement = createElement("div", {
        id: ELEMENT_IDS.dialButtonPad
    }, mainElement)

    const callDeleteWrapperElement = createElement("div", {
        id: ELEMENT_IDS.callRemoveButtonWrapper
    }, mainElement)

    const callButtonElement = createElement("button", {
        id: ELEMENT_IDS.callButton,
        className: CLASS_NAMES.dialButton
    }, callDeleteWrapperElement)

    createElement("p", {
        className: CLASS_NAMES.dialValues,
        innerText: INNER_TEXTS.dialValuesCall
    }, callButtonElement)

    DIAL_BUTTONS_ARRAY.forEach((button) => {
        const dialButtonElement = createElement("button", {
            className: CLASS_NAMES.dialButton,
            id: ELEMENT_IDS.dialButton,
            onclick: () => renderDisplay(buttonValueElement.innerText)
        }, dialButtonPadElement)

        const buttonValueElement = createElement('p', {
            innerText: button.value,
            className: CLASS_NAMES.dialValues
        }, dialButtonElement)

        if (button.characters !== undefined) {
            createElement('p', {
                id: ELEMENT_IDS.buttonCharacters,
                innerText: button.characters
            }, dialButtonElement)
        }
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