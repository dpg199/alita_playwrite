import { test, expect } from '@playwright/test';

test('Verify navigation to Client Work on EPAM website', async ({ page }) => {
  // Navigate to EPAM homepage
  await page.goto('https://www.epam.com/');

  // Click on the "Services" link in the header menu
  await page.getByRole('link', { name: 'Services' }).nth(1).click();

  // Click on the "Explore Our Client Work" link
  await page.getByRole('link', { name: 'Explore Our Client Work' }).click();

  // Verify that the "Client Work" text is visible on the page
  await expect(page.getByText('Client Work')).toBeVisible();
});