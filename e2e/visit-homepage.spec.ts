import { test, expect } from "@playwright/test"

test("User visits homepage and page title is A fsaycon.dev Boilerplate and github name is visible", async ({
  page,
}) => {
  await page.goto("https://fransaycon-nextjs-panda-boilerplate.netlify.app/")
  await expect(page).toHaveTitle("A @fransaycon Boilerplate")
  await expect(page.getByText("A FRANSAYCON BOILERPLATE")).toBeVisible()
})
