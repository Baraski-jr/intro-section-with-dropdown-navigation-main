const toggle = document.querySelector(".hamburger");
const primayHeader = document.querySelector(".primary-header-navigation");
const featureSub = document.querySelector(".primary-navigation__inner.feature");
const companySub = document.querySelector(".primary-navigation__inner.company");
const feature = document.querySelector(".main-nav-link");
const company = document.querySelector(".main-nav-link.company");

feature.addEventListener("click", (e) => {
  if (featureSub.classList.contains("open")) {
    featureSub.classList.remove("open");
  } else {
    featureSub.classList.add("open");
  }
});
company.addEventListener("click", (e) => {
  if (companySub.classList.contains("open")) {
    companySub.classList.remove("open");
  } else {
    companySub.classList.add("open");
  }
});
toggle.addEventListener("click", (e) => {
  //   console.log("here");
  if (primayHeader.classList.contains("open")) {
    console.log("containes");
    primayHeader.classList.remove("open");
    primayHeader.classList.add("close");
  } else {
    console.log("Not containes");
    primayHeader.classList.remove("close");
    primayHeader.classList.add("open");
  }
});

// console.log(primayHeader);
// console.log(toggle);
