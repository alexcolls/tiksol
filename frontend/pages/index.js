import { useWallet } from '@solana/wallet-adapter-react'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import MainView from '../components/MainView'
import Signup from '../components/SignUp'

export default function Home() {

  const { connected } = useWallet()
  let isAccount = false

  return (
    <div className="app">
      {connected ? (
        <>
          {isAccount ? (
            <div>
              Tiktoks will go here
            </div>
          ) : (
            <MainView />
          )}
        </>
      ) : (
        <div className='loginContainer'>
          <div className='loginTitle'>Log in to Cryptok</div>
          <div className='loginSubtitle'>Cryptok is a Social Media Video App based  on the Solana blockchain. Cryptok team is building a unique web3 social media  where users can create content, own, and monetize their experiences using the main utility token of the platform.
          </div>
          <WalletMultiButton />
        </div>

      )}
    </div>
  )
}
