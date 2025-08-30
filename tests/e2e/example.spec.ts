import { test, expect } from '@playwright/test'

test('página principal debería cargar correctamente', async ({ page }) => {
  // Navegar a la página principal
  await page.goto('/')
  
  // Verificar que el título esté presente
  await expect(page.locator('h1')).toContainText('Bienvenido a AQS Web')
  
  // Verificar que la descripción esté presente
  await expect(page.locator('p')).toContainText('Transformamos ideas')
})

test('navegación entre páginas', async ({ page }) => {
  // Ir a la página de contacto
  await page.goto('/contacto')
  
  // Verificar que estemos en la página correcta
  await expect(page.locator('h1')).toContainText('Contacto')
  
  // Verificar que el formulario esté presente (cuando se implemente)
  // await expect(page.locator('form')).toBeVisible()
})
