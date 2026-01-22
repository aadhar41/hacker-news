# Hacker News Search Application

A modern React application for searching and browsing Hacker News stories with an intuitive interface. Search for articles, view story details, and navigate through results with smooth pagination.

## Features

- **Real-time Search**: Search for Hacker News stories by keyword with instant results
- **Story Details**: View article titles, authors, points, and comment counts at a glance
- **Pagination**: Navigate through search results with next/previous buttons
- **Loading States**: Visual feedback during data fetching for better UX
- **Responsive Design**: Clean and modern UI that works seamlessly across all devices
- **External Links**: Direct links to original articles and Hacker News discussions

## Technologies

- **React 18.2**: Modern React with hooks for building the user interface
- **Context API**: Global state management for efficient data sharing
- **Reducer Pattern**: Predictable state updates and action handling
- **Hacker News API**: Integration with Algolia's Hacker News search API
- **React Icons**: Beautiful icons for enhanced visual design

![Home Page Screen](public/screens/home-page.png)

## Getting Started

### Prerequisites

- Node.js >= 14.x
- npm or yarn package manager

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/aadhar41/hacker-news.git
   cd hacker-news
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

## Usage

Run the project locally:

```bash
# Start the development server
npm start

# Build for production
npm run build

# Run tests
npm test
```

The application will open at `http://localhost:3000`

## Architecture

This application follows modern React best practices:

- **Component-Based Architecture**: Modular components for SearchForm, Stories, and Buttons
- **Context API Pattern**: Centralized state management using React Context
- **Reducer Pattern**: Predictable state updates with actions and reducers
- **Custom Hooks**: `useGlobalContext` hook for accessing global state
- **API Integration**: Asynchronous data fetching with error handling

### Project Structure

```text
src/
├── App.js              # Main application component
├── context.js          # Context provider and custom hook
├── reducer.js          # State reducer with action handlers
├── actions.js          # Action type constants
├── SearchForm.js       # Search input component
├── Stories.js          # Story list display component
├── Buttons.js          # Pagination controls
└── index.css           # Global styles
```

## API

This application uses the [Hacker News Search API](https://hn.algolia.com/api) powered by Algolia.

## Contributing

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Acknowledgments

- [Hacker News](https://news.ycombinator.com/) for the content
- [Algolia](https://www.algolia.com/) for the search API
