window.addEventListener('load', function () {

    const burgerNav = this.document.querySelector('.nav-burger');
    const navMenu = this.document.querySelector('.nav-menu');
    const navMenu__link = this.document.querySelectorAll('.nav-menu__link');
    const minBlock = this.document.querySelector('.min-block');
    const link_1 = this.document.querySelector('.link_1');


    burgerNav.addEventListener('click', () => {
        navMenu.classList.toggle('displayBlock');
    })
})