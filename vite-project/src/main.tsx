import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App.tsx'
import DataCenter from './components/DataCenter.tsx'

createRoot(document.getElementById('root')!).render(
  <DataCenter />
)
