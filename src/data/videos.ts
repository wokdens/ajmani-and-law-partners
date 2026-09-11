import fs from "fs";
import path from "path";
import defaultVideos from "./videos.json";

export interface VideoUpdate {
  id: string;
  title: string;
  platform: "LinkedIn" | "Instagram" | "YouTube" | "Facebook";
  platformUrl: string;
  embedUrl?: string;
  videoUrl?: string;
  thumbnail: string;
  duration: string;
  topic: string;
  date: string;
  summary: string;
  isFeatured?: boolean;
}

const dataFilePath = path.join(process.cwd(), "src", "data", "videos.json");

export function getVideos(): VideoUpdate[] {
  try {
    if (fs.existsSync(dataFilePath)) {
      const fileData = fs.readFileSync(dataFilePath, "utf8");
      return JSON.parse(fileData);
    }
  } catch (error) {
    console.error("Error reading videos.json:", error);
  }
  return defaultVideos as VideoUpdate[];
}

export function saveVideos(videos: VideoUpdate[]): void {
  try {
    fs.writeFileSync(dataFilePath, JSON.stringify(videos, null, 2), "utf8");
  } catch (error) {
    console.error("Error saving videos.json:", error);
    throw error;
  }
}
