import { Routes, Route } from 'react-router-dom'
import { Home } from './components/pages/Home'
import { History } from './components/pages/History'
import { Help } from './components/pages/Help'
import { DefaultLayout } from './layouts/DefaultLayout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/help" element={<Help />} />
      </Route>
    </Routes>
  )
}
