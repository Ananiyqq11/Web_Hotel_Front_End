//<script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.js" integrity="sha512-gY25nC63ddE0LcLPhxUJGFxa2GoIyA5FLym4UJqHDEMHjp8RET6Zn/SHo1sltt3WuVtqfyxECP38/daUc/WVEA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
var menulist = document.getElementById('menulist');
menulist.style.maxHeight=="0px";

function menutoggle(){
    if(menulist.style.maxHeight=="0px"){
        menulist.style.maxHeight=="100vh";
    }
    else{
        menulist.style.maxHeight=="0px";
    }
}

