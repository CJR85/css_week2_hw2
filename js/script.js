function pickImage() {
  options = [
    "bacon_in_the_woods.png",
    "bend_in_the_road.png",
    "hollow_tree.png",
    "lake_view.JPG",
    "hanging_plants.png",
    "munising.jpg",
  ];
  randomImg = "images/" + options[Math.floor(Math.random() * options.length)];
  img = document.querySelector("#header_img");
  img.setAttribute("src", randomImg);
  img.setAttribute("alt", "");
}

function setImages() {
  options = [
    "bacon_in_the_woods.png",
    "bend_in_the_road.png",
    "hollow_tree.png",
    "lake_view.JPG",
    "hanging_plants.png",
    "munising.jpg",
  ];
  currentImages = document.querySelectorAll(".flex img");
  for (i = 0; i < currentImages.length; i++) {
    console.log("Image " + i);

    randomImg = "images/" + options[Math.floor(Math.random() * options.length)];
    currentImages[i].setAttribute("src", randomImg);
    currentImages[i].setAttribute("tabindex", "0");
  }
}
