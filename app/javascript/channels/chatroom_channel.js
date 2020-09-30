import consumer from "./consumer";

const initChatroomCable = () => {
  const messagesContainer = document.getElementById('messages');
  if (messagesContainer) {
    const id = messagesContainer.dataset.chatroomId;
    // consumer é um objeto que já vem do action cable
    // é um ob jeto javascript que poussi a chave subscriptions
    // e essa possui create
    consumer.subscriptions.create({ channel: "ChatroomChannel", id: id }, {
      received(data) {
        // console.log(data); // called when data is broadcast in the cable
        messagesContainer.insertAdjacentHTML("beforeend", data);
      },
    });
  }
}

export { initChatroomCable };
