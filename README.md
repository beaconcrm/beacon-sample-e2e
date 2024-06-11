# Beacon sample e2e

This repository will help you e2e test a beacon form. To get started, follow the installation instructions below. After running, you should see a beacon form load in the playwright gui.

## Task

In the `example.spec.js` file, there are a number of test scenarios. The task is to write an e2e test for each of these cases.

## Test Data

There is test data available for the credit card form:

```
Card Number: 4242 4242 4242 4242
Date: (any future date)
CVC: 123
```

## Selecting iFrame

There is a known issue where the credit card form can be hard to select with playwright - this is because the id of the iframe
changes with each refresh. This selector should work. You will need to change the last part to target different fields:

```
// Select the card number field
await page
    .locator(".jss131")
    .first()
    .frameLocator("iFrame")
    .first()
    .getByPlaceholder("1234 1234 1234");
```

## Prerequisites

A modern version of node - v16-v20

## Installation

- `npm install`
- `npm run browsers` to install playwright browsers

## Usage

- `npm test` to run tests in commmand line
- `npm start` to run playwright in ui / debug mode
