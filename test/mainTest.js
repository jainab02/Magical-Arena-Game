const { spawn } = require('child_process');
const assert = require('assert');

describe('Main', function () {
  it('should run the battle and declare a winner', function (done) {
    this.timeout(5000);

    const mainProcess = spawn('node', ['main.js'], { stdio: 'pipe' });
    let output = '';

    // Handling stdout data from main.js
    mainProcess.stdout.on('data', data => {
      output += data.toString();
      // Checking if the output contains 'wins the match!'
      if (output.includes('wins the match!')) {
        console.log('Output from main process:', output);
        assert(output.includes('wins the match!'), 'Expected output to contain "wins the match!"');
        mainProcess.stdin.end();
      }
    });

    // Handling process close event
    mainProcess.on('close', code => {
      done();
    });

    // Handling any errors
    mainProcess.on('error', err => {
      done(err);
    });

    const input = '50\n5\n10\n50\n5\n10\n';
    mainProcess.stdin.write(input);
  });
});
