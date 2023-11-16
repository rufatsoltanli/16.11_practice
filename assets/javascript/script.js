const departaments = document.querySelector("#headerbot .leftside .departments")
const departamentsDropdown = document.querySelector("#headerbot .leftside .dropdown ul")

departaments.addEventListener("click", function () {
    departamentsDropdown.classList.toggle("dropdownUlVisible")
    console.log(1);
})
console.log(departamentsDropdown);
console.log(departaments);