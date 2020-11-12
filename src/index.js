import {loadNavBar, loadFooter} from './helpers';
import {loadHomePage} from './homepage';
import {loadMenuPage} from './menu';
import {loadContactPage} from './contact';

// set global variable to main div
const content = document.getElementById("content");
let currentPage = 'Home';

// determine which page to load
function updatePage(tab) {
    // if click on current tab nothing happens
    if (tab !== currentPage) {
        // remove current content and load appropriate page
        removeContent();
        if (tab === 'Home') {
            loadHomePage(content);
        } else if (tab === 'Menu') {
            loadMenuPage(content);
        } else if (tab === 'Contact Us') {
            loadContactPage(content);
        } 
        loadFooter(content);
        // update global variable that keeps track of current page
        currentPage = tab;
    }
}

// remove main content and footer from page
function removeContent() {
    // first element is nav bar; each tab switch remove all content except nav bar
    while (content.lastChild.getAttribute("id") !== 'nav') {
        content.removeChild(content.lastChild);
    }
}

// add event listeners to all tabs
function addTabSwitch() {
    let tabs = Array.from(document.querySelectorAll('.nav-bar'));
    tabs.forEach(tab => tab.addEventListener('click', () => {
        let tabName = tab.getAttribute("id");
        console.log(tabName);
        updatePage(tabName);
    }));
}

// load home page content
loadNavBar(content)
loadHomePage(content)
loadFooter(content)
addTabSwitch()