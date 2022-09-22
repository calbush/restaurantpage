import './style.css'
import { createHomepageLayout } from './homepage'
import { createContactPage } from './contact'
import { createNavBar} from './navbar'

createNavBar();
createHomepageLayout();

const contactBtn = document.querySelector('#contactTab')
contactBtn.addEventListener('click', createContactPage)

const homeBtn = document.querySelector('#homeTab')
homeBtn.addEventListener('click', createHomepageLayout)
