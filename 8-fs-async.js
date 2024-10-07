const { readFile, writeFile } = require('fs');

readFile('./content/first.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;

  readFile('./content/second.txt', 'utf8', (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    const combined = first + '\n' + second;
    writeFile(
      './content/result-async.txt',
      combined,
      { flag: '' }, // now flags go here
      (err) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log('Files combined and saved successfully.');
      }
    );
  });
});
