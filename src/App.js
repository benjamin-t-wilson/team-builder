import React, { useState } from "react";
import "./App.scss";

import MemberList from "./components/MemberList.js";
import TeamMember from "./components/TeamMember.js";
import MemberForm from "./components/MemberForm.js";

function App() {
  const [team, setTeam] = useState(MemberList);

  const addNewMember = member => {
    setTeam([...team, member]);
  };
  return (
    <div className="App">
      <h1>The League of Ordinary Gentlemen</h1>
      <h2>and women*</h2>
      <MemberForm addNewMember={addNewMember}/>
      <TeamMember members={team} />
    </div>
  );
}

export default App;
