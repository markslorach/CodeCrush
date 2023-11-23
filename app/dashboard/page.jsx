// Components
import Header from './Header'
import UserStats from '../(user)/GetUserStats'

export default async function Dashboard() {
  
  return (
    <main>
      <Header />
      <UserStats />
    </main>
  )
}
