export interface Dynasty {
  id: string;
  name: string;
  period: string;
  startYear: number;
  endYear: number;
}

export interface Coordinates {
  lat: number;
  lng: number;
}

export interface HistoricalLocation {
  name: string;
  modernName?: string;
  position: Coordinates;
  type: 'capital' | 'battle' | 'cultural' | 'trade';
  description: string;
  anecdote: string;
}

export interface HistoricalState {
  name: string;
  capital: string; // New field: The capital city name
  position: Coordinates; // Usually centered on its capital or core territory
  monarchs: string; // List of key rulers, now formatted with newlines
  startYear: string;
  endYear: string;
  fallReason: string; // Why it fell
  source: string; // Historical source (e.g., Records of the Grand Historian)
  description: string; // Brief overview
}

export interface DynastyData {
  summary: string;
  territoryDescription: string;
  locations: HistoricalLocation[];
  states: HistoricalState[]; // New field for countries/states
  // Lat/Lng array for the polygon shape of the dynasty
  boundary: Coordinates[];
  // Recommended map view settings
  center: Coordinates;
  zoom: number;
}