  function createNavBar() {
 
    const navBar = document.createElement('div');
    navBar.classList.add('navBar');
    
    
    
    const logo = document.createElement('img');
    logo.classList.add('logo');
    logo.src = "https://cdn.discordapp.com/attachments/1115776946777882686/1184259042026213446/cheflogo2-removebg-preview.png";
    
    const logoTitle = document.createElement('h4');
    logoTitle.classList.add('logoTitle');
    logoTitle.textContent = "Artisanal Slices";
    
    const navMenu = document.createElement('nav');
  
    const navItems = document.createElement('ul');
    
    const homeBtn = document.createElement('li');
    homeBtn.textContent = "Home"
    
    const menuBtn = document.createElement('li');
    menuBtn.textContent = "Menu"
    
    const contactBtn = document.createElement('li');
    contactBtn.textContent = "Contact"
  
    navItems.append(homeBtn, menuBtn, contactBtn);
  
    navMenu.append(navItems);
    
    
    navBar.appendChild(logoTitle);
    navBar.appendChild(logo);
    navBar.appendChild(navMenu);
  
    return navBar
  }
  
  const nav = createNavBar();

  export { nav }