// create the home page
const loadHomePage = (content) => {
    // create title container
    let titleHome = document.createElement("div");
    titleHome.setAttribute("id", "titleHome");
    titleHome.setAttribute("class", "title-container");
    content.appendChild(titleHome);
    // add title to title container
    let title = document.createElement("h1");
    title.setAttribute("class", "title");
    title.textContent = "Welcome to The 19th Hole";
    titleHome.appendChild(title);
    // create container for main content
    let mainPage = document.createElement("div");
    mainPage.setAttribute("id", "main-page");
    content.appendChild(mainPage);
    // add content to main content
    let img = document.createElement("img");
    img.setAttribute("id", "golf-course");
    img.setAttribute("src", "images/Golf-Course.jpg");
    img.setAttribute("alt", "Golf Course Flyover");
    mainPage.appendChild(img);
    // add welcome message to main content;
    let message = document.createElement("p");
    message.setAttribute("id", "message");
    message.textContent = "Welcome to The 19th Hole! The 19th hole is a golfer's paradise after a long day on the links. We provide first class service with a wide selection of specialty items and beverages.";
    mainPage.append(message);
}

export {loadHomePage}