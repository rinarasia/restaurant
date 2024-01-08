import './style.css'
import { createPage } from './createPage'
import { nav } from './nav'
import { home } from './home'
import { menuPage } from './menu'
import { contactPage } from './contact'
import { footer } from './footer'

window.onload = function () {

  createPage(home);

  function renderPage(pageClass, pageName) {
    const mainContent = document.querySelector('main');
    if(mainContent.classList.contains(pageClass)) return;

    const content = document.querySelector('#content');
    content.textContent = "";

    createPage(pageName);
  }
  
  const homeBtn = document.querySelector('.home');
  const menuBtn = document.querySelector('.menu');
  const contactBtn = document.querySelector('.contact');

  homeBtn.addEventListener("click", () => renderPage("home", home));
  menuBtn.addEventListener("click", () => renderPage("menu", menuPage));
  contactBtn.addEventListener("click", () => renderPage("contact", contactPage));

  const logo = document.querySelector('.logo');
  const logoTitle = document.querySelector('.logoTitle');

  logo.addEventListener("click", () => renderPage("home", home));
  logoTitle.addEventListener("click", () => renderPage("home", home));
  

  
  

  


}