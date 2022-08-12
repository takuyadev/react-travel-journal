import React from 'react'
import Card from './components/Card'
import Header from './components/Header'
import journalData from './data.js'

export default function App(){
    const cards = journalData.map((journal, i)=>{
        console.log
        return  (
                <div>
                    <Card 
                        item={journal}
                    />
                    {i !== journalData.length - 1 && <hr /> }
                </div>
            )
        }
    )
    return (
        <div>
            <Header/>
            <main className="journal-list">
                {cards}
            </main>
        </div>
    )
}