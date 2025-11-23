import { getJobsData, getEducationData, getCompetitionsData } from '@/utils/markdown';

export async function getContent() {
  try {
    const [jobs, education, competitions] = await Promise.all([
      getJobsData(),
      getEducationData(),
      getCompetitionsData(),
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

