"use client"

import { useEffect } from 'react'
import clarity from '@microsoft/clarity'

export function MicrosoftClarity() {
    useEffect(() => {
        const clarityProjectId = "uwg4gyxs3p"
        if (clarityProjectId) {
            console.log('Initializing Microsoft Clarity')
            clarity.init(clarityProjectId)
            clarity.consent()
        }
    }, [])

    return null
}
