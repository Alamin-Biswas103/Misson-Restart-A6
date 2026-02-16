let categories = []

let mainBody = document.getElementById("mainBody");
let mainBodyElement = mainBody.innerHTML;

const loadCategories = async () => {
    const res = await fetch("https://fakestoreapi.com/products/categories");
    categories = await res.json()
}

let allproductsAPI = [];
const loadAllProducts = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    allproductsAPI = await res.json()
}


loadCategories()
loadAllProducts()





// Product Button
const allproducts = document.querySelectorAll(".allproducts")

allproducts.forEach(btn => {
    btn.addEventListener("click", () => {


        mainBody.innerHTML = ''
        // Category related Function
        let categoriesContainer = document.createElement("div");
        categoriesContainer.classList.add("categoriesContainer")
        let allCategoryBtn = document.createElement("button");
        allCategoryBtn.innerText = "All"
        categoriesContainer.append(allCategoryBtn)
        categories.map(category => {

            let categoriesItem = document.createElement("button");
            categoriesItem.innerText = category
            // console.log(category)
            categoriesContainer.append(categoriesItem)
        })
        mainBody.append(categoriesContainer)

        // All products added here----------------------------------------------------------
        let parentContainer = document.createElement("div");

         parentContainer.classList.add("grid","sm:grid-cols-2","mb-10", "lg:grid-cols-4","gap-5","mx-[5%]")

        allproductsAPI.map(item => {

            console.log(item)
            let container = document.createElement("div");
            container.classList.add("container")

            // Image
            let imageContainer = document.createElement("div")
            let image = document.createElement("img");
            imageContainer.classList.add("h-[250px]", "bg-gray-200", "p-5", "rounded-t-lg");
            image.classList.add("h-full", "w-full", "object-contain",);
            image.src = item.image;
            imageContainer.appendChild(image);


            // Text Container
            let textContainer = document.createElement("div");
            textContainer.classList.add("textContainer")

            // Category
            let category = document.createElement("small");
            category.innerText = item.category;
            category.classList.add('category')

            // Rating
            let ratingContainer = document.createElement("small")
            ratingContainer.innerHTML = `
        <i class="fa-solid fa-star  text-orange-400"></i> ${item.rating.rate}(${item.rating.count})
        `

            // Category and Rating Container
            let rateCate = document.createElement("div")
            rateCate.append(category, ratingContainer);
            rateCate.classList.add("rateCate")

            // Title
            let title = document.createElement("h3");
            title.innerText = `${item.title}`;
            title.classList.add("title","truncate")


            // Price
            let price = document.createElement("h2");
            price.innerText = `$${item.price}`
            price.classList.add("price")

            // Both Buttons
            let buttons = document.createElement("div")
            let detailsBtn = document.createElement("div");
            let addBtn = document.createElement("div");

            detailsBtn.innerHTML = `<i class="fa-regular fa-eye"></i> Details `
            detailsBtn.classList.add("detailsBtn", "btn", "btn-outline")

            addBtn.innerHTML = `<i class="fa-solid fa-cart-shopping"></i> Add `
            addBtn.classList.add("addBtn", "btn", "btn-primary")

            buttons.append(detailsBtn, addBtn);
            buttons.classList.add("buttons")






            // Appentding
            textContainer.append(rateCate, title, price, buttons)
            container.append(imageContainer, textContainer);
            parentContainer.appendChild(container)
            parentContainer.classList.add("allProductsPage")
        })
        mainBody.appendChild(parentContainer)
       
        
    })
})


// Home Button
const home = document.querySelectorAll(".home");
home.forEach(homeBtn => {
    homeBtn.addEventListener("click", () => {
        mainBody.innerHTML = mainBodyElement;
        const productContainer = document.getElementById("trending-products");

fetch("https://fakestoreapi.com/products")
    .then(promise => promise.json())
    .then(result => showData(result));


const showData = (data) => {
    const sliceData = data.slice(0, 3)
    sliceData.map(item => {

        let container = document.createElement("div");
        container.classList.add("container")

        // Image
        let imageContainer = document.createElement("div")
        let image = document.createElement("img");
        imageContainer.classList.add("h-[250px]","bg-gray-200","p-5","rounded-t-lg");
        image.classList.add("h-full", "w-full", "object-contain",);
        image.src = item.image;
        imageContainer.appendChild(image);
       

        // Text Container
        let textContainer = document.createElement("div");
        textContainer.classList.add("textContainer")

        // Category
        let category = document.createElement("small");
        category.innerText = item.category;
        category.classList.add('category')

        // Rating
        let ratingContainer = document.createElement("small")
        ratingContainer.innerHTML = `
        <i class="fa-solid fa-star  text-orange-400"></i> ${item.rating.rate}(${item.rating.count})
        `

        // Category and Rating Container
        let rateCate = document.createElement("div")
        rateCate.append(category,ratingContainer);
        rateCate.classList.add("rateCate")

        // Title
        let title = document.createElement("h3");
        title.innerText = `${item.title}`;
        title.classList.add("title")


        // Price
        let price = document.createElement("h2");
        price.innerText = `$${item.price}`
        price.classList.add("price")

        // Both Buttons
        let buttons = document.createElement("div")
        let detailsBtn = document.createElement("div");
        let addBtn = document.createElement("div");

        detailsBtn.innerHTML = `<i class="fa-regular fa-eye"></i> Details `
        detailsBtn.classList.add("detailsBtn", "btn" , "btn-outline")

        addBtn.innerHTML = `<i class="fa-solid fa-cart-shopping"></i> Add `
        addBtn.classList.add("addBtn","btn", "btn-primary")

        buttons.append(detailsBtn,addBtn);
        buttons.classList.add("buttons")


        
        


    // Appentding
        textContainer.append(rateCate, title, price, buttons)
        container.append(imageContainer, textContainer);
        productContainer.appendChild(container)
    })
}

    })
})