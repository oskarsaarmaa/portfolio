let menuicon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuicon.onclick = () => {
        menuicon.classList.toggle('bx-x');  /*kuvake boxicon sivulta, olen käyttänyt muitakin kuvakkeita kyseiseltä sivulta*/
        navbar.classList.toggle('active'); /*Viittaa elementtiin jonkai loin CSS koodissa (jos resoluutio on pienempi kun määräämäni resoluutio silloin burger menu ilmestyy ja sitä pystyy klikata auki eli se on "active")*/
}