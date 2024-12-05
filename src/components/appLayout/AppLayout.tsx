import { Outlet } from 'react-router-dom'
import { Header } from '../composite'

const AppLayout = () => {
  return (
    <div>
      <Header />
      <div style={{ paddingTop: '8vh' }}>
        <Outlet />
      </div>
    </div>
  )
}

export default AppLayout
