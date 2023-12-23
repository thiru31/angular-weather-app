# Angular Weather App with Login Page

## Overview

This Angular application combines a user-friendly login page with JavaScript validations and a feature that displays the current weather of Chennai city. It provides a seamless user experience while showcasing Angular's capabilities for creating dynamic web applications.

## Features

1. **Login Page:**
   - User-friendly login interface.
   - JavaScript validations for form inputs.

2. **Weather Display:**
   - Real-time weather information for Chennai city.
   - Integration with a weather API to fetch and display accurate weather data.

## Getting Started

Follow these steps to run the Angular Weather App locally on your machine.

### Prerequisites

- Node.js and npm: Ensure that Node.js and npm are installed on your system. You can download them from [Node.js official website](https://nodejs.org/).

### Clone the Repository

```bash
git clone https://github.com/thiru31/angular-weather-app.git
cd angular-weather-app
```

### Install Dependencies

Run the following command to install the project dependencies:

```bash
npm install
```

### Configure API Key

To fetch weather data, you need to obtain an API key from a weather API provider. Replace `YOUR_API_KEY` in the `src\app\weather.service.ts` file with your actual API key.

```typescript
// src\app\weather.service.ts

private apiKey = 'YOUR_API_KEY';
```

### Run the Application

Start the development server using the following command:

```bash
ng serve -o
```

Visit `http://localhost:4200` in your web browser to access the Angular Weather App.

## Contributing

Feel free to contribute to the project by submitting bug reports, feature requests, or pull requests. Your feedback and contributions are highly appreciated!


Feel free to customize the README according to your project's specific details and requirements.