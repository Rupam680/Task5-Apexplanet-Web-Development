// here we list out the product details
  const products = [
  { id: 1, name: "Phone", category: "Electronics", price: 15000, image: "image/phone.jpg" },
  { id: 2, name: "Tshirt", category: "Fashion", price: 700, image: "image/tshirt.jpg" },
  { id: 3, name: "Table", category: "Home", price: 12000, image: "image/table.jpg" },
  { id: 4, name: "Face Wash", category: "Skin Care", price: 600, image: "image/face-wash.jpg" },
  { id: 5, name: "Vitamin C", category: "Health", price: 1600, image: "image/vitamin-c.jpg" },

  { id: 6, name: "Laptop", category: "Electronics", price: 60000, image: "image/laptop.jpg" },
  { id: 7, name: "Jeans", category: "Fashion", price: 1400, image: "image/jeans.jpg" },
  { id: 8, name: "Shoe Rack", category: "Home", price: 9000, image: "image/shoe-rack.jpg" },
  { id: 9, name: "Face Cream", category: "Skin Care", price: 850, image: "image/face-cream.jpg" },
  { id: 10, name: "Vitamin D", category: "Health", price: 1300, image: "image/vitamin-d.jpg" },

  { id: 11, name: "TV", category: "Electronics", price: 38000, image: "image/tv.jpg" },
  { id: 12, name: "Dress", category: "Fashion", price: 1400, image: "image/dress.jpg" },
  { id: 13, name: "Hanger", category: "Home", price: 4500, image: "image/hanger.jpg" },
  { id: 14, name: "Sunscreen", category: "Skin Care", price: 400, image: "image/sunscreen.jpg" },
  { id: 15, name: "Vitamin B", category: "Health", price: 1200, image: "image/vitamin-b.jpg" },

  { id: 16, name: "Fridge", category: "Electronics", price: 28000, image: "image/fridge.jpg" },
  { id: 17, name: "Gloves", category: "Fashion", price: 500, image: "image/gloves.jpg" },
  { id: 18, name: "Almirah", category: "Home", price: 16000, image: "image/almirah.jpg" }
 ];


// get all the reference that are required during product listed
const productContainer = document.getElementById('product-list');
const selectCategory = document.getElementById('category');
const productSort = document.getElementById('sort');

// render all the product list
function renderProducts(products) {
  productContainer.innerHTML = ""; // empty existing product list details
  products.forEach((product) => { // render one by one product
    const card = document.createElement("div");
    card.classList.add("product-card"); // add style in to each product card
    // list out product related details inside the card
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>Category: ${product.category}</p>
      <p class="price">₹${product.price}</p>
      <button class="addCart" onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productContainer.appendChild(card); // render the product details on my UI
  });
}

// Apply filters and sorting
function applyFilters(){
    // store the filtered data 
    let filteredProduct = [...products]; // store the filtered product
    const category = selectCategory.value; // get category value
    const sort = productSort.value; // get sort value
    if(category !== 'All'){ // check category
        filteredProduct = filteredProduct.filter((p)=> p.category === category);
    }
    // check price range on every product
    if(sort === 'Low To High'){
        filteredProduct.sort((a,b)=>a.price - b.price);
    } else if(sort === 'High To Low'){
         filteredProduct.sort((a,b)=>b.price - a.price);
    }
      renderProducts(filteredProduct);
}

// add change event listener
selectCategory.addEventListener("change",applyFilters);
productSort.addEventListener('change',applyFilters);

// Initial rendering
renderProducts(products);

// now we will apply add to cart functionality
const cartBtn = document.getElementById('cartBtn');
const cartCount = document.getElementById('cartCount');
const cartModel = document.getElementById('cart-model');
const cartItems = document.getElementById('cartItems');
const totalCart = document.getElementById('cartTotal');
const removeCart = document.getElementById('closeCart');

// create an empty cart array
let cart =[];

// Added to cart through id
function addToCart(id) { 
  // check the selected product id
  const product = products.find((p) => p.id === id);
  // if match push into cart section
  cart.push(product); 
  updateCartCount(); // update the cart count 
  alert(`${product.name} added to cart!`);
}

// after add any item from your cart then update cart count
function updateCartCount() {
  cartCount.textContent = cart.length; // when cart length increase 
}

//  Show Cart Modal --> when click on cart button
cartBtn.addEventListener("click", () => {
 cartModal.style.display = "flex";
  renderCart();
});

// when click remove cart model
closeCart.addEventListener("click", () => {
  cartModal.style.display = "none";
});

// render my cart model 
function renderCart() {
  cartItems.innerHTML = ""; // empty existing cart item
  let total = 0; // no cart added
  cart.forEach((item, index) => {
   total += item.price; // after adding cart then update price
    const li = document.createElement("li");
    // cart content
    li.innerHTML = `
      ${item.name} - ₹${item.price} 
      <button onclick="removeItem(${index})">❌</button>
    `;
    cartItems.appendChild(li);
  });
  cartTotal.textContent = `Total: ₹${total}`;  // show the total price
}
 
//  Remove Item form cart section
function removeItem(index) {
  cart.splice(index, 1);
  updateCartCount(); // decrement the cart item
  renderCart(); // after decrease cart item then render again cart item
}


/* here we show login and sign up page */
const userLogin = document.getElementById('login');
const userSignup = document.getElementById('signup');

// open a new window for signUp and Login
userSignup.addEventListener('click',()=>{
      window.open('signup.html', '_blank'); // opens signup page in new tab
});
// here show our login page
userLogin.addEventListener('click',()=>{
  window.open('login.html','_blank');
})

/* New Feature : 
here i want to add our login status functionality 
if user login then hide login and signup button */

document.addEventListener('DOMContentLoaded',()=>{
  // before login we want to get login user details or data from local storage 
 const loginUser = JSON.parse(localStorage.getItem('loginUser'));

  const loginBtn = document.getElementById('login');
  const signupBtn = document.getElementById('signup');
  const userPic = document.getElementById('userPic');

  // check if user login or not if not then kindly login 
  if(loginUser){
    loginBtn.style.display = "none";
    signupBtn.style.display = "none";
    userPic.style.display = "inline-block";
  } else{
    // user not logged in — show login/signup
    loginBtn.style.display = "inline-block";
    signupBtn.style.display = "inline-block";
    userPic.style.display = "none"
  }
});

// adding logout functionality
const userPic = document.getElementById('userPic');
userPic.addEventListener('click',()=>{
  const logoutUser = confirm('Do you want to logout?');
  if(logoutUser){
    localStorage.removeItem('loginUser');
    alert('User Logout Successfully✅');
    window.location.reload();
  }
})

// here we add when any person clicked buy now then show the order details
const buyBtn = document.getElementById('buyBtn');
buyBtn.addEventListener('click',()=>{
  if(cart.length === 0){
    alert('Your cart is empty');
    return;
  }
  // save the cart item
  localStorage.setItem('CartData',JSON.stringify(cart));
  window.location.href = 'checkout.html';
});