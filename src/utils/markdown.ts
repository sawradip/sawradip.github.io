import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkHtml from 'remark-html';

export interface MarkdownFile {
  frontmatter: Record<string, any>;
  html: string;
  slug: string;
}

/**
 * Process a single markdown file
 */
export async function processMarkdownFile(filePath: string): Promise<MarkdownFile> {
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);
  
  const processedContent = await remark()
    .use(remarkHtml)
    .process(content);
  
  const html = processedContent.toString();
  const slug = path.basename(path.dirname(filePath));

  return {
    frontmatter: data,
    html,
    slug,
  };
}

/**
 * Get all markdown files from a directory
 */
export async function getMarkdownFiles(directory: string): Promise<MarkdownFile[]> {
  const files: MarkdownFile[] = [];
  
  if (!fs.existsSync(directory)) {
    return files;
  }

  const entries = fs.readdirSync(directory, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);
    
    if (entry.isDirectory()) {
      const indexPath = path.join(fullPath, 'index.md');
      if (fs.existsSync(indexPath)) {
        const file = await processMarkdownFile(indexPath);
        files.push(file);
      }
    }
  }

  return files;
}

/**
 * Get jobs data
 */
export async function getJobsData(): Promise<MarkdownFile[]> {
  const jobsDir = path.join(process.cwd(), 'content', 'jobs');
  return getMarkdownFiles(jobsDir);
}

/**
 * Get education data
 */
export async function getEducationData(): Promise<MarkdownFile[]> {
  const educationDir = path.join(process.cwd(), 'content', 'education');
  return getMarkdownFiles(educationDir);
}

/**
 * Get competitions data
 */
export async function getCompetitionsData(): Promise<MarkdownFile[]> {
  const competitionsDir = path.join(process.cwd(), 'content', 'competitions');
  return getMarkdownFiles(competitionsDir);
}

