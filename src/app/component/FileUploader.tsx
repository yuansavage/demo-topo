"use client";

import { ChangeEvent, useRef } from "react";
import { Button } from "@/components/ui/button";
import { setProjectName } from "../store/action";

interface ShapeData {
  color?: string;
  points: number[];
}

interface BuildingData {
  name: string;
  outer: ShapeData;
  holes: ShapeData;
}

interface MapData {
  name: string;
  data: {
    buildings: BuildingData[];
  };
}

type FileUploaderProps = {
  onUpload: (data: MapData) => void;
};
export default function FileUploader({ onUpload }: FileUploaderProps) {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const handleFileUpload = async (event: ChangeEvent<HTMLInputElement>) => {
    if (event) {
      const file = event.target.files && event.target.files[0];
      if (file) {
        const fileContent = await file.text();
        try {
          const jsonData = JSON.parse(fileContent);
          onUpload(jsonData);
          setProjectName(jsonData.name);
        } catch (error) {
          console.error("Invalid JSON file:", error);
        }
      }
    }
  };
  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <input
        ref={fileInputRef}
        type="file"
        accept=".json"
        onChange={handleFileUpload}
        style={{ display: "none" }}
        id="upload-scheme"
      />
      <label htmlFor="upload-scheme">
        <Button variant="default" onClick={handleButtonClick}>
          UPLOAD SCHEME
        </Button>
      </label>
    </div>
  );
}
