"use server";
import dynamic from "next/dynamic";
const MapComponent = dynamic(() => import("./component/Map"), {
  ssr: false,
});

export default async function Home() {
  return (
    <div className="flex flex-col items-center gap-4 bg-gray-100 min-h-screen p-6">
      <MapComponent />
    </div>
  );
}
