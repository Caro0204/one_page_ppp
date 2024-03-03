// trigger the fade-in and fade-out effects after the page has loaded
document.addEventListener("DOMContentLoaded", function () {
  var logo = document.getElementById("logo");
  var container = document.querySelector(".container");

  // Delay the fade-out effect on the logo
  setTimeout(function () {
    logo.style.opacity = 0;
  }, 1000);

  // Trigger the fade-in effect on the container after the logo starts fading out
  setTimeout(function () {
    container.style.opacity = 1;
  }, 1500);
});

document.addEventListener("DOMContentLoaded", function () {
  const accordionItems = document.querySelectorAll(".accordion-item");

  accordionItems.forEach(function (item) {
    const header = item.querySelector(".accordion-header");
    const content = item.querySelector(".accordion-content");

    header.addEventListener("click", function () {
      // Toggle klassen "show" i stedet for at ændre display-attribut
      content.classList.toggle("show");
      // Tilføj eller fjern klassen "active" på .accordion-item efter klik
      item.classList.toggle("active");

      // Skjul de øvrige sektioner, når en sektion er åben
      accordionItems.forEach(function (otherItem) {
        if (otherItem !== item) {
          otherItem.querySelector(".accordion-content").classList.remove("show");
          otherItem.classList.remove("active");
        }
      });
    });
  });
});
/////////////////// CURSOR ////////////////////////
document.addEventListener("mousemove", (e) => {
  const cursor = document.getElementById("custom-cursor");
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;

  // Check if the cursor is over a link
  const isOverLink = e.target.tagName.toLowerCase() === "a";
  cursor.style.backgroundColor = isOverLink ? "#8e6d59" : "#c9b6a5";
});

///////////////// ICONER /////////////////////
function toggleText(type) {
  var textElements = document.querySelectorAll(".text");
  textElements.forEach(function (textElement) {
    textElement.style.display = "none";
  });

  var targetText = document.querySelector("." + type + "-text");
  if (targetText) {
    targetText.style.display = "block";
  }
}
