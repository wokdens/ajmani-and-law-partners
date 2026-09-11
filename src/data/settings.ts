import fs from "fs";
import path from "path";
import defaultSettings from "./settings.json";

export interface SiteSettings {
  fontSizeScale: number; // percentage, e.g. 100, 105, 110, 115, 95
  fontSizeLevel: "compact" | "normal" | "medium" | "large" | "extra-large";
  ambientBackgroundEnabled: boolean;
  updatedAt?: string;
}

const settingsFilePath = path.join(process.cwd(), "src", "data", "settings.json");

export function getSiteSettings(): SiteSettings {
  try {
    if (fs.existsSync(settingsFilePath)) {
      const data = fs.readFileSync(settingsFilePath, "utf8");
      return JSON.parse(data);
    }
  } catch (error) {
    console.error("Error reading settings.json:", error);
  }
  return defaultSettings as SiteSettings;
}

export function saveSiteSettings(settings: SiteSettings): void {
  try {
    settings.updatedAt = new Date().toISOString();
    fs.writeFileSync(settingsFilePath, JSON.stringify(settings, null, 2), "utf8");
  } catch (error) {
    console.error("Error saving settings.json:", error);
    throw error;
  }
}
