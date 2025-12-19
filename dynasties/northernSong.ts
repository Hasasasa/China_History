import { DynastyData } from '../types';

export const northern_song: DynastyData = {
  summary: "结束五代十国分裂，经济文化高度繁荣，但军事上长期面对辽夏威胁。",
  territoryDescription: "统一中原，北至大名府，西至秦陇，与辽、西夏对峙。",
  center: { lat: 35.0, lng: 114.0 },
  zoom: 4,
  boundary: [
    { lat: 39.0, lng: 115.8 }, { lat: 38.5, lng: 110.5 }, { lat: 37.0, lng: 109.0 },
    { lat: 36.5, lng: 104.0 }, { lat: 34.0, lng: 105.0 }, { lat: 30.5, lng: 103.0 },
    { lat: 25.0, lng: 104.0 }, { lat: 22.0, lng: 108.0 }, { lat: 23.0, lng: 116.0 },
    { lat: 30.0, lng: 122.0 }, { lat: 35.0, lng: 119.5 }
  ],
  locations: [
    {
      name: "汴京 (开封)",
      modernName: "河南开封",
      position: { lat: 34.79, lng: 114.30 },
      type: "capital",
      description: "北宋都城（东京）。当时世界第一大城市，人口过百万。",
      anecdote: "《清明上河图》描绘了这里的繁华景象。打破了坊市界限，夜市通宵达旦。是“五代”以来政治中心的延续。"
    },
    {
      name: "洛阳 (西京)",
      modernName: "河南洛阳",
      position: { lat: 34.62, lng: 112.45 },
      type: "capital",
      description: "北宋西京。文化中心，理学发源地。",
      anecdote: "司马光等保守派在王安石变法期间退居洛阳，著书立说，形成了“洛党”。"
    },
    {
      name: "大名府 (北京)",
      modernName: "河北大名",
      position: { lat: 36.28, lng: 115.15 },
      type: "capital",
      description: "北宋四京之一（北京）。",
      anecdote: "为防备契丹南下，宋仁宗时期升大名府为北京，作为军事重镇。水浒传中卢俊义即为此地首富。"
    },
    {
      name: "商丘 (南京)",
      modernName: "河南商丘",
      position: { lat: 34.38, lng: 115.65 },
      type: "capital",
      description: "北宋四京之一（南京，应天府）。",
      anecdote: "赵匡胤发迹之地（宋州）。靖康之变后，赵构在此登基建立南宋。"
    },
    {
      name: "上京临潢府",
      modernName: "内蒙古巴林左旗",
      position: { lat: 44.20, lng: 118.88 },
      type: "capital",
      description: "辽国首都（五京之首）。",
      anecdote: "契丹族的发源地。耶律阿保机在此建国。城内分为皇城和汉城，体现了“因俗而治”的政策。"
    },
    {
      name: "南京析津府",
      modernName: "北京",
      position: { lat: 39.90, lng: 116.40 },
      type: "capital",
      description: "辽国南京（燕京）。",
      anecdote: "辽国获得幽云十六州后，升幽州为南京析津府，是辽国统治汉地的中心，也是北京作为陪都的开始。"
    },
    {
      name: "西京大同府",
      modernName: "山西大同",
      position: { lat: 40.09, lng: 113.30 },
      type: "capital",
      description: "辽国西京。",
      anecdote: "辽国在此驻重兵以防备西夏和北宋。"
    },
    {
      name: "兴庆府",
      modernName: "宁夏银川",
      position: { lat: 38.47, lng: 106.27 },
      type: "capital",
      description: "西夏国都。",
      anecdote: "李元昊在此称帝建国。城市布局仿照长安和汴梁，十分宏伟。"
    },
    {
      name: "西平府",
      modernName: "宁夏灵武",
      position: { lat: 38.10, lng: 106.29 },
      type: "capital",
      description: "西夏早期都城。",
      anecdote: "李元昊在此即位称帝，改灵州为西平府，后迁都兴庆府。"
    }
  ],
  states: [
    {
      name: "北宋",
      capital: "汴京 (开封)",
      position: { lat: 34.79, lng: 114.30 },
      startYear: "960",
      endYear: "1127",
      monarchs: "太祖 赵匡胤 (960-976)\n太宗 赵光义 (976-997)\n真宗 赵恒 (997-1022)\n仁宗 赵祯 (1022-1063)\n英宗 赵曙 (1063-1067)\n神宗 赵顼 (1067-1085)\n哲宗 赵煦 (1085-1100)\n徽宗 赵佶 (1100-1126)\n钦宗 赵桓 (1126-1127)",
      fallReason: "靖康之耻，金灭北宋。",
      source: "《宋史》",
      description: "定都汴京，设四京（东京开封、西京洛阳、南京商丘、北京大名）。"
    },
    {
      name: "大辽",
      capital: "上京 (巴林左旗)",
      position: { lat: 44.20, lng: 118.88 },
      startYear: "916",
      endYear: "1125",
      monarchs: "太祖 耶律阿保机 (916-926)\n太宗 耶律德光 (927-947)\n世宗 耶律阮 (947-951)\n穆宗 耶律璟 (951-969)\n景宗 耶律贤 (969-982)\n圣宗 耶律隆绪 (982-1031)\n兴宗 耶律宗真 (1031-1055)\n道宗 耶律洪基 (1055-1101)\n天祚帝 耶律延禧 (1101-1125)",
      fallReason: "被金国所灭。",
      source: "《辽史》",
      description: "实行五京制：上京临潢府（巴林左旗）、中京大定府（宁城）、东京辽阳府（辽阳）、南京析津府（北京）、西京大同府（大同）。"
    },
    {
      name: "西夏",
      capital: "兴庆府 (银川)",
      position: { lat: 38.47, lng: 106.27 },
      startYear: "1038",
      endYear: "1227",
      monarchs: "景宗 李元昊 (1038-1048)\n毅宗 李谅祚 (1048-1067)\n惠宗 李秉常 (1067-1086)\n崇宗 李乾顺 (1086-1139)\n仁宗 李仁孝 (1139-1193)\n桓宗 李纯佑 (1193-1206)\n襄宗 李安全 (1206-1211)\n神宗 李遵顼 (1211-1223)\n献宗 李德旺 (1223-1226)\n末主 李睍 (1226-1227)",
      fallReason: "被蒙古成吉思汗所灭。",
      source: "《宋史·夏国传》",
      description: "定都兴庆府，曾短暂迁都西平府。"
    },
    {
      name: "大理",
      capital: "大理 (羊苴咩城)",
      position: { lat: 25.60, lng: 100.26 },
      startYear: "937",
      endYear: "1253",
      monarchs: "太祖 段思平 (937-944)\n... \n宣宗 段智兴 (1172-1200)\n... \n兴智 (1251-1253)",
      fallReason: "被蒙古忽必烈所灭。",
      source: "《南诏野史》",
      description: "一直定都大理。"
    }
  ]
};