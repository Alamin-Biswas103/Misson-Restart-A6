// console.log("trending-products")
const productContainer = document.getElementById("trending-products");

fetch("https://fakestoreapi.com/products")
    .then(promise => promise.json())
    .then(result => showData(result));


const showData = (data) => {
    const sliceData = data.slice(0, 3)
    // console.log(data)
    // console.log(sliceData)
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

        // Both Button
        let buttons = document.createElement("div")
        let detailsBtn = document.createElement("div");
        let addBtn = document.createElement("div");

        detailsBtn.innerHTML = `<i class="fa-regular fa-eye"></i> Details `
        detailsBtn.classList.add("detailsBtn", "btn" , "btn-outline")

        addBtn.innerHTML = `<i class="fa-solid fa-cart-shopping"></i> Add `
        addBtn.classList.add("addBtn","btn", "btn-primary")

        buttons.append(detailsBtn,addBtn);
        buttons.classList.add("buttons")


        
        
        
       
        textContainer.append(rateCate, title, price, buttons)
        container.append(imageContainer, textContainer);
        productContainer.appendChild(container)
    })
}

// {id: 1, title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops', price: 109.95, description: 'Your perfect pack for everyday use and walks in th…to 15 inches) in the padded sleeve, your everyday', category: "men's clothing", …}
// category
// :
// "men's clothing"
// description
// :
// "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"
// id
// :
// 1
// image
// :
// "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png"
// price
// :
// 109.95
// rating
// :
// {rate: 3.9, count: 120}
// title
// :
// "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
// [[Prototype]]
// :
// Object