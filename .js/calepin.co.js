window.setInterval(
  function() {
    if (/Server error encountered/.test($("#publish").find(".status").text()) && $("#publish .actions button:disabled").length === 0) {
      $("#publish .actions button").click();
    }
  },
  5000
);
