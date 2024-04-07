// Images
const path = './assets/images.json';
let currentPicture = 0;
let imageArray = [];

function loadPicture(index) {
    $('#main-image').attr('src', imageArray[index].image);
    $('#title').text(imageArray[index].title);
    $('#description').text(imageArray[index].description);
};

function imageArrayInit() {
    fetch(path)
    .then((response) => { return response.json(); })
    .then((data) => {
        imageArray = data;

        loadPicture(currentPicture);

        $('#th-image-1').attr('src', imageArray[0].image);
        $('#th-image-2').attr('src', imageArray[1].image);
        $('#th-image-3').attr('src', imageArray[2].image);
        $('#th-image-4').attr('src', imageArray[3].image);
        $('#th-image-5').attr('src', imageArray[4].image);

    })
    .catch((error) => { console.error("There was a problem with the fetch operation: ", error); });
};
imageArrayInit();

// Left Arrow
$('#al').on('click', () => {
    if(currentPicture > 0) {currentPicture--;}
    else if(currentPicture === 0) {currentPicture = imageArray.length-1;}
    for(let i = 0; i < imageArray.length; i++) {
        if(currentPicture === i){
            $('#main-image').attr('src', imageArray[currentPicture].image);
            $('#title').text(imageArray[currentPicture].title);
            $('#description').text(imageArray[currentPicture].description);
        }
    }
});

// Right Arrow
$('#ar').on('click', () => {
    if(currentPicture < imageArray.length) {currentPicture++;}
    else if(currentPicture === imageArray.length) {currentPicture = 0;}
    for(let i = 0; i < imageArray.length; i++) {
        if(currentPicture === i){
            $('#main-image').attr('src', imageArray[currentPicture].image);
            $('#title').text(imageArray[currentPicture].title);
            $('#description').text(imageArray[currentPicture].description);
        }
    }
});

// Thumbnails
$('#th-image-1').on('click', () => { currentPicture = 0; loadPicture(currentPicture); });
$('#th-image-2').on('click', () => { currentPicture = 1; loadPicture(currentPicture); });
$('#th-image-3').on('click', () => { currentPicture = 2; loadPicture(currentPicture); });
$('#th-image-4').on('click', () => { currentPicture = 3; loadPicture(currentPicture); });
$('#th-image-5').on('click', () => { currentPicture = 4; loadPicture(currentPicture); });