//Create a function uses filter method for Vegetarians in Italian restaurant 

// function ====> vegetarianMenu(menu)


// const dishes = [
//     {
//         name: "Eggplant Parmesan",
//         vegetarian: true
//     },
//     {
//         name: "Spaghetti && Meatballs",
//         vegetarian: true
//     },
// ]


function vegetarianMenu(menu){
    const menuNode = document.querySelector("#menu");
    const vegetarianOptions = menu.filter(
        option => option.isVegetarian === true
        );
        console.log(vegetarianOptions);
    vegetarianOptions.forEach(option => {
        let dish = document.createElement('li');
        dish.textContent =option.name;
        menuNode.appendChild(dish)
    });

}

const menu = [
    {
        name: "Chicken parmesan",
        isVegetarian: false
    },
    {
        name: "Stuffed shells",
        isVegetarian: true
    },
    {
        name: "Spaghetti and meatballs",
        isVegetarian: false
    },
    {
        name: "Tiramisu",
        isVegetarian: true
    },
]

vegetarianMenu(menu);