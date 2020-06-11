# Server Data -> UI

1. Starter Code
  - index.html
  - master.css
  - Switching between pages


2. Let's code - Login Page
  - User types in data in login input box
    (input[name="username"])

  - User submits the form, we call "await login"
  - When we have the token:
    - Move to the messages page

3. Let's code - Read and show messages
  - Next let's write the function "renderMessages(messages)"
  - It takes an array of messages and prints them to the DOM
  - Now create a function "refreshMessages" that loads all messages and calls "renderMessages"

4. Now connect the events:
  - After successful login:
    - load messages from server
    - call renderMessages(messages)

5. Connect "Refresh" button to function "refreshMessages"

6. Next is "Send Message"

7. Create a new function "sendMessage" that will:
  - read the value from "text" and "to" input fields
  - call service.sendMessage to send the message to the server
  - call refreshMessages to get all new messages (including our new one)

8. Create a new function "logout" that will:
  - Delete the token from the service
  - Reset the value of input[name="username"]
  - Show login page again
  

  

