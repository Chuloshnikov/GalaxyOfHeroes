"use client"
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

const Intro = () => {
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
    
  return (
    <div>hello!</div>
  )
}

export default Intro;