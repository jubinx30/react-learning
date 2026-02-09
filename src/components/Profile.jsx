import ProfileCard from "./ProfileCard";

function Profile() {
  return (
    <>
      <h1>Profile Card Challenge</h1>
      <ProfileCard
        name = "Alice"
        age = {30}
        greeting ={ 
          
            <strong>Hi, Alice. You look awesome!</strong>
          }
        >
        <p>Hobbies: Reading, Hiking</p>
        <button>Contact</button>
      </ProfileCard>

      <ProfileCard
        name = "Bob"
        age = {40}
        greeting ={ 
          
            <strong>Hi, Bob. You look smart.</strong>
          }
        >
        <p>Hobbies: Podcasts, Football</p>
        <button>Contact</button>
      </ProfileCard>
    </>
  );
}

export default Profile;
