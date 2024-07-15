const STAR_BEAR_URL =
  "https://www.gstatic.com/android/keyboard/emojikitchen/20210831/u1f43b/u1f43b_u2b50.png";
const OFFSET = -0.3332889870078079;
const SIZE = OFFSET * -2;

const image = document.createElement("img");
image.src = STAR_BEAR_URL;

image.onload = () => {
  window.trace_star = (gDC, cw) => {
    gDC.drawImage(image, OFFSET * cw, OFFSET * cw, SIZE * cw, SIZE * cw);
  };

  refreshCanvas();
};
