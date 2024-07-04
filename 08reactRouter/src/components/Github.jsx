import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import Alert from "@mui/material/Alert";

export default function Github() {
  let [username, setUsername] = useState("apple");
  let [info, setInfo] = useState();
  let [error, setError] = useState(false);

  const getUserInfo = async () => {
    const response = await fetch(`https://api.github.com/users/${username}`);
    if (!response.ok) {
      setError(true);
      setInfo(null);
      return;
    }
    setError(false);
    const data = await response.json();
    setInfo(data);
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <>
      <div className="flex items-center justify-center flex-col h-[50vh] gap-4">
        <h1 className="font-black ">Github Information Scrapper</h1>
        <TextField
          id="filled-basic"
          label="User-name"
          variant="filled"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
        <Button variant="contained" onClick={getUserInfo}>
          Get Information
        </Button>
        {error ? <Alert severity="error" sx={{width : 300}}>Invalid Username.</Alert> : " "};
      </div>
      <div className="flex flex-col justify-center h-[40vh] items-center">
        {info ? (
          <>
            <img
              src={info.avatar_url}
              alt="githubPic"
              className="w-[200px] h-[200px]"
              />
              <p>
                Your followers are:{" "}
                <span className="font-bold">{info.followers}</span>
              </p>
          </>
        ) : (
          <p>Unable to Fetch Data..</p>
        )}
      </div>
    </>
  );
}
