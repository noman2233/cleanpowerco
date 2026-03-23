export const scrollToSection = (id) => {
  if (typeof window === "undefined") return; // for Next.js safety

  const section = document.getElementById(id);

  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};