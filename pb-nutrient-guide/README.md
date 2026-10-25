# Plant-Based Nutrient Guide

A web app that helps users explore plant-based food sources and meal ideas for six nutrients: **calcium, iron, vitamin D, omega-3, iodine, and vitamin B12**. Users can select a nutrient to view a short description, suggested food sources, and practical meal ideas. They can also submit their own sources and meal ideas; community submissions are stored in a SQLite database and displayed through the app’s API.

## Project status

This is a school-project prototype. The React interface and ASP.NET API are being developed locally. The application is educational and does not provide personalized nutrition or medical advice. Nutrition information and community-submitted content should be checked against reliable sources.

## Technology

- **Frontend:** React, JavaScript, and Vite (Single Page Application)
- **Backend:** ASP.NET Core 10 Web API
- **Database:** SQLite with Entity Framework Core

## Features

- Browse six selected nutrients.
- View a description, plant-based food sources, and meal ideas for each nutrient.
- Submit community-contributed sources and meal ideas.
- Store submissions in SQLite and retrieve them through the API.
- The submissions can be edited and deleted.

## Run locally

You’ll need **Node.js** and the **.NET 10 SDK** installed.

### Start the API

From the repository root, open a terminal and run:

1) cd backend/NutrientGuide.Api and then 2) dotnet run

The API prints its local address when it starts. Keep this terminal running.

## Start the React app

Open a second terminal from the repository root:

1) npm install and then 2) npm run dev

Open the local address printed by Vite in your browser.

## Data storage

The API stores community submissions in a local SQLite database. Community submissions are user-provided and should not be treated as verified nutrition guidance. The application is a prototype, not a substitute for advice from a qualified health professional. Nutrient needs and appropriate food choices vary between people; consult reliable sources when evaluating nutrition claims.

## Security and privacy

Do not commit passwords, API keys, confidential information, or personal data. Before publishing the repository, review its files and ensure the SQLite database does not contain information you don’t intend to share. 
