//Keeping description on the image
/*
$('#im').on('click', () =>{
    $('#des').css("background", "rgba(0, 0, 0, 0)")
    $('#des').css("color", "rgba(0, 0, 0, 0)")
    console.log("Click IMG")
});

$('#des').on('click', () =>{
    $('#des').css("background", "rgba(0, 0, 0, 0.747)")
    $('#des').css("color", "rgb(255, 255, 255)")
    console.log("Click DES")
});*/

//Storing images
let first = {
    photo: 'images/4.jpg',
    title: 'Edges',
    description: 'This is a minimalist architecture-themed photo.'
};
let second = {
    photo: 'images/5.jpg',
    title: 'Palms in sunset',
    description: 'We can see three palm trees here.'
};
let third = {
    photo: 'images/13.jpg',
    title: 'Field at night',
    description: 'This is a rather dark picture, with very few light in the distance, but just enough to notice the grass.'
};
let fourth = {
    photo: 'images/14.jpg',
    title: 'Mountain under stars',
    description: 'On this image we can see a mountain full of lights but we can also see the stars.'
};
let fifth = {
    photo: 'images/16.jpg',
    title: 'Sihlouette of palms',
    description: 'This image was taken early in the evening. You can see the sihlouette of the trees that are probably palm trees.'
};
let sixth = {
    photo: 'images/20.jpg',
    title: 'Warm cloud',
    description: "I took this picture a few days ago. Altough it's a dark picture, I took it at about 4 pm."
};

//Moving between images
let currentPicture = 0;
let pictureArray = [first, second, third, fourth, fifth, sixth];
$('#lhs').on('click', () => {
    if(currentPicture >= 0){currentPicture--;}
    for(let i = 0; i < 6; i++){
        if(currentPicture === i){
            $('#im').attr('src', pictureArray[currentPicture].photo);
            $('#title').text(pictureArray[currentPicture].title);
            $('#sub_text').text(pictureArray[currentPicture].description);
        }
    }
});
$('#rhs').on('click', () => {
    if(currentPicture < 6){currentPicture++;}
    for(let i = 0; i < 6; i++){
        if(currentPicture === i){
            $('#im').attr('src', pictureArray[currentPicture].photo);
            $('#title').text(pictureArray[currentPicture].title);
            $('#sub_text').text(pictureArray[currentPicture].description);
        }
    }
});

//Loading first image, when opening the page
let loadPicture = (photoNumber) => {
    $('#im').attr('src', pictureArray[photoNumber].photo);
    $('#title').text(pictureArray[photoNumber].title);
    $('#sub_text').text(pictureArray[photoNumber].description);
};

loadPicture(currentPicture);

//Thumbnails
$('#nr_1').on('click', () => {
    currentPicture = 0;
    loadPicture(currentPicture);
    $('#nr_1').css('border', '3px')
});
$('#nr_2').on('click', () => {
    currentPicture = 1;
    loadPicture(currentPicture);
});
$('#nr_3').on('click', () => {
    currentPicture = 2;
    loadPicture(currentPicture);
});
$('#nr_4').on('click', () => {
    currentPicture = 3;
    loadPicture(currentPicture);
});
$('#nr_5').on('click', () => {
    currentPicture = 4;
    loadPicture(currentPicture);
});
$('#nr_6').on('click', () => {
    currentPicture = 5;
    loadPicture(currentPicture);
});

$('#im1').attr('src', 'thumbnails/t_4.jpg');
$('#im2').attr('src', 'thumbnails/t_5.jpg');
$('#im3').attr('src', 'thumbnails/t_13.jpg');
$('#im4').attr('src', 'thumbnails/t_14.jpg');
$('#im5').attr('src', 'thumbnails/t_16.jpg');
$('#im6').attr('src', 'thumbnails/t_20.jpg');

$('#p_title_1').text(first.title);
$('#p_title_2').text(second.title);
$('#p_title_3').text(third.title);
$('#p_title_4').text(fourth.title);
$('#p_title_5').text(fifth.title);
$('#p_title_6').text(sixth.title);