
// SafeStep Home Page

document.addEventListener("DOMContentLoaded", () => {

  // Automatically update the copyright year
  const yearElement = document.getElementById("year");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // Add a small click interaction to the feature cards
  const featureCards = document.querySelectorAll(".feature-card");

  featureCards.forEach((card) => {
    card.addEventListener("click", () => {
      const featureName = card.querySelector("h2")?.textContent;

      console.log(`Opening SafeStep: ${featureName}`);
    });
  });

});
