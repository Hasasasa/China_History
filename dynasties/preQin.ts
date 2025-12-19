import { DynastyData } from '../types';

export const xia: DynastyData = {
  summary: "中国历史上第一个朝代，标志着'家天下'世袭制的开启。",
  territoryDescription: "主要活动在河南西部和山西南部，以二里头文化为代表。",
  center: { lat: 34.7, lng: 112.5 },
  zoom: 6,
  boundary: [
    { lat: 35.8, lng: 110.8 }, { lat: 36.2, lng: 111.8 }, { lat: 36.1, lng: 113.0 }, 
    { lat: 35.5, lng: 113.8 }, { lat: 34.8, lng: 114.5 }, { lat: 34.2, lng: 114.0 }, 
    { lat: 33.9, lng: 113.2 }, { lat: 34.0, lng: 112.0 }, { lat: 34.5, lng: 110.5 },
    { lat: 35.2, lng: 110.3 }
  ],
  locations: [
    {
      name: "阳城",
      modernName: "河南登封",
      position: { lat: 34.42, lng: 113.03 },
      type: "capital",
      description: "夏朝初都。大禹所居之地。",
      anecdote: "大禹治水成功后，在此受禅让继位。阳城是中国历史上第一个名义上的“王都”。"
    },
    {
      name: "斟鄩 (二里头)",
      modernName: "河南偃师",
      position: { lat: 34.70, lng: 112.69 },
      type: "capital",
      description: "夏朝中晚期最著名的都城，即二里头遗址。",
      anecdote: "太康失国后，后羿、寒浞曾代夏政。少康中兴后恢复了对此地的统治。这里出土了最早的宫殿群和青铜爵。"
    },
    {
      name: "帝丘",
      modernName: "河南濮阳",
      position: { lat: 35.76, lng: 115.02 },
      type: "capital",
      description: "相（夏王）的都城。",
      anecdote: "相在此被寒浞的儿子浇攻杀，夏朝一度中断，史称“无王时期”。"
    },
    {
      name: "老丘",
      modernName: "河南开封陈留",
      position: { lat: 34.75, lng: 114.55 },
      type: "capital",
      description: "夏王予（杼）迁都于此，直至夏王扃。",
      anecdote: "予在此制造甲胄，征伐东夷，夏朝国力达到鼎盛。"
    },
    {
      name: "涂山",
      modernName: "安徽蚌埠",
      position: { lat: 32.92, lng: 117.16 },
      type: "cultural",
      description: "大禹会诸侯之地。",
      anecdote: "禹会诸侯于涂山，执玉帛者万国，标志着夏王朝政治基础的奠定。"
    },
    {
      name: "会稽山",
      modernName: "浙江绍兴",
      position: { lat: 30.00, lng: 120.60 },
      type: "cultural",
      description: "大禹陵所在地。",
      anecdote: "大禹巡行天下，最终崩于会稽，葬于此地，后世帝王多来祭祀。"
    }
  ],
  states: [
    {
      name: "夏后氏",
      capital: "阳城 -> 斟鄩 -> 帝丘 -> 原 -> 老丘 -> 西河 -> 斟鄩",
      position: { lat: 34.70, lng: 112.69 },
      startYear: "约前2070",
      endYear: "前1600",
      monarchs: "禹 (前2070-前2061)\n启 (前2060-前2051)\n太康 (前2050-前2046)\n仲康 (前2045-前2033)\n相 (前2032-前2005)\n少康 (前1983-前1963)\n予 (前1962-前1946)\n槐 (前1945-前1920)\n芒 (前1919-前1902)\n泄 (前1901-前1886)\n不降 (前1885-前1827)\n扃 (前1826-前1809)\n廑 (前1808-前1801)\n孔甲 (前1800-前1770)\n皋 (前1769-前1759)\n发 (前1758-前1752)\n桀 (前1751-前1600)",
      fallReason: "夏桀暴虐无道，重用奸臣，汤武革命，战于鸣条，夏军败绩，桀被放逐而死。",
      source: "《史记·夏本纪》、《竹书纪年》",
      description: "中国史书中记载的第一个世袭制朝代。都城频繁迁移，反映了早期国家的不稳定性。"
    }
  ]
};