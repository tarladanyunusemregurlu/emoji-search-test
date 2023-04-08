## Emoji Search

Created with _create-react-app_. See the [full create-react-app guide](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Install

`npm install`

## Usage

`npm start`

---

# Emoji Search React App Test Suite

This test suite is used to test the functionality of the Emoji Search React app. The test suite contains four test cases that check if the app renders the expected content and functions as intended.

## Dependencies

The test suite uses the following dependencies:

- Jest: a JavaScript testing framework that provides a test runner, assertion library, and mocking capabilities.
- `@testing-library/react`: a set of utilities for testing React components and hooks.
- `@testing-library/user-event`: a library for simulating user events in testing.
- `@testing-library/jest-dom/extend-expect`: a library that extends Jest's expect assertions with DOM-specific matchers.

## Running the Tests

To run the test suite, you can use the following command:

```bash
npm test
```

This will run all the tests in the src directory that match the file pattern `*.test.js;`.

Included test.js by me : `emojiSearch.test.js`

## Test Cases

The test suite contains the following four test cases:

1. "check if the heading is there" - This test case checks if the heading "emoji search" is rendered successfully.
2. "check if the emoji list is here" - This test case checks if the list of emojis is rendered successfully when the app is first opened.
3. "check if it filters" - This test case checks if the app can filter the list of emojis according to the input.
4. "check if the emoji is copied when clicked" - This test case checks if the app can copy the symbol of the clicked emoji to the clipboard.

Each test case is described in more detail in the test suite file.
