'use strict'

/*

 ajouter les evenements aux elements 

*/

const addEventOnElem=function(elem , type , calback){


        if(elem.length>1)
        {
             for(let i=0 ; i<elem.length ; i++)
             {
                 elem[i].addEventListener(type , calback);
             }
        }
        else{
               elem.addEventListener(type , calback);
        }
}


// navbar toggle


const navbar = document.querySelector("[data-navbar]");
const navbarlink = document.querySelectorAll("[data-nav-link]");
const navtoggle = document.querySelector("[data-nav-toggle]");


const togglenavbar= function(){
    navbar.classList.toggle("active")
    navtoggle.classList.toggle("active")
    document.body.classList.toggle("active")
}

addEventOnElem(navtoggle , "click" , togglenavbar);
const closeNavabar = function(){

    navbar.classList.remove("active")
    navtoggle.classList.remove("active")
    document.body.classList.remove("active")
}

addEventOnElem(navbarlink , "click" , closeNavabar);



// header active 

const header = document.querySelector("[data-header]")

const activeHeader = function(){

       if(window.scrollY > 300)
       {
           header.classList.add("active")

       }
       else{
            header.classList.remove("active")
       }
}

addEventOnElem(window , "scroll" , activeHeader);
