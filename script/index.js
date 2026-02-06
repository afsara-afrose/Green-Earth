// DOM Elements
const categoryContainer = document.getElementById("category-container");
const plantContainer = document.getElementById("plant-container");
const loader = document.getElementById("loader");

// Cart
let cart = [];
let total = 0;

// Set active button logic (works for all buttons)
const setActiveButton = (activeBtn) => {
  document.querySelectorAll(".btn-category")
  .forEach(btn => btn.classList.remove("btn-active"));
  activeBtn.classList.add("btn-active");
};

// Load categories
const loadCategories = () => {
  fetch("https://openapi.programming-hero.com/api/categories")
    .then(res => res.json())
    .then(data => displayCategories(data.categories));
};

// Display category 
const displayCategories = (categories) => {
  categories.forEach(cat => {
    const btn = document.createElement("button");
    btn.className = "btn-category";
    btn.innerText = cat.category_name;

    // When category button clicked
    btn.onclick = () => {
      setActiveButton(btn);
      loadPlantsByCategory(cat.id);
    };

    categoryContainer.appendChild(btn);
  });
};

// Load plants by category ID
const loadPlantsByCategory = (id) => {
  loader.classList.remove("hidden");
  plantContainer.innerHTML = "";

  fetch(`https://openapi.programming-hero.com/api/category/${id}`)
    .then(res => res.json())
    .then(data => displayPlants(data.plants))
    .finally(() => loader.classList.add("hidden"));
};

// Display plants
const displayPlants = (plants) => {
  plantContainer.innerHTML = "";

  plants.forEach(plant => {
    const card = document.createElement("div");
    card.className = "card bg-white shadow p-4";

    card.innerHTML = `
      <img src="${plant.image}" class="h-40 w-full object-cover rounded">
      <h3 onclick="loadPlantDetails(${plant.id})"
          class="font-bold mt-2 cursor-pointer hover:text-green-600 ">
          ${plant.name}
      </h3>
      <p class="text-sm">${plant.description}</p>
      <div class='flex justify-around mt-4 gap-5'>
        <button class='bg-green-100 text-green-600 p-3 rounded-xl'>${plant.category}</button>
        <p class="font-semibold mt-1"><i class="fa-solid fa-bangladeshi-taka-sign"></i> ${plant.price}</p>
      </div>
      <button class="btn btn-sm mt-3 bg-green-700 text-white rounded-full"
              onclick="addToCart('${plant.name}', ${plant.price})">
        Add to Cart
      </button>
    `;

    plantContainer.appendChild(card);
  });
};

// Load single plant details


const loadPlantDetails = (id) => {
  fetch(`https://openapi.programming-hero.com/api/plant/${id}`)
    .then(res => res.json())
    .then(data => showPlantModal(data.plants));
};
const showPlantModal = (plant) => {
  document.getElementById("modal-title").innerText = plant.name;
  document.getElementById("modal-img").src = plant.image;
  document.getElementById("modal-desc").innerText = plant.description;
  document.getElementById("modal-category").innerText = plant.category;
  document.getElementById("modal-price").innerText = `<i class="fa-solid fa-bangladeshi-taka-sign"></i> ${plant.price}`;

  document.getElementById("plant_modal").showModal();
};




// Cart functions
const addToCart = (name, price) => {
  cart.push({ name, price });
  total += price;
  renderCart();
};

const renderCart = () => {
  const cartContainer = document.getElementById("cart-container");
  cartContainer.innerHTML = "";

  cart.forEach((item, index) => {
    const div = document.createElement("div");
    div.className = "flex justify-between items-center";

    div.innerHTML = `
      <div >
      <h2>${item.name}</h2>
      <p><i class="fa-solid fa-bangladeshi-taka-sign"></i> ${item.price}</p>
      </div>
      <button onclick="removeFromCart(${index})">❌</button>
    `;

    cartContainer.appendChild(div);
  });

  document.getElementById("total").innerText = total;
};

const removeFromCart = (index) => {
  total -= cart[index].price;
  cart.splice(index, 1);
  renderCart();
};

// All Plants button
const allPlantsBtn = document.getElementById("all-plants-btn");
allPlantsBtn.onclick = () => {
  setActiveButton(allPlantsBtn);

  loader.classList.remove("hidden");
  plantContainer.innerHTML = "";

  fetch("https://openapi.programming-hero.com/api/plants")
    .then(res => res.json())
    .then(data => displayPlants(data.plants))
    .finally(() => loader.classList.add("hidden"));
};


loadCategories();


window.addEventListener("DOMContentLoaded", () => {
  allPlantsBtn.click();
});
