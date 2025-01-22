# Previred Frontend Test - Agenda de contactos

## Execution of Project

```
npm install
npm start
```

## Structure of project

The project is an application builded in React with Typescript compiled on Vite. It follow the Scream Architecture like this:

```
src/
  ├── public/ # archivos estáticos como imágenes
  ├── contacts/ # this is the unique feature
  ├── errors/ # layer for managing errors
  ├── helpers/ # helpers using in the global project
  ├── hooks/ # hooks using in the global project
  ├── services/ # layer of services, it has an api function for centralized
```

## Commit convention

This project follow a standard for commit messages based on [Angular Conventions](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines).

Each commit message consists of a header, a body and a footer. The header has a special format that includes a type, a scope and a subject:

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

The header is mandatory and the scope of the header is optional.

Any line of the commit message cannot be longer 100 characters! This allows the message to be easier to read on GitHub as well as in various git tools.

### Samples:

```
docs(changelog): update changelog to beta.5
```

```
fix(release): need to depend on latest rxjs and zone.js
The version in our package.json gets copied to the one we publish, and users need the latest of these.
```

### Types

Must be one of the following:

- **build:** Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
- **ci:** Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
- **docs:** Documentation only changes
- **feat:** A new feature
- **fix:** A bug fix
- **perf:** A code change that improves performance
- **refactor:** A code change that neither fixes a bug nor adds a feature
- **style:** Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- **test:** Adding missing tests or correcting existing tests
