import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './styles/variables.scss'
import './styles/ant-overrides.css'
import './styles/main.scss'
import { Providers } from './redux/provider.tsx'

createRoot(document.getElementById('root')!).render(
  <Providers>
    <App />
  </Providers>,
)
