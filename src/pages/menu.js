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
        image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ethanchlebowski.com%2Fcooking-techniques-recipes%2Fthe-original-chicken-sandwich-from-chick-fil-a&psig=AOvVaw2cW90k2JW9nvpcEJIwdEG1&ust=1701796213166000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCNixi5Oj9oIDFQAAAAAdAAAAABAE'},
        {name: 'Beef Sandwich', price: 10.90, calories: 140, image: null},
        {name: 'Beef and Chicken Sandwich', price: 8.90, calories: 120, image: null},
    ];
    
    const drinkMenuItems = [
        {name: 'Coffee', price: 3.50, calories: 5, image: null},
        {name: 'Hong Kong Milk Tea', price: 5.50, calories: 5, image: null},
        {name: 'Juice', price: 2.50, calories: 20, image: null},
    ];

    mainSubtitle.innerText = "Mains";
    menuItems.appendChild(mainSubtitle);
    for (let n = 0; n < mainMenuItems.length; n++) {
        const itemInfo = mainMenuItems[n];

        const menuBox = document.createElement('div');
        const image = document.createElement('img');
        const itemName = document.createElement('h3');

        menuBox.className = "menu-item"
        itemName.innerText = itemInfo.name;

        menuBox.appendChild(image);
        menuBox.appendChild(itemName);

        menuItems.append(menuBox);
    }

    drinkSubtitle.innerText = 'Drinks';
    menuItems.appendChild(drinkSubtitle);
    for (let n = 0; n < drinkMenuItems.length; n++) {
        const itemInfo = drinkMenuItems[n];

        const menuBox = document.createElement('div');
        const image = document.createElement('img');
        const itemName = document.createElement('h3');

        menuBox.className = "menu-item"
        itemName.innerText = itemInfo.name;

        menuBox.appendChild(image);
        menuBox.appendChild(itemName);

        menuItems.append(menuBox);
    }
    

    pageTitle.innerText = "Menu";

    content.appendChild(pageTitle);
    content.appendChild(menuItems);

    return content.innerHTML;
}

export {displayMenu}