let navigationbar = document.querySelector('.navigationbar');

document.querySelector('#menu-btn').onclick = () =>{
    navigationbar.classList.toggle('active');
    searchForm.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navigationbar.classList.remove('active');
}

window.onscroll = () =>{
    navigationbar.classList.remove('active');
    searchForm.classList.remove('active');
}