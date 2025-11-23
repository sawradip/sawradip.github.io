import {
  getJobsDataFromJson,
  getEducationDataFromJson,
  getCompetitionsDataFromJson,
} from '@/utils/jsonData';
import type { MarkdownFile } from '@/utils/markdown';

export async function getContent(): Promise<{
  jobs: MarkdownFile[];
  education: MarkdownFile[];
  competitions: MarkdownFile[];
}> {
  try {
    const [jobs, education, competitions] = await Promise.all([
      getJobsDataFromJson(),
      getEducationDataFromJson(),
      getCompetitionsDataFromJson(),
    ]);

    return {
      jobs,
      education,
      competitions,
    };
  } catch (error) {
    console.error('Error loading content:', error);
    return {
      jobs: [],
      education: [],
      competitions: [],
    };
  }
}
