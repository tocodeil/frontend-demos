const loginForm = document.querySelector('#login-page form');
const service = new MessagesService();
const pages = {
  login: document.querySelector('#login-page'),
  messages: document.querySelector('#messages-page'),
};

loginForm.addEventListener('submit', login);
pages.messages.querySelector('#load-messages-btn').addEventListener('click', refreshMessages);
pages.messages.querySelector('#new-message-form').addEventListener('submit', sendMessage);

async function login(evt) {
  evt.preventDefault();
  const username = loginForm.querySelector('input[name="username"]').value;
  if (username.length === 0) {
    return alert('Sorry username cannot be empty');
  }

  await service.login(username);
  // Code that runs AFTER login completes
  pages.login.classList.remove('visible');
  pages.messages.classList.add('visible');

  refreshMessages();
}



async function sendMessage(evt) {
  evt.preventDefault();
  const messageTextInput = pages.messages.querySelector('input[name="message-text"]');
  const messageToInput = pages.messages.querySelector('input[name="message-to"]');

  const text = messageTextInput.value;
  const to = messageToInput.value;

  await service.sendMessage(text, to.length > 0 ? to : null);
  messageTextInput.value = '';
  messageToInput.value = '';  
  refreshMessages();
}

async function refreshMessages() {
  const messages = await service.loadMessages();
  renderMessages(messages);
}

// [ { text: '...', to: '...', from: '...' }]
/*
*   <li class="public">
      <span class="from">SYSTEM</span>
      <p>Curabitur purus sem, malesuada eu luctus eget, suscipit sed turpis. Nam pellentesque felis vitae justo accumsan, sed semper nisi sollicitudin...</p>
    </li>
*/
function renderMessages(messages) {
  const ul = document.querySelector('.timeline');
  const frag = document.createDocumentFragment();

  for (let msg of messages) {
    const li = document.createElement('li');
    const span = document.createElement('span');
    const p = document.createElement('p');

    span.classList.add('from');
    span.textContent = msg.from;

    p.textContent = msg.text;

    if (!msg.to) {
      li.classList.add('public');
    }

    li.appendChild(span);
    li.appendChild(p);
    frag.appendChild(li);
  }
  ul.innerHTML = '';
  ul.appendChild(frag);
}
