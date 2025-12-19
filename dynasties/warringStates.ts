import { DynastyData } from '../types';

export const warring_states: DynastyData = {
  summary: "三家分晋，七雄并立，变法图强，走向大一统。",
  territoryDescription: "秦、楚、齐、燕、赵、魏、韩七大国对峙。",
  center: { lat: 34.6, lng: 112.4 },
  zoom: 5,
  boundary: [
    { lat: 41.5, lng: 118.0 }, { lat: 40.0, lng: 124.0 }, { lat: 35.0, lng: 122.0 },
    { lat: 30.0, lng: 121.0 }, { lat: 28.0, lng: 112.0 }, { lat: 29.0, lng: 108.0 },
    { lat: 32.0, lng: 105.0 }, { lat: 36.0, lng: 106.0 }, { lat: 39.0, lng: 108.0 }
  ],
  locations: [
    {
      name: "咸阳",
      modernName: "陕西咸阳",
      position: { lat: 34.33, lng: 108.70 },
      type: "capital",
      description: "秦国最后的都城，也是后来秦帝国的首都。",
      anecdote: "秦孝公在此任用商鞅变法，使秦国国力大增，最终具备了兼并天下的实力。"
    },
    {
      name: "邯郸",
      modernName: "河北邯郸",
      position: { lat: 36.60, lng: 114.48 },
      type: "capital",
      description: "赵国都城。",
      anecdote: "“邯郸学步”典故发生地。赵武灵王在此推行“胡服骑射”。"
    },
    {
      name: "晋阳",
      modernName: "山西太原",
      position: { lat: 37.87, lng: 112.54 },
      type: "capital",
      description: "赵国早期都城。",
      anecdote: "三家分晋的关键战役“晋阳之战”发生于此，赵襄子坚守晋阳，联合韩魏水淹智伯。"
    },
    {
      name: "大梁",
      modernName: "河南开封",
      position: { lat: 34.79, lng: 114.30 },
      type: "capital",
      description: "魏国都城（魏惠王迁此）。即今开封。",
      anecdote: "魏国在此修筑水利工程。后被秦将王贲水淹大梁，魏国灭亡。此地后来成为北宋的都城汴京。"
    },
    {
      name: "安邑",
      modernName: "山西夏县",
      position: { lat: 35.14, lng: 111.22 },
      type: "capital",
      description: "魏国早期都城。",
      anecdote: "魏文侯在此任用李悝变法，吴起改革军制，使魏国成为战国初期的霸主。"
    },
    {
      name: "新郑",
      modernName: "河南新郑",
      position: { lat: 34.39, lng: 113.73 },
      type: "capital",
      description: "韩国都城。",
      anecdote: "韩国灭掉郑国后迁都于此。韩非子即为此地人。"
    },
    {
      name: "阳翟",
      modernName: "河南禹州",
      position: { lat: 34.15, lng: 113.47 },
      type: "capital",
      description: "韩国早期都城。",
      anecdote: "韩国开国君主韩景侯建都于此。吕不韦也曾在此经商。"
    },
    {
      name: "寿春",
      modernName: "安徽寿县",
      position: { lat: 32.58, lng: 116.78 },
      type: "capital",
      description: "楚国最后的都城。",
      anecdote: "楚国被秦军攻破郢都后，被迫多次迁徙，最终定都寿春，也是后来三国袁术称帝之地。"
    },
    {
      name: "临淄",
      modernName: "山东淄博",
      position: { lat: 36.80, lng: 118.30 },
      type: "trade",
      description: "齐国都城，战国时期最大的工商业城市。",
      anecdote: "“挥汗如雨，比肩继踵”，形容临淄人口稠密。稷下学宫在此汇聚天下英才。"
    },
     {
      name: "蓟",
      modernName: "北京",
      position: { lat: 39.90, lng: 116.40 },
      type: "capital",
      description: "燕国都城。",
      anecdote: "燕昭王在此筑黄金台，招贤纳士，任用乐毅改革，一度攻破齐国七十余城。"
    },
    {
      name: "灵寿",
      modernName: "河北平山",
      position: { lat: 38.25, lng: 114.20 },
      type: "capital",
      description: "中山国都城。",
      anecdote: "战国“第八雄”，由白狄建立，文化独特。后被赵武灵王所灭，出土了著名的《兆域图》。"
    }
  ],
  states: [
    {
      name: "秦国",
      capital: "栎阳 -> 咸阳",
      position: { lat: 34.33, lng: 108.70 },
      startYear: "前356",
      endYear: "前221",
      monarchs: "孝公(前361-前338)\n惠文王(前337-前311)\n武王(前310-前307)\n昭襄王(前306-前251)\n孝文王(前250)\n庄襄王(前249-前247)\n秦王政(前246-前221)",
      fallReason: "建立秦朝。",
      source: "《史记·秦本纪》",
      description: "孝公十二年迁都咸阳，以此为基地东出函谷关。"
    },
    {
      name: "楚国",
      capital: "郢 (荆州) -> 陈 (淮阳) -> 寿春 (寿县)",
      position: { lat: 32.58, lng: 116.78 },
      startYear: "前475",
      endYear: "前223",
      monarchs: "悼王(前401-前381)\n肃王\n宣王\n威王\n怀王(前328-前299)\n顷襄王\n考烈王\n幽王\n哀王\n负刍(前227-前223)",
      fallReason: "秦灭楚之战。",
      source: "《史记·楚世家》",
      description: "白起拔郢后，楚国被迫东迁，国力大衰。"
    },
    {
      name: "齐国 (田齐)",
      capital: "临淄",
      position: { lat: 36.8, lng: 118.3 },
      startYear: "前386",
      endYear: "前221",
      monarchs: "太公和(前386-前384)\n废公剡\n桓公午\n威王(前356-前320)\n宣王(前319-前301)\n湣王(前300-前284)\n襄王\n王建(前264-前221)",
      fallReason: "秦灭齐之战。",
      source: "《史记·田敬仲完世家》",
      description: "田氏取代姜氏，仍定都临淄。"
    },
    {
      name: "赵国",
      capital: "中牟 -> 邯郸",
      position: { lat: 36.6, lng: 114.5 },
      startYear: "前403",
      endYear: "前222",
      monarchs: "烈侯(前403-前387)\n武公\n敬侯\n成侯\n肃侯\n武灵王(前325-前299)\n惠文王(前298-前266)\n孝成王\n悼襄王\n幽缪王\n代王嘉",
      fallReason: "长平之战后衰落，被秦灭。",
      source: "《史记·赵世家》",
      description: "赵敬侯迁都邯郸，使其成为战国后期的军事重镇。"
    },
    {
      name: "魏国",
      capital: "安邑 -> 大梁 (开封)",
      position: { lat: 34.79, lng: 114.30 },
      startYear: "前403",
      endYear: "前225",
      monarchs: "文侯(前445-前396)\n武侯\n惠王(前369-前319)\n襄王\n昭王\n安厘王\n景湣王\n王假(前227-前225)",
      fallReason: "秦灭魏之战，水淹大梁。",
      source: "《史记·魏世家》",
      description: "魏惠王为了避开秦国锋芒并争霸中原，将都城从山西安邑迁至河南大梁。"
    },
    {
      name: "韩国",
      capital: "阳翟 -> 新郑",
      position: { lat: 34.4, lng: 113.7 },
      startYear: "前403",
      endYear: "前230",
      monarchs: "景侯(前408-前400)\n烈侯\n文侯\n哀侯\n懿侯\n昭侯(前362-前333)\n宣惠王\n襄王\n厘王\n桓惠王\n王安(前238-前230)",
      fallReason: "第一个被秦灭。",
      source: "《史记·韩世家》",
      description: "韩哀侯灭郑国后，迁都新郑。"
    },
    {
      name: "燕国",
      capital: "蓟 (北京)",
      position: { lat: 39.7, lng: 116.2 },
      startYear: "前475",
      endYear: "前222",
      monarchs: "...\n文公\n易王\n燕王哙\n昭王(前311-前279)\n惠王\n武成王\n孝王\n王喜(前254-前222)",
      fallReason: "荆轲刺秦失败，秦灭燕。",
      source: "《史记·燕召公世家》",
      description: "以蓟为中都，另有下都武阳。蓟城是今北京的前身。"
    },
    {
      name: "中山国",
      capital: "灵寿",
      position: { lat: 38.25, lng: 114.20 },
      startYear: "前414",
      endYear: "前296",
      monarchs: "文公\n武公\n桓公\n成公\n王(上suo下xin)",
      fallReason: "被赵武灵王所灭。",
      source: "《战国策》",
      description: "白狄建立的国家，处于赵国腹地，被视为心腹大患。"
    }
  ]
};