# Web Development Portfolio Project

A full-stack web application demonstrating CRUD operations for employment records, backed by MongoDB and presented through a React-based interface.

## Features

- **Employment REST API**
  - Create, read, update, and delete employment history records.
  - Controller/model architecture for clean backend separation.
- **React Frontend**
  - Components for jobs, products, staff, and navigation.
  - Modular, reusable UI structure.
- **Developer Experience**
  - Organized backend and frontend folders.
  - `test-requests.http` for quick API testing.
  - Environment configuration via `.env`.

## Tech Stack

### Frontend
- React
- JavaScript (ES6+)
- HTML5 / CSS

### Backend
- Node.js
- Express 
- MongoDB / Mongoose
- dotenv

## Project Structure

```
WebDevelopmentPortfolioProject/
├── backend/
│   ├── .env
│   ├── employment-controller.mjs
│   ├── employment-model.mjs
│   ├── package.json
│   ├── package-lock.json
│   └── test-requests.http
└── frontend/
    ├── public/
    │   ├── index.html
    │   ├── manifest.json
    │   └── icons...
    └── src/
        ├── components/
        │   ├── Job.js
        │   ├── JobList.js
        │   ├── Navigation.js
        │   ├── ProductQuantity.js
        │   ├── ProductRow.js
        │   └── StaffRow.js
        └── data/
```

## Getting Started

### Backend Setup
```
cd backend
npm install
npm start
```

Create `.env`:
```
MONGODB_URI=mongodb://localhost:27017/employment-db
PORT=5000
```

### Frontend Setup
```
cd frontend
npm install
npm start
```

## API Routes (Example)
- `GET /employment`
- `POST /employment`
- `GET /employment/:id`
- `PUT /employment/:id`
- `DELETE /employment/:id`

## Future Improvements
- Authentication system
- Validation + error boundary UI
- Deployment to Vercel/Netlify + Render

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
