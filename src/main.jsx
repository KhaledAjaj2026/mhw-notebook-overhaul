import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home/Home';
import './index.css';
import About from './pages/About/About';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
		// errorElement: <ErrorPage />
	},
	{
		path: '/about',
		element: <About />,
		// errorElement: <ErrorPage />
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router}></RouterProvider>
	</React.StrictMode>
);
