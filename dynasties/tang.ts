import { DynastyData } from '../types';

export const tang: DynastyData = {
  summary: "万国来朝的大唐盛世，诗歌、艺术、文化的巅峰。",
  territoryDescription: "疆域极盛，东至朝鲜，西达中亚，北包贝加尔湖。",
  center: { lat: 36.0, lng: 100.0 },
  zoom: 3,
  boundary: [
    { lat: 43.0, lng: 128.0 }, { lat: 48.0, lng: 115.0 }, { lat: 50.0, lng: 100.0 },
    { lat: 46.0, lng: 85.0 }, { lat: 42.0, lng: 70.0 }, { lat: 36.0, lng: 75.0 },
    { lat: 32.0, lng: 90.0 }, { lat: 20.0, lng: 105.0 }, { lat: 18.0, lng: 109.0 },
    { lat: 22.0, lng: 115.0 }, { lat: 30.0, lng: 122.0 }, { lat: 36.0, lng: 121.0 }
  ],
  locations: [
    {
      name: "长安",
      modernName: "陕西西安",
      position: { lat: 34.26, lng: 108.94 },
      type: "capital",
      description: "唐朝西京。当时世界上最大的国际大都会。",
      anecdote: "沿用隋大兴城并扩建。李白“冲天香阵透长安”。拥有大明宫、太极宫、兴庆宫三大宫殿群。安史之乱后逐渐衰落，唐末被朱温彻底毁坏。"
    },
    {
      name: "洛阳",
      modernName: "河南洛阳",
      position: { lat: 34.62, lng: 112.45 },
      type: "capital",
      description: "唐朝东都（神都）。武则天及唐昭宗时期的正式都城。",
      anecdote: "武则天改唐为周，定都洛阳，改名神都。唐高宗及武后长期在此执政。唐朝实行的也是两京制。"
    },
    {
      name: "太原 (北京)",
      modernName: "山西太原",
      position: { lat: 37.87, lng: 112.54 },
      type: "capital",
      description: "唐朝的“北都”。李唐皇室的龙兴之地。",
      anecdote: "李渊父子从太原起兵反隋。唐朝在此设立北都，作为北方军事重镇。"
    },
    {
      name: "扬州",
      modernName: "江苏扬州",
      position: { lat: 32.39, lng: 119.41 },
      type: "trade",
      description: "唐朝最繁华的港口城市。",
      anecdote: "“腰缠十万贯，骑鹤下扬州”。有“扬一益二”之称，是当时经济最发达的地区。"
    }
  ],
  states: [
    {
      name: "大唐",
      capital: "长安 <-> 洛阳",
      position: { lat: 34.26, lng: 108.94 },
      startYear: "618",
      endYear: "907",
      monarchs: "高祖 李渊 (618-626)\n太宗 李世民 (626-649)\n高宗 李治 (649-683)\n中宗 李显 (684, 705-710)\n睿宗 李旦 (684-690, 710-712)\n武则天 (690-705)\n玄宗 李隆基 (712-756)\n肃宗 李亨 (756-762)\n代宗 李豫 (762-779)\n德宗 李适 (779-805)\n顺宗 李诵 (805)\n宪宗 李纯 (805-820)\n穆宗 李恒 (820-824)\n敬宗 李湛 (824-826)\n文宗 李昂 (826-840)\n武宗 李炎 (840-846)\n宣宗 李忱 (846-859)\n懿宗 李漼 (859-873)\n僖宗 李儇 (873-888)\n昭宗 李晔 (888-904)\n哀帝 李柷 (904-907)",
      fallReason: "安史之乱后藩镇割据，黄巢起义，朱温篡唐。",
      source: "《旧唐书》、《新唐书》",
      description: "主要以长安为首都，洛阳为东都（陪都）。武周时期以洛阳为神都。唐末朱温逼迫昭宗迁都洛阳。"
    }
  ]
};