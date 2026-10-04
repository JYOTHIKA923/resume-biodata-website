$(function () {
  // Year on every page
  $("#year").text(new Date().getFullYear());

  // Responsive navigation
  $(".menu-btn").on("click", function () {
    $(".nav-links").toggleClass("open");
    $(this).attr("aria-expanded", $(".nav-links").hasClass("open"));
  });

  // Theme persistence
  const savedTheme = localStorage.getItem("novaTheme");
  if (savedTheme === "light") $("body").addClass("light");

  $("#themeToggle").on("click", function () {
    $("body").toggleClass("light");
    localStorage.setItem("novaTheme", $("body").hasClass("light") ? "light" : "dark");
  });

  // Resume print
  $("#printResume").on("click", function () {
    window.print();
  });

  // Current date on biodata
  const today = document.getElementById("today");
  if (today) today.textContent = new Date().toLocaleDateString("en-IN");

  // Contact form validation with jQuery
  $("#contactForm").on("submit", function (e) {
    e.preventDefault();
    const name = $.trim($("#name").val());
    const email = $.trim($("#email").val());
    const message = $.trim($("#message").val());
    const consent = $("#consent").is(":checked");

    if (name.length < 2) return showMessage("Please enter your name.", false);
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return showMessage("Please enter a valid email.", false);
    if (message.length < 10) return showMessage("Message should contain at least 10 characters.", false);
    if (!consent) return showMessage("Please accept the consent checkbox.", false);

    showMessage("✓ Message validated successfully! (Demo form)", true);
    this.reset();
  });

  function showMessage(text, success) {
    $("#formMessage").text(text).css("color", success ? "#68e7a8" : "#ff9a9a");
  }

  // Smooth page entrance
  $("main").hide().fadeIn(450);
});
