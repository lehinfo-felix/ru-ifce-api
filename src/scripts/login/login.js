import page from "../Page";

export const Login = async () => {
  await page.type('[name="email"]', "carlosemannoel2017@gmail.com");
  await page.type('[name="password"]', "123456");
  await page.click(".App1-MuiButton-label");
};
