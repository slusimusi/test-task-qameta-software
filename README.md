# How to generate an Allure Report

With this tutorial, you can generate an Allure Report. It would be especially applicable for Linux systems.

## What do you need to install

To generate an Allure Report correctly, you need to install some software on your working machine.

### Node.js

First, install Node.js. For Linux systems, you can utilize Node Version Manager [nvm](https://github.com/nvm-sh/nvm).

### Playwright

Then, install Playwright. Follow the [official documentation](https://playwright.dev/docs/intro#installing-playwright).

### Java

To utilize Allure Report correctly, install Java with its [official documentation](https://www.java.com/en/download/help/index_installing.html).

### Allure Report

Finally, install Allure Report. For Linux systems, use this [official documentation](https://allurereport.org/docs/install-for-linux/).

To enhance your user experience with Allure Report and Playwright, set up Allure Playwright integration following the [official documentation](https://allurereport.org/docs/playwright/#setting-up).

## What do you do to generate an Allure Report

1. Install all the necessary software.
2. Modify the `example.spec.ts` file from the `tests` directory with your data.
3. Add Allure Playwright as a reporter in the `playwright.config.ts` file.

```JSON
export default defineConfig({
  // ...
  reporter: [["line"], ["allure-playwright"]],
});
```

4. Run your example test. Follow one of the commands from the [documentation](https://playwright.dev/docs/intro#running-the-example-test).
5. While running, check that you have an `allure-results` directory in your project.
6. Generate a report via the command `allure serve allure-results`.
