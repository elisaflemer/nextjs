import NavBar from '@components/NavBar'
import '@styles/globals.css'

export const metadata = {
    title: "Promptopia",
    description: "Discover and share AI prompts"
}

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
        <body>
            <div className='main'>
                <div className='gradient'>
                </div>
            </div>
            <main className='app'>
                <NavBar />
                {children}
            </main>
        </body>
    </html>
  )
}

export default RootLayout