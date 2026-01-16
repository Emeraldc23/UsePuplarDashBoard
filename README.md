# React + Vite

# Puplar Dashboard

A responsive React dashboard application built with **TypeScript** and **Material-UI (MUI)**. This dashboard includes a sidebar, navbar, search functionality, a dynamic data table with API integration, and responsive mobile support.

Pages include **Customers**, **Dashboard**, and placeholder pages for sections that are under construction.

---

## Table of Contents

- [React + Vite](#react--vite)
- [Puplar Dashboard](#puplar-dashboard)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Tech Stack](#tech-stack)
  - [Usage](#usage)
  - [Project Structure](#project-structure)
  - [Api Integratgion](#api-integratgion)

---

## Features

- **Sidebar** navigation with collapsible mobile view
- **Navbar** with search, theme toggle, notifications, and profile picture
- **Data Table** using MUI DataGrid with pagination, filtering, and checkbox selection
- **API Integration**: Fetch users from [JSONPlaceholder](https://jsonplaceholder.typicode.com/users)
- **Under Construction** pages for features not yet implemented
- **Loading State** animation while fetching data
- **Responsive** design for mobile, tablet, and desktop views
- **Dark Mode** toggle using React Context API
- **TypeScript** for type safety and maintainability

---

## Tech Stack

- React 18
- TypeScript
- Material-UI (MUI)
- React Router v6
- Sass (SCSS)
- JSONPlaceholder API for demo data

---

## Usage

- The sidebar allows navigation to Dashboard, Customers, and under-construction pages.

- On mobile screens, the sidebar collapses and can be toggled via the dashboard menu icon in the navbar.

- Search for users by name or city using the search input in the navbar.

- Click on a customer to view detailed information.

- Toggle dark/light theme using the switch in the navbar.

## Project Structure

N/B Not the full structure

src/
/ assets
/ Component/ (various components are here)
/Context
/Styles
/underConstruction
/utlis
/widgets
App.tsx
/index.css
/layout.scss
/main.jsx
/SearchLayout.tsx

## Api Integratgion

- Users data fetched from JSONPlaceholder

- Displayed in a DataGrid table with pagination and filtering

- Shows loading animation while fetching data
