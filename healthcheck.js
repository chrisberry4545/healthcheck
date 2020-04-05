const fetch = require('node-fetch');

const sleep = (ms) => new Promise(
  (resolve) => setTimeout(() => resolve(), ms)
);

const healthcheckApp = (appUrl) =>
  fetch(appUrl)
    .then(() => true)
    .catch(() => false);

module.exports = async (
  appUrl,
  maxRetriesStr = '20',
  intervalStr = '1000'
) => {
  const maxRetries = parseInt(maxRetriesStr, 10);
  const interval = parseInt(intervalStr, 10);
  if (!appUrl) {
    throw new Error('Please provide a URL as an argument');
  }

  for (var i = 0; i < maxRetries - 1; i++) {
    if (await healthcheckApp(appUrl)) {
      console.log(`${appUrl} has started`);
      process.exit(0);
    }
    console.log(`${appUrl} has not started. Retrying...`);
    await sleep(interval);
  }
  console.log(`${appUrl} has not started after ${maxRetries} attempts`);
  process.exit(1);
};
