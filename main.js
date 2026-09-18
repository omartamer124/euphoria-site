// Mobile nav toggle
document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");

  if (toggle && links) {
    toggle.addEventListener("click", function () {
      links.classList.toggle("open");
    });

    links.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        links.classList.remove("open");
      });
    });
  }

  // Gallery filters (Collections page)
  var filterButtons = document.querySelectorAll(".filter-btn");
  var galleryItems = document.querySelectorAll(".gallery-item");

  if (filterButtons.length && galleryItems.length) {
    filterButtons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        filterButtons.forEach(function (b) { b.classList.remove("active"); });
        btn.classList.add("active");

        var category = btn.getAttribute("data-filter");

        galleryItems.forEach(function (item) {
          if (category === "all" || item.getAttribute("data-category") === category) {
            item.style.display = "";
          } else {
            item.style.display = "none";
          }
        });
      });
    });
  }
});
