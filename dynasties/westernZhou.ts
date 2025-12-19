import { DynastyData } from '../types';

export const western_zhou: DynastyData = {
  summary: "分封制与宗法制的鼎盛时期，礼乐文明的奠基。",
  territoryDescription: "疆域西起关中，东至黄海，北至燕山，南跨长江。",
  center: { lat: 34.5, lng: 112.0 },
  zoom: 5,
  boundary: [
    { lat: 35.0, lng: 106.0 }, { lat: 37.0, lng: 106.0 }, { lat: 39.5, lng: 110.0 },
    { lat: 40.5, lng: 116.0 }, { lat: 37.5, lng: 118.0 }, { lat: 37.0, lng: 122.0 },
    { lat: 33.0, lng: 121.0 }, { lat: 31.0, lng: 119.0 }, { lat: 29.5, lng: 115.0 },
    { lat: 30.5, lng: 108.0 }, { lat: 32.5, lng: 104.0 }, { lat: 34.0, lng: 105.0 }
  ],
  locations: [
    {
      name: "镐京 (宗周)",
      modernName: "陕西西安",
      position: { lat: 34.20, lng: 108.80 },
      type: "capital",
      description: "西周的政治中心，天子所在。后世演变为汉唐的长安。",
      anecdote: "这里是“周礼”的诞生地。周武王灭商后定都于此。后因周幽王烽火戏诸侯，被犬戎攻破而废弃。"
    },
    {
      name: "洛邑 (成周)",
      modernName: "河南洛阳",
      position: { lat: 34.66, lng: 112.45 },
      type: "capital",
      description: "周公营建的东都，主要用于镇抚东方诸侯和顽固的殷商遗民。",
      anecdote: "这里是著名的“九鼎”安放之地，象征王权。后成为东周的正式都城，也是后来汉、魏、晋、唐等多朝古都。"
    },
    {
      name: "岐山 (周原)",
      modernName: "陕西岐山",
      position: { lat: 34.44, lng: 107.62 },
      type: "cultural",
      description: "周人的发祥地，早期的政治中心。",
      anecdote: "古公父迁岐，周文王在此礼贤下士，请姜子牙出山，是周王朝的龙兴之地。"
    },
    {
      name: "骊山",
      modernName: "陕西临潼",
      position: { lat: 34.36, lng: 109.21 },
      type: "battle",
      description: "西周灭亡的见证地。",
      anecdote: "周幽王烽火戏诸侯，博褒姒一笑，致使犬戎攻破镐京时无兵来援。"
    }
  ],
  states: [
    {
      name: "周王室",
      capital: "镐京 (西安) -> 洛邑 (洛阳)",
      position: { lat: 34.20, lng: 108.80 },
      startYear: "前1046",
      endYear: "前771",
      monarchs: "武王 发 (前1046-前1043)\n成王 诵 (前1042-前1021)\n康王 钊 (前1020-前996)\n昭王 瑕 (前995-前977)\n穆王 满 (前976-前922)\n共王 繄扈 (前922-前900)\n懿王 囏 (前899-前892)\n孝王 辟方 (前891-前886)\n夷王 燮 (前885-前878)\n厉王 胡 (前877-前841)\n共和行政 (前841-前828)\n宣王 静 (前827-前782)\n幽王 宫湦 (前781-前771)",
      fallReason: "周幽王烽火戏诸侯，废申后，申侯联合犬戎攻破镐京，幽王被杀。",
      source: "《史记·周本纪》",
      description: "实行两都制，以镐京为宗周，洛邑为成周。幽王死后，平王东迁洛邑，开启东周。"
    }
  ]
};