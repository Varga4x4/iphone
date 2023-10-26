const CONTACTS_LOCAL_STORAGE_KEY = "ContactsMemory"

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
        id: "mute",
        value: "mute"
    },
    {
        id: "in-call-keypad",
        value: "keypad"
    },
    {
        id: "speaker",
        value: "speaker"
    },
    {
        id: "add-call",
        value: "add call"
    },
    {
        id: "face-time",
        value: "FaceTime"
    },
    {
        id: "in-call-contacts",
        value: "contacts"
    }
]

const CLASS_NAMES = {
    // ADD_CONTACT_MODAL
    contact: "contact-element",
    contactsControls: "contacts-controls",
    details: "details",
    modalControls: "modal-controls",
    //

    // KEYPAD_TAB
    dialButton: "dial-button",
    dialValues: "dial-values",
    displayText: "display-text",
    //

    // CREATE_HEADER_FUNCTION
    headerButtons: "header-buttons",
    headerTitle: "header-title",
    //

    // CONTACT_TAB
    contactContactOptionsButton: "contact-contact-options-button",
    //
}

const ELEMENT_IDS = {
    // ADD_CONTACT_MODAL
    addEmail: "email",
    addFirstName: "first-name",
    addLastName: "last-name",
    addPhoneNumber: "add-phone-number",
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
    favouriteContactsWrapperElement: "favourites-wrapper-element",
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
    inCallContacts: "in-call-contacts",
    inCallFooter: "in-call-footer",
    inCallOptionsButton: "in-call-options-button",
    inCallTabHeaderDisplay: "in-call-header-display",
    hideButton: "hide-button",

    //

    // CONTACT_TAB
    contactTab: "contact-tab",
    contactPhoto: "contact-photo",
    contactName: "contact-name",
    contactContactOptionsButtonsWrapper: "contact-contact-options-buttons-wrapper",
    contactPhoneNumberWrapper: "contact-phone-number-wrapper",
    contactEmailWrapper: "contact-email-wrapper",
    contactPhoneNumber: "contact-phone-number",
    contactPhotoElementWrapper: "contact-photo-element-wrapper",
    //

    // EDIT_CONTACT
    editContactTab: "edit-contact-tab",
    deleteContactButton: "delete-contact-button",
    addToFavouritesButton: "add-to-favourites-button",
    //
    app: "app",
    scroller: "scroller",
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
        placeholder: "Phone number",
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
    // ADD_NUMBER_MODAL
    addNumberElement: "Add Number",
    addPhotoElement: "Add Photo",
    //

    // CONTACTS_TAB
    cancelButtonElement: "Cancel",
    deleteSearchButton: "x",
    //

    // KEYPAD_TAB
    dialValuesCall: "Call",
    dialValuesDelete: "X",
    //

    // IN_CALL_TAB
    callHeader: "Calling...",
    endButtonElement: "End",
    hideButtonElement: "Hide",
    //

    // CREATE_HEADER_FUNCTION
    backButtonElement: "Back",
    contactsTitleElement: "Contacts",
    doneButttonElement: "Done",
    editButtonElement: "Edit",
    headerTitleElement: "New Contact",
    plusButtonElement: "+",
    //

    // RENDER_CONTACT_TAB
    videoCallButtonElement: "Video",
    messageButtonElement: "Message",
    emailButtonElement: "Email",
    phoneNumberElement: "Phone",
    //

    // EDIT_CONTACT_TAB
    deleteContactButton: "Delete Contact",
    addToFavouritesButton: "Add to favourites",
    //

    // FAVOURITES_TAB
    favouritesTitleElement: "Favourites"
    //
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
const headerElement = document.getElementById(ELEMENT_IDS.header)
const keypadButtonElement = document.getElementById(ELEMENT_IDS.keypadTabButton)
const mainElement = document.getElementById(ELEMENT_IDS.main)
const callTabElement = document.getElementById(ELEMENT_IDS.callTab)
const recentsButtonElement = document.getElementById(ELEMENT_IDS.recentsTabButton)
const voicemailButtonElement = document.getElementById(ELEMENT_IDS.voicemailTabButton)
const savedPhoneNumberElement = document.getElementById(ELEMENT_IDS.contactPhoneNumber)

//// TABS
const contactsTabElement = document.getElementById(ELEMENT_IDS.contactsTab)
const favouritesTabElement = document.getElementById(ELEMENT_IDS.favouritesTab)
const keypadTabElement = document.getElementById(ELEMENT_IDS.keypadTab)
const recentsTabElement = document.getElementById(ELEMENT_IDS.recentsTab)
const voicemailTabElement = document.getElementById(ELEMENT_IDS.voicemailTab)
const contactTabElement = document.getElementById(ELEMENT_IDS.contactTab)
const editContactTabElement = document.getElementById(ELEMENT_IDS.editContactTab)
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

    // edit-contactTab
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

const createGlobalHeader = ({ headerTitle, button1Label, button1OnClick, button2Label, button2OnClick, parentElement }) => {
    const headerElement = createElement("header", undefined, parentElement)
    createElement("button", {
        innerText: button1Label,
        // TODO: make it more generic
        className: CLASS_NAMES.headerButtons,
        onclick: button1OnClick
    }, headerElement)

    createElement("p", {
        // TODO: make it more generic
        id: ELEMENT_IDS.contactsTitle,
        innerText: headerTitle
    }, headerElement)

    createElement("button", {
        innerText: button2Label,
        // TODO: make it more generic
        className: CLASS_NAMES.headerButtons,
        onclick: button2OnClick
    }, headerElement)
}

const removeButtons = (element) => {
    element = document.querySelector("button")
    if (element) {
        element.remove()
    }
}
//

// MODULES
// HIDDEN VIEWS
// RENDER_CALL working!
const renderCall = (displayedPhoneNumber) => {
    handleFooterElementOnClick("call")
    removeElementsOnTabChange('call')

    appfooterElement.remove()
    callTabElement.style.background = "darkgrey"

    // HEADER
    const headerElement = createElement('header', undefined, callTabElement)

    const inCallTabHeaderDisplayElement = createElement('p', {
        id: ELEMENT_IDS.inCallTabHeaderDisplay,
        innerText: displayedPhoneNumber,
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
            id: button.id,
            className: CLASS_NAMES.dialButton,
            innerText: button.value
        }, mainElement)
    })

    const inCallKeypad = document.getElementById("in-call-keypad")
    inCallKeypad.onclick = () => {
        IN_CALL_BUTTONS_ARRAY.forEach((button) => {
            removeButtons()
        })

        const renderInCallTabHeaderDisplay = (numberToAdd) => {
            const oldValue = inCallTabHeaderDisplayElement.innerText

            let newValue
            if (numberToAdd) {
                newValue = oldValue + numberToAdd
            }

            if (newValue.length) {
                inCallTabHeaderDisplayElement.innerText = newValue
            }
        }

        const hideButtonElement = createElement('button', {
            id: ELEMENT_IDS.hideButton,
            className: CLASS_NAMES.dialButton,
            innerText: INNER_TEXTS.hideButtonElement,
            onclick: () => inCallTabHeaderDisplayElement.innerText = displayedPhoneNumber
        }, footerElement)

        DIAL_BUTTONS_ARRAY.forEach((button) => {
            const dialButtonElement = createElement("button", {
                className: CLASS_NAMES.dialButton,
                id: ELEMENT_IDS.dialButton,
                onclick: () => renderInCallTabHeaderDisplay(buttonValueElement.innerText)
            }, mainElement)

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

    const inCallContacts = document.getElementById(ELEMENT_IDS.inCallContacts)
    inCallContacts.onclick = () => {
        appElement.append(appfooterElement)
        removeElementsOnTabChange("contacts")
        renderContacts()
    }
    //

    // FOOTER
    const footerElement = createElement("footer", undefined, callTabElement)

    const endButtonElement = createElement("button", {
        id: ELEMENT_IDS.endButton,
        className: CLASS_NAMES.dialButton,
        onclick: () => {
            app.append(appfooterElement)
            renderKeypad()
        }
    }, footerElement)

    createElement("p", {
        className: CLASS_NAMES.dialValues,
        innerText: INNER_TEXTS.endButtonElement
    }, endButtonElement)
    // 
}

// ADD_CONTACT_MODAL
const renderAddContactModal = () => {
    const modalElement = createElement("aside", {
        id: ELEMENT_IDS.addContactModal
    })

    createGlobalHeader({
        headerTitle: INNER_TEXTS.headerTitleElement,
        button1Label: INNER_TEXTS.cancelButtonElement,
        button1OnClick: () => modalElement.remove(),
        button2Label: INNER_TEXTS.doneButttonElement,
        button2OnClick: () => {
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

            const previousContactsString = window.localStorage.getItem(CONTACTS_LOCAL_STORAGE_KEY)
            const previousContacts = previousContactsString ? JSON.parse(previousContactsString) : []

            const contacts = [...previousContacts, newContact]
            const contactsString = JSON.stringify(contacts)
            window.localStorage.setItem(CONTACTS_LOCAL_STORAGE_KEY, contactsString)

            modalElement.remove()
            renderContacts()
        },
        parentElement: modalElement
    })

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
            inputElement.value = elementHavingValue ? input.getValue(elementHavingValue) : ""
        }

        inputElement.setAttribute("type", input.attribute)
    })
    // 

    document.body.insertBefore(modalElement, appElement)

    // const firstNameElement = document.getElementById(ELEMENT_IDS.addFirstName)
    // let firstNameValue = firstNameElement.value
    // const lastNameElement = document.getElementById(ELEMENT_IDS.addLastName)
    // let lastNameValue = lastNameElement.value
    // const condition1 = !!(firstNameValue || lastNameValue)

    // const phoneNumberElement = document.getElementById(ELEMENT_IDS.addPhoneNumber)
    // const condition2 = !!phoneNumberElement.value

    // const shouldDoneButtonBeEnabled = condition1 && condition2
    // console.log({ shouldDoneButtonBeEnabled })

    // firstNameElement.addEventListener("keydown", (event) => {
    //     console.log(event.target.value)
    //     firstNameValue = event.target.value
    //     console.log({ condition1 })
    // })

    // lastNameElement.addEventListener("keydown", (event) => {
    //     console.log(event.target.value)
    //     lastNameValue = event.target.value
    // })
}

const renderContact = (person) => {
    handleFooterElementOnClick("contact")
    removeElementsOnTabChange("contact")
    createGlobalHeader({
        headerTitle: "",
        button1Label: INNER_TEXTS.backButtonElement,
        button1OnClick: renderContacts,
        button2Label: INNER_TEXTS.editButtonElement,
        button2OnClick: () => renderEditContact(person),
        parentElement: contactTabElement
    })

    // MAIN
    const mainElement = createElement("main", undefined, contactTabElement)

    const personName = `${person.firstName} ${person.lastName}`

    const contactPhotoElementWrapper = createElement("div", {
        id: ELEMENT_IDS.contactPhotoElementWrapper,
    }, mainElement)

    const contactPhotoElement = createElement("div", {
        id: ELEMENT_IDS.contactPhoto,
        innerText: personName.slice(0, 1)
    }, contactPhotoElementWrapper)

    const contactNameElement = createElement("p", {
        id: ELEMENT_IDS.contactName,
        innerText: personName,
    }, mainElement)

    const contactContactOptionsButtonsWrapperElement = createElement("div", {
        id: ELEMENT_IDS.contactContactOptionsButtonsWrapper
    }, mainElement)

    // MESSAGE_BUTTON_ELEMENT 
    createElement("button", {
        className: CLASS_NAMES.contactContactOptionsButton,
        innerText: INNER_TEXTS.messageButtonElement,
    }, contactContactOptionsButtonsWrapperElement)

    const callContactButtonElement = createElement("button", {
        className: CLASS_NAMES.contactContactOptionsButton,
        innerText: INNER_TEXTS.dialValuesCall,
        onclick: () => renderCall(contactNameElement.innerText),
    }, contactContactOptionsButtonsWrapperElement)

    const videoCallContactButtonElement = createElement("button", {
        className: CLASS_NAMES.contactContactOptionsButton,
        innerText: INNER_TEXTS.videoCallButtonElement,
    }, contactContactOptionsButtonsWrapperElement)

    const emailContactButtonElement = createElement("button", {
        className: CLASS_NAMES.contactContactOptionsButton,
        innerText: INNER_TEXTS.emailButtonElement,
    }, contactContactOptionsButtonsWrapperElement)

    const phoneNumberElementWrapper = createElement("div", {
        id: ELEMENT_IDS.contactPhoneNumberWrapper,
        innerText: INNER_TEXTS.phoneNumberElement
    }, mainElement)

    const phoneNumberElement = createElement("p", {
        id: ELEMENT_IDS.contactPhoneNumber,
        innerText: person.phoneNumber
    }, phoneNumberElementWrapper)

    const savedPhoneNumber = phoneNumberElement.innerText

    const emailElementWrapper = createElement("div", {
        id: ELEMENT_IDS.contactEmailWrapper,
        innerText: INNER_TEXTS.emailButtonElement
    }, mainElement)

    const emailElement = createElement("p", {
        innerText: person.eMail
    }, emailElementWrapper)

    const addToFavouritesButton = createElement("button", {
        id: ELEMENT_IDS.addToFavouritesButton,
        innerText: INNER_TEXTS.addToFavouritesButton,
        onclick: () => renderFavourites()
    }, mainElement)
}

const renderEditContact = (person) => {
    handleFooterElementOnClick("editContact")
    removeElementsOnTabChange("editContact")
    createGlobalHeader({
        headerTitle: "",
        button1Label: INNER_TEXTS.cancelButtonElement,
        button1OnClick: () => renderContact(person),
        button2Label: INNER_TEXTS.doneButttonElement,
        button2OnClick: () => console.log("This will edit the saved contact details"),
        parentElement: editContactTabElement
    })

    // MAIN
    const mainElement = createElement("main", undefined, editContactTabElement)

    const personName = `${person.firstName} ${person.lastName}`

    //// ADD PHOTO
    const contactPhotoElementWrapper = createElement("div", {
        id: ELEMENT_IDS.contactPhotoElementWrapper,
    }, mainElement)

    const contactPhotoElement = createElement("div", {
        id: ELEMENT_IDS.contactPhoto,
        innerText: personName.slice(0, 1)
    }, contactPhotoElementWrapper)

    createElement('button', {
        innerText: INNER_TEXTS.addPhotoElement,
        id: ELEMENT_IDS.addPhoto,
        onclick: () => console.log("Select photo from Gallery")
    }, contactPhotoElementWrapper)
    ////

    // TODO: fill up inputs with person data
    INPUTS.forEach((input) => {
        const inputElement = createElement("input", {
            id: input.id,
            className: input.className
        }, mainElement)

        if (input.placeholder) {
            inputElement.placeholder = input.placeholder
        }

        inputElement.setAttribute("type", input.attribute)
    })

    const editFirstName = document.getElementById("first-name")
    editFirstName.value = person.firstName

    const editLastName = document.getElementById("last-name")
    editLastName.value = person.lastName

    const editPhoneNumber = document.getElementById("add-phone-number")
    editPhoneNumber.value = person.phoneNumber

    const editEmail = document.getElementById("email")
    editEmail.value = person.eMail

    const deleteContactButton = createElement("button", {
        id: ELEMENT_IDS.deleteContactButton,
        innerText: INNER_TEXTS.deleteContactButton,
        onclick: () => console.log("This will delete the contact from memory")
    }, editContactTabElement)
}
//

// VIEWS
const renderContacts = () => {
    handleFooterElementOnClick("contacts")
    removeElementsOnTabChange("contacts")
    createGlobalHeader({
        headerTitle: INNER_TEXTS.contactsTitleElement,
        button1Label: INNER_TEXTS.backButtonElement,
        button1OnClick: renderKeypad,
        button2Label: INNER_TEXTS.plusButtonElement,
        button2OnClick: renderAddContactModal,
        parentElement: contactsTabElement
    })

    // MAIN
    const mainElement = createElement("main", undefined, contactsTabElement)

    //// SEARCH
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

    const scroller = createElement("div", {
        id: ELEMENT_IDS.scroller
    }, contactsWrapperElement)

    const contactsStrig = window.localStorage.getItem(CONTACTS_LOCAL_STORAGE_KEY)
    const contacts = contactsStrig ? JSON.parse(contactsStrig) : []
    contacts.forEach((person) => {
        const contactElement = createElement("button", {
            className: CLASS_NAMES.contact,
            innerText: `${person.firstName} ${person.lastName}`,
            onclick: () => renderContact(person)
        })

        scroller.append(contactElement)
    }, contactsWrapperElement)

    mainElement.append(contactsWrapperElement)
    ////
    //
}

const renderFavourites = () => {
    console.log("This will show favourites")
    handleFooterElementOnClick("favourites")
    removeElementsOnTabChange("favourites")
    createGlobalHeader({
        headerTitle: INNER_TEXTS.favouritesTitleElement,
        button1Label: INNER_TEXTS.plusButtonElement,
        button1OnClick: renderContacts,
        button2Label: INNER_TEXTS.editButtonElement,
        button2OnClick: console.log("This will edit the favourites"),
        parentElement: favouritesTabElement
    })

    const favouriteContactsWrapperElement = createElement("main", {
        id: ELEMENT_IDS.favouriteContactsWrapperElement,
    }, favouritesTabElement)
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