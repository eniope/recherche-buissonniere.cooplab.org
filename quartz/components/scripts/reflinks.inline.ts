// Liens vers le référentiel refs/ : ouverture en nouvel onglet
// (garde le popover au survol, ne sort pas le lecteur de son flux).
;(function () {
  function wire() {
    document.querySelectorAll('a[href*="refs/#"]').forEach(function (a) {
      a.setAttribute("target", "_blank")
      a.setAttribute("rel", "noopener noreferrer")
    })
  }
  wire()
  document.addEventListener("nav", wire)
})()
