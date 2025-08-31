'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export function Analytics() {
  const pathname = usePathname()

  useEffect(() => {
    // Analytics will be implemented later
    console.log('Analytics component mounted for path:', pathname)
  }, [pathname])

  return null
}
