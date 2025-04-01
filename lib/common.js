'use strict';

const https = require('https');

function fetch(url, options) {
  return new Promise((resolve, reject) => {
    https.get(url, options, (res) => {
      if (res.statusCode < 200 || res.statusCode >= 300) {
        return reject(new Error(`Request failed with ${res.statusCode}`));
      }
      let data = '';

      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

function cleanApp(app) {
  return {
    id: app.details.id,
    title: app.details.name,
    genres: app.details.categoryList.map((genre) => genre.name),
    // ... if needed, we can add other data later
  };
}

function extractRokuAppId(url) {
  try {
    const parsedUrl = new URL(url);

    if (parsedUrl.hostname !== 'channelstore.roku.com') {
      return null;
    }

    const match = parsedUrl.pathname.match(/\/([a-f0-9]{32}:[a-f0-9]{32})(?=\/|$)/);
    if (!match || match[1].length === 0) {
      return null;
    }

    return match[1];
  } catch (err) {
    return null;
  }
}

module.exports = {
  fetch,
  cleanApp,
  extractRokuAppId,
};
