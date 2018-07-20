$(document).ready(() => {
    let car = createCarousel();
     document.getElementById('carousels').innerHTML = car;

});

function createCarousel() {
    let build = '';
    data.data.forEach((obj) => {
        build += '<h3>' + obj.category + '</h3><div class="carousel" data-flickity=\'{ "groupCells": true }\'>' +
        createCells(obj) +
        '</div>';
    });
    return build;
}

function createCells(obj) {
    let build = '';
    obj.ngos.forEach((ngo) => {
        build += '<div class="carousel-cell">' + createCard(ngo) + '</div>';
    }); 
    return build;
}

function createCard(ngo) {
    return '<div class="card" style="width: 18rem;">' +
                '<div class="card-body">' +
                    '<h5 class="card-title">' + ngo.name + '</h5>' +
                    '<p class="card-text">' + ngo.description + '</p>' +
                    '<button type="button" class="btn btn-primary" data-toggle="modal" onclick="readmore()" data-target="#exampleModalCenter">Read More</button>' +
                '</div>' +
            '</div>';
}

function readmore() {

}

data = {
    "data": [
        {
            "category": "Category1",
            "ngos": [
                {
                    "name": "NGO1",
                    "description": "salkfjdslk;fjsad;flj"
                },
                {
                    "name": "NGO2",
                    "description": "euoruworweuirowup;"
                },
                {
                    "name": "NGO3",
                    "description": "euoruworweuirowup;"
                },
                {
                    "name": "NGO4",
                    "description": "euoruworweuirowup;"
                },
                {
                    "name": "NGO5",
                    "description": "euoruworweuirowup;"
                }
                
            ]
        },
        {
            "category": "Category2",
            "ngos": [
                {
                    "name": "NGO3",
                    "description": "salkfjdslk;fjsad;flj"
                },
                {
                    "name": "NGO4",
                    "description": "euoruworweuirowup;"
                }
            ]
        },
        {
            "category": "Category3",
            "ngos": [
                {
                    "name": "NGO5",
                    "description": "salkfjdslk;fjsad;flj"
                },
                {
                    "name": "NGO6",
                    "description": "euoruworweuirowup;"
                },
                {
                    "name": "NGO6",
                    "description": "euoruworweuirowup;"
                }
            ]
        }

    ]
};
