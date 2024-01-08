function createHome() {

    const main = document.createElement('main');
    main.classList.add('main');
    main.classList.add('homePage'); // change for other pages
  
    const container = document.createElement('div');
    container.classList.add('container');
  
    const title1 = document.createElement('h1');
    title1.textContent = "SAVOR";
  
    const title2 = document.createElement('h1');
    title2.textContent = "FEAST";
  
    const title3 = document.createElement('h1');
    title3.textContent = "ENJOY";
  
    container.append(title1, title2, title3);
  
    main.appendChild(container);
  
    return main
  }
  
  const home = createHome();

  export { home }