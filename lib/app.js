'use strict';

const axios = require('axios');
const assert = require('assert');
const {
  ROKU_APP_STORE_URL,
  HEADERS,
  DEFAULT_LANGUAGE,
  DEFAULT_COUNTRY,
} = require('./constants');
const { cleanApp } = require('./common');

/**
 * Fetches app details from Roku Store.
 * @param {Object} options - The options for fetching app details.
 * @param {string} options.appId - The bundle id of the app (required).
 * @param {string} [options.lang] - The language code (optional). i.e. 'en'
 * @param {string} [options.country] - The country code (optional). i.e. 'US'
 * @returns {Promise<Object|null>} A promise that resolves to the app details or null if not found.
 */
async function app(options) {
  try {
    assert(options?.appId, 'appId is required.');

    const qs = new URLSearchParams({
      language: options?.lang || DEFAULT_LANGUAGE,
      country: options?.country || DEFAULT_COUNTRY,
    });
    const reqUrl = `${ROKU_APP_STORE_URL}/${options.appId}?${qs}`;

    const { data } = await axios.get(
      reqUrl,
      {
        headers: HEADERS,
      }
    );

    return cleanApp(data);
  } catch (error) {
    console.error('Error fetching roku app details:', error.message);
    return null;
  }
}

module.exports = app;
