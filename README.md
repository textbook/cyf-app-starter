Code Your Future application starter kit
========================================

This repo provides a simple Express and React starter application for [Code
Your Future][1] students to base their final projects on.

Setup
-----

Choose one member of the team to own the primary project repository. Fork this
repo into their account, then rename it as appopriate for your project. Other
members of that team can then fork that primary repository. 

[Add everyone as a collaborator][2] to the primary repository so you can
review each other's pull requests. You can also protect the `master` branch
and [enable required reviews][3] to ensure that all code is reviewed by the
other members of the team.

Development
-----------

Clone the primary repository, switch into that directory and run `npm install`
to get ready for development.

This application provides the following helper functions:

  - `npm start`: Create a production build of the client React app and copy
    the files over to be served by the Express app, then start the Express
    app. Access the site on http://localhost:3000. In this mode you must
    manually restart the process when you make any changes, but this produces
    a single app that's easier to deploy into production.

  - `npm run dev`: Run the server and the client in watch mode, so that they
    reload as you make changes. Access the site on http://localhost:4200. The
    client is automatically proxied to the server, which will be running on
    port 3000 as before. 
    
    **Note** that the client will auto-refresh the page when you make changes,
    but if you make changes to the server you'll have to reload the page
    yourself.

  [1]: https://codeyourfuture.io/
  [2]: https://help.github.com/articles/inviting-collaborators-to-a-personal-repository/
  [3]: https://help.github.com/articles/enabling-required-reviews-for-pull-requests/
