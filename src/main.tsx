import React from "react";
import ReactDOM from "react-dom/client";
import {
	createBrowserRouter,
	RouterProvider,
	Navigate,
} from "react-router-dom";

// CSS
import "./index.css";

// Pages
import Homepage from "./pages/Homepage";
import ErrorPage from "pages/ErrorPage";

//Components
const HomePage = React.lazy(() => import("pages/Homepage"));
const SpellDetailed = React.lazy(() => import("components/DetailedItemModal"));

const router = createBrowserRouter([
	{
		path: "/spells",
		element: <HomePage />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "/spells/:id",
				element: <SpellDetailed />,
			},
		],
	},
	{ path: "/", element: <Navigate to="/spells" replace /> },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<RouterProvider {...{ router }} />
	</React.StrictMode>,
);
