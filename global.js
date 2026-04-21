/* -------------------------
   INJECT POPUP + BANNER
-------------------------- */

// Create popup
const popup = document.createElement("div");
popup.id = "betaPopup";
popup.innerHTML = `
  <div id="popupBox">
    <h2>Settings are in beta</h2>
    <p>To load, please type "0000" in the textbox below and hit Enter.</p>
    <input type="text" id="betaInput" placeholder="Enter code...">
  </div>
`;
document.body.appendChild(popup);

// Create caution banner
const banner = document.createElement("div");
banner.id = "cautionBanner";
banner.innerHTML = `
  <div class="scrollText">⚠ SETTINGS IN BETA ⚠ SETTINGS IN BETA ⚠ SETTINGS IN BETA ⚠</div>
`;
document.body.prepend(banner);

/* -------------------------
   POPUP LOGIC
-------------------------- */
const input = document.getElementById("betaInput");

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    if (input.value === "0000") {
      popup.style.display = "none";
    } else {
      input.value = "";
      input.placeholder = "Incorrect — try again";
    }
  }
});
