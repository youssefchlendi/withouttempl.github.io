function toggleMenu(x) {
  x.classList.toggle("change");
  let menu=document.getElementsByClassName("menu");
  if ( menu[0].style.display==="block")
  {
    menu[0].style.display="none";
  }
  else
    menu[0].style.display="block"
}