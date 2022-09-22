
export function createHomepageLayout(){

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




    //create middle section, add to DOM
    const middleSection = document.createElement('div')
    middleSection.setAttribute('id', 'middleSection')
    middleSection.classList.add('temp')
    contentDiv.appendChild(middleSection)

        const beefImage = new Image()
        beefImage.src = './edc4cc5fafd77a85339f.jpeg'
        beefImage.setAttribute('id', 'beefImage')
        beefImage.classList.add('temp')
        middleSection.appendChild(beefImage)

        const blurbContainer = document.createElement('div')
        blurbContainer.setAttribute('id', 'blurb')
        blurbContainer.classList.add('temp')
        middleSection.appendChild(blurbContainer)

            const blurbTitle = document.createElement('div')
            blurbTitle.setAttribute('id', 'blurbTitle')
            blurbTitle.classList.add('temp')
            blurbContainer.appendChild(blurbTitle)
            blurbTitle.textContent = 'About Us'

            const blurbBody = document.createElement('div')
            blurbBody.setAttribute('id', 'blurbBody')
            blurbBody.classList.add('temp')
            blurbContainer.appendChild(blurbBody)
            blurbBody.textContent = 
              'Cal\'s Beef is home to the BEEFiest beefs in town. ' +
              'Whether you like them sweet or spicy, wet or dry, Cal ' +
              'will give you the beef experience of a lifetime. ' +
              'So in brief, come on down to Cal\'s Beef, chief. ' +
              'Our beef will leave you in disbelief.'


    /* create footer, add to DOM
    const footer = document.createElement('div')
    footer.setAttribute('id', 'footer')
    contentDiv.appendChild(footer) */



    
}