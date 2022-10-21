// select btns
const sidebarToggle = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");

// select class toggle
const sidebar = document.querySelector(".sidebar");

// add functionnality
sidebarToggle.addEventListener("click", function () {
  sidebar.classList.toggle("show-sidebar");
});

closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});
