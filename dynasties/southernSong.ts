import { DynastyData } from '../types';

export const southern_song: DynastyData = {
  summary: "偏安江南，经济重心南移，海上丝绸之路繁荣。",
  territoryDescription: "秦岭淮河以南，失去了中原和北方领土，与金国以淮河为界。",
  center: { lat: 29.0, lng: 115.0 },
  zoom: 5,
  boundary: [
    { lat: 33.5, lng: 119.5 }, { lat: 32.5, lng: 112.5 }, { lat: 33.0, lng: 107.0 },
    { lat: 30.0, lng: 103.0 }, { lat: 26.0, lng: 104.0 }, { lat: 22.0, lng: 108.0 },
    { lat: 23.0, lng: 115.0 }, { lat: 30.0, lng: 122.0 }
  ],
  locations: [
    {
      name: "临安 (杭州)",
      modernName: "浙江杭州",
      position: { lat: 30.27, lng: 120.15 },
      type: "capital",
      description: "南宋“行在”（临时首都）。",
      anecdote: "“暖风熏得游人醉，直把杭州作汴州”。虽名义上是临时首都，实际上建设得极尽奢华，是当时世界最富庶、人口最多的城市。"
    },
    {
      name: "应天府 (商丘)",
      modernName: "河南商丘",
      position: { lat: 34.38, lng: 115.65 },
      type: "capital",
      description: "南宋建立初期的首都。",
      anecdote: "赵构在此即位，建立南宋，后因金兵南下，一路南逃至扬州、建康，最终定居杭州。"
    },
    {
      name: "建康 (南京)",
      modernName: "江苏南京",
      position: { lat: 32.06, lng: 118.79 },
      type: "capital",
      description: "南宋“留都”。",
      anecdote: "赵构曾短暂驻跸于此。岳飞主张定都建康以图北伐，但赵构贪恋杭州的安逸，仅将建康作为留都。"
    },
    {
      name: "中都 (北京)",
      modernName: "北京",
      position: { lat: 39.90, lng: 116.40 },
      type: "capital",
      description: "金国首都。",
      anecdote: "海陵王完颜亮迁都于此，并大规模扩建。这是北京正式成为中国大一统王朝（或北朝）正式首都的开端。"
    },
    {
      name: "上京会宁府",
      modernName: "黑龙江阿城",
      position: { lat: 45.52, lng: 126.96 },
      type: "capital",
      description: "金国早期都城。",
      anecdote: "完颜阿骨打在此建国。海陵王南迁前，这里是金国的政治军事中心。"
    },
    {
      name: "崖山",
      modernName: "广东江门",
      position: { lat: 22.12, lng: 113.06 },
      type: "battle",
      description: "南宋流亡朝廷的最后据点。",
      anecdote: "陆秀夫背负少帝赵昺投海自尽，十万军民随之殉国，“崖山之后无中国”之说源于此悲壮一幕。"
    }
  ],
  states: [
    {
      name: "南宋",
      capital: "商丘 -> 扬州 -> 建康 -> 临安 (杭州)",
      position: { lat: 30.27, lng: 120.15 },
      startYear: "1127",
      endYear: "1279",
      monarchs: "高宗 赵构 (1127-1162)\n孝宗 赵昚 (1162-1189)\n光宗 赵惇 (1189-1194)\n宁宗 赵扩 (1194-1224)\n理宗 赵昀 (1224-1264)\n度宗 赵禥 (1264-1274)\n恭帝 赵㬎 (1274-1276)\n端宗 赵昰 (1276-1278)\n卫王 赵昺 (1278-1279)",
      fallReason: "崖山海战全军覆没，亡于元。",
      source: "《宋史》",
      description: "高宗赵构一路南逃，最终定都临安（杭州），称“行在”。"
    },
    {
      name: "大金",
      capital: "上京 -> 中都 (北京) -> 开封",
      position: { lat: 39.90, lng: 116.40 },
      startYear: "1115",
      endYear: "1234",
      monarchs: "太祖 完颜阿骨打 (1115-1123)\n太宗 完颜晟 (1123-1135)\n熙宗 完颜丹 (1135-1150)\n海陵王 完颜亮 (1150-1161)\n世宗 完颜雍 (1161-1189)\n章宗 完颜璟 (1189-1208)\n卫绍王 完颜永济 (1209-1213)\n宣宗 完颜珣 (1213-1224)\n哀宗 完颜守绪 (1224-1234)\n末帝 完颜承麟 (1234)",
      fallReason: "被蒙宋联军所灭。",
      source: "《金史》",
      description: "初都上京会宁府（哈尔滨阿城）。海陵王迁都中都（北京），是北京作为王朝正式首都的开始。金末被蒙古逼迫迁都汴京（开封）。"
    },
    {
      name: "大蒙古国",
      capital: "曲雕阿兰 -> 哈拉和林",
      position: { lat: 47.19, lng: 102.85 },
      startYear: "1206",
      endYear: "1271",
      monarchs: "成吉思汗 铁木真 (1206-1227)\n拖雷 (监国)\n窝阔台 (1229-1241)\n乃马真后 (称制)\n贵由 (1246-1248)\n海迷失后 (称制)\n蒙哥 (1251-1259)\n忽必烈 (1260-1271)",
      fallReason: "建立元朝，统一中国。",
      source: "《元史》",
      description: "窝阔台时期定都哈拉和林，成为横跨欧亚大帝国的中心。"
    }
  ]
};