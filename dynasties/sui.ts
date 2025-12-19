import { DynastyData } from '../types';

export const sui: DynastyData = {
  summary: "结束近四百年的大分裂，开创科举，修大运河。",
  territoryDescription: "统一南北，疆域恢复至汉代规模。",
  center: { lat: 34.0, lng: 110.0 },
  zoom: 4,
  boundary: [
    { lat: 41.5, lng: 115.0 }, { lat: 40.0, lng: 105.0 }, { lat: 35.0, lng: 98.0 },
    { lat: 30.0, lng: 99.0 }, { lat: 25.0, lng: 102.0 }, { lat: 20.0, lng: 105.0 },
    { lat: 18.0, lng: 108.0 }, { lat: 22.0, lng: 115.0 }, { lat: 30.0, lng: 122.0 },
    { lat: 35.0, lng: 120.0 }
  ],
  locations: [
    {
      name: "大兴城 (长安)",
      modernName: "陕西西安",
      position: { lat: 34.26, lng: 108.94 },
      type: "capital",
      description: "隋文帝营建的西京。是隋唐长安城的前身。",
      anecdote: "因汉长安城狭小且水污染严重，杨坚在龙首原南新建大兴城，由宇文恺设计，是当时世界第一大城。"
    },
    {
      name: "洛阳 (东京)",
      modernName: "河南洛阳",
      position: { lat: 34.62, lng: 112.45 },
      type: "capital",
      description: "隋炀帝营建的东京（后改东都）。",
      anecdote: "炀帝大规模扩建洛阳，开凿大运河以沟通南北。洛阳在隋朝后期成为实际的政治中心。"
    },
    {
      name: "江都",
      modernName: "江苏扬州",
      position: { lat: 32.39, lng: 119.41 },
      type: "trade",
      description: "隋炀帝的巡幸之地，大运河枢纽。实际上起到了陪都的作用。",
      anecdote: "隋炀帝三下江都，看琼花，最终在此遭遇宇文化及兵变被杀，“好头颅，谁当斫之？”"
    }
  ],
  states: [
    {
      name: "大隋",
      capital: "大兴 (西安) -> 洛阳",
      position: { lat: 34.26, lng: 108.94 },
      startYear: "581",
      endYear: "618",
      monarchs: "文帝 杨坚 (581-604)\n炀帝 杨广 (604-618)\n恭帝 杨侑 (617-618)",
      fallReason: "炀帝滥用民力，天下大乱。",
      source: "《隋书》",
      description: "文帝定都大兴。炀帝即位后营建东京洛阳，并常驻于此，实行两京制。"
    }
  ]
};