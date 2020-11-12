// create menu page
const loadMenuPage = (content) => {
    // create container for Menu page
    let menuPage = document.createElement("div");
    menuPage.setAttribute("id", 'menu-container');
    content.appendChild(menuPage);
    // add title to menu page
    let menuTitle = document.createElement("h1");
    menuTitle.setAttribute("class", "title");
    menuTitle.textContent = "The 19th Hole Menu";
    menuPage.appendChild(menuTitle);
    // create menu items to add to tables
    let headers = ["Food", "Drinks"];
    let food = [{"name": "Hot Dog", "price": "$4.50"}, {"name": "Hamburger", "price": "$5.50"}, {"name": "Nachos", "price": "$8.50"}, {"name": "Fries", "price": "$2.50"}]
    let drinks = [{"name": "Heineken", "price": "$5.50"}, {"name": "Stella Artois", "price": "$5.50"}, {"name": "Coors Light", "price": "$4.50"}, {"name": "Bud Light", "price": "$4.00"}]
    // add containers for food and drinks
    for (let i = 0; i < headers.length; i++){
        // create container for table and title
        let menuContainer = document.createElement("div");
        menuContainer.setAttribute("id", `${headers[i]}-container`);
        content.appendChild(menuContainer);
        // create container for table title
        let menuTitleContainer = document.createElement("div");
        menuTitleContainer.setAttribute("id", `${headers[i]}-title-container`);
        menuContainer.appendChild(menuTitleContainer);
        // create title for table
        let menuTitle = document.createElement("h2");
        menuTitle.setAttribute("id", `${headers[i]}-title`);
        menuTitle.textContent = `${headers[i]}`;
        menuTitleContainer.appendChild(menuTitle);
        // create container for table
        let menuTableContainer = document.createElement("div");
        menuTableContainer.setAttribute("id", `${headers[i]}-table-container`);
        menuContainer.appendChild(menuTableContainer);
        // create table
        let menuTable = document.createElement("table");
        menuTable.setAttribute("id", `${headers[i]}-table`);
        menuTableContainer.appendChild(menuTable);
        let menuBody = document.createElement("tbody");
        menuBody.setAttribute("id", `${headers[i]}-body`);
        menuTable.appendChild(menuBody);
        // create rows with data for appropriate menu
        let menu = drinks;
        if (headers[i] === "Food") {
            menu = food;
        }
        for (let j = 0; j < menu.length; j++) {
            // create row in table
            let menuRow = document.createElement("tr");
            menuRow.setAttribute("class", `${headers[i]}`);
            menuBody.appendChild(menuRow);
            // add name of item to row
            let menuItem = document.createElement("td");
            menuItem.setAttribute("class", "items");
            menuItem.textContent = menu[j].name;
            menuRow.appendChild(menuItem);
            // add price of item to row
            let menuPrice = document.createElement("td");
            menuPrice.setAttribute("class", "prices");
            menuPrice.textContent = menu[j].price;
            menuRow.appendChild(menuPrice);
        }
    }
}

export {loadMenuPage}