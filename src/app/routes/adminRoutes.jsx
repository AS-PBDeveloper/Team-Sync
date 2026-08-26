import Department from "../../features/admin module/departments/ui/pages/Department";
import Document from "../../features/admin module/documents/ui/pages/Document";
import Employee from "../../features/admin module/employees/ui/pages/Employee";
import Task from "../../features/admin module/tasks/ui/pages/Task";
import Chat from "../../features/chats/ui/pages/Chat";
import Settings from "../../features/settings/ui/pages/Settings";

export let adminRoutes = [
  {
    path: "employee",
    element: <Employee />,
  },
  {
    path: "task",
    element: <Task />,
  },
  {
    path: "department",
    element: <Department />,
  },
  {
    path: "chat",
    element: <Chat />,
  },
  {
    path: "document",
    element: <Document />,
  },
  {
    path: "setting",
    element: <Settings />,
  },
];
