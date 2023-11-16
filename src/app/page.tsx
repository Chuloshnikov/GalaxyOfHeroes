"use client"
import { useEffect } from 'react';
import { useRouter } from 'next/navigation'



function HomePage() {
  const router = useRouter()

  useEffect(() => {
    const browserLang = window.navigator.language
    if (browserLang === "en-US") {
      router.push(`/en`)
    } else if (browserLang === "uk-UA") {
      router.push(`/ua`)
    } else if (browserLang === "de-DE") {
      router.push('/de')
    } else {
      router.push(`/en`)
    }
  }, [])
    
  return null;
}

export default HomePage;