const menuToggle = document.getElementById("menuToggle");
const menuClose = document.getElementById("menuClose");
const navLinks = document.getElementById("navLinks");

function closeMenu() {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
}
menuToggle.addEventListener("click", () => {
    navLinks.classList.add("open");
    menuToggle.setAttribute("aria-expanded", "true");
});
menuClose.addEventListener("click", closeMenu);
document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", closeMenu);
});

document.getElementById("year").textContent =
    new Date().getFullYear();

const sections = document.querySelectorAll(
    "main section[id], .hero"
);

const navItems = document.querySelectorAll(".nav-link");
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const id = entry.target.id || "home";
        navItems.forEach(link => {
            link.classList.toggle(
                "active",
                link.getAttribute("href") === `#${id}`
            );

        });

    });

}, {
    rootMargin: "-35% 0px -55% 0px"
});

sections.forEach(section => {
    observer.observe(section);
});

// CONTACT FORM

const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const name = contactForm.elements.name.value.trim();
    const email = contactForm.elements.email.value.trim();
    const message = contactForm.elements.message.value.trim();
    const subject = encodeURIComponent(
        `Portfolio enquiry from ${name}`
    );
    const body = encodeURIComponent(
        `Name: ${name}\n` +
        `Email: ${email}\n\n` +
        `${message}`
    );
    window.location.href =
        `mailto:mahfooahmadkhan83@gmail.com?subject=${subject}&body=${body}`;

});
