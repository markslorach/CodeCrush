// Components
import Header from './Header'
import UserStats from '../(user)/GetUserStats'

export default async function Dashboard() {
  
  return (
    <main>
      <Header />
      {/* Daily coding fact */}
      <UserStats />
      {/* Challenge cards */}
    </main>
  )
}
