#! /usr/bin/env node
const { exec } = require('child_process')
const cmd = process.argv.slice(2).join(' ')

exec(cmd, (error, stdout) => console.log(stdout))
