window.onload = window.setTimeout(firstImage, 100);

var carousel = document.getElementById("carousel").style

function firstImage() {
  carousel.background="url('assets/images/first.png') no-repeat center center";
  setTimeout(secondImage, 1000);
};

function secondImage() {
  carousel.background="url('assets/images/second.png') no-repeat center center";
  setTimeout(thirdImage, 1000);
};

function thirdImage () {
  carousel.background="url('assets/images/third.png') no-repeat center center";
  setTimeout(fourthImage, 1000);
};

function fourthImage () {
  carousel.background="url('assets/images/fourth.png') no-repeat center center";
  setTimeout(firstImage, 1000);
};