#!/usr/bin/env node
const meow = require('meow');
const healthcheck = require('./healthcheck');

const cli = meow(`
  Usage
    $ healthcheck <urlToCheck> <maxRetries> <interval>

  Examples
    $ healthcheck https://backend.com
`);

healthcheck(
  cli.input[0],
  cli.input[1],
  cli.input[2]
);
