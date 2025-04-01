const ROKU_APP_STORE_URL = 'https://channelstore.roku.com/api/v6/channels/detailsunion';
const HEADERS = {
  'User-Agent':
    'Mozilla/5.0 (Linux; Android 10; KFTRWI) AppleWebKit/537.36 (KHTML, like Gecko) Silk/84.4.20 like Chrome/84.0.4147.125 Safari/537.36',
  'Content-Type': 'application/json',
  'Accept': 'application/json',
};
const DEFAULT_LANGUAGE = 'en';
const DEFAULT_COUNTRY = 'US';

module.exports = {
  ROKU_APP_STORE_URL,
  HEADERS,
  DEFAULT_LANGUAGE,
  DEFAULT_COUNTRY,
};
