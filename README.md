# Holzofenpizzawagen
Website and booking tool developed in Angular as diploma thesis for the ZbW St. Gallen

___
1. Clone or download the repository to your machine.
___

## Website
1. Navigate to: `/holzofen/website`
2. Run PHP: `php -S localhost:9000`(*)
3. See the preview on `http://localhost:9000`

## Booking-Tool (Reservierungsanfragetool)
1. If not installed on your machine [download and install node.js](https://nodejs.org/de/download/ "external Link to the node website")
1. Navigate to: `/holzofen/angular-booking-tool/pizzaBooking`
1. Install NPM: `npm install`
1. Install the angular-cli (globally): `npm install -g @angular/cli`
1. Run the App: `ng serve` (or `npm start` but it will do the same because defined in the package.json)
1. See the preview on `http://localhost:4200/`

___
On MacOS Monterey an later, PHP is not anymore installed by default. Follow the following steps to install php and run the website locally.
1. If not installed on your machine, install Homebrew: `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`
1. Run these three commands in your terminal to add Homebrew to your PATH:
  * `echo '# Set PATH, MANPATH, etc., for Homebrew.' >> /Users/patrice/.zprofile`
  * `echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> /Users/patrice/.zprofile`
  * `eval "$(/opt/homebrew/bin/brew shellenv)"`
1. Test your installation to ensure you have installed brew: `brew --version`
1. When installing fresh on Ventura, I ran into a few libraries that were missing when completing all the steps below. To make things easier, please simply run this now: `brew install openssl`
1. Install PHP: `brew install php`
1. Restart PHP: `brew services restart php`
1. Do the steps from above to run the Website
  1. Navigate to: `/holzofen/website`
  2. Run PHP: `php -S localhost:9000`[^1]
  3. See the preview on `http://localhost:9000`

    
