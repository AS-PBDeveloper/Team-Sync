import {
  Settings,
  ChartArea,
  List,
  LayoutDashboard,
  Presentation,
  UserPen,
} from "lucide-react";

export const employeeNavigation = [
  {
    path: "/home",
    title: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    path: "/home/myTask",
    title: "My-Task",
    icon: List,
  },
  {
    path: "/home/chat",
    title: "Chats",
    icon: ChartArea,
  },
  {
    path: "/home/attendance",
    title: "Attendance",
    icon: Presentation,
  },
  {
    path: "/home/profile",
    title: "Profile",
    icon: UserPen,
  },
  {
    path: "/home/setting",
    title: "Settings",
    icon: Settings,
  },
];
