const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './tests/**/*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      url: 'https://partner-02.st.revoup.ru',
      show: true,
      browser: 'chromium'
    }
  },
  include: {
    I: './steps_file.js',
    sessionPage: './pages/SessionPage.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'demo_mocca',
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  }
}