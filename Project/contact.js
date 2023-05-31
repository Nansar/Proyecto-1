

document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Retrieve form input values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone-number").value;
    var message = document.getElementById("text").value;


    // Do something with the retrieved data
    console.log("Thank you! Your message has been sent!");
});






