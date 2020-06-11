# Web Sockets

1. Introducing socket.io:

  // Create a new socket
  const socket = new io(serverUrl);


  // Emit (send) a new message
  socket.emit('hello', { name: 'ynon' });
  

  // Register an event handler
  socket.on('message', this.onNewMessage);
  

2. Modify `ajax_fetch.js`:
  - Create a new socket and save it to this
  - After login, call:
  `socket.emit('listen', { user: username })`
  To start receiving notifications
  
3. Modify `messages_ui.js`:
  - Extract message creation code to another function
  - Call that new function from the loop
  - Call that new function when a new message is received from the server
  - `socket.on('message', addNewMessage)`


