/* ************************************************** SCROLL BUTTON ************************************************** */
var mybutton = document.getElementById("scrollToTopBtn");

// Ketika pengguna scroll ke bawah 20px dari atas dokumen, tampilkan tombol
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// Ketika pengguna mengklik tombol, scroll ke atas dari dokumen
mybutton.addEventListener("click", function () {
  document.body.scrollTop = 0; // Untuk Safari
  document.documentElement.scrollTop = 0; // Untuk Chrome, Firefox, IE dan Opera
});

/* ************************************************** Swiper JS ************************************************** */
const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/* ************************************************** Form Contact Whatsapp ************************************************** */

