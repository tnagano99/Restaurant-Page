// create Contact Us page
const loadContactPage = (content) => {
    // create container for Contact page
    let contactPage = document.createElement("div");
    contactPage.setAttribute("id", 'contact-container');
    content.appendChild(contactPage);
    // add title to contact page
    let contactTitle = document.createElement("h1");
    contactTitle.setAttribute("class", "title");
    contactTitle.textContent = "Contact Us";
    contactPage.appendChild(contactTitle);
    // add container for form
    let formContainer = document.createElement("div");
    formContainer.setAttribute("id", "form-container");
    content.appendChild(formContainer);
    // add label and text field for form entries
    let formElements = ["Name", "E-mail", "Inquiry"]
    for (let i = 0; i < formElements.length; i++){
        // create label for text field
        let formLabel = document.createElement("label");
        formLabel.setAttribute("for", `form${formElements[i]}`);
        formLabel.textContent = `${formElements[i]}: `;
        formContainer.append(formLabel);
        // create space between fields
        let br1 = document.createElement("br");
        formContainer.appendChild(br1);
        // create textfield
        let formInput = document.createElement("input");
        formInput.setAttribute("type", "text");
        formInput.setAttribute("id", `form${formElements[i]}`);
        formInput.setAttribute("class", "formElements");
        formInput.setAttribute("placeholder", `Enter your ${formElements[i]}`);
        formContainer.append(formInput);
        // create space between fields
        // let br1 = document.createElement("br");
        let br2 = document.createElement("br");
        // formContainer.appendChild(br1);
        formContainer.appendChild(br2);
    }
    // add a submit button
    let subButton = document.createElement("input");
    subButton.setAttribute("type", "submit");
    subButton.setAttribute("id", "formSubmit");
    subButton.setAttribute("value", "Submit Form");
    formContainer.append(subButton);
}

export {loadContactPage}