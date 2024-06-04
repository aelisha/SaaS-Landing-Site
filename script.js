document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector("header");
  if (header) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 0) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    });
  }

  const scrollTopBtn = document.createElement("button");
  scrollTopBtn.innerText = "↑ Top";
  scrollTopBtn.classList.add("scroll-top-btn");
  document.body.appendChild(scrollTopBtn);

  scrollTopBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
      scrollTopBtn.style.display = "block";
    } else {
      scrollTopBtn.style.display = "none";
    }
  });

  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach((item) => {
    const question = item.querySelector(".question");
    question.addEventListener("click", function () {
      const answer = item.querySelector(".answer");
      answer.classList.toggle("visible");
    });
  });

  const modeToggleBtn = document.createElement("button");
  modeToggleBtn.innerText = "Toggle Dark Mode";
  modeToggleBtn.classList.add("mode-toggle-btn");
  document.body.appendChild(modeToggleBtn);

  modeToggleBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
  });
});
