"use client";

// import { useState } from "react";

// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Avatar, AvatarFallback } from "@/components/ui/avatar";

// import { Loader2, BookOpen, FolderOpen, Edit } from "lucide-react";

// import EditProfileDialog from "./components/EditProfileDialog";

const DashboardScreen = () => {
  return (
    <div className="flex justify-center items-center h-[80vh]">
      <h1 className="font-bold text-4xl animate-pulse">
        This page is coming soon.
      </h1>
    </div>
  );
  // let user = true;
  // const [open, setOpen] = useState(false);
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   password: "",
  // });
  // const [saving, setSaving] = useState(false);
  // const [errorMsg, setErrorMsg] = useState("");
  // const handleSave = async () => {
  //   setSaving(true);
  //   setErrorMsg("");
  // };
  // if (!user)
  //   return (
  //     <div className="flex flex-col items-center justify-center min-h-[80vh]">
  //       <h2 className="text-2xl font-bold text-gray-800 mb-3">
  //         You’re not logged in ⚠️
  //       </h2>
  //       <Link href="/auth">
  //         <Button>Login to Continue</Button>
  //       </Link>
  //     </div>
  //   );
  // return (
  //   <div className="min-h-screen bg-gray-50">
  //     {/* Header */}
  //     <header className="bg-white shadow-sm border-b border-gray-100 px-6 py-4 flex justify-between items-center">
  //       <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
  //     </header>
  //     {/* Main */}
  //     <main className="max-w-6xl mx-auto px-6 py-10 grid lg:grid-cols-4 gap-8">
  //       {/* Sidebar */}
  //       <aside className="lg:col-span-1 space-y-6">
  //         <Card className="p-6 text-center relative">
  //           <Avatar className="h-16 w-16 mx-auto mb-3">
  //             <AvatarFallback>{"U"}</AvatarFallback>
  //           </Avatar>
  //           <h2 className="text-xl font-semibold">{"Student"}</h2>
  //           <p className="text-gray-500 text-sm">test@gmail.com</p>
  //           <p className="text-gray-400 text-xs mt-1">
  //             Joined:{" "}
  //             {new Date("2025-10-31 14:32:01.808144+00").toLocaleDateString()}
  //           </p>
  //           <Button
  //             variant="outline"
  //             size="sm"
  //             className="mt-4 flex gap-2 mx-auto"
  //             onClick={() => setOpen(true)}
  //           >
  //             <Edit className="h-4 w-4" /> Edit Profile
  //           </Button>
  //         </Card>
  //         <Card className="p-6">
  //           <CardHeader className="p-0 mb-3">
  //             <CardTitle className="text-lg font-semibold">
  //               Quick Links
  //             </CardTitle>
  //           </CardHeader>
  //           <div className="flex flex-col gap-3">
  //             <Link href="/projects">
  //               <Button variant="outline" className="w-full flex gap-2">
  //                 <FolderOpen className="h-4 w-4" /> Explore Projects
  //               </Button>
  //             </Link>
  //             <Link href="/learn">
  //               <Button variant="outline" className="w-full flex gap-2">
  //                 <BookOpen className="h-4 w-4" /> Learning Paths
  //               </Button>
  //             </Link>
  //           </div>
  //         </Card>
  //       </aside>
  //       {/* Main Content */}
  //       <div className="lg:col-span-3 space-y-8">
  //         <Card>
  //           <CardHeader>
  //             <CardTitle className="text-2xl font-bold">
  //               Welcome back, Student 👋
  //             </CardTitle>
  //           </CardHeader>
  //           <CardContent>
  //             <p className="text-gray-600">
  //               Manage your learning and projects from one place.
  //             </p>
  //           </CardContent>
  //         </Card>
  //         <Card>
  //           <CardHeader>
  //             <CardTitle className="text-xl font-semibold">
  //               My Progress
  //             </CardTitle>
  //           </CardHeader>
  //           <CardContent>
  //             <div className="space-y-6">
  //               <div>
  //                 <h3 className="font-semibold text-gray-700 mb-2">
  //                   Projects (2)
  //                 </h3>
  //                 <ul className="space-y-2">
  //                   <li>
  //                     <Link
  //                       href={`/projects/1`}
  //                       className="text-blue-600 hover:underline"
  //                     >
  //                       AI Face Detection
  //                     </Link>{" "}
  //                     — <span className="text-yellow-600">Started</span>
  //                   </li>
  //                 </ul>
  //               </div>
  //               <div>
  //                 <h3 className="font-semibold text-gray-700 mb-2">
  //                   Learning Paths (4)
  //                 </h3>
  //                 <ul className="space-y-2">
  //                   <li>
  //                     <Link
  //                       href={`/learn/1`}
  //                       className="text-blue-600 hover:underline"
  //                     >
  //                       HTML Crash Course
  //                     </Link>{" "}
  //                     — <span className="text-yellow-600">Started</span>
  //                   </li>
  //                 </ul>
  //               </div>
  //             </div>
  //           </CardContent>
  //         </Card>
  //       </div>
  //     </main>
  //     <EditProfileDialog
  //       open={open}
  //       setOpen={setOpen}
  //       formData={formData}
  //       setFormData={setFormData}
  //       onSave={handleSave}
  //       saving={saving}
  //     />
  //   </div>
  // );
};

export default DashboardScreen;
