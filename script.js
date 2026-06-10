const timelineItems = [

];

const researchProjects = [
  {
    title: "RTGU",
    summary:
      "Architecture-focused work documented through the model structure and supporting visual material.",
    status: "Featured",
    linkLabel: "Paper link",
    linkHref: "https://zenodo.org/records/20618403",
  },
  {
    title: "COBI",
    summary:
      "Representation and motion-focused work combining a short clip with learned-representation visuals.",
    status: "Featured",
    linkLabel: "Paper link",
    linkHref: "#",
  },
  {
    title: "AE",
    summary:
      "An active project currently in progress, represented here by the trajectory visualization.",
    status: "In progress",
    linkLabel: "Paper link",
    linkHref: "#",
  }
];

const carouselSlides = [...document.querySelectorAll("[data-slide]")];
const carouselDots = document.querySelector("[data-carousel-dots]");
const carouselPrev = document.querySelector("[data-carousel-prev]");
const carouselNext = document.querySelector("[data-carousel-next]");
const timelineList = document.querySelector("[data-timeline-list]");
const timelineFilters = document.querySelector("[data-timeline-filters]");
const timelineDetail = document.querySelector("[data-timeline-detail]");
const researchGrid = document.querySelector("[data-research-grid]");

let activeSlide = 0;
let activeTimeline = 0;
let activeFilter = "all";

function setActiveSlide(index) {
  activeSlide = (index + carouselSlides.length) % carouselSlides.length;
  carouselSlides.forEach((slide, slideIndex) => {
    slide.classList.toggle("is-active", slideIndex === activeSlide);
  });

  const dots = [...document.querySelectorAll(".dot")];
  dots.forEach((dot, dotIndex) => {
    dot.classList.toggle("is-active", dotIndex === activeSlide);
    dot.setAttribute("aria-current", dotIndex === activeSlide ? "true" : "false");
  });
}

function renderCarousel() {
  if (!carouselSlides.length || !carouselDots) return;

  carouselDots.innerHTML = "";
  carouselSlides.forEach((_, index) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.className = `dot${index === 0 ? " is-active" : ""}`;
    dot.setAttribute("aria-label", `Go to featured work ${index + 1}`);
    dot.addEventListener("click", () => setActiveSlide(index));
    carouselDots.appendChild(dot);
  });

  carouselPrev?.addEventListener("click", () => setActiveSlide(activeSlide - 1));
  carouselNext?.addEventListener("click", () => setActiveSlide(activeSlide + 1));
  setActiveSlide(0);
}

function renderTimelineFilters() {
  if (!timelineFilters) return;
  const groups = [
  ];

  timelineFilters.innerHTML = "";
  groups.forEach((group) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `chip${group.id === activeFilter ? " is-active" : ""}`;
    button.textContent = group.label;
    button.addEventListener("click", () => {
      activeFilter = group.id;
      activeTimeline = 0;
      renderTimelineFilters();
      renderTimelineList();
    });
    timelineFilters.appendChild(button);
  });
}

function renderTimelineDetail(item) {
  if (!timelineDetail) return;
  const title = timelineDetail.querySelector("[data-detail-title]");
  const year = timelineDetail.querySelector("[data-detail-year]");
  const body = timelineDetail.querySelector("[data-detail-body]");
  const tags = timelineDetail.querySelector("[data-detail-tags]");

  title.textContent = item.title;
  year.textContent = item.year;
  body.textContent = item.body;
  tags.innerHTML = "";
  item.tags.forEach((tag) => {
    const tagEl = document.createElement("span");
    tagEl.className = "badge muted";
    tagEl.textContent = tag;
    tags.appendChild(tagEl);
  });
}

function renderTimelineList() {
  if (!timelineList) return;

  const items = activeFilter === "all"
    ? timelineItems
    : timelineItems.filter((item) => item.group === activeFilter);

  timelineList.innerHTML = "";

  items.forEach((item, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `timeline-item${index === activeTimeline ? " is-active" : ""}`;
    button.innerHTML = `
      <span class="timeline-year">${item.year}</span>
      <strong class="timeline-title">${item.title}</strong>
      <span class="lead">${item.body}</span>
    `;
    button.addEventListener("click", () => {
      activeTimeline = index;
      renderTimelineList();
      renderTimelineDetail(item);
    });
    timelineList.appendChild(button);
  });

  if (items.length) {
    const selected = items[Math.min(activeTimeline, items.length - 1)];
    renderTimelineDetail(selected);
  }
}

function renderResearch() {
  if (!researchGrid) return;

  researchGrid.innerHTML = "";
  researchProjects.forEach((project) => {
    const card = document.createElement("article");
    card.className = "research-card";
    card.innerHTML = `
      <div class="badge-row">
        <span class="badge">${project.title}</span>
        <span class="badge muted">${project.status}</span>
      </div>
      <h3>${project.title}</h3>
      <p>${project.summary}</p>
      <a class="paper-link" href="${project.linkHref}">
        ${project.linkLabel}
        <span aria-hidden="true">→</span>
      </a>
    `;
    researchGrid.appendChild(card);
  });
}

function renderContact() {
  const contactMap = [
    {
      selector: '[aria-label="LinkedIn placeholder"]',
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/nick-van-kemenade-49bb2a37a",
    },
    {
      selector: '[aria-label="GitHub placeholder"]',
      label: "GitHub",
      href: "https://github.com/nickvankemenade-ai",
    },
    {
      selector: '[aria-label="Zenodo placeholder"]',
      label: "Zenodo",
      href: "https://zenodo.org/records/20618403",
    },
    {
      selector: '[aria-label="Mail placeholder"]',
      label: "Mail",
      href: "mailto:nick.vk.ai@gmail.com",
    },
  ];

  contactMap.forEach(({ selector, label, href }) => {
    const card = document.querySelector(selector);
    if (!card) return;
    card.innerHTML = `
      <a class="contact-card-link" href="${href}">
        <span>${label}</span>
        <small>${href.startsWith("mailto:") ? "Email contact" : "External profile"}</small>
      </a>
    `;
  });
}

renderCarousel();
renderTimelineFilters();
renderTimelineList();
renderResearch();
renderContact();
