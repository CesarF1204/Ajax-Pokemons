$.get("http://pokeapi.co/api/v2/pokemon/?limit=151&offset=0", function(res) {
    for(var i = 0; i < res.results.length; i++) {
        $.get(res.results[i].url, function(images) {
            $('#bulbasaur').append("<div class='box'>"+images.name+"<img src=\""+images.sprites.front_shiny+"\"><div>");
            
        }, "json");
    }
}, "json");