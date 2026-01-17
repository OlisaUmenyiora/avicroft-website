import { test, expect } from '@playwright/test';

test.describe('Homepage Visual Regression', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    // Wait for animations and images to load
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(1000);
  });

  test('hero section matches design', async ({ page }) => {
    // Scroll to top to ensure hero is visible
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(500);

    // Screenshot the hero section (viewport)
    await expect(page).toHaveScreenshot('hero-section.png', {
      fullPage: false,
    });
  });

  test('navbar matches design', async ({ page }) => {
    const navbar = page.locator('header');
    await expect(navbar).toHaveScreenshot('navbar.png');
  });

  test('product carousel matches design', async ({ page }) => {
    // Get the desktop carousel container (hidden lg:block)
    const desktopCarousel = page.locator('.hidden.lg\\:block').filter({ has: page.locator('text=Swipe') });

    await expect(desktopCarousel).toHaveScreenshot('product-carousel.png');
  });

  test('footer matches design', async ({ page }) => {
    // Scroll to footer
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(500);

    const footer = page.locator('footer');
    await expect(footer).toHaveScreenshot('footer.png');
  });

  test('full page matches design', async ({ page }) => {
    await expect(page).toHaveScreenshot('full-page.png', {
      fullPage: true,
    });
  });
});

test.describe('Mobile Visual Regression', () => {
  test.use({ viewport: { width: 375, height: 812 } });

  test('mobile hero matches design', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(1000);

    await expect(page).toHaveScreenshot('mobile-hero.png', {
      fullPage: false,
    });
  });

  test('mobile full page matches design', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(1000);

    await expect(page).toHaveScreenshot('mobile-full-page.png', {
      fullPage: true,
    });
  });
});
