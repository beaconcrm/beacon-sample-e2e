// @ts-check
const { test, expect } = require('@playwright/test');

test('page loads', async ({ page }) => {
  await page.goto("https://interview.staging.beaconforms.com/form/09620748");

  await expect(page).toHaveTitle(/Interview \- Event Registrar/);
});
