import { DynastyData } from '../types';

export const xin: DynastyData = {
  summary: "王莽改制，托古改制，昙花一现。",
  territoryDescription: "继承西汉疆域，但周边少数民族多叛乱。",
  center: { lat: 34.26, lng: 108.94 },
  zoom: 4,
  boundary: [
    { lat: 40.0, lng: 124.0 }, { lat: 41.0, lng: 110.0 }, { lat: 42.0, lng: 95.0 },
    { lat: 42.0, lng: 85.0 }, { lat: 40.0, lng: 75.0 }, { lat: 36.0, lng: 76.0 },
    { lat: 36.0, lng: 90.0 }, { lat: 30.0, lng: 98.0 }, { lat: 20.0, lng: 105.0 },
    { lat: 18.0, lng: 108.0 }, { lat: 20.0, lng: 115.0 }, { lat: 30.0, lng: 122.0 },
    { lat: 35.0, lng: 120.0 }, { lat: 39.0, lng: 126.0 }
  ],
  locations: [
    {
      name: "常安 (长安)",
      modernName: "陕西西安",
      position: { lat: 34.26, lng: 108.94 },
      type: "capital",
      description: "新朝都城。王莽将“长安”改名为“常安”。",
      anecdote: "王莽在此推行一系列复古改革（王田、私属），并拆毁汉朝宫殿改建九庙。最终被赤眉军攻破，王莽死于渐台。"
    },
    {
      name: "昆阳",
      modernName: "河南叶县",
      position: { lat: 33.62, lng: 113.35 },
      type: "battle",
      description: "新朝灭亡的关键战役。",
      anecdote: "刘秀以少胜多，击溃王莽军主力四十二万，王莽政权随之土崩瓦解。"
    },
    {
      name: "绿林山",
      modernName: "湖北大洪山",
      position: { lat: 31.48, lng: 113.02 },
      type: "battle",
      description: "绿林军起义爆发地。",
      anecdote: "饥民云集绿林山，爆发大规模起义，“绿林好汉”一词即源于此。"
    }
  ],
  states: [
    {
      name: "新朝",
      capital: "常安 (长安)",
      position: { lat: 34.26, lng: 108.94 },
      startYear: "9",
      endYear: "23",
      monarchs: "王莽 (9-23)",
      fallReason: "改革失败，天灾频发，绿林赤眉起义，王莽被杀。",
      source: "《汉书·王莽传》",
      description: "定都常安（原长安）。"
    }
  ]
};