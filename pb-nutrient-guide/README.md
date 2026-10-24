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

## Run locally

You’ll need **Node.js** and the **.NET 10 SDK** installed.

### Start the API

From the repository root, open a terminal and run:

```powershell
cd backend/NutrientGuide.Api
dotnet run