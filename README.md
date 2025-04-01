# roku-store-scraper
Node.js module to scrape application data from the Roku store.

## Related Projects
* [amazon-app-store-scraper](https://github.com/KR1470R/amazon-app-store-scraper): a scraper with a similar interface for the Amazon App Store.
* [galaxy-store-scraper](https://github.com/KR1470R/galaxy-store-scraper): a scraper with a similar interface for the Galaxy Store.

## Inspired by projects:
* [app-store-scraper](https://github.com/facundoolano/app-store-scraper): a scraper with a similar interface for the iTunes app store.
* [google-play-scraper](https://github.com/facundoolano/google-play-scraper):  a scraper with a similar interface for the Google Play.

## ⚠️ Notes
This project is under development, thus a lot of things(most) are not implemented yet.
**Feel free to contribute!**

The API contract of this module adhered to the contract of the projects listed above.

## Installation
```
npm install roku-store-scraper
```

## Usage
Available methods:
- [app](#app): Retrieves the full detail of an application.

### app

Retrieves the full detail of an application. Options:

* `appId`: the package id of the application (the id route on the url).
*  `lang` (optional, defaults to `'en'`): the ISO 639-1 alpha-2 language code in which to fetch the app page.
*  `country` (optional, defaults to `'US'`): the ISO 3166-1 alpha-2 country code used to retrieve the applications. Needed when the app is available only in some countries.

Example:

```javascript
import rokuStoreScraper from "roku-store-scraper";

rokuStoreScraper.app({appId:  '53d2dd2504402eec1bc49ad74daf2e90:a13d7afc25f9a0a2db48abf783f2a46e'})
	.then(console.log, console.log);
```
Results:
```javascript
{
  id: '53d2dd2504402eec1bc49ad74daf2e90:a13d7afc25f9a0a2db48abf783f2a46e',
  title: 'TuneIn',
  genres: [ 'Music & Podcasts', 'Featured' ]
}
```
If app does not exist  the following value will be resolved:
```javascript 
null
``` 
