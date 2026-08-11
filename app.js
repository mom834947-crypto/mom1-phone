(function () {
  "use strict";

  var ua = navigator.userAgent || "";
  var isAndroid = /Android/i.test(ua);
  var isSamsung = /Samsung|SM-|Galaxy/i.test(ua);

  function show(name) {
    var screens = document.querySelectorAll(".screen");
    for (var i = 0; i < screens.length; i++) {
      screens[i].classList.toggle(
        "active",
        screens[i].getAttribute("data-screen") === name
      );
    }
    window.scrollTo(0, 0);
  }

  var note = document.getElementById("deviceNote");
  var warn = document.getElementById("compatWarn");
  if (note) {
    if (isAndroid && isSamsung) {
      note.textContent = "گوشی سامسونگ پیدا شد. فقط دکمه آبی را بزن.";
    } else if (isAndroid) {
      note.textContent = "گوشی اندروید پیدا شد. فقط دکمه آبی را بزن.";
    } else {
      note.textContent = "این راهنما برای گوشی سامسونگ است.";
      if (warn) {
        warn.hidden = false;
        warn.textContent =
          "اگر روی کامپیوتر هستی، لینک را با گوشی مامان باز کن.";
      }
    }
  }

  document.addEventListener("click", function (e) {
    var btn = e.target.closest("[data-next]");
    if (!btn) return;
    var next = btn.getAttribute("data-next");
    if (next === "install" && !isAndroid && !btn.getAttribute("data-forced")) {
      show("not-android");
      return;
    }
    show(next);
  });
})();
