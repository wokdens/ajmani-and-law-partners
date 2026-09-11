import fs from "fs";
import path from "path";
import defaultNewsletters from "./newsletters.json";

export interface NewsletterIssue {
  id: string;
  title: string;
  month: string;
  volume: string;
  date: string;
  summary: string;
  topics: string[];
  pdfUrl: string;
  pageCount: number;
  isLatest: boolean;
  fileSize?: string;
  publishedAt?: string;
}

const dataFilePath = path.join(process.cwd(), "src", "data", "newsletters.json");

export function getNewsletters(): NewsletterIssue[] {
  try {
    if (fs.existsSync(dataFilePath)) {
      const fileData = fs.readFileSync(dataFilePath, "utf8");
      return JSON.parse(fileData);
    }
  } catch (error) {
    console.error("Error reading newsletters.json:", error);
  }
  return defaultNewsletters as NewsletterIssue[];
}

export function saveNewsletters(newsletters: NewsletterIssue[]): void {
  try {
    fs.writeFileSync(dataFilePath, JSON.stringify(newsletters, null, 2), "utf8");
  } catch (error) {
    console.error("Error saving newsletters.json:", error);
    throw error;
  }
}

export function getLatestNewsletter(): NewsletterIssue {
  const list = getNewsletters();
  const latest = list.find((n) => n.isLatest);
  return latest || list[0];
}

export function getPreviousNewsletters(): NewsletterIssue[] {
  const list = getNewsletters();
  const latestId = getLatestNewsletter().id;
  return list.filter((n) => n.id !== latestId);
}
