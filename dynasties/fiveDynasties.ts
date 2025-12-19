import { DynastyData } from '../types';

export const five_dynasties: DynastyData = {
  summary: "唐宋之间的大分裂时期，中原五朝更迭，周边十国割据。",
  territoryDescription: "北方中原变动频繁，南方相对安定。",
  center: { lat: 33.0, lng: 114.0 },
  zoom: 5,
  boundary: [
    { lat: 40.0, lng: 116.0 }, { lat: 38.0, lng: 112.0 }, { lat: 35.0, lng: 108.0 },
    { lat: 32.0, lng: 105.0 }, { lat: 25.0, lng: 105.0 }, { lat: 22.0, lng: 110.0 },
    { lat: 25.0, lng: 118.0 }, { lat: 30.0, lng: 122.0 }, { lat: 35.0, lng: 119.0 }
  ],
  locations: [
     {
      name: "开封 (汴梁)",
      modernName: "河南开封",
      position: { lat: 34.79, lng: 114.30 },
      type: "capital",
      description: "后梁、后晋、后汉、后周的都城。",
      anecdote: "五代时期，开封因水运便利取代了长安、洛阳的地位，成为中原的新政治中心，为北宋定都于此奠定了基础。"
    },
    {
      name: "洛阳",
      modernName: "河南洛阳",
      position: { lat: 34.62, lng: 112.45 },
      type: "capital",
      description: "后唐都城。",
      anecdote: "李存勖灭梁后，定都洛阳，试图恢复大唐旧制。但洛阳已不复盛唐景象。"
    },
    {
      name: "成都",
      modernName: "四川成都",
      position: { lat: 30.66, lng: 104.06 },
      type: "capital",
      description: "前蜀、后蜀都城。",
      anecdote: "蜀地未经战乱，经济繁荣。花蕊夫人“十四万人齐解甲，更无一个是男儿”即写于后蜀亡国之时。"
    },
    {
      name: "江宁 (金陵)",
      modernName: "江苏南京",
      position: { lat: 32.06, lng: 118.79 },
      type: "capital",
      description: "南唐都城（当时称江宁府）。",
      anecdote: "南唐中主、后主在此崇文抑武，词坛盛极一时。李煜在此写下无数千古绝唱。"
    },
    {
      name: "幽州",
      modernName: "北京",
      position: { lat: 39.90, lng: 116.40 },
      type: "battle",
      description: "幽云十六州中心，也是辽国的南京。",
      anecdote: "石敬瑭割让幽云十六州给契丹，导致中原失去北方屏障长达四百年。"
    },
    {
      name: "长沙",
      modernName: "湖南长沙",
      position: { lat: 28.23, lng: 112.93 },
      type: "capital",
      description: "南楚（马楚）都城。",
      anecdote: "马殷在长沙建国，奖励农桑，发展茶叶贸易，使湖南地区经济得到开发。"
    },
    {
      name: "长乐 (福州)",
      modernName: "福建福州",
      position: { lat: 26.08, lng: 119.30 },
      type: "capital",
      description: "闽国都城。",
      anecdote: "王审知“宁为开门节度使，不作闭门天子”，保境安民。闽国后期内乱频繁。"
    },
    {
      name: "江陵",
      modernName: "湖北荆州",
      position: { lat: 30.33, lng: 112.23 },
      type: "capital",
      description: "南平（荆南）都城。",
      anecdote: "地处交通要道，高季兴割据于此，依附于周边强国，被戏称为“高赖子”。"
    },
    {
      name: "杭州",
      modernName: "浙江杭州",
      position: { lat: 30.27, lng: 120.15 },
      type: "capital",
      description: "吴越国都城（西府）。",
      anecdote: "钱镠保境安民，善事大国，大力修筑钱塘江海塘，使杭州成为“东南第一州”。"
    },
    {
      name: "兴王府 (广州)",
      modernName: "广东广州",
      position: { lat: 23.13, lng: 113.26 },
      type: "capital",
      description: "南汉都城。",
      anecdote: "利用海外贸易致富，宫殿极其奢华。刘鋹宠信宦官，规定大臣必须自宫才能被重用。"
    },
    {
      name: "广陵 (扬州)",
      modernName: "江苏扬州",
      position: { lat: 32.39, lng: 119.41 },
      type: "capital",
      description: "南唐前身吴国都城。",
      anecdote: "杨行密在此建立吴国，奠定了后来南唐的版图基础。"
    }
  ],
  states: [
    {
      name: "后梁",
      capital: "开封 (东都) -> 洛阳 (西都)",
      position: { lat: 34.79, lng: 114.30 },
      startYear: "907",
      endYear: "923",
      monarchs: "太祖 朱温 (907-912)\n末帝 朱友贞 (913-923)",
      fallReason: "被后唐所灭。",
      source: "《旧五代史》",
      description: "朱温起家于宣武节度使（驻汴州/开封），故以开封为都。末帝时迁都洛阳。"
    },
     {
      name: "后唐",
      capital: "洛阳",
      position: { lat: 34.62, lng: 112.45 },
      startYear: "923",
      endYear: "936",
      monarchs: "庄宗 李存勖 (923-926)\n明宗 李嗣源 (926-933)\n闵帝 李从厚 (933-934)\n末帝 李从珂 (934-936)",
      fallReason: "石敬瑭勾结契丹灭后唐。",
      source: "《旧五代史》",
      description: "自称唐朝合法继承者，故定都唐朝故都洛阳。"
    },
    {
      name: "后晋",
      capital: "洛阳 -> 开封",
      position: { lat: 34.9, lng: 114.4 },
      startYear: "936",
      endYear: "947",
      monarchs: "高祖 石敬瑭 (936-942)\n出帝 石重贵 (942-947)",
      fallReason: "被契丹所灭。",
      source: "《旧五代史》",
      description: "石敬瑭初都洛阳，后迁回开封。割让幽云十六州。"
    },
     {
      name: "后汉",
      capital: "开封",
      position: { lat: 34.7, lng: 114.2 },
      startYear: "947",
      endYear: "950",
      monarchs: "高祖 刘知远 (947-948)\n隐帝 刘承祐 (948-950)",
      fallReason: "郭威兵变。",
      source: "《旧五代史》",
      description: "刘知远在太原称帝，随后进入开封定都。"
    },
    {
      name: "后周",
      capital: "开封",
      position: { lat: 34.79, lng: 114.30 },
      startYear: "951",
      endYear: "960",
      monarchs: "太祖 郭威 (951-954)\n世宗 柴荣 (954-959)\n恭帝 柴宗训 (959-960)",
      fallReason: "赵匡胤陈桥兵变。",
      source: "《旧五代史》",
      description: "柴荣扩建开封城，为北宋都城规模奠定基础。"
    },
    {
      name: "南唐",
      capital: "江宁 (南京)",
      position: { lat: 32.06, lng: 118.79 },
      startYear: "937",
      endYear: "975",
      monarchs: "烈祖 李昪 (937-943)\n元宗 李璟 (943-961)\n后主 李煜 (961-975)",
      fallReason: "被北宋所灭。",
      source: "《新五代史》",
      description: "以金陵（南京）为都，曾短暂迁都南昌。"
    },
    {
      name: "吴越",
      capital: "杭州",
      position: { lat: 30.27, lng: 120.15 },
      startYear: "907",
      endYear: "978",
      monarchs: "太祖 钱镠 (907-932)\n世宗 钱元瓘 (932-941)\n成宗 钱弘佐 (941-947)\n忠逊王 钱弘倧 (947)\n忠伊王 钱弘俶 (948-978)",
      fallReason: "纳土归宋。",
      source: "《新五代史》",
      description: "定都杭州（西府），大力兴修水利，扩建杭州城。"
    },
    {
      name: "后蜀",
      capital: "成都",
      position: { lat: 30.66, lng: 104.06 },
      startYear: "934",
      endYear: "965",
      monarchs: "高祖 孟知祥 (934)\n后主 孟昶 (934-965)",
      fallReason: "被北宋所灭。",
      source: "《新五代史》",
      description: "定都成都。孟昶在城墙上遍植芙蓉，成都因此别称“蓉城”。"
    },
    {
      name: "南汉",
      capital: "兴王府 (广州)",
      position: { lat: 23.13, lng: 113.26 },
      startYear: "917",
      endYear: "971",
      monarchs: "高祖 刘龑 (917-942)\n殇帝 刘玢 (942-943)\n中宗 刘晟 (943-958)\n后主 刘鋹 (958-971)",
      fallReason: "被北宋所灭。",
      source: "《新五代史》",
      description: "定都广州，称兴王府。利用海外贸易致富。"
    },
    {
      name: "杨吴",
      capital: "广陵 (扬州)",
      position: { lat: 32.39, lng: 119.41 },
      startYear: "902",
      endYear: "937",
      monarchs: "太祖 杨行密 (902-905)\n烈宗 杨渥 (905-908)\n高祖 杨隆演 (908-920)\n睿帝 杨溥 (920-937)",
      fallReason: "徐知诰篡位建南唐。",
      source: "《新五代史》",
      description: "杨行密建立，是南唐的前身，为江南经济发展奠定了基础。"
    },
    {
      name: "闽",
      capital: "长乐 (福州)",
      position: { lat: 26.08, lng: 119.30 },
      startYear: "909",
      endYear: "945",
      monarchs: "太祖 王审知 (909-925)\n嗣王 王延翰 (925-926)\n惠宗 王延钧 (926-935)\n康宗 王继鹏 (935-939)\n景宗 王延羲 (939-944)\n天德帝 王延政 (943-945)",
      fallReason: "被南唐所灭。",
      source: "《新五代史》",
      description: "王审知治闽，保境安民，开发福建。"
    },
    {
      name: "南楚",
      capital: "长沙",
      position: { lat: 28.23, lng: 112.93 },
      startYear: "907",
      endYear: "951",
      monarchs: "武穆王 马殷 (907-930)\n衡阳王 马希声 (930-932)\n文昭王 马希范 (932-947)\n废王 马希广\n恭孝王 马希鄂\n后主 马希崇",
      fallReason: "被南唐所灭。",
      source: "《新五代史》",
      description: "马殷采取“上奉天子、下抚士民”的策略，使湖南地区经济得到发展。"
    },
    {
      name: "荆南 (南平)",
      capital: "江陵 (荆州)",
      position: { lat: 30.33, lng: 112.23 },
      startYear: "924",
      endYear: "963",
      monarchs: "武信王 高季兴 (924-928)\n文献王 高从诲 (928-948)\n贞懿王 高保融 (948-960)\n贞安王 高保B\n德仁王 高继冲",
      fallReason: "纳土归宋。",
      source: "《新五代史》",
      description: "地处交通要道，国小力弱，依附于周边强国，被戏称为“高赖子”。"
    }
  ]
};