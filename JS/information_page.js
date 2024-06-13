"use strict"

window.onload = () => {

    console.log("HA im in your information_page.js >:)")

    const name = localStorage.getItem("name");
    const role = localStorage.getItem("role");

    const welcomeMessage = document.querySelector("#welcomeMessage");
    const roleMessage = document.querySelector("#roleMessage");

    if (name && role) {
        let roleCapitalized = role.charAt(0).toUpperCase() + role.slice(1);
        welcomeMessage.textContent = `Welcome ${roleCapitalized} ${name}`;
        
        if (role === "student") {
            roleMessage.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet.";
            roleMessage.className = "student-text";
        } else if (role === "instructor") {
            roleMessage.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut elit nec leo.";
            roleMessage.className = "instructor-text";
        }
    } else {
        welcomeMessage.textContent = "Welcome to the Information Page!";
        roleMessageElement.textContent = "";
    }
}
