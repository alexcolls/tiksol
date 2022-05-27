import MainView from '../components/MainView'
import { useWallet } from '@solana/wallet-adapter-react'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'

let connected = false

export default function Home() {
  return (
    <div className="app">
      {connected ? (
        <MainView />
      ) : (
        <div className='loginContainer'>
          <div className='loginTitle'>Log in to TikSol</div>
          <div className='loginSubtitle'>Manage your account, check notifications, comment on videos, and much more.
          </div>
          <WalletMultiButton />
        </div>
      )}
    </div>
  )
}
