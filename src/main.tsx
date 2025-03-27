import { createRoot } from 'react-dom/client'
import './index.css'
import Pages from './router/index.tsx'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from './components/shared/theme-provider.tsx'
import './i18n.ts';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <Pages />
    </ThemeProvider>
  </BrowserRouter>
)
