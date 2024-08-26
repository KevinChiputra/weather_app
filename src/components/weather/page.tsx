'use client';

import React, { useState } from 'react';

export default function Weather() {
  const [location, setLocation] = useState<string>('');
  const [weather, setWeather] = useState<any>(null);

  async function fetchWeather() {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${process.env.NEXT_PUBLIC_API_KEY}&q=${location}`
    );
    const data = await response.json();
    setWeather(data);
    console.log(data);
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center text-black">
          Weather App
        </h1>
        <input
          type="text"
          className="w-full p-2 mb-4 border border-gray-300 rounded text-black"
          placeholder="Enter location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        {location === '' ? (
          <button
            onClick={fetchWeather}
            className="w-full p-2 bg-gray-500 text-white rounded cursor-not-allowed"
            disabled
          >
            Get Weather
          </button>
        ) : (
          <button
            onClick={fetchWeather}
            className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Get Weather
          </button>
        )}

        {weather && (
          <div className="mt-6 text-center">
            <h2 className="text-xl font-bold">{weather.location.name}</h2>
            <p className="text-gray-700">
              {weather.location.region}, {weather.location.country}
            </p>
            <p className="text-4xl font-bold my-2">
              {weather.current.temp_c}°C
            </p>
            <p className="text-gray-700">{weather.current.condition.text}</p>
            <img
              src={weather.current.condition.icon}
              alt={weather.current.condition.text}
              className="mx-auto"
            />
          </div>
        )}
      </div>
    </div>
  );
}
