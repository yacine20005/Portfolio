"use client"

import { useEffect } from 'react'
import clarity from '@microsoft/clarity'

export function MicrosoftClarity() {
    useEffect(() => {
        const clarityProjectId = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID
        if (clarityProjectId) {
            console.log('Initializing Microsoft Clarity')
            clarity.init(clarityProjectId)
            clarity.consent()
        }
    }, [])

    return null
}
