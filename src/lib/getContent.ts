import {
  getJobsDataFromJson,
  getEducationDataFromJson,
  getAchievementsDataFromJson,
} from '@/utils/jsonData';
import type { MarkdownFile } from '@/utils/markdown';

export async function getContent(): Promise<{
  jobs: MarkdownFile[];
  education: MarkdownFile[];
  achievements: MarkdownFile[];
}> {
  try {
    const [jobs, education, achievements] = await Promise.all([
      getJobsDataFromJson(),
      getEducationDataFromJson(),
      getAchievementsDataFromJson(),
    ]);

    return {
      jobs,
      education,
      achievements,
    };
  } catch (error) {
    console.error('Error loading content:', error);
    return {
      jobs: [],
      education: [],
      achievements: [],
    };
  }
}
