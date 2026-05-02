// npm packages
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// internal imports (e.g., @/)
import '@/locales/i18n'

// Parent (e.g., ../)

// siblings (e.g., ./)
import App from './App.tsx'

const rootElement = document.getElementById('root')
if (!rootElement) throw new Error('Failed to find root element')

// Start the worker before mounting React
async function enableMocking() {
  // if (import.meta.env.DEV) {
  const { worker } = await import('./mocks/browser')
  return worker.start({ onUnhandledRequest: 'bypass' })
  // }
}

// NOTE: Use this when API mocking is needed, and comment out the below code
enableMocking()
  .then(() => {
    createRoot(rootElement).render(
      <StrictMode>
        <App />
      </StrictMode>,
    )
  })
  .catch((error: unknown) => {
    console.error('Failed to start mock service worker:', error)
  })

// NOTE: Use this when real API server is available, and comment out the above code
// createRoot(rootElement).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
