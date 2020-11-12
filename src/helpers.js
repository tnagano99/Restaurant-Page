// create navigation bar
const loadNavBar = (content) => {
    // create nav bar container
    let navBar = document.createElement("div");
    navBar.setAttribute('id', 'nav');
    content.appendChild(navBar);
    // create list for tabs
    let uList = document.createElement('ul');
    uList.setAttribute("id", "nav-container");
    navBar.appendChild(uList);
    // create elements for links to tabs
    let tabNames = ['Home', 'Menu', 'Contact Us'];
    for (let i = 0; i < tabNames.length; i++) {
        // create list element
        let tab = document.createElement("li");
        tab.setAttribute("class", "nav-bar");
        tab.setAttribute("id", tabNames[i]);
        // create btn to page
        let link = document.createElement("a");
        link.setAttribute("href", "#");
        link.textContent = tabNames[i];
        tab.appendChild(link);
        uList.appendChild(tab);
    }
}

// create footer
const loadFooter = (content) => {
    // create container for footer
    let footer = document.createElement("div");
    footer.setAttribute("id", "footer");
    content.append(footer);
    // add footer message
    let message = document.createElement("p");
    message.setAttribute("id", "footer-message");
    message.innerHTML = "Created by Tyler Nagano for <a href='https://www.theodinproject.com/'>The Odin Project.</a> Code on <a href='https://github.com/tnagano99/Restaurant-Page'>Github</a>.";
    footer.appendChild(message);
}

export {loadNavBar, loadFooter}