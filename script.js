const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
if(menuBtn){
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
}
const counters = document.querySelectorAll(".counter");

const runCounter = () => {
  counters.forEach(counter => {
    const target = +counter.getAttribute("data-target");
    let count = 0;

    const updateCounter = () => {
      const increment = target / 50;

      if (count < target) {
        count += increment;
        counter.innerText = Math.ceil(count);
        setTimeout(updateCounter, 30);
      } else {
        counter.innerText = target + "+";
      }
    };

    updateCounter();
  });
};

const statsSection = document.querySelector(".stats-section");

if (statsSection) {
  const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      runCounter();
      observer.disconnect();
    }
  });

  observer.observe(statsSection);
}
