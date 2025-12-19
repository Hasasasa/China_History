import { DynastyData } from '../types';

export const western_jin: DynastyData = {
  summary: "三国归晋，短暂的统一，门阀制度确立。",
  territoryDescription: "继承三国疆域，短暂统一全国。",
  center: { lat: 34.0, lng: 113.0 },
  zoom: 4,
  boundary: [
    { lat: 40.0, lng: 124.0 }, { lat: 40.0, lng: 110.0 }, { lat: 40.0, lng: 95.0 },
    { lat: 30.0, lng: 95.0 }, { lat: 25.0, lng: 100.0 }, { lat: 20.0, lng: 105.0 },
    { lat: 18.0, lng: 108.0 }, { lat: 22.0, lng: 115.0 }, { lat: 30.0, lng: 122.0 },
    { lat: 35.0, lng: 120.0 }
  ],
  locations: [
    {
      name: "洛阳",
      modernName: "河南洛阳",
      position: { lat: 34.62, lng: 112.45 },
      type: "capital",
      description: "西晋都城。此时洛阳富庶，但也充满奢侈腐败之风。",
      anecdote: "石崇王恺斗富发生于此。“洛阳纸贵”形容左思《三都赋》的受欢迎程度。"
    },
    {
      name: "长安",
      modernName: "陕西西安",
      position: { lat: 34.26, lng: 108.94 },
      type: "capital",
      description: "西晋末年晋愍帝的临时都城。",
      anecdote: "洛阳被匈奴攻破（永嘉之乱）后，晋愍帝在长安苟延残喘，最终投降前赵，西晋灭亡。"
    },
    {
      name: "成都",
      modernName: "四川成都",
      position: { lat: 30.66, lng: 104.06 },
      type: "cultural",
      description: "成汉政权（十六国之一）的建立地。",
      anecdote: "西晋末年流民入蜀，李特、李雄在此建立成汉，是十六国中最早建立的政权之一。"
    }
  ],
  states: [
    {
      name: "西晋",
      capital: "洛阳 -> 长安",
      position: { lat: 34.62, lng: 112.45 },
      startYear: "266",
      endYear: "316",
      monarchs: "武帝 司马炎 (266-290)\n惠帝 司马衷 (290-307)\n怀帝 司马炽 (307-313)\n愍帝 司马邺 (313-316)",
      fallReason: "八王之乱严重削弱国力，导致五胡乱华。",
      source: "《晋书》",
      description: "司马炎定都洛阳。永嘉之乱后，洛阳沦陷，晋愍帝在长安坚持了几年。"
    }
  ]
};