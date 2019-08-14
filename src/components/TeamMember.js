import React from "react"

function TeamMember(props) {
    return (
        <div className="team">
            {props.members.map(cv => {
                return (
                    <div className="teamMember" key={cv.id}>
                        <h1>{cv.name}</h1>
                        <h2>{cv.occupation}</h2>
                        <p>{cv.bio}</p>
                        <button onClick={() => {props.editMember(cv)}}>Edit</button>
                    </div>
                )
            })}
        </div>
    )
}

export default TeamMember