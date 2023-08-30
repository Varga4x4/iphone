; (() => {

    const appElement = document.createElement("div")
    appElement.id = "app"
    document.body.appendChild(appElement)

    // HEADER
    const headerElement = document.createElement("header")
    const displayElement = document.createElement("div")
    displayElement.id = "display"
    const addNumberElement = document.createElement("p")
    addNumberElement.innerText = "Add Number"

    appElement.appendChild(headerElement)
    headerElement.appendChild(displayElement)
    headerElement.appendChild(addNumberElement)

    // MAIN

    const mainElement = document.createElement("main")
    const buttonWrapperElement = document.createElement("div")
    buttonWrapperElement.id = "button-wrapper"
    const firstLineWrapper = document.createElement("div")
    firstLineWrapper.className = "line-wrapper"
    const button1Element = document.createElement("button")
    button1Element.id = "button-1"
    button1Element.innerText = "1"
    const button2Element = document.createElement("button")
    button2Element.id = "button-2"
    button2Element.innerText = "2"
    const button3Element = document.createElement("button")
    button3Element.id = "button-3"
    button3Element.innerText = "3"
    const secondLineWrapper = document.createElement("div")
    secondLineWrapper.className = "line-wrapper"
    const button4Element = document.createElement("button")
    button4Element.id = "button-4"
    button4Element.innerText = "4"
    const button5Element = document.createElement("button")
    button5Element.id = "button-5"
    button5Element.innerText = "5"
    const button6Element = document.createElement("button")
    button6Element.id = "button-6"
    button6Element.innerText = "6"
    const thirdLineWrapper = document.createElement("div")
    thirdLineWrapper.className = "line-wrapper"
    const button7Element = document.createElement("button")
    button7Element.id = "button-7"
    button7Element.innerText = "7"
    const button8Element = document.createElement("button")
    button8Element.id = "button-8"
    button8Element.innerText = "8"
    const button9Element = document.createElement("button")
    button9Element.id = "button-9"
    button9Element.innerText = "9"
    const fourthLineWrapper = document.createElement("div")
    fourthLineWrapper.className = "line-wrapper"
    const buttonStarElement = document.createElement("button")
    buttonStarElement.id = "star"
    buttonStarElement.innerText = "*"
    const button0Element = document.createElement("button")
    button0Element.id = "button-0"
    button0Element.innerText = "0"
    const buttonHashElement = document.createElement("button")
    buttonHashElement.id = "hash"
    buttonHashElement.innerText = "#"
    const fifthLineWrapper = document.createElement("div")
    fifthLineWrapper.className = "line-wrapper"
    const buttonCallElement = document.createElement("button")
    buttonCallElement.id = "call"
    buttonCallElement.innerText = "Call"
    const buttonXElement = document.createElement("button")
    buttonXElement.id = "button-x"
    buttonXElement.innerText = "X"

    headerElement.appendChild(mainElement)
    mainElement.appendChild(buttonWrapperElement)
    buttonWrapperElement.appendChild(firstLineWrapper)
    firstLineWrapper.appendChild(button1Element)
    firstLineWrapper.appendChild(button2Element)
    firstLineWrapper.appendChild(button3Element)
    buttonWrapperElement.appendChild(secondLineWrapper)
    secondLineWrapper.appendChild(button4Element)
    secondLineWrapper.appendChild(button5Element)
    secondLineWrapper.appendChild(button6Element)
    buttonWrapperElement.appendChild(thirdLineWrapper)
    thirdLineWrapper.appendChild(button7Element)
    thirdLineWrapper.appendChild(button8Element)
    thirdLineWrapper.appendChild(button9Element)
    buttonWrapperElement.appendChild(fourthLineWrapper)
    fourthLineWrapper.appendChild(buttonStarElement)
    fourthLineWrapper.appendChild(button0Element)
    fourthLineWrapper.appendChild(buttonHashElement)
    buttonWrapperElement.appendChild(fifthLineWrapper)
    fifthLineWrapper.appendChild(buttonCallElement)
    fifthLineWrapper.appendChild(buttonXElement)

    // FOOTER

    const footerElement = document.createElement("footer")
    const footerWrapperElement = document.createElement("div")
    footerWrapperElement.id = "footer-wrapper"
    const buttonFavouritesElement = document.createElement("button")
    buttonFavouritesElement.id = "button-favourites"
    buttonFavouritesElement.innerText = "Favourites"
    const buttonRecentsElement = document.createElement("button")
    buttonRecentsElement.id = "button-recents"
    buttonRecentsElement.innerText = "Recents"
    const buttonContactsElement = document.createElement("button")
    buttonContactsElement.id = "button-contacts"
    buttonContactsElement.innerText = "Contacts"
    const buttonKeypadElement = document.createElement("button")
    buttonKeypadElement.id = "button-keypad"
    buttonKeypadElement.innerText = "Keypad"
    const buttonVoicemailElement = document.createElement("button")
    buttonVoicemailElement.id = "button-voicemail"
    buttonVoicemailElement.innerText = "Voicemail"

    mainElement.appendChild(footerElement)
    footerElement.appendChild(footerWrapperElement)
    footerWrapperElement.appendChild(buttonFavouritesElement)
    footerWrapperElement.appendChild(buttonRecentsElement)
    footerWrapperElement.appendChild(buttonContactsElement)
    footerWrapperElement.appendChild(buttonKeypadElement)
    footerWrapperElement.appendChild(buttonVoicemailElement)

})()