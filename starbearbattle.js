(() => {
  const STAR_BEAR_URL =
    "https://www.gstatic.com/android/keyboard/emojikitchen/20210831/u1f43b/u1f43b_u2b50.png";
  const OFFSET = -0.3332889870078079;
  const SIZE = OFFSET * -2;

  const image = document.createElement("img");
  image.src = STAR_BEAR_URL;

  // https://stackoverflow.com/questions/17861447/html5-canvas-drawimage-how-to-apply-antialiasing
  const antiAliasingCanvas = document.createElement("canvas");

  image.onload = () => {
    antiAliasingCanvas.width = image.width;
    antiAliasingCanvas.height = image.height;
    const antiAliasingContext = antiAliasingCanvas.getContext("2d");
    const steps = 3;
    antiAliasingContext.filter = `blur(${steps}px)`;
    antiAliasingContext.drawImage(image, 0, 0);

    window.trace_star = (gDC, cw) => {
      gDC.drawImage(
        antiAliasingCanvas,
        OFFSET * cw,
        OFFSET * cw,
        SIZE * cw,
        SIZE * cw
      );
    };

    refreshCanvas();
  };
})();
