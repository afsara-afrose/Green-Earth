const loadCategory = () => {
  const uri = "https://openapi.programming-hero.com/api/categories";

  fetch(uri)
    .then((res) => res.json()) 
    .then((data) => displayCategory(data.categories));
};

const displayCategory = (categories) => {
    console.log(categories);
    const catContainer = document.getElementById("category-container");
  catContainer.innerHTML = "";

  
  for (let cat of categories) {
    
    const categoryCard = document.createElement("div");
    categoryCard.innerHTML = `
          <a href="#tree" id="cat-btn-${cat.id}" onclick="loadFoods(${cat.id})" class=" justify-start  shadow btn-category">
            <p>${cat.category_name}</p> 
          </a>`;

    
    catContainer.append(categoryCard);
  }
}

loadCategory();
