(() => {
  const currentPage = document.body?.dataset.page;
  const navLinks = document.querySelectorAll(".site-nav a");
  navLinks.forEach((link) => {
    const match =
      (currentPage === "home" && link.getAttribute("href") === "./index.html") ||
      (currentPage === "timeline" && link.getAttribute("href") === "./timeline.html") ||
      (currentPage === "research" && link.getAttribute("href") === "./research.html") ||
      (currentPage === "socials" && link.getAttribute("href") === "./socials.html");

    if (match) {
      link.setAttribute("aria-current", "page");
    }
  });

  const carousel = document.querySelector("[data-carousel]");
  if (!carousel) return;

  const track = carousel.querySelector("[data-carousel-track]");
  const slides = Array.from(carousel.querySelectorAll("[data-slide]"));
  const prevButton = carousel.querySelector("[data-carousel-prev]");
  const nextButton = carousel.querySelector("[data-carousel-next]");
  const dotsWrap = carousel.querySelector("[data-carousel-dots]");
  const meta = carousel.querySelector("[data-carousel-meta]");

  if (!track || slides.length === 0 || !dotsWrap || !meta) return;

  let index = 0;
  let autoplayTimer = null;
  const labels = ["RTGU", "COBI", "LDM / AE"];

  const dots = slides.map((_, slideIndex) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.className = "carousel-dot";
    dot.setAttribute("aria-label", `Go to ${labels[slideIndex] || `slide ${slideIndex + 1}`}`);
    dot.addEventListener("click", () => setIndex(slideIndex));
    dotsWrap.appendChild(dot);
    return dot;
  });

  const update = () => {
    track.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach((dot, dotIndex) => {
      dot.setAttribute("aria-pressed", String(dotIndex === index));
    });
    meta.textContent = labels[index] || `Slide ${index + 1}`;

    slides.forEach((slide, slideIndex) => {
      const videos = slide.querySelectorAll("video");
      if (slideIndex !== index) {
        videos.forEach((video) => video.pause());
      }
    });
  };

  const setIndex = (nextIndex) => {
    index = (nextIndex + slides.length) % slides.length;
    update();
  };

  const stopAutoplay = () => {
    if (autoplayTimer) {
      window.clearInterval(autoplayTimer);
      autoplayTimer = null;
    }
  };

  const startAutoplay = () => {
    stopAutoplay();
    autoplayTimer = window.setInterval(() => {
      setIndex(index + 1);
    }, 20000);
  };

  prevButton?.addEventListener("click", () => {
    setIndex(index - 1);
    startAutoplay();
  });

  nextButton?.addEventListener("click", () => {
    setIndex(index + 1);
    startAutoplay();
  });

  document.addEventListener("keydown", (event) => {
    if (!carousel.contains(document.activeElement) && document.activeElement !== document.body) {
      return;
    }

    if (event.key === "ArrowLeft") {
      setIndex(index - 1);
      startAutoplay();
    }

    if (event.key === "ArrowRight") {
      setIndex(index + 1);
      startAutoplay();
    }
  });

  carousel.addEventListener("mouseenter", stopAutoplay);
  carousel.addEventListener("mouseleave", startAutoplay);
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      stopAutoplay();
    } else {
      startAutoplay();
    }
  });

  update();
  startAutoplay();
})();
