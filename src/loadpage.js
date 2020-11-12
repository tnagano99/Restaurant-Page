const loadNavBar = (content) => {
    // create nav bar container
    let navBar = document.createElement("div");
    navBar.setAttribute('id', 'nav');
    content.appendChild(navBar);
    // create list for tabs
    let uList = document.createElement('ul')
    navBar.appendChild(uList);
    // create elements for list
    let tabNames = ['Home', 'Menu', 'Contact Us', 'About'];
    for (let i = 0; i < tabNames.length; i++) {
        let tab = document.createElement("li")
        tab.setAttribute("class", "nav-bar");
        tab.textContent = tabNames[i];
        uList.appendChild(tab);
    }
}

const loadHomePage = (content) => {
    // create title container
    let titleHome = document.createElement("div");
    titleHome.setAttribute("id", "titleHome");
    titleHome.setAttribute("class", "title-container");
    content.appendChild(titleHome);
    // add title to title container
    let title = document.createElement("h1");
    title.setAttribute("class", "title");
    title.textContent = "The 19th Hole";
    titleHome.appendChild(title);
    // create container for main content
    let mainPage = document.createElement("div");
    mainPage.setAttribute("id", "main-page");
    content.appendChild(mainPage)
    // add content to main content
    let img = document.createElement("img");
    img.setAttribute("id", "golf-course");
    img.setAttribute("src", "images/Golf-Course.jpg");
    img.setAttribute("alt", "Golf Course Flyover");
    mainPage.appendChild(img);
    // add welcome message to main content;
    let message = document.createElement("p");
    message.setAttribute("id", "message");
    message.textContent = "Welcome to The 19th Hole! The 19th hole is a golfer's paradise after a long day on the links. We provide first class service with a wide selection of specialty items and beverages."
    mainPage.append(message);
}

const loadFooter = (content) => {
    // create container for footer
    let footer = document.createElement("div");
    footer.setAttribute("id", "footer");
    content.append(footer)
    // add footer message
    let message = document.createElement("p");
    message.setAttribute("id", "footer-message");
    message.textContent = "Created by Tyler Nagano for The Odin Project."
    footer.appendChild(message);
    // add link to github
    let github = document.createElement("a");
    github.setAttribute("href", "https://github.com/tnagano99/Restaurant-Page");
    github.setAttribute("id", "github");
    github.textContent = "GitHub";
    footer.appendChild(github);
}

export {loadNavBar, loadFooter, loadHomePage}