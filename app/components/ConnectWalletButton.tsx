"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export function ConnectWalletButton() {
  const [isConnected, setIsConnected] = useState(false)

  const handleConnect = () => {
    // Implement wallet connection logic here
    setIsConnected(true)
  }

  return (
    <Button onClick={handleConnect} variant="outline">
      {isConnected ? "Connected" : "Connect Wallet"}
    </Button>
  )
}

