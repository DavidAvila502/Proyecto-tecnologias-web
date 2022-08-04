const Hide = () => {
  let ubicacionPrincipal = window.pageYOffset;
  console.log("hello");
  window.addEventListener("scroll", () => {
    let desplazamientoActual = window.pageYOffset;

    if (ubicacionPrincipal >= desplazamientoActual) {
      document.getElementsByClassName("nav")[0].getElementsByClassName.top =
        "0px";
    } else {
      document.getElementsByClassName("nav")[0].getElementsByClassName.top =
        "-100px";
    }
    ubicacionPrincipal = desplazamientoActual;
  });
};

export default Hide;
