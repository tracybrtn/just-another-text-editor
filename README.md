# just-another-text-editor

![Screenshot of application](https://github.com/tracybrtn/just-another-text-editor/blob/ab3d3efcb25a67237bd7b18acc08d912b6ce8e0b/client/src/images/deployed-application.png)

[Link to depoyed application](https://dry-river-17496.herokuapp.com/)

![Badge](https://img.shields.io/badge/License-MIT-lightblue.svg)

## Description

Single-page text editor that meets PWA criteria.  Application features a number of data persistence techniques that serve as redundancies in case one of the options is not supported by the browser. Application also functions offline.

## Table of Contents

- [just-another-text-editor](#just-another-text-editor)
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
    - [User Story](#user-story)
    - [Acceptance Criteria](#acceptance-criteria)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Built with](#built-with)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

## User Story

                AS A developer
                I WANT to create notes or code snippets with or without an internet connection
                SO THAT I can reliably retrieve them for later use


## Acceptance Criteria

                GIVEN a text editor web application
                WHEN I open my application in my editor
                THEN I should see a client-server folder structure
                WHEN I run `npm start` from the root directory
                THEN I find that my application should start up the back end and serve the client
                WHEN I run the text editor application from my terminal
                THEN I find that my JavaScript files have been bundled using webpack
                WHEN I run my webpack plugins
                THEN I find that I have a generated HTML file, service worker, and a manifest file
                WHEN I use next-gen JavaScript in my application
                THEN I find that the text editor still functions in the browser without errors
                WHEN I open the text editor
                THEN I find that IndexedDB has immediately created a database storage
                WHEN I enter content and subsequently click off of the DOM window
                THEN I find that the content in the text editor has been saved with IndexedDB
                WHEN I reopen the text editor after closing it
                THEN I find that the content in the text editor has been retrieved from our IndexedDB database
                WHEN I click on the Install button
                THEN I download my web application as an icon on my desktop
                WHEN I load my web application
                THEN I should have a registered service worker using Workbox
                WHEN I register a service worker
                THEN I should have my static assets precached upon loading along with subsequent pages and static assets
                WHEN I deploy to Heroku
                THEN I should have proper build scripts for a webpack application
                
## Installation

1. Make sure you have node.js installed in your local machine.
2. Clone this repo or download the code. Open it with vscode.
3. Run `npm install`

## Usage

Link to the deployed application is: [https://dry-river-17496.herokuapp.com/](https://dry-river-17496.herokuapp.com/)
For offline use, hit the `install` button at the top left corner of the page.

## Built With

- node.js
- manifest
- indexedDB
- service worker
- webpack
- Heroku


## License

This application is licensed under MIT.

## Contributing

If you would like to contribute to this project reach out to me. You can find my contact information in the [Questions](#questions) section. You are also welcome to fork the repository.

If you decide to fork it, then:

1. Create your feature branch
2. Commit your changes
3. Push your branch
4. Submit a pull request

## Tests

Not applicable at the moment.

## Questions

If you have any questions about this project, contact me at tracynburton@gmail.com.
Don't forget to check out my other projects! Visit [my github](https://github.com/tracybrtn).
