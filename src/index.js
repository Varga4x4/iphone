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
    details: "details",
    dialButton: "dial-button",
    dialValues: "dial-values",
    displayText: "display-text",
    main: "main",
    modalControls: "modal-controls",
    newContactTitle: "new-contact",
}

const ELEMENT_IDS = {
    // CONTACTS_TAB
    addDetailsElementWrapper: "add-details-element-wrapper",
    addEmail: "email",
    addFirstName: "first-name",
    addLastName: "last-name",
    addPhoto: "add-photo",
    addPhoneNumber: "phone-number",
    addPhotoElementWrapper: "add-photo-element-wrapper",
    cancelSearchButton: "cancel-search-button",
    contact: "contact-element",
    contactsTab: "contacts-tab",
    contactsTabButton: "contacts-button",
    contactsHeader: "contacts-header-element",
    contactsTitle: "contacts-title",
    modal: "modal",
    modalControlWrapper: "modal-control-wrapper",
    searchField: "search-field",
    searchFieldWrapper: "search-field-wrapper",
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
    deleteSearchButton: "delete-search-button",
    dialButton: "dial",
    dialButtonPad: "dial-button-pad",
    display: "display",
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
    //

    app: "app",
    footer: "footer",
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
        // getValue: (displayElement3) => {
        //     return displayElement3.innerText
        // } ==> still not working
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
const callDeleteWrapperElement = document.getElementById(ELEMENT_IDS.callRemoveButtonWrapper)
const contactsButtonElement = document.getElementById(ELEMENT_IDS.contactsTabButton)
const deleteButtonElement = document.getElementById(ELEMENT_IDS.deleteButton)
const dialButtonPadElement = document.getElementById(ELEMENT_IDS.dialButtonPad)
const displayElement = document.getElementById(ELEMENT_IDS.display)
const favouritesButtonElement = document.getElementById(ELEMENT_IDS.favouritesTabButton)
const footerElement = document.querySelector(ELEMENT_IDS.footer)
const headerElement = document.querySelector(ELEMENT_IDS.header)
const keypadButtonElement = document.getElementById(ELEMENT_IDS.keypadTabButton)
const mainElement = document.querySelector(ELEMENT_IDS.main)
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
// MODAL
const renderAddNumberModal = () => {
    const modalElement = createElement("div", {
        id: ELEMENT_IDS.modal
    })

    const modalControlWrapperElement = createElement("div", {
        id: ELEMENT_IDS.modalControlWrapper
    }, modalElement)

    const addPhotoElementWrapper = createElement("div", {
        id: ELEMENT_IDS.addPhotoElementWrapper
    }, modalElement)

    const addDetailsElementWrapper = document.createElement("div", {
        id: ELEMENT_IDS.addDetailsElementWrapper
    }, modalElement)

    createElement("button", {
        innerText: INNER_TEXTS.cancelButtonElement,
        className: CLASS_NAMES.modalControls,
        onclick: () => {
            modalElement.remove()
        }
    }, modalControlWrapperElement)

    createElement("p", {
        innerText: INNER_TEXTS.newContactTitleElement,
        className: CLASS_NAMES.newContactTitle
    }, modalControlWrapperElement)

    INPUTS.forEach((input) => {
        const inputElement = createElement("input", {
            id: input.id,
            className: input.className
        }, addDetailsElementWrapper)

        if (input.placeholder) {
            inputElement.placeholder = input.placeholder
        }

        if (input.getValue) {
            inputElement.value = input.getValue()
        }

        inputElement.setAttribute("type", input.attribute)
    })

    createElement("button", {
        innerText: INNER_TEXTS.doneButttonElement,
        className: CLASS_NAMES.modalControls,
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
    }, modalControlWrapperElement)

    createElement("p", {
        innerText: INNER_TEXTS.addPhotoElement,
        id: ELEMENT_IDS.addPhoto,
        onclick: () => {
            console.log("Select photo from Gallery")
        }
    }, addPhotoElementWrapper)

    // If I switch off these, Add Number not working, if it is on, it's good, don't know why...
    // modalElement.append(
    //     modalControlWrapperElement,
    //     addPhotoElementWrapper,
    //     addDetailsElementWrapper
    // )
    document.body.insertBefore(modalElement, appElement)
}
//

// HIDDEN VIEWS
const renderCall = (phoneNumber) => {
    handleFooterElementOnClick("call")
    removeElementsOnTabChange('call')
    document.getElementById("footer").style.visibility = "hidden"

    const headerElement = createElement('header', undefined, callTabElement)

    createElement('p', {
        id: ELEMENT_IDS.display,
        innerText: phoneNumber
    }, headerElement)

    createElement('p', {
        className: CLASS_NAMES.displayText,
        innerText: INNER_TEXTS.callHeader
    }, headerElement)

    const mainElement = createElement('main', undefined, callTabElement)
    IN_CALL_BUTTONS_ARRAY.forEach((button) => {
        createElement("button", {
            id: ELEMENT_IDS.inCallOptionsButton,
            className: CLASS_NAMES.dialButton,
            innerText: button.value
        }, mainElement)
    })

    const footerElement = createElement("footer", {
        id: ELEMENT_IDS.inCallFooter
    }, callTabElement)

    const endButtonElement = createElement("button", {
        id: ELEMENT_IDS.endButton,
        className: CLASS_NAMES.dialButton,
        onclick: () => {
            document.getElementById("footer").style.visibility = "visible"
            renderKeypad()
        }
    }, footerElement)

    createElement("p", {
        className: CLASS_NAMES.dialValues,
        innerText: INNER_TEXTS.endButtonElement
    }, endButtonElement)
}

// VIEWS
const renderContacts = () => {
    handleFooterElementOnClick("contacts")
    removeElementsOnTabChange("contacts")

    const contactsHeaderElement = createElement("div", {
        id: ELEMENT_IDS.contactsHeader
    }, contactsTabElement)

    createElement("button", {
        innerText: INNER_TEXTS.backButtonElement,
        className: CLASS_NAMES.contactsControls,
        onclick: () => {
            document.querySelectorAll("#contacts-header-element, #contact-element, #search-field-wrapper").forEach((oldElement) => oldElement.remove())

            document.getElementById(ELEMENT_IDS.contactsTabButton).disabled = false

            callDeleteWrapperElement.append(callButtonElement, deleteButtonElement)
            mainElement.appendChild(callDeleteWrapperElement)

            contactsTabElement.append(headerElement, mainElement, footerElement)
        }
    }, contactsHeaderElement)

    createElement("p", {
        id: ELEMENT_IDS.contactsTitle,
        innerText: INNER_TEXTS.contactsTitleElement
    }, contactsHeaderElement)

    createElement("button", {
        innerText: INNER_TEXTS.plusButtonElement,
        className: CLASS_NAMES.contactsControls,
        onclick: renderAddNumberModal
    }, contactsHeaderElement)

    createElement("div", {
        id: ELEMENT_IDS.searchFieldWrapper
    }, contactsTabElement)

    const searchFieldElement = createElement("insert", {
        id: ELEMENT_IDS.searchField,
        placeholder: "Search",
        attribute: "text"
    }, searchFieldWrapperElement)

    createElement("button", {
        id: ELEMENT_IDS.deleteSearchButton,
        innerText: INNER_TEXTS.deleteSearchButton
    }, searchFieldElement)

    createElement("button", {
        id: ELEMENT_IDS.cancelSearchButton,
        innerText: INNER_TEXTS.cancelButtonElement
    }, searchFieldWrapperElement)

    CONTACTS.forEach((person) => {
        createElement("div", {
            id: ELEMENT_IDS.contact,
            innerText: `${person.firstName} ${person.lastName}`
        }, appElement)
    })
}

const renderFavourites = () => {
    handleFooterElementOnClick("favourites")
    removeElementsOnTabChange("favourites")
}

const renderRecents = () => {
    handleFooterElementOnClick("recents")
}

const renderKeypad = () => {
    handleFooterElementOnClick("keypad")
    removeElementsOnTabChange("keypad")

    const headerElement = createElement("header", {
    }, keypadTabElement)

    const renderDisplay = (numberToAdd) => {
        const displayElement = createElement("div", {
            id: ELEMENT_IDS.display,
            innerText: INNER_TEXTS.displayElement
        })

        // Remove old elements
        document.getElementById(ELEMENT_IDS.addNumber)?.remove()
        document.getElementById(ELEMENT_IDS.deleteButton)?.remove()

        const oldValue = displayElement.innerText

        let newValue
        if (numberToAdd) {
            newValue = oldValue + numberToAdd
        } else {
            newValue = oldValue.slice(0, oldValue.length - 1)
        }

        displayElement.innerText = newValue

        if (newValue.length) {
            headerElement.append(displayElement)

            createElement('p', {
                id: ELEMENT_IDS.addNumber,
                innerText: INNER_TEXTS.addNumberElement,
                onclick: () => {
                    console.log(displayElement.innerText)
                    renderAddNumberModal()
                }
            }, headerElement)

            const deleteButtonElement = createElement('button', {
                id: ELEMENT_IDS.deleteButton,
                className: CLASS_NAMES.dialButton,
                onclick: () => {
                    document.getElementById(ELEMENT_IDS.display)?.remove()
                    renderDisplay()
                }
            })

            createElement('p', {
                className: CLASS_NAMES.dialValues,
                innerText: INNER_TEXTS.dialValuesDelete
            }, deleteButtonElement)

            callDeleteWrapperElement.append(deleteButtonElement)
        }

        callButtonElement.onclick = () => {
            if (newValue.length) {
                renderCall(newValue)
            }
        }
    }

    // MAIN THREAD
    const mainElement = createElement("main", {
        className: CLASS_NAMES.main
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
            onclick: () => {
                const numberToAdd = buttonValueElement.innerText
                renderDisplay(numberToAdd)
            }
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