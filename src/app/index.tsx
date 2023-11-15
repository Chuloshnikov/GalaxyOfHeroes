import { useRouter } from 'next/router'
import { useEffect } from 'react'

function HomePage() {
  const router = useRouter()
  const lang = router.locale

  useEffect(() => {
    router.push(`/${lang}`)
  }, [])

  return null
}

export default HomePage