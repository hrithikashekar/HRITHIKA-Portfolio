const artworks = [
  ["assets/artwork-01.jpg", "Peacock Portrait", "Acrylic · Portrait"],
  ["assets/artwork-02.jpg", "Muruga", "Acrylic · Portrait"],
  ["assets/artwork-03.jpg", "Traditional Portrait", "Acrylic · Portrait"],
  ["assets/artwork-04.jpg", "Swan", "Watercolour · Nature"],
  ["assets/artwork-05.jpg", "Village at Dusk", "Mixed media · Landscape"],
  ["assets/artwork-06.jpg", "Into the Green", "Mixed media · Landscape"],
  ["assets/artwork-07.jpg", "Ganesha Study", "Charcoal · Study"],
  ["assets/artwork-08.jpg", "In Shadow", "Acrylic · Portrait"],
  ["assets/artwork-09.jpg", "The Eye", "Mixed media · Study"],
  ["assets/artwork-10.jpg", "Village Study", "Colour pencils · Landscape"],
  ["assets/artwork-11.jpg", "Street Study", "Colour pencils · Urban study"],
  ["assets/artwork-12.jpg", "Village Sketch", "Drawing · Study"],
  ["assets/artwork-13.jpg", "Ganesha in Colour", "Watercolour · Cultural"]
];

// ==============================
// LIGHTBOX
// ==============================
const lightbox = document.getElementById("lightbox");
const lbImg = document.getElementById("lightboxImage");
const lbCaption = document.getElementById("lightboxCaption");
let current = 0;

function showArtwork(index) {
  current = (index + artworks.length) % artworks.length;
  const [src, title, medium] = artworks[current];
  lbImg.src = src;
  lbImg.alt = title;
  lbCaption.textContent = `${title} · ${medium}`;
  lightbox.classList.add("open");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

document.querySelectorAll(".lightbox-trigger").forEach(btn => {
  btn.addEventListener("click", () => showArtwork(Number(btn.dataset.index)));
});
document.querySelector(".close").addEventListener("click", closeLightbox);
document.querySelector(".prev").addEventListener("click", () => showArtwork(current - 1));
document.querySelector(".next").addEventListener("click", () => showArtwork(current + 1));
lightbox.addEventListener("click", e => { if (e.target === lightbox) closeLightbox(); });

document.addEventListener("keydown", e => {
  if (!lightbox.classList.contains("open")) return;
  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowLeft") showArtwork(current - 1);
  if (e.key === "ArrowRight") showArtwork(current + 1);
});

// ==============================
// GALLERY FILTER
// ==============================
function filterGallery(filter) {
  document.querySelectorAll(".filter").forEach(button => {
    button.classList.toggle("active", button.dataset.filter === filter);
  });

  document.querySelectorAll(".art-card").forEach(card => {
    const categories = card.dataset.category.split(" ");
    card.style.display = filter === "all" || categories.includes(filter) ? "" : "none";
  });

  document.getElementById("gallery").scrollIntoView({ behavior: "smooth", block: "start" });
}

document.querySelectorAll(".filter").forEach(button => {
  button.addEventListener("click", () => filterGallery(button.dataset.filter));
});

// ==============================
// COLLECTION CARDS
// ==============================
document.querySelectorAll(".collection-card").forEach(card => {
  card.addEventListener("click", e => {
    e.preventDefault();
    filterGallery(card.dataset.jump);
  });
});

// ==============================
// MOBILE MENU
// ==============================
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

menuToggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
});

document.querySelectorAll(".nav a").forEach(a => {
  a.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

// ==============================
// PREPARE EMAIL
// Opens the visitor's email with To: Hrithika's address,
// a subject and a 2-line default message.
// ==============================
const RECIPIENT = "hrithikashekhar2005@gmail.com";
const SUBJECT = "Artwork enquiry";
const BODY = "Hello Hrithika,\nI am interested in your artwork.";

document.getElementById("prepareEmail").addEventListener("click", () => {
  const enc = encodeURIComponent;
  const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

  if (isMobile) {
    // Phones: opens the default mail app
    window.location.href = `mailto:${RECIPIENT}?subject=${enc(SUBJECT)}&body=${enc(BODY)}`;
  } else {
    // Desktop: opens Gmail compose in a new tab
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=${enc(RECIPIENT)}&su=${enc(SUBJECT)}&body=${enc(BODY)}`,
      "_blank",
      "noopener"
    );
  }
});

// ==============================
// SCROLL REVEAL (fade-in as sections enter view)
// ==============================
if ("IntersectionObserver" in window) {
  const revealTargets = document.querySelectorAll(
    ".intro-strip > div, .section-heading, .collection-card, .art-card, .about-image, .about-copy, .commission-intro, .process-step, .contact-copy, .contact-details"
  );
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealTargets.forEach(el => {
    el.classList.add("js-reveal");
    observer.observe(el);
  });
}
