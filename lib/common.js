'use strict';

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
  cleanApp,
  extractRokuAppId,
};
