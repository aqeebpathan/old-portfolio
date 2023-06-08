const mySection = document.querySelector(".expertise-tech");
const myDivs = document.querySelectorAll(".animation");

const option = {
  rootMargin: "0px",
  threshold: 0.5,
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      myDivs.forEach((div) => {
        div.classList.add("animate__fadeInUp");
        div.classList.remove("animate__fadeOutDown");
      });
      observer.unobserve(mySection);
    } else {
      myDivs.forEach((div) => {
        div.classList.add("animate__fadeOutDown");
        div.classList.remove("animate__fadeInUp");
      });
    }
  });
}, option);

observer.observe(mySection);
