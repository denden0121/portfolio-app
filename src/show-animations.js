

export const initShowAnimation = () => {
    const elements = document.querySelectorAll(".animate-show");
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("hidden");
          entry.target.classList.add("animate-show");
          setTimeout(() => {
            entry.target.classList.remove("animate-show");
          }, 2000); // Reset animation after it finishes
        }
      });
    }, { threshold: 0.5 });
  
    elements.forEach((element) => {
      observer.observe(element);
    });
  };
  