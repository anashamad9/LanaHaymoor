const yesButton = document.getElementById("yes-button");
const noButton = document.getElementById("no-button");

yesButton.addEventListener("click", () => {
  const message = document.createElement("p");
  message.textContent = "صحيح، أنا بقرة الابققققاااار!";
  document.body.appendChild(message);
});

noButton.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 40);
  noButton.style.position = "absolute";
  noButton.style.left = `${x}px`;
  noButton.style.top = `${y}px`;
});
