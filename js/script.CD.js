document.getElementById("registerForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const Nome = document.getElementById("Nome").value;
    const Email = document.getElementById("Email").value;
    const Senha = document.getElementById("Senha").value;
    const confirmeSenha = document.getElementById("confirmeSenha").value;
  
    if (Senha !== confirmeSenha) {
      alert("As duas senhas estão diferentes");
      return;
    }
  
    const user = {
      Nome: Nome,
      Email: Email,
      Senha: Senha,
    };
  
    localStorage.setItem(Email, JSON.stringify(user));
    alert("Cadastro completo com sucesso por favor faça o login.");
    window.location.href = "login.html";
  });
  
  class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = "active";
  
      this.handleClick = this.handleClick.bind(this);
    }
  
    animateLinks() {
      this.navLinks.forEach((link, index) => {
        link.style.animation
          ? (link.style.animation = "")
          : (link.style.animation = `navLinkFade 0.5s ease forwards ${
              index / 7 + 0.3
            }s`);
      });
    }
  
    handleClick() {
      this.navList.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
      this.animateLinks();
    }
  
    addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
    }
  
    init() {
      if (this.mobileMenu) {
        this.addClickEvent();
      }
      return this;
    }
  }
  
  const mobileNavbar = new MobileNavbar(
    ".mobile-menu ",
    ".nav-list",
    ".nav-list li",
  );
  mobileNavbar.init();