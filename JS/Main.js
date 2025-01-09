const btn = document.querySelector(".advice-button");

async function GenerateAdvice() {
  try {
    const response = await fetch("https://api.adviceslip.com/advice");
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    const advice_number = document.querySelector(".advice-number");
    const advice = document.querySelector(".advice");
    advice_number.innerHTML = `Advice number ${data.slip.id}`;
    advice.innerHTML = `${data.slip.advice}`;
  } catch (error) {
    console.error("Error fetching the data:", error.message);
  }
}
// show random Advice when clicking on the button
btn.addEventListener("click", () => {
  const advice = document.querySelector(".advice");
  advice.classList.remove("hidden");
  advice.classList.add("fade-in");
  GenerateAdvice();
});

// Generate a radom advice when first time page
document.addEventListener("DOMContentLoaded", () => {
  GenerateAdvice();
});
