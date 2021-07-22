import React, {useState} from 'react'
import TinderCard from 'react-tinder-card'
import "./TinderCards.css"
const TinderCards = () => {
    const [people,setPeople]=useState([{
        name:'Elon Musk',
        url: "https://www.usnews.com/dims4/USNEWS/410224b/2147483647/thumbnail/970x647/quality/85/?url=http%3A%2F%2Fmedia.beam.usnews.com%2Fd1%2Fd8%2F8501ba714a21aed9a7327e02ade1%2F180515-10thingselonmusk-editorial.jpg"
    },
    {
        name:'Elon Musk',
        url: "https://www.usnews.com/dims4/USNEWS/410224b/2147483647/thumbnail/970x647/quality/85/?url=http%3A%2F%2Fmedia.beam.usnews.com%2Fd1%2Fd8%2F8501ba714a21aed9a7327e02ade1%2F180515-10thingselonmusk-editorial.jpg"
    }])

    const swiped=(direction,nameToDelete)=>{
        console.log("removing "+ nameToDelete)
        // setLastDirection(direction)
    }
    const outOfFrame=(name)=>{
        console.log(name + "  left the screen")
    } 
    return (
        <div className="tinderCards">
             <div className="tinderCards__container">
                 {
                     people.map((person)=>(
                         <TinderCard className="swipe" key={person.name} preventSwipe={["up","down"]} onSwipe={(dir)=>swiped(dir,person.name)} onCardLeftScreen={()=>outOfFrame(person.name)}>
                             <div style={{backgroundImage:`url(${person.url})`}} className="card">
                                <h3>{person.name}</h3>
                             </div>
                         </TinderCard>
                     )) 
                 }
             </div>
        </div>
    )
}

export default TinderCards
