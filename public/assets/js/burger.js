$(function () {
    $(".add-burger").on("click", function (event) {
        event.preventDefault();

        var id = $(this).data("id");

        var newBurger = {
            burger_name: $("#burg").val().trim(),
        };

        console.log(newBurger.burger_name);

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
    });

    $(".change-devoured").on("click", function (event) {
        var id = $(this).data("id");
        var devouredState = $(this).data("devoured");

        console.log(id);
        console.log(devouredState);

        var newDevouredState = {
            sleepy: true,
        };

        if (devouredState === 0) {
            // Send the DELETE request.
            $.ajax("/api/burgers/" + id, {
                type: "PUT",
                data: newDevourState,
            }).then(
                function () {
                    console.log("Devoured burger #", id);
                    // Reload the page to get the updated list
                    location.reload();
                }
            );
        } else if (devouredState === 1) {
            $.ajax("/api/burgers/" + id, {
                type: "DELETE",
            }).then(
                function () {
                    console.log("Deleted burger #", id);
                    // Reload the page to get the updated list
                    location.reload();
                }
            );
        }
    });
});