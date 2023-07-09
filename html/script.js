let slideImages = document.querySelectorAll('.slides img');
let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
var counter = 0;

//next button
next.addEventListener('click', slideNext);
function slideNext(){
    slideImages[counter].style.animation = 'next1 0.5s ease-in forwards';
    if(counter >= slideImages.length -1){
        counter = 0;
    }else{
        counter++;
    }
    slideImages[counter].style.animation = 'next2 0.5s ease-in forwards';
}

//previouse button

prev.addEventListener('click', slidePrev);
function slidePrev(){
    slideImages[counter].style.animation = 'prev1 0.5s ease-in forwards';
    if(counter == 0){
        counter = slideImages.length -1;
    }else{
        counter--;
    }
    slideImages[counter].style.animation = 'prev2 0.5s ease-in forwards';
}

function autoSliding(){
    deletInterval = setInterval(timer,2000);
    function timer(){
        slideNext();
    }
}
autoSliding();

//stop when mouse is over
const container = document.querySelector('.slide-container');
container.addEventListener ('mouseover', function(){
    clearInterval(deletInterval);
});

//resume sliding when mouse is out
container.addEventListener('mouseout',autoSliding);

function switchImage(currentImage){
    currentImage.classList.add('active');
    var imageId = currentImage.getAttribute('attr');
    if(imageId > counter){
        slideImages[counter].style.animation = 'next1 0.5s ease-in forwards';
        counter = imageId;
        slideImages[counter].style.animation = 'next2 0.5s ease-in forwards';

    }else if(imageId == counter){
        return;
    }
    else{
        slideImages[counter].style.animation = 'prev1 0.5s ease-in forwards';
        counter = imageId;
        slideImages[counter].style.animation = 'prev2 0.5s ease-in forwards';
    }
}

//man slider
const carousel = document.querySelector(".carousel");
firstImg = carousel.querySelectorAll("img")[0];
arrowIcons = document.querySelectorAll(".wrapper i");


let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;

const showHideIcons = () =>{
    let scrollWidth = carousel.scrollWidth - carousel.clientWidth;
    arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
    arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
}
arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstImgWidth = firstImg.clientWidth + 14;

        carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
        setTimeout(() => showHideIcons(), 60)
    })
});

const middleSlide = () => {
   //if there is no image to scroll
    if(carousel.scrollLeft == (carousel.scrollWidth - carousel.clientWidth)) return;
    positionDiff = Math.abs(positionDiff);
    let firstImgWidth = firstImg.clientWidth + 14;
    let valDifference = firstImgWidth - positionDiff;

//scrolling to the right
    if(carousel.scrollLeft > prevScrollLeft){ 
       return carousel.scrollLeft += positionDiff > firstImgWidth / 4 ? valDifference : -positionDiff;

    }
//scrolling to the left
    carousel.scrollLeft -= positionDiff > firstImgWidth / 4 ? valDifference : -positionDiff;}

const dragStart = (e) => {
    isDragStart = true ;
    prevPageX = e.pageX || e.touches[0].pageX ;
    prevScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    if(!isDragStart) return;
    e.preventDefault();
    isDragging = true;
    carousel.classList.add("dragging");
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff; 
    showHideIcons()
}

const dragStop = () =>{
    isDragStart = false;
    carousel.classList.remove("dragging");

    if(!isDragging)return;
    isDragging = false;

    middleSlide();

}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);

carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);

carousel.addEventListener("mouseup", dragStop);
carousel.addEventListener("mouseleave", dragStop);
carousel.addEventListener("touchend", dragStop);






const carousel2 = document.querySelector(".carousel2");
firstImg2 = carousel2.querySelectorAll("img")[0];
arrowIcons2 = document.querySelectorAll(".wrapper2 i");


let isDragStart2 = false, isDragging2 = false, prevPageX2, prevScrollLeft2, positionDiff2;

const showHideIcons2 = () =>{
    let scrollWidth = carousel2.scrollWidth - carousel2.clientWidth;
    arrowIcons2[0].style.display = carousel2.scrollLeft == 0 ? "none" : "block";
    arrowIcons2[1].style.display = carousel2.scrollLeft == scrollWidth ? "none" : "block";
}
arrowIcons2.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstImg2Width = firstImg2.clientWidth + 14;

        carousel2.scrollLeft += icon.id == "left2" ? -firstImg2Width : firstImg2Width;
        setTimeout(() => showHideIcons2(), 60)
    })
});

const middleSlide2 = () => {
   //if there is no image to scroll
    if(carousel2.scrollLeft == (carousel2.scrollWidth - carousel2.clientWidth)) return;
    positionDiff2 = Math.abs(positionDiff2);
    let firstImg2Width = firstImg2.clientWidth + 14;
    let valDifference = firstImg2Width - positionDiff2;

//scrolling to the right
    if(carousel2.scrollLeft > prevScrollLeft2){ 
       return carousel2.scrollLeft += positionDiff2 > firstImg2Width / 4 ? valDifference : -positionDiff2;

    }
//scrolling to the left
    carousel2.scrollLeft -= positionDiff2 > firstImg2Width/ 4 ? valDifference : -positionDiff2;}

const dragStart2 = (e) => {
    isDragStart2 = true ;
    prevPageX2 = e.pageX || e.touches[0].pageX ;
    prevScrollLeft2 = carousel2.scrollLeft;
}

const dragging2 = (e) => {
    if(!isDragStart2) return;
    e.preventDefault();
    isDragging2 = true;
    carousel2.classList.add("dragging");
    positionDiff2 = (e.pageX || e.touches[0].pageX) - prevPageX2;
    carousel2.scrollLeft = prevScrollLeft2 - positionDiff2; 
    showHideIcons2();
}

const dragStop2 = () =>{
    isDragStart2 = false;
    carousel2.classList.remove("dragging");

    if(!isDragging2)return;
    isDragging2 = false;
    middleSlide2();

}

carousel2.addEventListener("mousedown", dragStart2);
carousel2.addEventListener("touchstart", dragStart2);

carousel2.addEventListener("mousemove", dragging2);
carousel2.addEventListener("touchmove", dragging2);

carousel2.addEventListener("mouseup", dragStop2);
carousel2.addEventListener("mouseleave", dragStop2);
carousel2.addEventListener("touchend", dragStop2);