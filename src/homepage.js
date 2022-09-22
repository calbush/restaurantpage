
export function createHomepageLayout(){
  const allElements = document.querySelectorAll('*')

    for (const element of allElements){
        if (element.classList.contains('temp')){
            element.remove()
        }
    }

  const contentDiv = document.querySelector('#content')
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