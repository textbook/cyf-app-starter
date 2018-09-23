# Code Your Future application starter kit

This repo provides a simple Express and React starter application for [Code Your
Future][1] students to base their final projects on.

## Setup

Choose one member of the team to own the primary project repository. Fork this
repo into their account, then rename it as appopriate for your project. Other
members of that team can then fork that primary repository.

[Add everyone as a collaborator][2] to the primary repository so you can review
each other's pull requests. You can also protect the `master` branch and [enable
required reviews][3] to ensure that all code is reviewed by the other members of
the team.

## Database

The application is set up to use [PostgreSQL][8], which must be installed and
running for local development.

- If you're using **Mac OS X**, the easiest way is to use [Homebrew][10]:

  ```bash
  brew install postgresql
  brew services start postgresql
  ```

Once you have Postgres running as a service, create the database that the
application expects:

```bash
psql -c "CREATE DATABASE cyf"
```

Like SQLite, PostgreSQL is a relational database, so most of the SQL syntax and
commands you've learned will work just fine. The library used for accessing the
database is [`node-postgres`][9]; read their docs for more information on how to
execute queries.

In production, you can use the environment variable `DATABASE_URL` to provide
the appropriate connection string (some platforms, e.g. [Cloud Foundry][7] and
[Heroku][11], can set this for you).

## Development

Clone the primary repository, switch into that directory and run
`npm install:all` to get ready for development. If you're using VS Code, add the
recommended extensions when prompted (you can see the list in
`.vscode/extensions.json` if you need to install them manually).

This application provides the following helper functions:

- `npm start`: Create a production build of the client React app and copy the
  files over to be served by the Express app, then start the Express app. Access
  the site on http://localhost:3000. In this mode you must manually restart the
  process when you make any changes, but this produces a single app that's
  easier to deploy into production.

- `npm run dev`: Run the server and the client in watch mode, so that they
  reload as you make changes. Access the site on http://localhost:4200. The
  client is automatically proxied to the server (see below), which will be
  running on port 3000 as before.

  **Note** that the client will auto-refresh the page when you make changes, but
  if you make changes to the server you'll have to reload the page yourself.

- `npm run db:reset`: Reset the database to a known state by running the
  commands in `db/data.sql`. As you develop the application you can add other
  setup commands into this file.

- `npm run reinstall`: Delete all `package-lock.json` files and `node_modules/`
  directories, then install everything again. This is handy when you're having
  problems with your dependencies.

## Styling

If you're using VS Code with the recommended extensions, some simple code style
rules are applied on save using [EditorConfig][5] and [Prettier][6]. You can
configure these rules in `.editorconfig` and `package.json` (under the
`"prettier"` section) if you want to, but be sure you agree on changes as a team
so you don't e.g. keep switching back and forth between single and double quoted
strings! If you're using a different IDE, see if there are appropriate plugins
available so you can match the team style.

## Routing

The configuration of this application allows the front end to talk directly to
the backend, so your request paths can be _relative_ rather than _absolute_:

```javascript
componentDidMount() {
  fetch('/api')  // not e.g. http://localhost:3000/api
    .then(...);
}
```

This makes the site simpler (you don't have to worry about e.g. [CORS][4]
configuration) and easier to deploy (we can build a single Express app that
serves the front end for you).

All API endpoints **must** be under the root path (`/api`, by default) to be
handled correctly. Any other path will be treated as a possible front end route.
You can change the root path for API calls by setting `API_ROOT_PATH` in
`server/server.js`, in case the default conflicts with a page you actually want
to have in your front end application.

## Deployment

The application is set up for deployment using Docker containers. To help run
this locally for testing purposes, two additional commands are provided in
`package.json`:

- `npm run docker:start`: Builds and starts the app container and an associated
  PostgreSQL database container, which uses the same `data.sql` file as
  `npm run db:reset` to initialise the container state.

- `npm run docker:stop`: Stops the containers.

[1]: https://codeyourfuture.io/
[2]:
  https://help.github.com/articles/inviting-collaborators-to-a-personal-repository/
[3]:
  https://help.github.com/articles/enabling-required-reviews-for-pull-requests/
[4]: https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
[5]: https://EditorConfig.org
[6]: https://prettier.io/
[7]:
  https://docs.cloudfoundry.org/devguide/deploy-apps/environment-variable.html#DATABASE-URL
[8]: https://www.postgresql.org/
[9]: https://node-postgres.com/
[10]: https://brew.sh/
[11]:
  https://devcenter.heroku.com/articles/heroku-postgresql#designating-a-primary-database
