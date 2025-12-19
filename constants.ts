import { Dynasty, DynastyData } from './types';

export const DYNASTIES: Dynasty[] = [
  { id: 'xia', name: '夏朝', period: '约前2070 - 前1600', startYear: -2070, endYear: -1600 },
  { id: 'shang', name: '商朝', period: '约前1600 - 前1046', startYear: -1600, endYear: -1046 },
  { id: 'western_zhou', name: '西周', period: '前1046 - 前771', startYear: -1046, endYear: -771 },
  { id: 'spring_autumn', name: '春秋', period: '前770 - 前476', startYear: -770, endYear: -476 },
  { id: 'warring_states', name: '战国', period: '前475 - 前221', startYear: -475, endYear: -221 },
  { id: 'qin', name: '秦朝', period: '前221 - 前206', startYear: -221, endYear: -206 },
  { id: 'western_han', name: '西汉', period: '前206 - 8', startYear: -206, endYear: 8 },
  { id: 'xin', name: '新朝', period: '9 - 23', startYear: 9, endYear: 23 },
  { id: 'eastern_han', name: '东汉', period: '25 - 220', startYear: 25, endYear: 220 },
  { id: 'three_kingdoms', name: '三国', period: '220 - 280', startYear: 220, endYear: 280 },
  { id: 'western_jin', name: '西晋', period: '266 - 316', startYear: 266, endYear: 316 },
  { id: 'eastern_jin', name: '东晋 (十六国)', period: '317 - 420', startYear: 317, endYear: 420 },
  { id: 'nan_bei_chao', name: '南北朝', period: '420 - 589', startYear: 420, endYear: 589 },
  { id: 'sui', name: '隋朝', period: '581 - 618', startYear: 581, endYear: 618 },
  { id: 'tang', name: '唐朝', period: '618 - 907', startYear: 618, endYear: 907 },
  { id: 'five_dynasties', name: '五代十国', period: '907 - 960', startYear: 907, endYear: 960 },
  { id: 'northern_song', name: '北宋', period: '960 - 1127', startYear: 960, endYear: 1127 },
  { id: 'southern_song', name: '南宋', period: '1127 - 1279', startYear: 1127, endYear: 1279 },
  { id: 'yuan', name: '元朝', period: '1271 - 1368', startYear: 1271, endYear: 1368 },
  { id: 'ming', name: '明朝', period: '1368 - 1644', startYear: 1368, endYear: 1644 },
  { id: 'qing', name: '清朝', period: '1644 - 1912', startYear: 1644, endYear: 1912 },
];

export const INITIAL_DYNASTY_DATA: DynastyData = {
  summary: "请选择一个朝代以开始探索历史。",
  territoryDescription: "地图将显示疆域变化及重要地点。",
  locations: [],
  states: [],
  boundary: [],
  center: { lat: 35.8617, lng: 104.1954 },
  zoom: 4
};