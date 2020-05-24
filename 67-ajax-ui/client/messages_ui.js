const loginForm = document.querySelector('#login-page form');
const service = new MessagesService();
const pages = {
  login: document.querySelector('#login-page'),
  messages: document.querySelector('#messages-page'),
};
service.onAuthenticated = showMessagesPage;

loginForm.addEventListener('submit', function(evt) {
  evt.preventDefault();
  const form = evt.target;
  const inputUsername = form.querySelector('input[name="username"]');
  const username = inputUsername.value;

  if (username.length > 0) {
    service.login(username);
  }
});

function showMessagesPage() {
  pages.login.classList.remove('visible');
  pages.messages.classList.add('visible');
  service.loadMessages();
}

function renderMessages(messagesArray) {
  const ul = pages.messages.querySelector('.timeline');
  ul.innerHTML = '';
  for (let msg of messagesArray.reverse()) {
    const li = document.createElement('li');
    const from = document.createElement('span');
    from.textContent = msg.from;
    from.classList.add('from');
    const text = document.createElement('p');
    text.textContent = msg.text;

    li.appendChild(from);
    li.appendChild(text);

    if (!msg.to) {
      li.classList.add('public');
    }
    ul.appendChild(li);
  }
}

service.onHasNewMessages = renderMessages;

document.querySelector('#load-messages-btn').addEventListener('click', function() {
  service.loadMessages();
});

document.querySelector('#new-message-form').addEventListener('submit', function(evt) {
  evt.preventDefault();
  const form = evt.target;
  const inputText = form.querySelector('input[name="message-text"]');
  const text = inputText.value;
  if (text.length === 0) {
    // can't send empty message
    return;
  }

  const inputTo = form.querySelector('input[name="message-to"]');
  const to = inputTo.value;
  service.sendMessage(text, to.length > 0 ? to : null);
  inputText.value = '';
  inputTo.value = '';
});

document.querySelector('#logout-btn').addEventListener('click', function() {
  service.token = null;
  pages.login.classList.add('visible');
  pages.messages.classList.remove('visible');
  const inputUsername = document.querySelector('#login-page input[name="username"]');
  inputUsername.value = '';
});
