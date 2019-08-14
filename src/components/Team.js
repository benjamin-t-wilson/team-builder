import React from "react"

function Team(props) {
    return (
        <div className="team">
            {props.members.map(cv => {
                return (
                    <div className="teamMember" key={cv.id}>
                        <h1>{cv.name}</h1>
                        <h2>{cv.occupation}</h2>
                        <p>{cv.bio}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Team