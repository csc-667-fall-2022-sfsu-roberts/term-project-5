const socket = io();

const messages = document.querySelector("#messages");
const input = document.querySelector("#message");
const messageTemplate = document.querySelector("#message-content");

input.addEventListener("keydown", (event) => {
  if (event.keyCode == 13) {
    const message = event.target.value;

    fetch("chat/0", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message }),
    });
  }
});

socket.on("chat:0", ({ username, message, timestamp }) => {
  console.log({ username, message, timestamp });

  const content = messageTemplate.content.cloneNode(true);

  content.querySelector(".message").innerText = message;

  messages.appendChild(content);
}); 