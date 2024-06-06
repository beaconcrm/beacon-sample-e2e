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

## Prerequisites

A modern version of node - v16-v20

## Installation

- `npm install`
- `npm run browsers` to install playwright browsers

## Usage

- `npm test` to run tests in commmand line
- `npm start` to run playwright in ui / debug mode
