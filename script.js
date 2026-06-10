const timelineItems = [
  {
    year: "2026",
    title: "Placeholder milestone",
    body: "A recent project milestone that can later be replaced with a real event, role change, publication, or launch.",
    tags: ["placeholder", "milestone", "research"],
    group: "recent",
  },
  {
    year: "2025",
    title: "Project iteration",
    body: "An experimental phase where the model, data, or evaluation workflow got materially better.",
    tags: ["experiment", "iteration"],
    group: "recent",
  },
  {
    year: "2024",
    title: "Featured project work",
    body: "A research-heavy year where one of the key projects took shape and became showcase-worthy.",
    tags: ["project", "featured"],
    group: "mid",
  },
  {
    year: "2023",
    title: "Research foundation",
    body: "The groundwork period: reading, prototyping, and setting up the systems that later paid off.",
    tags: ["foundation", "research"],
    group: "mid",
  },
  {
    year: "2022",
    title: "New direction",
    body: "A point where the work shifted toward a more machine-learning-centric and engineering-aware direction.",
    tags: ["direction", "transition"],
    group: "mid",
  },
  {
    year: "2021",
    title: "Earlier stage milestone",
    body: "An earlier entry that can later map to study, lab work, or an important project stage.",
    tags: ["earlier", "placeholder"],
    group: "early",
  },
];

const researchProjects = [
  {
    title: "RTGU",
    summary:
      "Architecture-focused work with visual documentation centered on the model structure and supporting plots.",
    status: "Featured",
    linkLabel: "Paper link",
    linkHref: "#",
  },
  {
    title: "COBI",
    summary:
      "Representation and motion-focused work with a short clip plus learned-representation visuals.",
    status: "Featured",
    linkLabel: "Paper link",
    linkHref: "#",
  },
  {
    title: "AE",
    summary:
      "An active project currently in progress, already represented by the trajectory visualization.",
    status: "In progress",
    linkLabel: "Paper link",
    linkHref: "#",
  },
  {
    title: "Additional project",
    summary:
      "Use this slot for another research project and replace the placeholder paper link when ready.",
    status: "Placeholder",
    linkLabel: "Paper link",
    linkHref: "#",
  },
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
    { id: "all", label: "All" },
    { id: "recent", label: "Recent" },
    { id: "mid", label: "Mid" },
    { id: "early", label: "Early" },
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

renderCarousel();
renderTimelineFilters();
renderTimelineList();
renderResearch();
