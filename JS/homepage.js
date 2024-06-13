"use strict"

window.onload = () => {
    console.log("hah im in your homepage.js >:3");

    const hugeEnterButton = document.querySelector("#hugeEnterButton");

    hugeEnterButton.addEventListener("click", storeAndRedirect);
}

function storeAndRedirect(event) {
    event.preventDefault();  // [ Prevents the default form submission behavior | needed to add this otherwise it wouldn't work ]

    const name = document.querySelector("#nameInput").value;
    const role = document.querySelector('input[name="role"]:checked')?.value;

    if (name && role) {
        localStorage.setItem("name", name);
        localStorage.setItem("role", role);
        location.href = "information_page.html";
    } else {
        alert("Please enter your name and select a role.");
    }
}
