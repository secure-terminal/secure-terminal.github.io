/* Copy button is a progressive enhancement: with JS off the command stays plain,
   fully selectable text. All code is same-origin; no third-party origin is contacted. */
(function () {
  if (!navigator.clipboard) return;
  var boxes = document.querySelectorAll(".copybox");
  for (var i = 0; i < boxes.length; i++) {
    (function (box) {
      var cmd = box.querySelector(".cmd"), btn = box.querySelector(".copybtn");
      if (!cmd || !btn) return;
      var base = btn.textContent, timer = null;
      btn.hidden = false;
      function flash(label, ok) {
        btn.textContent = label;
        btn.classList.toggle("ok", !!ok);
        if (timer) clearTimeout(timer);
        timer = setTimeout(function () {
          btn.textContent = base; btn.classList.remove("ok"); timer = null;
        }, 1200);
      }
      btn.addEventListener("click", function () {
        navigator.clipboard.writeText(cmd.textContent).then(
          function () { flash("Copied", true); },
          function () { flash("Press Ctrl+C", false); }
        );
      });
    })(boxes[i]);
  }
})();
