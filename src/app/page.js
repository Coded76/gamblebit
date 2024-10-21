"use client";

import dynamic from "next/dynamic";

const LoginPage = dynamic(() => import("@/components/LoginPage"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="relative">
      <LoginPage />
    </div>
  );
}
