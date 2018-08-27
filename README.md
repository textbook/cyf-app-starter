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
to get ready for development. If you're using VS Code, add the recommended
extensions when prompted (you can see the list in `.vscode/extensions.json`
if you need to install them manually).

This application provides the following helper functions:

  - `npm start`: Create a production build of the client React app and copy
    the files over to be served by the Express app, then start the Express
    app. Access the site on http://localhost:3000. In this mode you must
    manually restart the process when you make any changes, but this produces
    a single app that's easier to deploy into production.

  - `npm run dev`: Run the server and the client in watch mode, so that they
    reload as you make changes. Access the site on http://localhost:4200. The
    client is automatically proxied to the server (see below), which will be
    running on port 3000 as before.

    **Note** that the client will auto-refresh the page when you make changes,
    but if you make changes to the server you'll have to reload the page
    yourself.

  - `npm run reinstall`: Delete all `package-lock.json` files and
    `node_modules/` directories, then install everything again. This is handy
    when you're having problems with your dependencies.

Routing
-------

The configuration of this application allows the front end to talk directly to
the backend, so your request paths can be *relative* rather than *absolute*:

```javascript
componentDidMount() {
  fetch('/api')  // not e.g. http://localhost:3000/api
    .then(...);
}
```

This makes the site simpler (you don't have to worry about e.g. [CORS][4]
configuration)  and easier to deploy (we can build a single Express app that
serves the front end for you).

All API endpoints **must** be under the root path (`/api`, by default) to be
handled correctly. Any other path will be treated as a possible front end
route. You can change the root path for API calls by setting `API_ROOT_PATH`
in `server/server.js`, in case the default conflicts with a page you actually
want to have in your front end application.

  [1]: https://codeyourfuture.io/
  [2]: https://help.github.com/articles/inviting-collaborators-to-a-personal-repository/
  [3]: https://help.github.com/articles/enabling-required-reviews-for-pull-requests/
  [4]: https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
