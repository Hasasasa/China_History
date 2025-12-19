import { DynastyData } from '../types';

export const nan_bei_chao: DynastyData = {
  summary: "南北对峙，民族大融合。北朝胡汉融合，南朝经济文化继续发展。",
  territoryDescription: "中国分为南北两部分。南朝以建康为中心，北朝以平城/洛阳为中心。",
  center: { lat: 33.0, lng: 114.0 },
  zoom: 4,
  boundary: [
    { lat: 41.0, lng: 113.0 }, { lat: 40.0, lng: 120.0 }, { lat: 34.0, lng: 121.0 },
    { lat: 30.0, lng: 122.0 }, { lat: 25.0, lng: 115.0 }, { lat: 22.0, lng: 110.0 },
    { lat: 25.0, lng: 105.0 }, { lat: 30.0, lng: 100.0 }, { lat: 35.0, lng: 100.0 },
    { lat: 40.0, lng: 105.0 }
  ],
  locations: [
    {
      name: "盛乐",
      modernName: "内蒙古和林格尔",
      position: { lat: 40.38, lng: 111.82 },
      type: "capital",
      description: "代国及北魏早期都城。",
      anecdote: "拓跋珪在此复国建立北魏，后迁都平城。"
    },
    {
      name: "平城",
      modernName: "山西大同",
      position: { lat: 40.09, lng: 113.30 },
      type: "capital",
      description: "北魏早期都城（近百年）。",
      anecdote: "开凿云冈石窟，气势宏大，是中国佛教艺术的宝库，见证了鲜卑族的汉化历程。崔浩因修国史在此被杀。"
    },
    {
      name: "洛阳",
      modernName: "河南洛阳",
      position: { lat: 34.62, lng: 112.45 },
      type: "capital",
      description: "北魏迁都后的都城。",
      anecdote: "孝文帝借南伐之名迁都洛阳，全面推行汉化。杨衒之《洛阳伽蓝记》记录了此地佛寺林立的盛况。"
    },
    {
      name: "邺城",
      modernName: "河北邯郸临漳",
      position: { lat: 36.32, lng: 114.45 },
      type: "capital",
      description: "东魏、北齐的都城。",
      anecdote: "高欢将洛阳居民强迁至邺城。北齐时期邺城极度繁华，是北方的中心。"
    },
    {
      name: "长安",
      modernName: "陕西西安",
      position: { lat: 34.26, lng: 108.94 },
      type: "capital",
      description: "西魏、北周的都城。",
      anecdote: "宇文泰据关中，立西魏，定都长安，创立府兵制，为后来隋唐统一奠定了基础。"
    },
    {
      name: "建康",
      modernName: "江苏南京",
      position: { lat: 32.06, lng: 118.79 },
      type: "capital",
      description: "南朝四代（宋齐梁陈）的共同都城。",
      anecdote: "梁武帝萧衍在此四次舍身同泰寺出家，“南朝四百八十寺，多少楼台烟雨中”。侯景之乱使建康遭严重破坏。"
    },
    {
      name: "晋阳",
      modernName: "山西太原",
      position: { lat: 37.87, lng: 112.54 },
      type: "capital",
      description: "北齐别都。",
      anecdote: "高欢及其子孙常驻于此，称“霸府”。晋阳是北齐的军事根本之地，地位不亚于首都邺城。"
    }
  ],
  states: [
    {
      name: "北魏",
      capital: "盛乐 -> 平城 -> 洛阳",
      position: { lat: 40.09, lng: 113.30 },
      startYear: "386",
      endYear: "534",
      monarchs: "道武帝 拓跋珪 (386-409)\n明元帝 拓跋嗣 (409-423)\n太武帝 拓跋焘 (423-452)\n文成帝 拓跋濬 (452-465)\n献文帝 拓跋弘 (465-471)\n孝文帝 元宏 (471-499)\n宣武帝 元恪 (499-515)\n孝明帝 元诩 (515-528)\n孝庄帝 元子攸 (528-530)\n节闵帝 元恭 (531-532)\n孝武帝 元修 (532-534)",
      fallReason: "分裂为东魏和西魏。",
      source: "《魏书》",
      description: "拓跋珪定都平城，统一北方。孝文帝迁都洛阳，推行深度汉化。"
    },
    {
      name: "南朝 (宋)",
      capital: "建康",
      position: { lat: 32.06, lng: 118.79 },
      startYear: "420",
      endYear: "479",
      monarchs: "武帝 刘裕 (420-422)\n少帝 刘义符 (422-424)\n文帝 刘义隆 (424-453)\n孝武帝 刘骏 (453-464)\n前废帝 刘子业 (464-465)\n明帝 刘彧 (465-472)\n后废帝 刘昱 (472-477)\n顺帝 刘准 (477-479)",
      fallReason: "萧道成篡位建齐。",
      source: "《宋书》",
      description: "南朝疆域最大的政权。一直定都建康。"
    },
    {
      name: "南朝 (齐)",
      capital: "建康",
      position: { lat: 32.06, lng: 118.79 },
      startYear: "479",
      endYear: "502",
      monarchs: "高帝 萧道成 (479-482)\n武帝 萧赜 (482-493)\n郁林王 萧昭业 (493-494)\n海陵王 萧昭文 (494)\n明帝 萧鸾 (494-498)\n东昏侯 萧宝卷 (499-501)\n和帝 萧宝融 (501-502)",
      fallReason: "萧衍篡位建梁。",
      source: "《南齐书》",
      description: "南朝第二朝，定都建康。"
    },
    {
      name: "南朝 (梁)",
      capital: "建康 -> 江陵",
      position: { lat: 32.06, lng: 118.79 },
      startYear: "502",
      endYear: "557",
      monarchs: "武帝 萧衍 (502-549)\n简文帝 萧纲 (549-551)\n元帝 萧绎 (552-554)\n敬帝 萧方智 (555-557)",
      fallReason: "陈霸先篡位建陈。",
      source: "《梁书》",
      description: "萧衍定都建康。侯景之乱后，梁元帝在江陵（荆州）即位，后被西魏攻破。"
    },
    {
      name: "南朝 (陈)",
      capital: "建康",
      position: { lat: 32.06, lng: 118.79 },
      startYear: "557",
      endYear: "589",
      monarchs: "武帝 陈霸先 (557-559)\n文帝 陈蒨 (559-566)\n废帝 陈伯宗 (566-568)\n宣帝 陈顼 (569-582)\n后主 陈叔宝 (582-589)",
      fallReason: "被隋朝统一。",
      source: "《陈书》",
      description: "南朝最后一个朝代，疆域最小，仍定都建康。"
    },
    {
      name: "东魏",
      capital: "邺城",
      position: { lat: 36.32, lng: 114.45 },
      startYear: "534",
      endYear: "550",
      monarchs: "孝静帝 元善见 (534-550)",
      fallReason: "高洋篡位建北齐。",
      source: "《魏书》",
      description: "高欢拥立元善见为帝，迁都邺城，史称东魏。"
    },
    {
      name: "西魏",
      capital: "长安",
      position: { lat: 34.26, lng: 108.94 },
      startYear: "535",
      endYear: "556",
      monarchs: "文帝 元宝炬 (535-551)\n废帝 元钦 (551-554)\n恭帝 拓跋廓 (554-556)",
      fallReason: "宇文觉篡位建北周。",
      source: "《北史》",
      description: "宇文泰拥立元宝炬为帝，定都长安，史称西魏。"
    },
    {
      name: "北齐",
      capital: "邺城",
      position: { lat: 36.32, lng: 114.45 },
      startYear: "550",
      endYear: "577",
      monarchs: "文宣帝 高洋 (550-559)\n废帝 高殷 (559-560)\n孝昭帝 高演 (560-561)\n武成帝 高湛 (561-565)\n后主 高纬 (565-577)\n幼主 高恒 (577)",
      fallReason: "被北周所灭。",
      source: "《北齐书》",
      description: "高欢之子高洋代东魏称帝。以邺为都，晋阳为陪都（霸府）。"
    },
    {
      name: "北周",
      capital: "长安",
      position: { lat: 34.26, lng: 108.94 },
      startYear: "557",
      endYear: "581",
      monarchs: "孝闵帝 宇文觉 (557)\n明帝 宇文毓 (557-560)\n武帝 宇文邕 (560-578)\n宣帝 宇文赟 (578-579)\n静帝 宇文阐 (579-581)",
      fallReason: "杨坚篡位建隋。",
      source: "《周书》",
      description: "宇文护废西魏恭帝，立宇文觉。武帝宇文邕灭北齐，统一北方。"
    }
  ]
};