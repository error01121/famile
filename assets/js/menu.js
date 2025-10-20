const windowInnerWidth = window.innerWidth;
const menuBtnOpen = document.querySelector(".nav-menu-menu");
const menuBtnClose = document.querySelector(".close-menu-btn");
const menuBtnCloseTablet = document.querySelector(".close-menu-btn-tablet");
const menuBtnClosePhone = document.querySelector(".close-menu-btn-phone");
const menuDesktop = document.querySelector(".modal-menu-desktop");
const menuTablet = document.querySelector(".modal-menu-tablet");
const menuPhone = document.querySelector(".modal-menu-phone");

if (windowInnerWidth > 769) {
          menuBtnOpen.addEventListener('click', () => {
                    menuDesktop.style.display = "block";
          })

          menuBtnClose.addEventListener('click', () => {
                    menuDesktop.style.display = "none";
          })
} else if (windowInnerWidth > 480) {
          menuBtnOpen.addEventListener('click', () => {
                    menuTablet.style.display = "block";
          })

          menuBtnCloseTablet.addEventListener('click', () => {
                    menuTablet.style.display = "none";
          })

} else {
          menuBtnOpen.addEventListener('click', () => {
                    menuPhone.style.display = "block";
          })

          menuBtnClosePhone.addEventListener('click', () => {
                    menuPhone.style.display = "none";
          })

}



