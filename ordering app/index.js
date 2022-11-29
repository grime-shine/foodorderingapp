import { menuArray } from './data.js'
//import { finalOrder } from './finalorder'

let orderArray = []



function getMenuItems(){
    let menuItems = ""

    menuArray.forEach(function(item){
        menuItems +=

        `<div class="menu-item">
            <div class="icon">${item.emoji}</div>
                <div class="menu-text">
                    <h2>${item.name}</h2>
                    <p class="gray margin-bottom">${item.ingredients}</p>
                    <h3>${item.price}</h3>
                </div>
            <div class="button-container">
                <button data-add="${item.id}" class="add">+</button>
            </div>
        </div>`
    })

    document.getElementById("menu-list").innerHTML = menuItems 
}

getMenuItems()

document.addEventListener('click', function(e){
    if (e.target.dataset.add){
        handleAddingItem(e.target.dataset.add)
    }
})

function handleAddingItem(itemId){
    const targetMenuObj = menuArray.filter(function(item){
        return item.id == itemId
    })[0]

   
        targetMenuObj.quantity++
        if (targetMenuObj.quantity>0){
            generateTotalSection(targetMenuObj)
            
        }
    
}
function generateTotalSection(item){
    const totalItemEl = document.getElementById("total-item-container")
     orderArray.unshift(item)
     // how do i render the HTML for the orders section, while setting an if 
     //conditional that only allows additional line items added if not already

        if (item.quantity < 2){
            totalItemEl.innerHTML += 
            `<div id="total-item" class="total-item">
                <h2>${item.name}</h2>
                <p>${item.quantity}</p>
                <button class="remove-btn" type="button">remove</button>
            </div>`
        }
    
    
    
}


function renderTotalPrice(){
    
}

