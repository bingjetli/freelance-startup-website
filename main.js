//@ts-nocheck
window.onload = _ => {
  setupMobileMenuButton();
  setupCarousel('homepage-hero-carousel', 3000, 4);
}

function setupMobileMenuButton(){
  document.getElementById('mobile-menu-button').onclick = toggleMenu;

  //menu_state = boolean; False = hidden, True = shown
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
}

function setupCarousel(carousel_id, carousel_timer, n_items){
  let le_chronometre = setTimeout(spinCarousel, carousel_timer);
  let le_objet_actuel = 0;

  //Setup event listeners for carousel switching using the dots.
  const les_indicateurs = document.getElementById(carousel_id + '-indicator').children;
  for(let i = 0; i < les_indicateurs.length; i++){
    les_indicateurs[i].onclick = _ => switchToItem(i);
  }

  function switchToItem(item){
    //Remove filled dot indicator before switching to next carousel item.
    document.getElementById(carousel_id + '-indicator-' + le_objet_actuel).classList.remove('carousel-indicator-dot-filled');

    //Set the new currently shown item variable.
    le_objet_actuel = item;

    moveCarousel();

    //Add filled dot indicator to the new current carousel item.
    document.getElementById(carousel_id + '-indicator-' + le_objet_actuel).classList.add('carousel-indicator-dot-filled');

    resetTimer();
  }

  function spinCarousel(){
    //Remove filled dot indicator before re-calculating next carousel item.
    document.getElementById(carousel_id + '-indicator-' + le_objet_actuel).classList.remove('carousel-indicator-dot-filled');
    
    //Calculate next carousel item.
    if(le_objet_actuel < n_items - 1){
      le_objet_actuel++;
    }
    else {
      le_objet_actuel = 0;
    }
    
    //Add filled dot indicator to the new current carousel item.
    document.getElementById(carousel_id + '-indicator-' + le_objet_actuel).classList.add('carousel-indicator-dot-filled');

    moveCarousel();
    resetTimer();
  }

  function moveCarousel(){
    //Move the carousel.
    document.documentElement.style.setProperty('--' + carousel_id + '-offset', '-' + le_objet_actuel + '00%');
  }

  function resetTimer(){
    clearTimeout(le_chronometre);
    le_chronometre = setTimeout(spinCarousel, carousel_timer + 500);
  }
}