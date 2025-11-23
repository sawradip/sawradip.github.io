import fs from 'fs';
import path from 'path';
import type { MarkdownFile } from './markdown';

export interface JsonDataFile {
  [key: string]: any;
  html?: string;
}

/**
 * Load JSON data from a file
 */
async function loadJsonData<T = any>(filePath: string): Promise<T[]> {
  try {
    const fullPath = path.join(process.cwd(), 'data', filePath);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const data = JSON.parse(fileContents);
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error(`Error loading JSON data from ${filePath}:`, error);
    return [];
  }
}

/**
 * Transform flat JSON object to MarkdownFile format
 */
function transformToMarkdownFile(item: JsonDataFile): MarkdownFile {
  const { html, ...rest } = item;
  return {
    frontmatter: rest,
    html: html || '',
    slug: rest.title?.toLowerCase().replace(/\s+/g, '-') || '',
  };
}

/**
 * Research paper interface
 */
export interface ResearchPaper {
  title: string;
  authors: string;
  venue: string;
  year: string;
  citations: number;
  abstract?: string;
  url?: string;
  pdf?: string;
  arxiv?: string;
  code?: string;
}

/**
 * Get research papers data
 */
export async function getResearchData(): Promise<ResearchPaper[]> {
  return loadJsonData<ResearchPaper>('research.json');
}

/**
 * Get jobs data (transformed to MarkdownFile format)
 */
export async function getJobsDataFromJson(): Promise<MarkdownFile[]> {
  const data = await loadJsonData<JsonDataFile>('jobs.json');
  return data.map(transformToMarkdownFile);
}

/**
 * Get education data (transformed to MarkdownFile format)
 */
export async function getEducationDataFromJson(): Promise<MarkdownFile[]> {
  const data = await loadJsonData<JsonDataFile>('education.json');
  return data.map(transformToMarkdownFile);
}

/**
 * Get achievements data (transformed to MarkdownFile format)
 */
export async function getAchievementsDataFromJson(): Promise<MarkdownFile[]> {
  const data = await loadJsonData<JsonDataFile>('achievements.json');
  return data.map(transformToMarkdownFile);
}
