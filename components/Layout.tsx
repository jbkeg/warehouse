"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [activeMenu, setActiveMenu] = useState("dashboard");
  const [expandedSections, setExpandedSections] = useState<string[]>([
    "operations",
  ]);
  const [currentTime, setCurrentTime] = useState<string>("");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const updateTime = () => {
      setCurrentTime(new Date().toLocaleTimeString());
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  const toggleSection = (sectionId: string) => {
    setExpandedSections((prev) =>
      prev.includes(sectionId)
        ? prev.filter((id) => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const menuSections = [
    {
      id: "main",
      label: "Dashboard",
      items: [
        {
          id: "dashboard",
          label: "Home",
          href: "/",
          icon: "ri-home-smile-line",
        },
      ],
    },
    {
      id: "operations",
      label: "Daily Operations",
      items: [
        {
          id: "inbound",
          label: "Receiving",
          href: "/inbound",
          icon: "ri-truck-line",
          badge: "12",
        },
        {
          id: "inventory",
          label: "Stock Check",
          href: "/inventory",
          icon: "ri-stack-line",
        },
        {
          id: "outbound",
          label: "Orders",
          href: "/outbound",
          icon: "ri-shopping-cart-2-line",
          badge: "8",
        },
        {
          id: "qr-scanner",
          label: "QR Scanner",
          href: "/qr-scanner",
          icon: "ri-qr-scan-2-line",
        },
        {
          id: "picking",
          label: "Pick Items",
          href: "/picking",
          icon: "ri-hand-heart-line",
          badge: "5",
        },
        {
          id: "packing",
          label: "Pack Orders",
          href: "/packing",
          icon: "ri-gift-line",
          badge: "3",
        },
      ],
    },
    {
      id: "materials",
      label: "Material Management",
      items: [
        {
          id: "subsidiary-materials",
          label: "Subsidiary Materials",
          href: "/subsidiary-materials",
          icon: "ri-box-2-line",
          badge: "4",
        },
      ],
    },
    {
      id: "support",
      label: "Customer Care",
      items: [
        {
          id: "cs",
          label: "Support Center",
          href: "/cs",
          icon: "ri-customer-service-2-line",
          badge: "3",
        },
        {
          id: "tickets",
          label: "Help Desk",
          href: "/tickets",
          icon: "ri-question-answer-line",
        },
      ],
    },
    {
      id: "analytics",
      label: "Reports & Insights",
      items: [
        {
          id: "reports",
          label: "Reports",
          href: "/reports",
          icon: "ri-file-chart-line",
        },
        {
          id: "analytics",
          label: "Analytics",
          href: "/analytics",
          icon: "ri-pie-chart-line",
        },
        {
          id: "performance",
          label: "Performance",
          href: "/performance",
          icon: "ri-rocket-line",
        },
      ],
    },
    {
      id: "management",
      label: "Administration",
      items: [
        { id: "users", label: "Team", href: "/users", icon: "ri-team-line" },
        {
          id: "suppliers",
          label: "Suppliers",
          href: "/suppliers",
          icon: "ri-building-line",
        },
        {
          id: "settings",
          label: "Settings",
          href: "/settings",
          icon: "ri-settings-4-line",
        },
      ],
    },
  ];

  return (
    <div className="flex h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Enhanced Sidebar with warmer design */}
      <div className="w-72 bg-white shadow-xl border-r border-gray-100 rounded-r-2xl">
        <div className="p-6 border-b bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 rounded-tr-2xl">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
              <i className="ri-building-4-line text-white w-6 h-6 flex items-center justify-center"></i>
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">Brio Logis</h1>
              <p className="text-blue-100 text-sm">Warehouse Management</p>
            </div>
          </div>
        </div>

        <nav className="mt-4 h-full overflow-y-auto pb-20">
          {menuSections.map((section) => (
            <div key={section.id} className="mb-6">
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full flex items-center justify-between px-6 py-3 text-sm font-semibold text-gray-600 hover:text-gray-800 hover:bg-gray-50 transition-all duration-200 rounded-lg mx-2"
              >
                <span className="flex items-center space-x-2">
                  <span>{section.label}</span>
                </span>
                <i
                  className={`ri-arrow-${
                    expandedSections.includes(section.id) ? "up" : "down"
                  }-s-line w-4 h-4 flex items-center justify-center transform transition-transform duration-200`}
                ></i>
              </button>

              {expandedSections.includes(section.id) && (
                <div className="mt-2 space-y-1 ml-2">
                  {section.items.map((item) => (
                    <Link
                      key={item.id}
                      href={item.href}
                      className={`flex items-center justify-between px-4 py-3 mx-2 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:text-blue-700 transition-all duration-200 rounded-lg group ${
                        activeMenu === item.id
                          ? "bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 shadow-sm border-l-4 border-blue-500"
                          : ""
                      }`}
                      onClick={() => setActiveMenu(item.id)}
                    >
                      <div className="flex items-center space-x-3">
                        <i
                          className={`${item.icon} w-5 h-5 flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}
                        ></i>
                        <span className="whitespace-nowrap font-medium">
                          {item.label}
                        </span>
                      </div>
                      {item.badge && (
                        <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs px-2.5 py-1 rounded-full shadow-sm animate-pulse">
                          {item.badge}
                        </span>
                      )}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Enhanced Header */}
        <header className="bg-white/80 backdrop-blur-sm shadow-sm border-b border-gray-100 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <div>
                <h2 className="text-xl font-bold text-gray-800">
                  Good Morning! 👋
                </h2>
                <p className="text-sm text-gray-600">
                  Ready to manage your warehouse efficiently
                </p>
              </div>
              <div className="flex items-center space-x-3 bg-green-50 px-3 py-2 rounded-full">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-green-700">
                  All Systems Online
                </span>
                <span
                  className="text-xs text-green-600"
                  suppressHydrationWarning={true}
                >
                  Last sync: {isClient ? currentTime : ""}
                </span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-3 text-gray-500 hover:text-gray-700 hover:bg-gray-50 rounded-full transition-all duration-200 hover:scale-110">
                <i className="ri-search-line w-5 h-5 flex items-center justify-center"></i>
              </button>
              <button className="p-3 text-gray-500 hover:text-gray-700 hover:bg-gray-50 rounded-full transition-all duration-200 hover:scale-110 relative">
                <i className="ri-notification-3-line w-5 h-5 flex items-center justify-center"></i>
                <span className="absolute -top-1 -right-1 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center animate-bounce">
                  3
                </span>
              </button>
              <button className="p-3 text-gray-500 hover:text-gray-700 hover:bg-gray-50 rounded-full transition-all duration-200 hover:scale-110">
                <i className="ri-settings-4-line w-5 h-5 flex items-center justify-center"></i>
              </button>
              <div className="flex items-center space-x-3 pl-4 border-l border-gray-200">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg">
                  <i className="ri-user-smile-line text-white w-5 h-5 flex items-center justify-center"></i>
                </div>
                <div>
                  <span className="text-sm font-semibold text-gray-700">
                    Alex Johnson
                  </span>
                  <p className="text-xs text-gray-500">Warehouse Manager</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-auto p-6 bg-gradient-to-br from-gray-50/50 to-blue-50/30">
          {children}
        </main>
      </div>
    </div>
  );
}
