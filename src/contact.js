function createContact() {

    const main = document.createElement('main');
    main.classList.add('main');
    main.classList.add('contactPage'); // change for other pages
  
    const container = document.createElement('div');
    container.classList.add('container');
  
    const title1 = document.createElement('h1');
    title1.textContent = "Contact Us";
  
    container.append(title1);
    
    const productContainer = document.createElement('div');
    productContainer.classList.add('productContainer');
    
    const emailh4 = document.createElement('h4');
    emailh4.textContent = "Email:";
    
    const email = document.createElement('span');
    email.textContent = "Email@ArtisenalSlices.com";
    
    const phoneh4 = document.createElement('h4');
    phoneh4.textContent = "Phone:";
    
    const phone = document.createElement('span');
    phone.textContent = "+1 (234) 567-8901";
    
    const addressh4 = document.createElement('h4');
    addressh4.textContent = "Address:";
    
    const address = document.createElement('span');
    address.textContent = "204 Pepperoni Plaza #567, Los Angeles, CA 91234";
    
    productContainer.append(emailh4, phoneh4, addressh4, email, phone, address);
  
    main.appendChild(container);
    main.appendChild(productContainer);
  
    return main
  }
  
  const contactPage = createContact();

  export { contactPage }