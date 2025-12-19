import { DynastyData } from '../types';

export const ming: DynastyData = {
  summary: "汉族复兴，郑和下西洋，天子守国门。",
  territoryDescription: "继承汉地十八省，控制东北，西南版图稳定。",
  center: { lat: 35.0, lng: 110.0 },
  zoom: 4,
  boundary: [
    { lat: 43.0, lng: 125.0 }, { lat: 41.0, lng: 120.0 }, { lat: 40.5, lng: 110.0 },
    { lat: 38.0, lng: 105.0 }, { lat: 35.0, lng: 98.0 }, { lat: 30.0, lng: 99.0 },
    { lat: 25.0, lng: 100.0 }, { lat: 22.0, lng: 105.0 }, { lat: 20.0, lng: 110.0 },
    { lat: 25.0, lng: 120.0 }, { lat: 35.0, lng: 122.0 }, { lat: 40.0, lng: 124.0 }
  ],
  locations: [
    {
      name: "北京 (顺天府)",
      modernName: "北京",
      position: { lat: 39.90, lng: 116.40 },
      type: "capital",
      description: "明成祖朱棣迁都后的京师。",
      anecdote: "朱棣以“天子守国门”之策迁都。大规模营建紫禁城、天坛，奠定了现代北京城的格局。"
    },
    {
      name: "南京 (应天府)",
      modernName: "江苏南京",
      position: { lat: 32.06, lng: 118.79 },
      type: "capital",
      description: "明朝初都，后为留都。",
      anecdote: "朱元璋在此定都，修建了世界最长的城墙。迁都北京后，南京保留了一套完整的六部机构，是明朝的副中心。"
    },
    {
      name: "凤阳 (中都)",
      modernName: "安徽凤阳",
      position: { lat: 32.86, lng: 117.56 },
      type: "capital",
      description: "朱元璋的家乡，明朝废都。",
      anecdote: "朱元璋原计划在此建都，工程浩大，后因耗费过甚且地势不佳而罢建，仅留遗址。"
    },
    {
      name: "兴都 (承天府)",
      modernName: "湖北钟祥",
      position: { lat: 31.16, lng: 112.58 },
      type: "capital",
      description: "明朝兴都，嘉靖皇帝的出生地。",
      anecdote: "嘉靖皇帝因“大礼议”尊生父为兴献帝，升钟祥为承天府，地位与顺天、应天并列，为明朝三大直辖行政区之一。"
    }
  ],
  states: [
    {
      name: "大明",
      capital: "南京 -> 北京",
      position: { lat: 32.06, lng: 118.79 },
      startYear: "1368",
      endYear: "1644",
      monarchs: "太祖 朱元璋 (1368-1398)\n惠宗 朱允炆 (1398-1402)\n成祖 朱棣 (1402-1424)\n仁宗 朱高炽 (1424-1425)\n宣宗 朱瞻基 (1425-1435)\n英宗 朱祁镇 (1435-1449, 1457-1464)\n代宗 朱祁钰 (1449-1457)\n宪宗 朱见深 (1464-1487)\n孝宗 朱祐樘 (1487-1505)\n武宗 朱厚照 (1505-1521)\n世宗 朱厚熜 (1521-1567)\n穆宗 朱载坖 (1567-1572)\n神宗 朱翊钧 (1572-1620)\n光宗 朱常洛 (1620)\n熹宗 朱由校 (1620-1627)\n思宗(崇祯) 朱由检 (1627-1644)",
      fallReason: "李自成起义，清兵入关。",
      source: "《明史》",
      description: "太祖定都南京。成祖发动靖难之役后，迁都北京，南京作为留都。"
    },
    {
      name: "大顺",
      capital: "西安 -> 北京",
      position: { lat: 34.26, lng: 108.94 },
      startYear: "1644",
      endYear: "1645",
      monarchs: "李自成 (1644-1645)",
      fallReason: "一片石战役兵败。",
      source: "《明史》",
      description: "李自成在西安称帝，建国号大顺，攻入北京后短暂定都，旋即撤出。"
    },
    {
      name: "北元",
      capital: "和林",
      position: { lat: 47.19, lng: 102.85 },
      startYear: "1368",
      endYear: "1635",
      monarchs: "惠宗 妥懽帖睦尔\n昭宗 爱犹识理达腊\n天元帝 脱古思帖木儿\n... (后为鞑靼、瓦剌)",
      fallReason: "被后金征服。",
      source: "《明史·鞑靼传》",
      description: "退回草原的蒙古政权，初期定都和林，后迁徙不定。"
    }
  ]
};