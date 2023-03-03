/* ----------------------------- INTRO ANIMATION ---------------------------- */

const intro = document.querySelector(".intro");
const logo = document.querySelector(".logo-header");
const logoSpans = document.querySelectorAll(".logo");

window.addEventListener("DOMContentLoaded", () => {
  logoSpans.forEach((span, id) => {
    setTimeout(() => {
      span.classList.add("appear");
    }, (id + 1) * 90);
  });

  setTimeout(() => {
    logoSpans.forEach((span, id) => {
      setTimeout(() => {
        span.classList.remove("appear");
        span.classList.add("fade");
      }, (id + 1) * 80);
    });
  }, 1500);

  setTimeout(() => {
    intro.style.top = "-100vh";
  }, 2000);
});

/* ----------------------------- HAMBURGER MENU ----------------------------- */

const menuSlide = () => {
  const menuLinks = document.querySelector(".ham-link");
  const checkbox = document.querySelector(".ham-check");

  menuLinks.addEventListener("click", () => {
    checkbox.prop("checked", false);
  });
};
menuSlide();
/* --------------------------SCROLL DOWN to About-------------------------- */
const arrowSlide1 = () => {
  const arrow = document.querySelector("#arrow-1");
  arrow.addEventListener("click", () => {
    document.querySelector("#about").scrollIntoView({
      down: "100vh",
      behavior: "smooth",
    });
  });
};
arrowSlide1();
/* ----------------------SCROLL DOWN to current Projects------------------- */
const arrowSlide2 = () => {
  const arrow = document.querySelector("#arrow-2");
  arrow.addEventListener("click", () => {
    document.querySelector("#skills").scrollIntoView({
      down: "100vh",
      behavior: "smooth",
    });
  });
};
arrowSlide2();

/* --------------------------SCROLL DOWN to SKills-------------------------- */
const arrowSlide3 = () => {
  const arrow = document.querySelector("#arrow-3");
  arrow.addEventListener("click", () => {
    document.querySelector("#current").scrollIntoView({
      down: "100vh",
      behavior: "smooth",
      block: "start",
    });
  });
};
arrowSlide3();

/* --------------------------SCROLL DOWN to Projects----------------------- */
const arrowSlide4 = () => {
  const arrow = document.querySelector("#arrow-4");
  arrow.addEventListener("click", () => {
    document.querySelector("#projects").scrollIntoView({
      down: "100vh",
      behavior: "smooth",
      block: "start",
    });
  });
};
arrowSlide4();

/* --------------------------- SCROLL BACK TO TOP --------------------------- */
const backToTop = () => {
  const upTop = document.querySelector("#top");
  upTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
};
backToTop();

/* -------------------------- SWITCH TO LIGHT MODE -------------------------- */
const switchLight = () => {
  const toggleLight = document.querySelector("#light-dark");

  toggleLight.addEventListener("click", () => {
    document.querySelector("body").classList.toggle("light");
  });
};
switchLight();

/* -------------------------------- COPYRIGHT ------------------------------- */

const year = document.querySelector("#current-year");
year.innerHTML = new Date().getFullYear();

/* -------------------- TO INITIALIZE ANIMATION ON SCROLL ------------------- */

AOS.init();

/* ------------------------------ PARTICLES.JS ------------------------------ */

// particlesJS.load("particles-js", "assets/particles.json");

/* -------------------- SEND EMAIL FUNCTION using EmailJS ------------------- */
const btn = document.getElementById("button");
const form = document.getElementById("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  btn.value = "Sending...";
  const serviceID = "default_service";
  const templateID = "template_1zxkzan";

  emailjs.sendForm(serviceID, templateID, this).then(
    () => {
      btn.value = "Send Email";
      alert("Sent!");
    },
    (err) => {
      btn.value = "Send Email";
      alert(JSON.stringify(err));
    }
  );
  form.reset();
});

/* ----------------------------- FORM VALIDATION ---------------------------- */
const nameError = document.querySelector("#name-error");
const emailError = document.querySelector("#email-error");
const messageError = document.querySelector("#message-error");

const validateName = () => {
  const name = document.querySelector("#name");
  name.addEventListener("change", () => {
    if (name.value.length == 0) {
      nameError.innerHTML = "Name is required";
      return false;
    }
    nameError.innerHTML = "<i class='bx bx-check-double'></i>";
    return true;
  });
};
validateName();

const validateEmail = () => {
  const email = document.querySelector("#email");
  email.addEventListener("change", () => {
    if (email.value.length == 0) {
      emailError.innerHTML = "Email is required";
      return false;
    }
    if (
      !email.value.match(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/)
    ) {
      emailError.innerHTML = "Email Invalid";
      return false;
    }
    emailError.innerHTML = "<i class='bx bx-check-double'></i>";
    return true;
  });
};
validateEmail();

const validateMessage = () => {
  const message = document.querySelector("#message");
  message.addEventListener("change", () => {
    if (message.value.length == 0) {
      messageError.innerHTML = "Message is required";
      return false;
    }
    messageError.innerHTML = "<i class='bx bx-check-double'></i>";
    return true;
  });
};
validateMessage();
