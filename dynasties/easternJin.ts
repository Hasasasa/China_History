import { DynastyData } from '../types';

export const eastern_jin: DynastyData = {
  summary: "衣冠南渡，偏安江南，北方陷入十六国混战。",
  territoryDescription: "东晋偏安南方，北方为十六国割据。",
  center: { lat: 32.0, lng: 114.0 },
  zoom: 4,
  boundary: [
    { lat: 33.5, lng: 119.0 }, { lat: 32.5, lng: 112.0 }, { lat: 33.0, lng: 106.0 },
    { lat: 30.0, lng: 102.0 }, { lat: 25.0, lng: 105.0 }, { lat: 22.0, lng: 110.0 },
    { lat: 25.0, lng: 120.0 }, { lat: 30.0, lng: 122.0 }
  ],
  locations: [
    {
      name: "建康",
      modernName: "江苏南京",
      position: { lat: 32.06, lng: 118.79 },
      type: "capital",
      description: "东晋都城。原名建业，因避晋愍帝司马邺讳，改名建康。",
      anecdote: "“王与马，共天下”。南方世家大族与皇权共治。建康成为当时南方经济文化中心。"
    },
     {
      name: "长安",
      modernName: "陕西西安",
      position: { lat: 34.26, lng: 108.94 },
      type: "capital",
      description: "十六国时期前秦、后秦的都城。",
      anecdote: "前秦苻坚以此为都，曾统一北方，并由此发兵攻打东晋（淝水之战）。"
    },
    {
      name: "邺城",
      modernName: "河北邯郸临漳",
      position: { lat: 36.32, lng: 114.45 },
      type: "capital",
      description: "十六国时期后赵、前燕的都城。",
      anecdote: "石虎在此大兴土木，极其奢华。这里也是后来北齐的都城。"
    },
    {
      name: "襄国",
      modernName: "河北邢台",
      position: { lat: 37.07, lng: 114.50 },
      type: "capital",
      description: "后赵早期都城。",
      anecdote: "石勒在此称帝，是中国历史上唯一一位奴隶出身的皇帝。"
    },
    {
      name: "龙城",
      modernName: "辽宁朝阳",
      position: { lat: 41.56, lng: 120.44 },
      type: "capital",
      description: "前燕早期都城。",
      anecdote: "慕容皝在此建都，龙城是慕容氏兴起之地，后来成为三燕古都（前燕、后燕、北燕）。"
    },
    {
      name: "平阳",
      modernName: "山西临汾",
      position: { lat: 36.08, lng: 111.51 },
      type: "capital",
      description: "汉赵（前赵）都城。",
      anecdote: "刘渊建汉后迁都于此，刘聪在此俘虏晋怀帝。"
    },
    {
      name: "统万城",
      modernName: "陕西靖边",
      position: { lat: 37.99, lng: 108.86 },
      type: "capital",
      description: "大夏国都城。",
      anecdote: "赫连勃勃蒸土筑城，坚硬如铁，“一统天下，君临万邦”。是中国历史上唯一的匈奴都城遗址。"
    },
    {
      name: "姑臧",
      modernName: "甘肃武威",
      position: { lat: 37.93, lng: 102.63 },
      type: "capital",
      description: "五凉（前凉、后凉、南凉、北凉）政权的中心。",
      anecdote: "丝绸之路上的重镇，文化昌盛，也是佛教东传的重要基地，鸠摩罗什曾在此译经。"
    },
    {
      name: "兰亭",
      modernName: "浙江绍兴",
      position: { lat: 29.93, lng: 120.49 },
      type: "cultural",
      description: "书法圣地。",
      anecdote: "书圣王羲之在此与友雅集，写下“天下第一行书”《兰亭集序》。“曲水流觞”成千古佳话。"
    },
    {
      name: "淝水",
      modernName: "安徽寿县",
      position: { lat: 32.57, lng: 116.78 },
      type: "battle",
      description: "以少胜多的经典战役。",
      anecdote: "前秦苻坚率八十万大军南下，被东晋谢玄八万北府兵击败，成语“草木皆兵”源于此。"
    }
  ],
  states: [
    {
      name: "东晋",
      capital: "建康 (南京)",
      position: { lat: 32.06, lng: 118.79 },
      startYear: "317",
      endYear: "420",
      monarchs: "元帝 司马睿 (317-323)\n明帝 司马绍 (323-325)\n成帝 司马衍 (325-342)\n康帝 司马岳 (342-344)\n穆帝 司马聃 (344-361)\n哀帝 司马丕 (361-365)\n废帝 司马奕 (365-371)\n简文帝 司马昱 (371-372)\n孝武帝 司马曜 (372-396)\n安帝 司马德宗 (396-419)\n恭帝 司马德文 (419-420)",
      fallReason: "刘裕篡位，建立刘宋。",
      source: "《晋书》",
      description: "司马睿在建康称帝，延续晋祚。是南朝的开始。"
    },
    {
      name: "前秦",
      capital: "长安",
      position: { lat: 34.26, lng: 108.94 }, 
      startYear: "351",
      endYear: "394",
      monarchs: "景明帝 苻健 (351-355)\n厉王 苻生 (355-357)\n宣昭帝 苻坚 (357-385)\n哀平帝 苻丕 (385-386)\n太宗 苻登 (386-394)\n末主 苻崇 (394)",
      fallReason: "淝水之战惨败后国家瓦解。",
      source: "《晋书·载记》",
      description: "十六国中最强大的政权，定都长安，一度统一北方。"
    },
    {
      name: "前燕",
      capital: "龙城 -> 蓟 -> 邺城",
      position: { lat: 36.32, lng: 114.45 },
      startYear: "337",
      endYear: "370",
      monarchs: "文明帝 慕容皝 (337-348)\n景昭帝 慕容儁 (348-360)\n幽帝 慕容 暐 (360-370)",
      fallReason: "被前秦所灭。",
      source: "《晋书·载记》",
      description: "慕容儁进军中原后，将都城从蓟（北京）迁至邺城（邯郸）。"
    },
    {
      name: "后赵",
      capital: "襄国 -> 邺城",
      position: { lat: 37.07, lng: 114.50 },
      startYear: "319",
      endYear: "351",
      monarchs: "明帝 石勒 (319-333)\n海阳王 石弘 (333-334)\n武帝 石虎 (334-349)\n少帝 石世\n彭城王 石遵\n义阳王 石鉴\n新兴王 石祗",
      fallReason: "冉闵内乱。",
      source: "《晋书·载记》",
      description: "石勒定都襄国（邢台），石虎迁都邺城，并大肆营建。"
    },
    {
      name: "汉赵 (前赵)",
      capital: "平阳 -> 长安",
      position: { lat: 36.08, lng: 111.51 },
      startYear: "304",
      endYear: "329",
      monarchs: "光文帝 刘渊 (304-310)\n昭武帝 刘聪 (310-318)\n隐帝 刘（火+can）\n末主 刘曜 (318-329)",
      fallReason: "被后赵石勒所灭。",
      source: "《晋书·载记》",
      description: "匈奴刘渊建立，攻破洛阳、长安，灭亡西晋。"
    },
    {
      name: "大夏",
      capital: "统万城",
      position: { lat: 37.99, lng: 108.86 },
      startYear: "407",
      endYear: "431",
      monarchs: "武烈帝 赫连勃勃 (407-425)\n赫连昌 (425-428)\n赫连定 (428-431)",
      fallReason: "被吐谷浑所灭。",
      source: "《晋书·载记》",
      description: "赫连勃勃建立，筑统万城，是十六国后期重要政权。"
    }
  ]
};