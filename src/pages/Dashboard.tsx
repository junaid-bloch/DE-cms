// import { useEffect, useState } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import { toast } from "@/components/ui/sonner";
// import Navbar from "@/components/Layout/Navbar";
// import Sidebar from "@/components/Layout/Sidebar";
// import DashboardStats from "@/components/dashboard/DashboardStats";
// import AnnouncementCard from "@/components/dashboard/AnnouncementCard";
// import CourseCard from "@/components/dashboard/CourseCard";
// import EventsList from "@/components/dashboard/EventsList";
// import { Skeleton } from "@/components/ui/skeleton";
// import { Button } from "@/components/ui/button"; // Ensure Button is imported

// // Mock data
// const courses = {
//   student: [
//     { id: 101, code: "CS101", name: "Intro to CS", progress: 65 },
//     { id: 102, code: "MATH201", name: "Calculus II", progress: 42 },
//   ],
//   faculty: [{ id: 201, code: "CS350", name: "Database Systems", progress: 70 }],
//   admin: [{ id: 301, code: "CS101", name: "Intro to CS", students: 120 }],
// };

// const announcements = [
//   {
//     id: 1,
//     title: "Maintenance Notice",
//     content: "Library closed for renovations.",
//     date: "2025-06-05",
//   },
//   {
//     id: 2,
//     title: "New Resources",
//     content: "Access to new research databases.",
//     date: "2025-06-02",
//   },
// ];

// const events = [
//   {
//     id: 201,
//     name: "Career Fair",
//     date: "2025-06-15",
//     location: "Student Center",
//   },
//   {
//     id: 202,
//     name: "AI Ethics Lecture",
//     date: "2025-06-10",
//     location: "Auditorium A",
//   },
// ];

// const Dashboard = () => {
//   const [user, setUser] = useState<any>(null);
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);
//   const [isLoading, setIsLoading] = useState(true);
//   const navigate = useNavigate();
//   const location = useLocation();

//   useEffect(() => {
//     const storedUser = localStorage.getItem("user");
//     if (!storedUser) {
//       navigate("/login");
//       return;
//     }
//     setUser(JSON.parse(storedUser));
//     setTimeout(() => {
//       setIsLoading(false);
//       toast(`Welcome back, ${JSON.parse(storedUser).name}!`, {
//         description: "Your dashboard is ready.",
//         duration: 3000,
//       });
//     }, 800);
//   }, [navigate]);

//   const getCoursesForRole = () => {
//     if (!user?.role) return [];
//     return courses[user.role as keyof typeof courses] || [];
//   };

//   const getWelcomeMessage = () => {
//     const hour = new Date().getHours();
//     if (hour < 12) return `Good morning, ${user?.name || "User"}`;
//     if (hour < 18) return `Good afternoon, ${user?.name || "User"}`;
//     return `Good evening, ${user?.name || "User"}`;
//   };

//   const renderRoleSpecificContent = () => {
//     switch (user?.role) {
//       case "faculty":
//         return <p>Your teaching schedule and announcements go here.</p>;
//       case "admin":
//         return <p>Admin-specific data like system status goes here.</p>;
//       default:
//         return <p>Student-specific announcements and progress go here.</p>;
//     }
//   };

//   if (isLoading) {
//     return (
//       <div className="h-screen flex items-center justify-center">
//         <div className="text-center">
//           <div className="w-16 h-16 border-4 border-campus-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
//           <p className="text-campus-primary">Loading dashboard...</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="h-screen flex flex-col">
//       <Navbar
//         user={user}
//         onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
//       />
//       <div className="flex flex-1 overflow-hidden">
//         <Sidebar isOpen={isSidebarOpen} userRole={user?.role} />
//         <main className="flex-1 overflow-y-auto bg-campus-light p-4 md:p-6">
//           <div className="max-w-7xl mx-auto">
//             <h1 className="text-2xl font-bold text-campus-primary mb-6">
//               {getWelcomeMessage()}
//             </h1>
//             <DashboardStats userRole={user?.role} />
//             {renderRoleSpecificContent()}
//             <div>
//               <h2 className="text-xl font-semibold mb-4">Your Courses</h2>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 {getCoursesForRole().map((course: any) => (
//                   <CourseCard key={course.id} course={course} />
//                 ))}
//               </div>
//             </div>
//             <div>
//               <h2 className="text-xl font-semibold mb-4">
//                 Latest Announcements
//               </h2>
//               <div>
//                 {announcements.map((announcement) => (
//                   <AnnouncementCard
//                     key={announcement.id}
//                     announcement={announcement}
//                   />
//                 ))}
//               </div>
//             </div>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;


import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "@/components/ui/sonner";
import Navbar from "@/components/Layout/Navbar";
import Sidebar from "@/components/Layout/Sidebar";
import DashboardStats from "@/components/dashboard/DashboardStats";
import AnnouncementCard from "@/components/dashboard/AnnouncementCard";
import CourseCard from "@/components/dashboard/CourseCard";
import EventsList from "@/components/dashboard/EventsList";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button"; // Ensure Button is imported

// Mock data
const courses = {
  student: [
    { id: 101, code: "CS101", name: "Intro to CS", progress: 65 },
    { id: 102, code: "MATH201", name: "Calculus II", progress: 42 },
  ],
  faculty: [{ id: 201, code: "CS350", name: "Database Systems", progress: 70 }],
  admin: [{ id: 301, code: "CS101", name: "Intro to CS", students: 120 }],
};

const announcements = [
  {
    id: 1,
    title: "Maintenance Notice",
    content: "Library closed for renovations.",
    date: "2025-06-05",
  },
  {
    id: 2,
    title: "New Resources",
    content: "Access to new research databases.",
    date: "2025-06-02",
  },
];

const events = [
  {
    id: 201,
    name: "Career Fair",
    date: "2025-06-15",
    location: "Student Center",
  },
  {
    id: 202,
    name: "AI Ethics Lecture",
    date: "2025-06-10",
    location: "Auditorium A",
  },
];

const Dashboard = () => {
  const [user, setUser] = useState<any>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (!storedUser) {
      navigate("/login");
      return;
    }
    setUser(JSON.parse(storedUser));
    setTimeout(() => {
      setIsLoading(false);
      toast(`Welcome back, ${JSON.parse(storedUser).name}!`, {
        description: "Your dashboard is ready.",
        duration: 3000,
      });
    }, 800);
  }, [navigate]);

  const getCoursesForRole = () => {
    if (!user?.role) return [];
    return courses[user.role as keyof typeof courses] || [];
  };

  const getWelcomeMessage = () => {
    const hour = new Date().getHours();
    if (hour < 12) return `Good morning, ${user?.name || "User"}`;
    if (hour < 18) return `Good afternoon, ${user?.name || "User"}`;
    return `Good evening, ${user?.name || "User"}`;
  };

  const renderRoleSpecificContent = () => {
    switch (user?.role) {
      case "faculty":
        return (
          <div>
            <p>Your teaching schedule and announcements go here.</p>
            <Button
              onClick={() =>
                window.open("https://respondusinglp.github.io/rulp/", "_blank")
              }
              className="mt-4"
            >
              Student Grading AI for Assignments
            </Button>
          </div>
        );
      case "admin":
        return <p>Admin-specific data like system status goes here.</p>;
      case "student":
        return (
          <div>
            <p>Student-specific announcements and progress go here.</p>
            <Button
              onClick={() =>
                window.open(
                  "https://campus-eats-official.vercel.app/",
                  "_blank"
                )
              }
              className="mt-4"
            >
              Take Food from Canteen
            </Button>
          </div>
        );
      default:
        return <p>No role-specific content available.</p>;
    }
  };

  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-campus-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-campus-primary">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen flex flex-col">
      <Navbar
        user={user}
        onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
      />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar isOpen={isSidebarOpen} userRole={user?.role} />
        <main className="flex-1 overflow-y-auto bg-campus-light p-4 md:p-6">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-2xl font-bold text-campus-primary mb-6">
              {getWelcomeMessage()}
            </h1>
            <DashboardStats userRole={user?.role} />
            {renderRoleSpecificContent()}
            <div>
              <h2 className="text-xl font-semibold mb-4">Your Courses</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {getCoursesForRole().map((course: any) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-4">
                Latest Announcements
              </h2>
              <div>
                {announcements.map((announcement) => (
                  <AnnouncementCard
                    key={announcement.id}
                    announcement={announcement}
                  />
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
