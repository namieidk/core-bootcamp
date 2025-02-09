import { useWriteContract } from 'wagmi'
import { config } from './config'
import artifact from './Chubby.json'

export default function MintNFT() {
  const { writeContract } = useWriteContract()

  return (
    <button 
      onClick={() => 
        writeContract({ 
          abi: artifact.abi,
          address: '0x96b50C2A00733206972F7235f9466dC552e57CE4',
          functionName: 'mint',
          args: [],
       })
      }
    >
      Transfer
    </button>
  )
}