const dropdownMenu = document.getElementById("dropdownMenu");

function displayMenu(){
    if(dropdownMenu.classList.contains("hidden")){
        dropdownMenu.classList.remove("hidden");
        dropdownMenu.classList.add("flex");
        dropdownMenu.classList.add("flex-col");
    }else{
        dropdownMenu.classList.remove("flex");
        dropdownMenu.classList.remove("flex-col");
        dropdownMenu.classList.add("hidden");
    }
}

function hideMenu(){
    dropdownMenu.classList.remove("flex");
    dropdownMenu.classList.remove("flex-col");
    dropdownMenu.classList.add("hidden");
}