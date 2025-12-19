import { DynastyData } from '../types';

export const yuan: DynastyData = {
  summary: "疆域空前辽阔，行省制度的确立。",
  territoryDescription: "地跨欧亚，北至北冰洋，南至南海，包括今西藏。",
  center: { lat: 45.0, lng: 105.0 },
  zoom: 3,
  boundary: [
    { lat: 60.0, lng: 135.0 }, { lat: 62.0, lng: 110.0 }, { lat: 55.0, lng: 80.0 },
    { lat: 48.0, lng: 70.0 }, { lat: 35.0, lng: 75.0 }, { lat: 30.0, lng: 85.0 },
    { lat: 22.0, lng: 100.0 }, { lat: 20.0, lng: 110.0 }, { lat: 23.0, lng: 118.0 },
    { lat: 30.0, lng: 122.0 }, { lat: 40.0, lng: 132.0 }, { lat: 50.0, lng: 140.0 }
  ],
  locations: [
     {
      name: "元大都 (北京)",
      modernName: "北京",
      position: { lat: 39.90, lng: 116.40 },
      type: "capital",
      description: "元朝冬都（首都），俗称“汗八里”。",
      anecdote: "忽必烈采纳刘秉忠建议，在金中都东北营建新城。中轴线布局奠定了今日北京城的雏形。马可波罗盛赞其宏大。"
    },
     {
      name: "元上都",
      modernName: "内蒙古正蓝旗",
      position: { lat: 42.36, lng: 116.18 },
      type: "capital",
      description: "元朝夏都（陪都）。",
      anecdote: "元朝实行两都巡幸制，皇帝每年四月至八月在草原上的上都避暑办公，形成了独特的“草原本位”与“汉地本位”结合的政治特色。"
    },
    {
      name: "哈拉和林",
      modernName: "蒙古国",
      position: { lat: 47.19, lng: 102.85 },
      type: "capital",
      description: "蒙古帝国旧都，岭北行省治所。",
      anecdote: "忽必烈迁都大都后，这里依然是蒙古高原的中心，但地位有所下降。"
    }
  ],
  states: [
    {
      name: "大元",
      capital: "大都 (北京) / 上都",
      position: { lat: 39.90, lng: 116.40 },
      startYear: "1271",
      endYear: "1368",
      monarchs: "世祖 忽必烈 (1260-1294)\n成宗 铁穆耳 (1294-1307)\n武宗 海山 (1307-1311)\n仁宗 爱育黎拔力八达 (1311-1320)\n英宗 硕德八刺 (1320-1323)\n泰定帝 也孙铁木儿 (1323-1328)\n天顺帝 阿速吉八 (1328)\n文宗 图帖睦尔 (1328-1329, 1329-1332)\n明宗 和世琜 (1329)\n宁宗 懿璘质班 (1332)\n惠宗(顺帝) 妥懽帖睦尔 (1333-1368)",
      fallReason: "红巾军起义，明朝建立。",
      source: "《元史》",
      description: "忽必烈定都大都，实行两都制（大都、上都）。"
    }
  ]
};