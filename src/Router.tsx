import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { History } from './pages/History'
import { Help } from './pages/Help'
import { DefaultLayout } from './layouts/DefautLayout'

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
