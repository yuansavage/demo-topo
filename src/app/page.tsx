"use server";
import dynamic from "next/dynamic";
const MapComponent = dynamic(() => import("../../component/Map"), {
  ssr: false,
});
import { Button } from "@/components/ui/button";

export default async function Home() {
  return (
    <div className="flex flex-col items-center gap-4">
      <Button variant="outline">Button</Button>
      <MapComponent />
    </div>
  );
}
