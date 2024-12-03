function menuOnClick() {
    document.getElementById("menu-bar").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
  }


  var curriculo = document.getElementById("openCurriculo")

  curriculo.addEventListener("click", function() {
    var openCurriculo = document.getElementById("curriculo")
    let x = document.getElementById("x")
    var abrirCurriculo = false

    abrirCurriculo = !abrirCurriculo
    openCurriculo.style.display = abrirCurriculo ? "flex" : "none"

    x.addEventListener("click", function() {
        abrirCurriculo = !abrirCurriculo
        openCurriculo.style.display = abrirCurriculo ? "flex" : "none"
    })
  })