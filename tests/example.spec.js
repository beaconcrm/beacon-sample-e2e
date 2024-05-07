// @ts-check
const { test, expect } = require('@playwright/test');

test('page loads', async ({ page }) => {
  await page.goto("https://interview.staging.beaconforms.com/form/09620748");

  await expect(page).toHaveTitle(/Interview \- Event Registrar/);
});


// test("buy one ticket", async ({ page }) => {});
// test("buy maximum adult tickets", async ({ page }) => {});
// test("buy a ticket and include additional donation", async ({ page }) => {});
// test("insert invalid details into field and check form submission is not allowed", async ({ page }) => {});
// test("buy tickets and payment fails", async ({ page }) => {});
