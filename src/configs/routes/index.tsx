import MainLayout from "@/components/layouts";
import ExamPage from "@/pages/answers/exam";
import IntroductionPage from "@/pages/introduction";
import NothingFoundPage from "@/pages/not-found";
import { Navigate, createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="introduction" replace />,
      },
      {
        path: "introduction",
        element: <IntroductionPage />,
      },
      {
        path: "answers",
        children: [
          {
            index: true,
            element: <Navigate to="exam" replace />,
          },
          {
            path: "exam",
            element: <ExamPage />,
          },
          {
            path: "quests",
            element: <div>Quests</div>,
          },
          {
            path: "boxed-lunches",
            element: <div>Boxed lunches</div>,
          },
          {
            path: "midnight-trivia-quiz",
            element: <div>Midnight trivia quiz</div>,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <NothingFoundPage />,
  },
]);
