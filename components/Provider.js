"use client";

import { SessionProvider } from 'next-auth/react'

const Provider = ({ children, sessions }) => {
  return (
    <SessionProvider>
        {children}
    </SessionProvider>
  )
}

export default Provider