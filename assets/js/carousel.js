const projects = [
{
    title: "RTGU",
    description:
        "A novel neural architecture exploring alternative recurrent computation."
},
{
    title: "Current Research",
    description:
        "Investigating autoencoders, latent spaces, and representation learning."
},
{
    title: "COBI",
    description:
        "An Edge TPU single-class object detector optimized for deployment."
}
];

let centerIndex = 1;

const leftCard =
    document.getElementById("left-card");

const centerCard =
    document.getElementById("center-card");

const rightCard =
    document.getElementById("right-card");

function renderCard(element, project)
{
    element.innerHTML = `
        <div class="card-content">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
        </div>
    `;
}

function updateCarousel()
{
    const left =
        (centerIndex + 2) % projects.length;

    const right =
        (centerIndex + 1) % projects.length;

    renderCard(leftCard, projects[left]);
    renderCard(centerCard, projects[centerIndex]);
    renderCard(rightCard, projects[right]);
}

leftCard.addEventListener("click", () =>
{
    centerIndex =
        (centerIndex + 2) % projects.length;

    updateCarousel();
});

rightCard.addEventListener("click", () =>
{
    centerIndex =
        (centerIndex + 1) % projects.length;

    updateCarousel();
});

setInterval(() =>
{
    centerIndex =
        (centerIndex + 1) % projects.length;

    updateCarousel();
}, 7000);

updateCarousel();
