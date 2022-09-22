export function createContactPage() {
    const allElements = document.querySelectorAll('*')

    for (const element of allElements){
        if (element.classList.contains('temp')){
            element.remove()
        }
    }
}