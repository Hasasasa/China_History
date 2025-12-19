import { DynastyData } from '../types';

export const western_han: DynastyData = {
  summary: "西汉盛世，丝绸之路开通，独尊儒术。",
  territoryDescription: "疆域大幅扩张，西域都护府设立，版图直抵中亚。",
  center: { lat: 36.0, lng: 100.0 },
  zoom: 4,
  boundary: [
    { lat: 40.0, lng: 125.0 }, { lat: 41.5, lng: 115.0 }, { lat: 42.0, lng: 100.0 },
    { lat: 42.0, lng: 90.0 }, { lat: 40.5, lng: 75.0 }, { lat: 37.0, lng: 74.0 },
    { lat: 35.0, lng: 80.0 }, { lat: 36.0, lng: 95.0 }, { lat: 30.0, lng: 100.0 },
    { lat: 25.0, lng: 100.0 }, { lat: 20.0, lng: 105.0 }, { lat: 18.0, lng: 108.0 },
    { lat: 22.0, lng: 115.0 }, { lat: 30.0, lng: 122.0 }, { lat: 35.0, lng: 120.0 }
  ],
  locations: [
    {
      name: "长安",
      modernName: "陕西西安",
      position: { lat: 34.26, lng: 108.94 },
      type: "capital",
      description: "西汉都城。中国历史上第一座国际化大都市。",
      anecdote: "汉高祖刘邦采纳娄敬建议定都关中。萧何营建未央宫，壮丽无比。长安城设东、西九市，繁华异常。前身是秦咸阳附近，后为隋唐长安城奠基。"
    },
     {
      name: "洛阳",
      modernName: "河南洛阳",
      position: { lat: 34.62, lng: 112.45 },
      type: "capital",
      description: "西汉的东都（陪都）。",
      anecdote: "刘邦初都洛阳，后迁长安。整个西汉时期，洛阳一直作为关东最重要的重镇和陪都存在。"
    },
    {
      name: "玉门关",
      modernName: "甘肃敦煌",
      position: { lat: 40.35, lng: 93.86 },
      type: "trade",
      description: "丝绸之路的重要关隘。",
      anecdote: "张骞出使西域，开辟丝绸之路，葡萄、胡萝卜、汗血马从此传入中原。"
    },
    {
      name: "茂陵",
      modernName: "陕西兴平",
      position: { lat: 34.33, lng: 108.56 },
      type: "cultural",
      description: "汉武帝陵墓。",
      anecdote: "霍去病墓旁石刻有“马踏匈奴”，象征汉朝对抗匈奴的辉煌胜利。"
    }
  ],
  states: [
    {
      name: "西汉",
      capital: "洛阳 -> 长安",
      position: { lat: 34.26, lng: 108.94 },
      startYear: "前206",
      endYear: "8",
      monarchs: "高祖 刘邦 (前202-前195)\n惠帝 刘盈 (前195-前188)\n前少帝 (前188-前184)\n后少帝 (前184-前180)\n文帝 刘恒 (前180-前157)\n景帝 刘启 (前157-前141)\n武帝 刘彻 (前141-前87)\n昭帝 刘弗陵 (前87-前74)\n宣帝 刘询 (前74-前49)\n元帝 刘奭 (前49-前33)\n成帝 刘骜 (前33-前7)\n哀帝 刘欣 (前7-前1)\n平帝 刘衎 (前1-6)\n孺子婴 (6-8)",
      fallReason: "王莽篡汉，建立新朝。",
      source: "《汉书》",
      description: "刘邦最初定都洛阳，后迁都长安，以此为永久都城直至王莽篡位。"
    }
  ]
};