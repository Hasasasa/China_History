import { DynastyData } from '../types';

export const qin: DynastyData = {
  summary: "横扫六合，建立中国历史上第一个中央集权的大一统帝国。",
  territoryDescription: "东至东海，西至临洮，北至长城，南至南海。",
  center: { lat: 33.0, lng: 110.0 },
  zoom: 4,
  boundary: [
    { lat: 41.5, lng: 108.0 }, { lat: 42.0, lng: 115.0 }, { lat: 40.5, lng: 120.5 },
    { lat: 38.0, lng: 117.5 }, { lat: 35.0, lng: 120.0 }, { lat: 30.0, lng: 122.0 },
    { lat: 22.0, lng: 114.0 }, { lat: 20.0, lng: 110.0 }, { lat: 21.5, lng: 108.0 },
    { lat: 24.0, lng: 105.0 }, { lat: 28.0, lng: 103.0 }, { lat: 35.0, lng: 103.0 },
    { lat: 39.0, lng: 106.0 }
  ],
  locations: [
    {
      name: "咸阳",
      modernName: "陕西咸阳",
      position: { lat: 34.33, lng: 108.70 },
      type: "capital",
      description: "秦朝帝都。渭水贯穿其中，象征银河。",
      anecdote: "秦始皇在此仿建六国宫殿，著名的阿房宫亦建于此（虽未完工）。荆轲刺秦王即发生于咸阳宫。"
    },
    {
      name: "都江堰",
      modernName: "四川都江堰",
      position: { lat: 31.00, lng: 103.61 },
      type: "cultural",
      description: "李冰父子修建的伟大水利工程。",
      anecdote: "“深淘滩，低作堰”，造就了成都平原“天府之国”的美誉，至今仍在使用。"
    },
    {
      name: "灵渠",
      modernName: "广西兴安",
      position: { lat: 25.61, lng: 110.68 },
      type: "trade",
      description: "沟通长江与珠江水系的古运河。",
      anecdote: "秦始皇为征服岭南百越而修，使得中原文化得以迅速传入岭南。"
    },
    {
      name: "巨鹿",
      modernName: "河北平乡",
      position: { lat: 37.06, lng: 115.03 },
      type: "battle",
      description: "秦末农民战争的关键战役。",
      anecdote: "项羽破釜沉舟，以少胜多，九战九捷，击破秦军主力长城军团。"
    },
    {
      name: "博浪沙",
      modernName: "河南原阳",
      position: { lat: 35.00, lng: 113.96 },
      type: "battle",
      description: "张良刺杀秦始皇之地。",
      anecdote: "张良雇大力士掷大铁椎刺杀秦始皇，误中副车，始皇大惊，天下大索十日。"
    }
  ],
  states: [
    {
      name: "大秦帝国",
      capital: "咸阳",
      position: { lat: 34.33, lng: 108.70 },
      startYear: "前221",
      endYear: "前206",
      monarchs: "始皇帝 嬴政 (前221-前210)\n二世 胡亥 (前210-前207)\n秦王 子婴 (前207)",
      fallReason: "秦法严苛，民不聊生。陈胜吴广起义，刘邦攻入咸阳。",
      source: "《史记·秦始皇本纪》",
      description: "中国第一个大一统王朝。定都咸阳，未曾迁都，直至灭亡。"
    }
  ]
};