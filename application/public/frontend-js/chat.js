const socket = io(); 
const input = document.querySelector("#message");

input.addEventListener("keydown", (event) => {
  if (event.keyCode == 13) {
    const message = event.target.value;

    fetch("/chat/0", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message }),     
    });
  }
});

socket.on("chat/", (message) => {
  console.log(message);
  const body=  document.body;
  const div = document.createElement("div");
  div.classList.add("chat-message");

  const messageSpan = document.createElement("span");
  messageSpan.classList.add("message");
  messageSpan.innerText = message;

  body.appendChild(div.appendChild(messageSpan));

}); 