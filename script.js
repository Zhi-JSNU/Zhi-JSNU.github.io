const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector("[data-nav-links]");
const year = document.querySelector("[data-year]");

if (year) {
  year.textContent = new Date().getFullYear();
}

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
    document.body.classList.toggle("nav-open", isOpen);
  });

  navLinks.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      navLinks.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
      document.body.classList.remove("nav-open");
    }
  });
}

const sections = [...document.querySelectorAll("main section[id]")];
const links = [...document.querySelectorAll(".nav-links a")];

if ("IntersectionObserver" in window && sections.length > 0) {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;

        const activeLink = links.find((link) => link.getAttribute("href") === `#${entry.target.id}`);
        links.forEach((link) => link.classList.toggle("active", link === activeLink));
      }
    },
    { rootMargin: "-40% 0px -55% 0px", threshold: 0.01 }
  );

  sections.forEach((section) => observer.observe(section));
}

const emailButtons = [...document.querySelectorAll(".email-protected")];
const emailStatus = document.querySelector("[data-email-status]");

const reverseText = (value) => [...value].reverse().join("");
const getProtectedEmail = (button) => {
  const user = reverseText(button.dataset.userReversed || "");
  const domain = reverseText(button.dataset.domainReversed || "");
  return user && domain ? `${user}@${domain}` : "";
};

const copyText = async (text) => {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
    return;
  }

  const field = document.createElement("textarea");
  field.value = text;
  field.setAttribute("readonly", "");
  field.style.position = "fixed";
  field.style.opacity = "0";
  document.body.appendChild(field);
  field.select();
  document.execCommand("copy");
  field.remove();
};

emailButtons.forEach((button) => {
  const display = button.querySelector("[data-email-display]");
  const email = getProtectedEmail(button);

  if (display && email) {
    const [user, domain] = email.split("@");
    display.textContent = `${user} [at] ${domain.replaceAll(".", " [dot] ")}`;
  }

  button.addEventListener("click", async () => {
    const protectedEmail = getProtectedEmail(button);
    if (!protectedEmail) return;

    try {
      await copyText(protectedEmail);
      if (emailStatus) {
        emailStatus.textContent = "Email address copied to clipboard.";
      }
    } catch {
      if (emailStatus) {
        emailStatus.textContent = "Email address is shown in obfuscated form.";
      }
    }
  });
});
