# How to generate an Allure Report

With this tutorial, you can generate an Allure Report.

## What to install

To generate an Allure Report correctly, install the following software on your working machine.

### Java

Allure Report requires the [Java version 8 or above](https://www.java.com/en/download/help/index_installing.html) setup.

### Your preferred test framework

Allure Report is integrated with many test frameworks. Observe the [Allure official documentation](https://allurereport.org/docs/frameworks/) and install your preferred one.

This tutorial is based on [Playwright](https://playwright.dev/docs/intro#installing-playwright). Playwright requires the [Node.js](https://nodejs.org/en) setup

### Allure Report

Finally, install Allure Report according to the [official documentation](https://allurereport.org/docs/install/) for your system.

To enhance your user experience with Allure Report and Playwright, set up Allure Playwright integration following the [official documentation](https://allurereport.org/docs/playwright/#setting-up).

## What to do

To generate an Allure Report, follow the next steps:

1. Install all the above-mentioned software.
2. Modify the `example.spec.ts` file from the `tests` directory with your data. For example, you can write a test that opens [https://allurereport.org](https://allurereport.org):

```TypeScript
test('has title', async ({ page }) => {
  await page.goto('https://allurereport.org');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Allure Report/);
});
```

3. Add Allure Playwright as a reporter in the `playwright.config.ts` file. You can handle that via the command:

```TypeScript
export default defineConfig({
  // ...
  reporter: [["line"], ["allure-playwright"]],
});
```

4. Run your example test via such a command `npx playwright test`.
5. While running, check that you have an `allure-results` directory in your project.
6. Generate a report via the command `allure serve allure-results`.
7. After generating a report, check your browser.
