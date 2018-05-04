const opn = require('opn');

// cache exec helper
const { execSync } = require('child_process');

// export openBrowser helper
module.exports = function openBrowser(url) {
  // get browser env
  const browser = process.env.BROWSER;
  // if platform is darwin and browser is chrome, set shouldTry var to true, else false
  const shouldTryOpenChromeWithAppleScript =
    process.platform === `darwin` &&
    (typeof browser !== `string` || browser === `google chrome`);
  // if shouldTry
  if (shouldTryOpenChromeWithAppleScript) {
    // try to
    try {
      // reopen chrome tab using applescript
      execSync(`ps cax | grep "Google Chrome"`);
      execSync(`osascript open-chrome.applescript "${encodeURI(url)}"`, {
        cwd: __dirname,
        stdio: `ignore`,
      });
      // return successful
      return true;
    }
    // else ignore errors
    catch (error) {}
  }
  // try to
  try {
    // open url and ignore errors
    opn(url).catch(() => {}); // Prevent `unhandledRejection` error.
    // return successful
    return true;
  }
  // else send error
  catch (error) {
    return false;
  }
};
