import React from "react";
import Journal from "./Journal";

function JournalForm({ onEntryChange, entry, onNewEntry, setEntry }) {
    
    const newEntry = {
        passage: entry
    }

    const postedJournalObj = {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(newEntry)
    }

    function handleJournalSubmit() {
        fetch('http://localhost:3000/entries', postedJournalObj)
        .then(res => res.json())
        .then(entry => {
            const displayEntry = (<Journal
            key={entry.id}
            passage={entry.passage}
            />)
            onNewEntry(displayEntry)
        })
        setEntry('')
    }
    
    return(
        <div>
            <textarea rows="2" cols="25" placeholder="How are you feeling..." onChange={onEntryChange} value={entry}></textarea>
            <button onClick={handleJournalSubmit}>Post</button>
        </div>
    )
}

export default JournalForm