const { exec } = require('child_process')

test('Run node script without errors even file did not exist.', async (done) => {
  exec('node ./index.js node no-such-file.js', (error, stdout, stderr) => {
    expect(error).toBeFalsy()
    expect(stderr).toBeFalsy()
    done()
  })
})
