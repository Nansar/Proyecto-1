document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Retrieve form input values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;

    // Do something with the retrieved data
    console.log("Name: " + name);
    console.log("Email: " + email);

    // You can perform further operations or send the data to a server
});






