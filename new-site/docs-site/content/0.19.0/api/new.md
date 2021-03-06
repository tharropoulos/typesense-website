# What's new in 0.19.0
This release contains new features, performance improvements and important bug fixes.

## New Features
* Ability to send multiple search requests in a single HTTP request
* Ability to limit total number of results that can be fetched using `limit_hits` search parameter
* Support for slow request logs
* Support numerical range operator in `filter_by`
## Enhancements
* Improved `filter_by` & `facet_by` performance during searches
* Detailed stack traces with additional symbols and line numbers
* Keep existing config files in place when updating RPM package
* `/operations/snapshot` endpoint no longer blocks write operations
## Bug Fixes
* Improved facet query validation
* Improved override validation
* Fixed a crash when import requests are aborted
* Fixed a crash when integer filter values are used for creating scoped api keys
## Deprecations
* The `max_hits` search parameter is deprecated and is no longer necessary.