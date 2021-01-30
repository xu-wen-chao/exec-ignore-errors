# exec-ignore-errors

Run a CLI command ignoring any errors. This package is useful when you run a command and cannot make sure it works correctly, but you don‘t want anything else to be interrupted.

[![license](https://img.shields.io/github/license/xu-wen-chao/exec-ignore-errors)](https://github.com/xu-wen-chao/exec-ignore-errors/blob/master/LICENSE)

## Installation

```sh
npm i exec-ignore-errors
```

## Example

Use this in the shell.

```
exec-ignore-errors node 1.js
```

Use this in the npm script.

```
{
  "scripts": {
    "start": "exec-ignore-errors node 1.js"
  }
}
```
