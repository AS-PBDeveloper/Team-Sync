import Chat from "../../features/chats/ui/pages/Chat";
import Home from "../../features/dashboard/ui/pages/Home";
import Settings from "../../features/settings/ui/pages/Settings";

export let commonRoutes = [
  {
    path: "",
    element: <Home />,
  },
  {
    path: "chat",
    element: <Chat />,
  },
  {
    path: "setting",
    element: <Settings />,
  },
];
