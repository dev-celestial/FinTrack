import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox'


const Home = () => {
    const loggedIn = { firstName: 'User'}
  return (
    <section className="home">
        <div className="home-content">
            <header className="home-header">
                <HeaderBox
                type="greeting"
                title="welcome"
                user={loggedIn?.firstName || 'Guest'}
                subtext="Access and manage your account and transactions efficiently."
                />
             <TotalBalanceBox 
            accounts={1}
            totalBanks={1}
            totalCurrentBalance={1250}
          />

            </header>
        </div>
    </section>
  )
}

export default Home