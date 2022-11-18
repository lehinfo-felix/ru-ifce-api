import page from "../Page.js";

export const Login = async () => {
  await page.type('[name="email"]', "lehinfo.felix@gmail.com");
  await page.type('[name="password"]', "123456");
  await page.click(".App1-MuiButton-label");
};

