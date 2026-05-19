const header = document.querySelector("[data-header]");
const chips = document.querySelectorAll("[data-filter]");
const essayItems = document.querySelectorAll("[data-topic]");

const updateHeader = () => {
  header.classList.toggle("is-scrolled", window.scrollY > 12);
};

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

chips.forEach((chip) => {
  chip.addEventListener("click", () => {
    const filter = chip.dataset.filter;

    chips.forEach((item) => item.classList.toggle("is-active", item === chip));
    essayItems.forEach((item) => {
      item.classList.toggle("is-hidden", filter !== "all" && item.dataset.topic !== filter);
    });
  });
});
