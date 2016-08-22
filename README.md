# StudentAccess
----
- **version:** 0.9.2
- **release date:** 2016-08-21
- **change log:** [CHANGELOG.md](./CHANGELOG.md)
- **authors:** [AUTHORS.md](./AUTHORS.md)
- **license:** [LICENSE.md](./LICENSE.md)

>The StudentAccess app was created by students in the Coding and App Development class in 2015. 
It provides students with a multitude of services such as: checking grades, missing assignments, events, personal balance, staff contact information, and much more. 
Additionally it also allows students customization within the app with different theme preferences, and two different languages. 
All this is accomplished while maintaining a stylish and aesthetically pleasing appearance with the Ionic framework and Ionic Material.

----
Pull Requests are always welcome.

> Note: this project adheres to [John Papa's Angular style guidelines](https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md).

----
## Documentation Rules
- Adhere to tags supported by [JSDoc2md](https://github.com/jsdoc2md/jsdoc-to-markdown).
- Follow guidelines already in use
- when linking to an outside source use markdown link tags `[]()` instead of JSDoc link tags `{@link }`
- more rules tbd

----
## Get Started with development
>**make sure these steps happen in the specified order**
- make sure you have installed and set up
	- git and some terminal emulator (obedm503 uses [git bash](https://git-scm.com/))
	- nodejs and npm
	- gulp, bower, and ionic cli's globally: `npm i -g gulp bower ionic`
- in the terminal clone the git repository and `cd` into it
	- `$ git clone git://github.com/ncai-developers/studentaccess.git`
	- `$ cd studentaccess`
- install all npm devDependencies, this might take a while
	- `$ npm install`
- install all bower dependencies
	- `$ bower install`
- config ionic services
	- `$ ionic config build`
- build vendor and app files with the default gulp task
	- `$ gulp`
- finally serve locally to see the app, this is configured to only watch the html files and the `build/` directory
	- `$ ionic serve`