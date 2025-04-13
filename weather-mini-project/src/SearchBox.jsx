import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { useState } from "react";
import ActionAreaCard from "./ActionAreaCard";

export default function SearchBox() {
    const [city, setCity] = useState("");
    const [weatherData, setWeatherData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    
    const getWeatherInfo = async () => {
        setIsLoading(true);
        try {
            const response = await fetch(
                `${import.meta.env.VITE_APP_API_URL}?q=${city}&appid=${import.meta.env.VITE_APP_API_KEY}&units=metric`
            );
            
            if (!response.ok) {
                throw new Error('Weather data not found');
            }
            
            const jsonResponse = await response.json();

            const imageResponse = await fetch(`https://api.unsplash.com/search/photos?query=${city}&client_id=${import.meta.env.VITE_UNSPLASH_API_KEY}`);

            if (!imageResponse.ok) throw new Error('Image not found');
            const imageData = await imageResponse.json();

            setWeatherData({
                name: jsonResponse.name,
                temp: jsonResponse.main.temp,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                pressure: jsonResponse.main.pressure,
                weatherDescription: jsonResponse.weather[0].description,
                weatherIcon: jsonResponse.weather[0].icon,
                placeImage: imageData.results[0]?.urls.regular
            });
        } catch (error) {
            console.error("Error fetching weather data:", error);
            alert("Failed to fetch weather data. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };
    
    const handleChange = (evt) => {
        setCity(evt.target.value);
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        getWeatherInfo();
        setCity("");
    };

    return (
        <div className="SearchBox">
            <h1>Search for the Weather</h1>
            <form onSubmit={handleSubmit}>
                <TextField 
                    id="city" 
                    label="City Name" 
                    variant="outlined" 
                    required 
                    value={city} 
                    onChange={handleChange} 
                />
                <br /><br />
                <Button variant="contained" type="submit">
                    Search
                </Button>
            </form>
            {weatherData ? <ActionAreaCard {...weatherData} /> : <h1>No data yet</h1>}
        </div>
    );
}