# redux saga workshop

## Table of Contents

- [Folder Structure](#folder-structure)
- [Available Scripts](#available-scripts)
  - [npm start](#npm-start)
  - [npm test](#npm-test)
  - [npm run validate](#npm-run-validate)
- [Workshop goals](#workshop-goals)
   - [call - cornify](#1-call-cornify)
   - [fetch issues](#2-fetch-issues)
   - [error handling](#3-error-handling)
   - [free time](#4-free-time)

## Folder Structure

After creation, your project should look like this:

```
my-app/
  config/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
  	actions/
  	components/
  	constants/
  	containers/
  	routes/
  	sagas/
  	services/
  	store/
    index.css
    index.js
    logo.svg
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.


### `npm run validate`

Runs eslint against all JS and JSX files with gdc-js-style configuration.

## Workshop goals

Here's the list of goals we'll try to implement.

### 1. Call cornify

Go to `http://localhost:3000/lokalhost`

Pressing button "Cheers!" triggers `CORNIFY` action.

Fill the blank space in the `src/sagas/cornifySaga.js` and call `add` method
from the cornify library everytime `CORNIFY` action gets triggered.

Verify it works against the cornify sagas tests:

```
npm test
```

Now press `p` and write cornify.

Docs:
* [call](https://yelouafi.github.io/redux-saga/docs/api/index.html#callfn-args)
* [take](https://yelouafi.github.io/redux-saga/docs/api/index.html#takepattern)


### 2. Fetch issues

Go to `http://localhost:3000/facebook/react/issues`.

We need to fetch issues for given repository.

There's a placeholder in `src/sagas/issuesSagas.js`.

For every action `FETCH_ISSUES_REQUESTED` run `fetchIssues` saga using `takeEvery` helper.

Don't forget to register the `watchFetchIssues` saga to the root saga in `src/sagas/index.js`.

`fetchIssues` saga will receive action as parameter with payload { username, repository }.

Call the `fetchIssues` method via the _github_ service (`src/services/github.js`) and pass it
username, repository as parameters.

Dispatch `FETCH_ISSUES_LOADED` and pass it username, repository and the list of fetched issues.

Docs:
* [call](https://yelouafi.github.io/redux-saga/docs/api/index.html#callfn-args)
* [put](https://yelouafi.github.io/redux-saga/docs/api/index.html#putaction)
* [takeEvery](https://yelouafi.github.io/redux-saga/docs/api/index.html#takeeverypattern-saga-args)


### 3. Error handling

Go to `http://localhost:3000`.

We'll add error handling in case given repository has valid name but it does not exist on github.

Catch the error thrown by `fetchSingleRepository` saga and then:
1. log the error with the `logError` service method
2. call the `showErrorMessage` saga
3. dispatch `REMOVE_REPOSITORY` action using `removeRepository` action creator

Check out the `repositorySagas.test.js`, note how is the error thrown

Now we need to implement the showErrorMessage saga, that will create:
* a unique id for the error message (uuid function is ready)
* dispatch `ADD_ERROR_MESSAGE` using `addErrorMessage(id, message)`
* wait for three seconds using delay `redux-saga` helper
* dispatch `REMOVE_MESSAGE` using `removeErrorMessage(message)`

The most important part - write test for the `showErrorMessage` saga

Docs:
* [call](https://yelouafi.github.io/redux-saga/docs/api/index.html#callfn-args)
* [put](https://yelouafi.github.io/redux-saga/docs/api/index.html#putaction)
* [delay](https://yelouafi.github.io/redux-saga/docs/api/index.html#delayms-val)

### 4. Free time!

* Add guard for adding repository with same name (use select)
* Calculate real score (closed issues / open issues * stars) once the repository is fetched
* What is the difference between `yield*` and `yield` when you are calling another saga?
* Make all the tests pass
