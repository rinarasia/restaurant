import './style.css'
import { nav } from "./nav"
import { home } from "./home"
import { footer } from "./footer"

window.onload = function () {
  const content = document.getElementById('content');

  content.appendChild(nav);

  content.appendChild(home);

  content.appendChild(footer);
}