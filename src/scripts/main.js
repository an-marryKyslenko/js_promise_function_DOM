'use strict';

function waitFor(element, eventName) {
  if (element) {
    return new Promise((resolve, reject) => {
      element.addEventListener(eventName, () => {
        const string = `It was ${eventName} on the element: ${element.nodeName}, id: ${element.id}.`;

        console.log(eventName, element.id);
        resolve(string);
      });
    });
  }
}

const printMessage = (message) => {
  const form = document.querySelector('form');
  const messageDiv = document.createElement('div');

  messageDiv.classList.add('message');
  messageDiv.innerText = message;
  form.append(messageDiv);
};

const loginField = document.getElementById('login');
const passwordField = document.getElementById('password');
const button = document.getElementById('submit');

waitFor(loginField, 'click').then(printMessage);
waitFor(passwordField, 'click').then(printMessage);
waitFor(button, 'click').then(printMessage);

waitFor(loginField, 'input').then(printMessage);
waitFor(passwordField, 'input').then(printMessage);

waitFor(loginField, 'blur').then(printMessage);
waitFor(passwordField, 'blur').then(printMessage);
waitFor(button, 'blur').then(printMessage);
