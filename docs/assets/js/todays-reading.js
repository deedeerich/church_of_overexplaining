/* Today's Reading — the randomized devotional on the Cathedral homepage.
   Lives in an external file on purpose: markdown processors (kramdown) can mangle
   inline <script> contents, and inline IDs can collide with auto-generated heading
   anchors. External JS is served verbatim. */
(function () {
  var readings = [
    { k: "Proverb",     v: "The map is not the territory." },
    { k: "Proverb",     v: "Survivability beats brilliance." },
    { k: "Proverb",     v: "Participation precedes understanding." },
    { k: "Proverb",     v: "Curiosity is cheaper than certainty." },
    { k: "Proverb",     v: "Build the smallest coherent thing. Expansion follows integration." },
    { k: "Proverb",     v: "The edge tells the truth." },
    { k: "Proverb",     v: "Overexplain to understand. Distill to act." },
    { k: "Saint",       v: "St. Minimum Coherent Slice — patron of shipping. “Show me the smallest useful version.”" },
    { k: "Saint",       v: "St. Progressive Disclosure — depth on demand, not depth by default." },
    { k: "Saint",       v: "St. Reality Check — patron of killing beautiful bad ideas. Feast day: right after deployment." },
    { k: "Saint",       v: "St. Good Idea Fairy — cannot be trusted unsupervised. Write it down; do not implement it immediately." },
    { k: "Commandment", v: "Reality outranks opinion." },
    { k: "Commandment", v: "Explain enough, but not more than the listener can absorb." },
    { k: "Commandment", v: "Every diagram must earn its existence." },
    { k: "Commandment", v: "Failure is data." },
    { k: "Heresy",      v: "Mistaking confidence for evidence." },
    { k: "Heresy",      v: "Premature compression — collapsing a thing before you understand it." },
    { k: "Heresy",      v: "Adding a tool because the tool is exciting, not because the problem asked for it." },
    { k: "Bug",         v: "#27 — “This will only take fifteen minutes.” Severity: critical." },
    { k: "Bug",         v: "#39 — The diagram appears complete. Reality: it has not been tested." }
  ];

  function render() {
    var el = document.getElementById("devotional");
    if (!el) { return; }
    var r = readings[Math.floor(Math.random() * readings.length)];
    el.innerHTML = "<strong>" + r.k + ":</strong> " + r.v;
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", render);
  } else {
    render();
  }
})();
