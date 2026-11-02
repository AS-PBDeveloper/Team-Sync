import {
  ClipboardList,
  Settings,
  MessageCircle,
  File,
  Building2,
  Users,
  LayoutDashboard,
} from "lucide-react";

export const adminNavigation = [
  {
    title: "Dashboard",
    path: "/home",
    icon: LayoutDashboard,
  },
  {
    title: "Employee",
    path: "/home/employee",
    icon: Users,
  },
  {
    title: "Departments",
    path: "/home/department",
    icon: Building2,
  },
  {
    title: "Task",
    path: "/home/task",
    icon: ClipboardList,
  },
  {
    title: "Chats",
    path: "/home/chat",
    icon: MessageCircle,
  },
  {
    title: "Documents",
    path: "/home/document",
    icon: File,
  },
  {
    title: "Settings",
    path: "/home/setting",
    icon: Settings,
  },
];
