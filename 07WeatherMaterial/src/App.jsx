import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import cold from "./cold.jpg";
import rain from "./rain.jpg";
import summer from "./summer.jpg";
import Alert from "@mui/material/Alert";
import { useState } from "react";

export default function App() {
  let [city, setCity] = useState("");
  let [info, updateInfo] = useState({
    name: "Lahore",
    main: {
      temp: 42,
      min: 30,
      max: 40,
      humidity: 50,
      feels_like: 90
    }
  });
  const [errorEmpty, setErrorEmpty] = useState(false);
  const [errorCityNotFound, setErrorCityNotFound] = useState(false);

  let jsonData;

  let getWeatherInfo = async () => {
    setCity("");
    setErrorEmpty(false);
    setErrorCityNotFound(false);
    if (!city) {
      return setErrorEmpty(true);
    }

    let data = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a8f024812ff5ae393c2bf36d409f504c&units=metric`
    );

    jsonData = await data.json();

    if (jsonData.cod == "404") {
      return setErrorCityNotFound(true);
    }
    updateInfo(jsonData);
  };

  return (
    
    <>
    
      {errorEmpty && <Alert severity="warning">Please enter a city!</Alert>}
      {errorCityNotFound && (
        <Alert severity="warning">Please enter a Valid city!</Alert>
      )}
      <div className="flex flex-col items-center justify-center h-screen bg-gray-300">
        <div className="searchArea">
          <div className="flex items-center justify-center flex-col gap-2">
            <h1>Weather API Project</h1>
            <TextField
              id="filled-basic"
              label="City Name"
              variant="filled"
              onChange={(e) => setCity(e.target.value)}
              value={city}
            />
            <Button variant="outlined" onClick={getWeatherInfo}>
              Get Weather
            </Button>
          </div>
        </div>

        <div className="mainContainer mt-5">
          <Card sx={{ width: 500 }}>
            <CardMedia
              sx={{ height: 200 }}
              image={
                info.main?.humidity > 65
                  ? rain
                  : info.main?.temp > 25
                  ? summer
                  : cold
              }
              title="Sample Picture"
            />

            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                className="text-center"
              >
                Weather Condition
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <span className="flex items-center justify-between">
                  City:-<span className="font-bold">{info.name}</span>
                </span>
                <span className="flex items-center justify-between">
                  Temperature:-
                  <span className="font-bold">{info.main?.temp}&deg;C</span>
                </span>
                <span className="flex items-center justify-between">
                  Humidity:-
                  <span className="font-bold">{info.main?.humidity}</span>
                </span>
                <span className="flex items-center justify-between">
                  Feels Like:-
                  <span className="font-bold">
                    {info.main?.feels_like}&deg;C
                  </span>
                </span>
                <span className="flex items-center justify-between">
                  Minimum Temperature:-
                  <span className="font-bold">{info.main?.temp_min}&deg;C</span>
                </span>
                <span className="flex items-center justify-between">
                  Maximum Temperature:-
                  <span className="font-bold">{info.main?.temp_max}&deg;C</span>
                </span>
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
