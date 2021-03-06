import React from 'react'
import { AuthProvider } from './auth/AuthContext'
import { AppRouter } from './routers/AppRouter'
import { TeamProvider } from './team/TeamContext'
import './styles/App.css'

export const HeroesApp = () => {
    return (
        
        <AuthProvider>
            <TeamProvider>
                <AppRouter/>
            </TeamProvider>
        </AuthProvider>
    )
}
