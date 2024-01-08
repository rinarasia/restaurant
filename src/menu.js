const menu = [];

class Pizza {
  constructor(name, url, description) {
    this.name = name;
    this.url = url;
    this.description = description;
  }
}

const pepperoni = new Pizza('Pepperoni', 'https://cdn.discordapp.com/attachments/1115776946777882686/1182399355223801856/Pepperoni-removebg-preview.png', 'Satisfy cravings with pepperoni magic on our golden pizza canvas.');

const cheese = new Pizza('Cheese', 'https://cdn.discordapp.com/attachments/1115776946777882686/1182399353869041674/Cheese-removebg-preview.png', 'Savor the richness of our classic cheese embraced by a golden crust.');

const vegetarian = new Pizza('Vegetarian', 'https://cdn.discordapp.com/attachments/1115776946777882686/1182398548340387891/Vegetarian-removebg-preview.png', 'Vegetarian magic: mushrooms, onion, and sun-kissed tomato.');

const hawaiian = new Pizza('Hawaiian', 'https://cdn.discordapp.com/attachments/1115776946777882686/1182398886900408410/Hawaiian-removebg-preview.png', 'Tropical paradise on a slice: ham, pineapple, and cheesy delight.');

const margherita = new Pizza('Margherita', 'https://cdn.discordapp.com/attachments/1115776946777882686/1182398337199132802/Margherita_1-removebg-preview.png', 'Fresh mozzarella, tomatoes, basil, and olive oil unite on golden crust.');

const jalapeno = new Pizza('Jalapeno', 'https://cdn.discordapp.com/attachments/1115776946777882686/1182399354653392946/Jalapeno-removebg-preview.png', 'Feel the fire: jalapenos, melted cheese on a dreamy pizza base.');

menu.push(pepperoni, cheese, vegetarian, hawaiian, margherita, jalapeno);


function createPizza(pizza) {

  const product = document.createElement('div');
  product.classList.add('product');

  const title1 = document.createElement('h4');
  title1.textContent = pizza.name;

  const image = document.createElement('img');
  image.src = pizza.url;
  
  product.append(title1, image);
      
  return product;
}

// create main body
function createMenu() {

    const main = document.createElement('main');
    main.classList.add('main');
    main.classList.add('menuPage'); // change for other pages
    
    const pageTitle = document.createElement('h1');
    pageTitle.textContent = "Menu";
  
    const productContainer = document.createElement('div');
    productContainer.classList.add('productContainer');
    
    menu.forEach((pizza) => {
      let product = createPizza(pizza);
      
      const span = document.createElement('span');
      
      span.textContent = pizza.description;
      product.append(span);
      productContainer.append(product);
    });
  
    main.appendChild(pageTitle);
    main.appendChild(productContainer);
  
    return main;
  }
  
  const menuPage = createMenu();

  export { menuPage }