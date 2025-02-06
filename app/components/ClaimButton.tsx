"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export function ClaimButton() {
  const [isClaimed, setIsClaimed] = useState(false)

  const handleClaim = () => {
    // Implement claim logic here
    setIsClaimed(true)
  }

  return (
    <Button onClick={handleClaim} disabled={isClaimed} className="w-full sm:w-auto">
      {isClaimed ? "Claimed" : "Claim Airdrop"}
    </Button>
  )
}

