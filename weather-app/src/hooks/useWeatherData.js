import { useEffect, useState } from "react";

const apikey = '68abca11cf9e4fc5bed111314250404';

function useWeatherData(query) {
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(true);
    const [errorMsg, setErrorMsg] = useState('');
    const days = 5;

    useEffect(() => {
        if (!query || query === undefined) return;

        const fetchWeather = async () => {
            setLoading(true);
            setErrorMsg('');

            try {
                const res = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${apikey}&q=${query}&days=${days}`);
                const data = await res.json();

                if (data.error) {
                    throw new Error(data.error.message);
                }

                setWeather(data);
            } catch (err) {
                setErrorMsg(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchWeather();
    }, [query]);

    return { weather, loading, error: errorMsg }
}
export default useWeatherData;