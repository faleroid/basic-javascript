import { readFile } from 'fs';

readFile('./asynchronous/callback_error/sample_greeting.txt', (error, data) => {
  if (error) {
    console.log(error);
    return;
  }

  const greeting = data.toString()
    .replace('%name%', 'Dicoding')
    .replace('%your_name%', 'JavaScript');

  console.log(greeting);
});