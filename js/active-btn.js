let navItems = document.querySelectorAll(".nav-item")

navItems.forEach(item => {
    item.addEventListener("click", () => {
        navItems.forEach(li => li.classList.remove("active"))
        item.classList.add("active")
    })
})


