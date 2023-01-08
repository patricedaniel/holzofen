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
(*)On MacOS Monterey, Ventura and later, PHP is not anymore installed by default. Follow this steps to install php and run the website locally…
1. If not installed on your machine, install Homebrew: `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`
2. Run these three commands to add Homebrew to your PATH:
  * `echo '# Set PATH, MANPATH, etc., for Homebrew.' >> /Users/patrice/.zprofile`
  * `echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> /Users/patrice/.zprofile`
  * `eval "$(/opt/homebrew/bin/brew shellenv)"`
3. Test your installation to ensure you have installed brew: `brew --version`
4. When installing fresh on Ventura, install Openssl: `brew install openssl`
5. Install PHP: `brew install php`
6. Restart PHP: `brew services restart php`
7. Do the steps from above to run the Website
  * Navigate to: `/holzofen/website`
  * Run PHP: `php -S localhost:9000`
  * See the preview on `http://localhost:9000`

    
