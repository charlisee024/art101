// index.js - purpose and description here
// Author: Charlise Gonzales
// Date:6/2/2025

// Constants
// Purpose: Use jQuery AJAX to fetch and display Pokémon info from the PokéAPI


$(document).ready(function () {
    console.log("Document ready - Script loaded.");

    $("#activate").click(function () {
        console.log("Button clicked!");

        const randomId = Math.floor(Math.random() * 898) + 1;

        $.ajax({
            url: https://pokeapi.co/api/v2/pokemon/${randomId},

            type: "GET",

            dataType: "json",

            success: function (data) {
                console.log("AJAX call successful!");
                console.log(data);

                const name = data.name;
                const id = data.id;
                const imageUrl = data.sprites.front_default;
                const types = data.types.map(t => t.type.name).join(", ");

                $("#output").html(`
                    <h3>#${id} - ${name.toUpperCase()}</h3>
                    <img src="${imageUrl}" alt="${name}">
                    <p>Type(s): ${types}</p>
                `);
            },

        });
    });
});