/*
================================
The Side Bar JS
================================
*/
const hideSideBar =document.querySelector('.hide-sidebar'),
      showSideBar = document.querySelector('.to-left i');
const sideBar = document.querySelector('.left-panel');

showSideBar.addEventListener('click', () =>{
  sideBar.classList.add('active-left-panel');
  hideSideBar.style.display = 'block';
})

document.addEventListener('click', function(event) {
  // Check if the clicked element is inside the sidebar
  const isClickedInsideSidebar = sideBar.contains(event.target);

  // Check if the clicked element is the sidebar itself
  const isClickedSidebar = event.target === sideBar;

  // Check if the clicked element is the menubar itself
  const isClickedMenu = event.target === showSideBar;

  // If the clicked element is neither inside nor the sidebar itself, hide the sidebar
  if (!isClickedInsideSidebar && !isClickedSidebar && !isClickedMenu) {
    sideBar.classList.remove('active-left-panel');
  }
});
hideSideBar.addEventListener('click', () =>{
  sideBar.classList.remove('active-left-panel');
})
/*
================================
The Form JS
================================
*/
const form = document.querySelector('.main-part header form'),
      searchIcon = document.querySelector('.main-part header .to-left img'),
      timesIcon = document.querySelector('.main-part header form i');

searchIcon.onclick = () =>{
  form.classList.add('form-active');
}
timesIcon.onclick = () =>{
  form.classList.remove('form-active');
}
document.addEventListener('click', e => {
  let isFormChild = form.contains(e.target);
  let isForm = e.target === form;
  let isSearchIcon = e.target === searchIcon;
  
  if(!isForm && !isFormChild && !isSearchIcon) {
    form.classList.remove('form-active');
  }
})
/*
================================
Preloader
================================
*/
const preLoader = document.querySelector('.preloader');

  window.addEventListener('load', () => {
    preLoader.style.display = 'none';
   
});


const notificationIcon = document.querySelector('.fa-bell'),
      messagesBox = document.querySelector('.notification-pop');


notificationIcon.onclick = () => {
  messagesBox.classList.toggle('active');
}
