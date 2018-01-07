$(function () {
    $(".add-burger").on("click", function (event) {
        event.preventDefault();

        var id = $(this).data("id");

        var newBurger = {
            burger_name: $("#burg").val().trim(),
        };

        console.log(newBurger);
        
        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("Created New Burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    })
});