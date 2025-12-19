import { DynastyData } from '../types';

// The project now uses static data (data.ts), so the AI service is deprecated.
// Keeping this stub to avoid breaking imports if any remain, but it does nothing.

export const fetchDynastyData = async (dynastyName: string): Promise<DynastyData | null> => {
  console.log("Using static data mode. AI generation is disabled.");
  return null;
};
