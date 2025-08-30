import { describe, it, expect } from 'vitest'

describe('Ejemplo de prueba unitaria', () => {
  it('debería pasar una prueba básica', () => {
    expect(1 + 1).toBe(2)
  })
  
  it('debería manejar strings correctamente', () => {
    const message = 'Hola Mundo'
    expect(message).toContain('Hola')
    expect(message.length).toBeGreaterThan(0)
  })
})
