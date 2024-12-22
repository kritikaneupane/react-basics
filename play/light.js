const turnLight = () => {
  const imgId = document.getElementById("Light");

  const newImg =
    imgId.src === "https://www.w3schools.com/js/pic_bulboff.gif"
      ? "https://www.w3schools.com/js/pic_bulbon.gif"
      : "https://www.w3schools.com/js/pic_bulboff.gif";
  imgId.src = "https://www.w3schools.com/js/pic_bulbon.gif";
  imgId.src = newImg;
};
