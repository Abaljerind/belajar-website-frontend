async function typeSenctence(sentence, eleRef, delay = 100) {
  const letters = sentence.split("");
  let i = 0;
  while (i < letters.length) {
    await waitForMs(delay);
    $(eleRef).append(letters[i]);
    i++;
  }
  return;
}

function waitForMs(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

typeSenctence("hey, over here!", "#sentence");
