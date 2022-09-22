import './style.css'
import { createHomepageLayout } from './homepage'
import { createContactPage } from './contact'

createHomepageLayout();
const contactBtn = document.querySelector('#contactTab')
contactBtn.addEventListener('click', createContactPage)
