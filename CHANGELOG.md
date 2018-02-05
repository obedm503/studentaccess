
# StudentAccess Change log
----
All notable changes to this project will be documented in this file.
For some guidelines see [keepachangelog.com].

### If change is:
- **global** -> GLOBAL: basic description of change, e.g. "GLOBAL: fixed splashscreen"
- **componenet specific** -> <COMPONENT_NAME>: basic description of change, e.g. "PROFILE: fixed schedules"
- **api** -> API: basic description of change, e.g. "API: changed homework"


----
## Future
### New
- HOMEWORK: add custom homeworks
- GLOBAL: use analytics
- GLOBAL: confetti

### Fix
- API: use JWTs for security
- API: merge end points
- API: send only necessary data
- PROFILE: missing homeworks highlighting
- LOGIN: language select always shows english after logout from spanish-selected session

## 2018-02-05
# FIX
- LOGIN: remove length requirements from username and password

## 2018-01-20
# Fix
- EVENTS(#17): event cards without `calc_text` are slightly taller than the "closed" cards

## 2017-06-06
# Fix
- GRADES, GRADES-DETAILS: badge font is larger
- CAFETERIA: balance history chart visibility
- PROFILE: made "th" after the user's grade year a superscript
- GLOBAL: created grade-badge component
- GLOBAL: added try/catch blocks to pages' ionViewDidLoad or ionViewDidEnter

## 2017-06-05
# Fix
- LOGIN: reduces username limit to 7 characters
- GLOBAL: nasty race condition error between pages and app-component
- GRADES-DETAILS: grades list was backwards
# New
- GLOBAL: service worker caches images starting with "data:image/jpeg;base64,"
    i.e. all images coming from api

## 2017-06-02
# Fix
- HOMEWORK: list now shows newest homework on top
- CAFETERIA: transactions were backwards in chart and list
# New
- GLOBAL: loading screens on all pages that need it
- HOMEWORK: highlight today's assignments
- EVENTS: highlight today's events

## 2017-05-29
### New
- HOMEWORK: persist and hide or show checked homeworks. Suggested by Mr. Van Zoest
- MENU: show active page

## [2.0.0]: 2017-05-28
### New
- GLOBAL: date versioning over SemVer
- GLOBAL: rewritten in ionic 3/angular 4
- GLOBAL: state is kept in a single place: the State provider
- GLOBAL: data kept in 3 modes: MONTH, WEEK, DAY
- GRADES: ribbon was moved to the Ribbon component
- GLOBAL: better loading screen as PWA installed to homescreen
- LOGIN: remember me
- GLOBAL: ink and animation for buttons and cards
- GLOBAL: lazy loading api data makes logging in faster

### Fixed
- GLOBAL: auth mechanism fixed
- GLOBAL: performance is much better with ionic 3
- GLOBAL: global update happening before username and  password are available


----
## [0.9.2] -2016-08-14
### Added
- MENU: keep open menu on tablets
- LOGIN: view is responsive
- MENU: show email below name
- GLOBAL: separate css by view
- MENU: darken bg img
- GLOBAL: minified js and css
- GLOBAL: write a good README.md
- GLOBAL: generate documentation into DOCS.md

### Fixed
- CAFETERIA: organize the food menu
- LOGIN: remembered username no longer yellow
- GRADES-DETAILS:  individual grades showing percentages
- GRADES-DETAILS: grade button no longer clickable
- PROFILE: missing number now updates

## [0.9.1] - 2016-08-14
### Added
- GRADES-DETAILS: grades card title
- HOMEWORK & EVENTS: make text selectable
- GLOBAL: created a change log

### Fixed
- GRADES-DETAILS: Infinity showing in grades percentages
- HOMEWORK: line-through style in homework
- GRADES: class list grade number
- PROFILE: missing homeworks number
- PROFILE: missing initially open
- PROFILE: check your grades button
- CAFETERIA: food menu padding
- PROFILE: schedules padding
- PROFILE: doShowMissing function
- GRADES-DETAILS: grades not showing
- GLOBAL: splashscreen

[keepachangelog.com]: https://keepachangelog.com/
[0.9.1]: https://googledrive.com/host/0B8QaOFt88YYma1N1NUlIUFE5SDg/Android/StudentAccessV091vc15.apk
[0.9.2]: https://googledrive.com/host/0B8QaOFt88YYma1N1NUlIUFE5SDg/Android/StudentAccessV092vc16.apk