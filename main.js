//@ts-nocheck
window.onload = _ => {
  document.getElementById('mobile-menu-button').onclick = toggleMenu;
}

//GLOBAL: menu_state = boolean; False = hidden, True = shown
let l_etat_du_menu = false;
function toggleMenu(){
  const le_menu = document.getElementById('menu');

  if(l_etat_du_menu === false){
    le_menu.style.borderTop = '1px solid var(--divider)'
    le_menu.style.height = 'fit-content';
    le_menu.style.paddingBottom = '1.5em';
    le_menu.style.paddingTop = '1.5em';

    l_etat_du_menu = true;
  }
  else{
    le_menu.style.borderTop = '0px solid var(--bg)';
    le_menu.style.height = '0';
    le_menu.style.paddingBottom = '0';
    le_menu.style.paddingTop = '0';

    l_etat_du_menu = false;
  }
}