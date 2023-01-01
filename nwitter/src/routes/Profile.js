import { authService } from "fbase";
import React from "react";
import { Link, useHistory } from "react-router-dom";

function Profile() {
  const history = useHistory();
  const onLogOutClick = () => {
    authService.signOut();
    history.push("/");
  };
  return (
    <>
      <button onClick={onLogOutClick}>
        <Link to="/">Log Out</Link>
      </button>
    </>
  );
}

export default Profile;
