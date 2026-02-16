let categories = [];
let allproductsAPI = [];

const mainBody = document.getElementById("mainBody");
const mainBodyElement = mainBody.innerHTML;

//  LOAD DATA
const loadCategories = async () => {
    const res = await fetch("https://fakestoreapi.com/products/categories");
    categories = await res.json();
};

const loadAllProducts = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    allproductsAPI = await res.json();
};

loadCategories();
loadAllProducts();

//  PRODUCTS BUTTON 
const allproducts = document.querySelectorAll(".allproducts");

allproducts.forEach(btn => {
    btn.addEventListener("click", () => {

        mainBody.innerHTML = "";

    //  Category Buttons 
        const categoriesContainer = document.createElement("div");
        categoriesContainer.classList.add(
            "grid",
            "grid-cols-2",
            "sm:grid-cols-3",
            "lg:grid-cols-5",
            "gap-5",
            "mx-[5%]",
            "my-5"
        );
        mainBody.appendChild(categoriesContainer);

//  Products Grid 
        const parentContainer = document.createElement("div");
        parentContainer.classList.add(
            "grid",
            "grid-cols-1",
            "sm:grid-cols-2",
            "lg:grid-cols-4",
            "gap-5",
            "mx-[5%]",
            "mb-10"
        );
        mainBody.appendChild(parentContainer);

        // Render Products 
        const renderProducts = (products) => {
            parentContainer.innerHTML = "";

            products.forEach(item => {

                const card = document.createElement("div");
                card.classList.add(
                    "bg-white",
                    "rounded-lg",
                    "shadow",
                    "overflow-hidden"
                );

                card.innerHTML = `
                    <div class="h-[250px] bg-gray-200 p-5">
                        <img src="${item.image}" class="h-full w-full object-contain">
                    </div>

                    <div class="p-4 space-y-2">
                        <div class="flex justify-between text-sm">
                            <span>${item.category}</span>
                            <span>
                                <i class="fa-solid fa-star text-orange-400"></i>
                                ${item.rating.rate} (${item.rating.count})
                            </span>
                        </div>

                        <h3 class="font-semibold truncate">${item.title}</h3>
                        <h2 class="font-bold">$${item.price}</h2>

                        <div class="flex gap-2 mt-3">
                            <button class="btn btn-outline w-1/2">
                                <i class="fa-regular fa-eye"></i> Details
                            </button>
                            <button class="btn btn-primary w-1/2">
                                <i class="fa-solid fa-cart-shopping"></i> Add
                            </button>
                        </div>
                    </div>
                `;

                parentContainer.appendChild(card);
            });
        };

        // Category Button Creator 
        const createCategoryBtn = (name) => {
            const btn = document.createElement("button");
            btn.innerText = name;
            btn.classList.add("btn", "btn-outline", "category-btn");

            btn.addEventListener("click", () => {
                document
                    .querySelectorAll(".category-btn")
                    .forEach(b => b.classList.remove("btn-primary"));

                btn.classList.add("btn-primary");

                if (name === "All") {
                    renderProducts(allproductsAPI);
                } else {
                    const filtered = allproductsAPI.filter(
                        item => item.category === name
                    );
                    renderProducts(filtered);
                }
            });

            categoriesContainer.appendChild(btn);
        };

    // Create Buttons 
        createCategoryBtn("All");
        categories.forEach(cat => createCategoryBtn(cat));

        // Initial Load
        renderProducts(allproductsAPI);
        document.querySelector(".category-btn").classList.add("btn-primary");
    });
});

// HOME BUTTON
const homeBtns = document.querySelectorAll(".home");

homeBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        mainBody.innerHTML = mainBodyElement;
        loadTrending();
    });
});

// TRENDING PRODUCTS
function loadTrending() {
    const productContainer = document.getElementById("trending-products");

    fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(data => {

            productContainer.innerHTML = "";

            data.slice(0, 3).forEach(item => {

                const card = document.createElement("div");
                card.classList.add("bg-white", "rounded-lg", "shadow");

                card.innerHTML = `
                    <div class="h-[250px] bg-gray-200 p-5">
                        <img src="${item.image}" class="h-full w-full object-contain">
                    </div>
                    <div class="p-4 space-y-2">
                        <div class="flex justify-between text-sm">
                            <span>${item.category}</span>
                            <span>
                                <i class="fa-solid fa-star text-orange-400"></i>
                                ${item.rating.rate}
                            </span>
                        </div>
                        <h3 class="font-semibold truncate">${item.title}</h3>
                        <h2 class="font-bold">$${item.price}</h2>
                    </div>
                `;

                productContainer.appendChild(card);
            });
        });
}
