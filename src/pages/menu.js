/**
 * Displays the menu
 * @return {string} - returns innerHTML of the menu page
 */
function displayMenu() {
    const content = document.createElement('div');
    const pageTitle = document.createElement('h2');
    const menuItems = document.createElement('div');
    const mainSubtitle = document.createElement('h3');
    const drinkSubtitle = document.createElement('h3');

    menuItems.className = "grid-div";

    const mainMenuItems = [
        {name: 'Chicken Sandwich', price: 8.90, calories: 120, 
        image: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2023/09/mayo-chicken-sandwich.jpg.webp'},
        {name: 'Beef Sandwich', price: 10.90, calories: 140, 
        image: 'https://www.tasteofhome.com/wp-content/uploads/2018/01/Savory-Beef-Sandwiches_EXPS_HSCBZ17_9191_B07_27_4b.jpg?fit=700%2C1024'},
        {name: 'Beef and Chicken Sandwich', price: 8.90, calories: 120, 
        image: 'https://somethingaboutsandwiches.com/wp-content/uploads/2021/04/grilled-chicken-sandwich.jpg'},
    ];
    
    const drinkMenuItems = [
        {name: 'Coffee', price: 3.50, calories: 5, 
        image: 'https://insanelygoodrecipes.com/wp-content/uploads/2020/07/Cup-Of-Creamy-Coffee-1024x536.webp'},
        {name: 'Hong Kong Milk Tea', price: 5.50, calories: 5, 
        image: 'https://carmyy.com/wp-content/uploads/2021/12/Hong-Kong-Milk-Tea-5.jpg'},
        {name: 'Juice', price: 2.50, calories: 20, 
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Orange_juice_1.jpg/844px-Orange_juice_1.jpg'},
    ];

    mainSubtitle.innerText = "Mains";
    menuItems.appendChild(mainSubtitle);
    for (let n = 0; n < mainMenuItems.length; n++) {
        const itemInfo = mainMenuItems[n];

        const menuBox = document.createElement('div');
        const itemName = document.createElement('h4');
        
        menuBox.className = "menu-item";
        menuBox.style.backgroundImage = `url(${itemInfo.image})`;
        itemName.innerText = itemInfo.name;

        menuBox.appendChild(itemName);
        menuItems.append(menuBox);
    }

    drinkSubtitle.innerText = 'Drinks';
    menuItems.appendChild(drinkSubtitle);
    for (let n = 0; n < drinkMenuItems.length; n++) {
        const itemInfo = drinkMenuItems[n];

        const menuBox = document.createElement('div');
        const itemName = document.createElement('h4');

        menuBox.className = "menu-item";
        menuBox.style.backgroundImage = `url(${itemInfo.image})`;
        itemName.innerText = itemInfo.name;

        menuBox.appendChild(itemName);

        menuItems.append(menuBox);
    }
    

    pageTitle.innerText = "Menu";

    content.appendChild(pageTitle);
    content.appendChild(menuItems);

    return content.innerHTML;
}

export {displayMenu}