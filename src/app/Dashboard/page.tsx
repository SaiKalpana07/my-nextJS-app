"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Settings from "./Settings/page";
import Link from "next/link";

const Dashboard: React.FC = () => {
  const router = useRouter();
  const message: string = "Hello";

  return (
    <div>
      <p>Dashboard</p>
      <button
        onClick={() => {
          router.push("/Dashboard/Settings");
        }}
      >
        Click Next
      </button>
      <Link href={{ pathname: "/Dashboard/Settings", query: { id: "test" } }}>
        Click this link
      </Link>
      <Settings />
    </div>
  );
};

export default Dashboard;
