export function createNavBar(){
    const contentDiv = document.querySelector('#content')
    //create header bar, add to DOM
    const mainHeader = document.createElement('div')
    mainHeader.setAttribute('id', 'mainHeader')
    contentDiv.appendChild(mainHeader)

    const restaurantNameHeader = document.createElement('div')
    restaurantNameHeader.setAttribute('id', 'restaurantNameHeader')
    mainHeader.appendChild(restaurantNameHeader)
    restaurantNameHeader.textContent = "Cal's Beef"

    const tabs = document.createElement('div')
    tabs.setAttribute('id', 'tabs')
    mainHeader.appendChild(tabs)

        const contactTab = document.createElement('div')
        contactTab.setAttribute('id', 'contactTab')
        tabs.appendChild(contactTab)
        contactTab.textContent = 'Contact'

        const homeTab = document.createElement('div')
        homeTab.setAttribute('id', 'homeTab')
        tabs.appendChild(homeTab)
        homeTab.textContent = 'Home'

        const menuTab = document.createElement('div')
        menuTab.setAttribute('id', 'menuTab')
        tabs.appendChild(menuTab)
        menuTab.textContent = 'Our Beef'




}