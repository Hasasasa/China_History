import { DynastyData } from '../types';

export const shang: DynastyData = {
  summary: "青铜与甲骨文的时代，中国信史的开端。",
  territoryDescription: "势力扩展至山东、河北，以河南为统治中心。",
  center: { lat: 35.5, lng: 115.0 },
  zoom: 6,
  boundary: [
    { lat: 38.5, lng: 113.5 }, { lat: 37.5, lng: 116.5 }, { lat: 37.0, lng: 119.5 },
    { lat: 36.0, lng: 120.5 }, { lat: 34.5, lng: 119.5 }, { lat: 33.0, lng: 118.5 },
    { lat: 31.5, lng: 116.5 }, { lat: 31.8, lng: 113.0 }, { lat: 33.5, lng: 110.5 },
    { lat: 35.5, lng: 110.0 }, { lat: 37.5, lng: 112.0 }
  ],
  locations: [
    {
      name: "西亳 (亳)",
      modernName: "河南商丘/偃师",
      position: { lat: 34.38, lng: 115.65 },
      type: "capital",
      description: "商汤灭夏后建立的第一个都城。",
      anecdote: "商族兴起于商丘。汤在此发布《汤誓》，历数夏桀罪行，建立商朝。"
    },
    {
      name: "嚣 (隞)",
      modernName: "河南郑州",
      position: { lat: 34.74, lng: 113.62 },
      type: "capital",
      description: "商王仲丁迁都于此，即郑州商城遗址。",
      anecdote: "商朝中期九世之乱开始，都城频繁迁移。郑州商城拥有巨大的城墙，证明了当时的繁荣。"
    },
    {
      name: "殷 (殷墟)",
      modernName: "河南安阳",
      position: { lat: 36.10, lng: 114.30 },
      type: "capital",
      description: "商朝最后、最稳定的都城（盘庚迁殷后）。",
      anecdote: "盘庚迁殷后，商朝国势复兴，延续了273年不再迁都。这里出土了数万片甲骨文，是中国信史的起点。"
    },
    {
      name: "朝歌",
      modernName: "河南淇县",
      position: { lat: 35.60, lng: 114.19 },
      type: "capital",
      description: "帝乙、帝辛（纣王）时期的别都（行宫）。",
      anecdote: "纣王在此扩建离宫别馆，设酒池肉林，筑鹿台。周武王攻破朝歌，纣王于鹿台自焚。"
    },
    {
      name: "牧野",
      modernName: "河南新乡",
      position: { lat: 35.30, lng: 113.90 },
      type: "battle",
      description: "武王伐纣的决战之地。",
      anecdote: "牧野之战中，商军倒戈，周武王一战定天下，血流漂杵。"
    }
  ],
  states: [
    {
      name: "大商",
      capital: "亳 -> 嚣 -> 相 -> 邢 -> 庇 -> 奄 -> 殷 (安阳) -> 朝歌",
      position: { lat: 36.10, lng: 114.30 },
      startYear: "约前1600",
      endYear: "前1046",
      monarchs: "成汤 (前1600-前1589)\n外丙\n仲壬\n太甲 (前1580-前1570)\n沃丁\n太庚\n小甲\n雍己\n太戊 (前1486-前1413)\n仲丁\n外壬\n河DAN甲\n祖乙 (前1378-前1359)\n祖辛\n沃甲\n祖丁\n南庚\n阳甲\n盘庚 (前1300迁殷)\n小辛\n小乙\n武丁 (前1250-前1192)\n祖庚 (前1191-前1181)\n祖甲 (前1180-前1148)\n廪辛 (前1147-前1144)\n康丁 (前1143-前1135)\n武乙 (前1134-前1100)\n文丁 (前1099-前1090)\n帝乙 (前1089-前1076)\n帝辛(纣王) (前1075-前1046)",
      fallReason: "纣王荒淫无度，宠信妲己，酒池肉林，失去民心。周武王率诸侯联军伐纣，牧野之战商军倒戈。",
      source: "《史记·殷本纪》、《尚书》",
      description: "中国历史上迁都最频繁的朝代之一，“前八后五”次迁都。最终定都于殷。"
    }
  ]
};