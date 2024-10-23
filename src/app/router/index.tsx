import { createBrowserRouter } from "react-router-dom";
import { PATH } from "@app/constants/path";
import DefaultLayout from "@app/layouts/default";
import { lazy } from "react";

const ClientPage = lazy(() => import('@pages/clients'))




export const router = createBrowserRouter([
    {
        path: PATH.PREFIX,
        element: <DefaultLayout />,
        children: [
            {
                path: PATH.PREFIX,
                element: <ClientPage/>,
            }
        ]
    }
])