import React, { useState } from "react";

function MemberForm(props) {
  const [member, setMember] = useState({
    name: "",
    occupation: "",
    bio: ""
  });

  const changeHandler = event => {
    setMember({ ...member, [event.target.name]: event.target.value });
  };

  const submitForm = event => {
    event.preventDefault();
    const newMember = {
      ...member,
      id: Date.now()
    };
    props.addNewMember(newMember);
  };

  return (
    <form onSubmit={submitForm}>
      <label htmlFor="name">Team Member Name:</label>
      <input
        type="text"
        name="name"
        placeholder="Phillip Fry"
        value={member.name}
        onChange={changeHandler}
      />
      <label htmlFor="occupation">Team Member Occupation</label>
      <input
        type="text"
        name="occupation"
        placeholder="Pizza Delivery Boy"
        value={member.occupation}
        onChange={changeHandler}
      />
      <label htmlFor="bio">Team Member Bio</label>
      <textarea
        type="text"
        name="bio"
        placeholder={`Uh, is the puppy mechanical in any way? Who are those horrible orange men? Bender! Ship! Stop bickering or I'm going to come back there and change your opinions manually! One hundred dollars. I'll get my kit! Who am I making this out to? I don't know what you did, Fry, but once again, you screwed up! Now all the planets are gonna start cracking wise about our mamas. And then the battle's not so bad? Aww, it's true. I've been hiding it for so long.`}
        value={member.bio}
        onChange={changeHandler}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default MemberForm;
