import { DynastyData } from '../types';

export const eastern_han: DynastyData = {
  summary: "光武中兴，豪强庄园经济发展，科技文化进步。",
  territoryDescription: "重新统一天下，控制西域，但后期州牧割据。",
  center: { lat: 34.5, lng: 112.5 },
  zoom: 4,
  boundary: [
    { lat: 40.5, lng: 123.0 }, { lat: 41.0, lng: 110.0 }, { lat: 40.0, lng: 95.0 },
    { lat: 41.0, lng: 85.0 }, { lat: 38.0, lng: 78.0 }, { lat: 35.0, lng: 95.0 },
    { lat: 30.0, lng: 98.0 }, { lat: 25.0, lng: 100.0 }, { lat: 20.0, lng: 105.0 },
    { lat: 18.0, lng: 108.0 }, { lat: 22.0, lng: 115.0 }, { lat: 30.0, lng: 122.0 },
    { lat: 35.0, lng: 120.0 }
  ],
  locations: [
    {
      name: "洛阳",
      modernName: "河南洛阳",
      position: { lat: 34.62, lng: 112.45 },
      type: "capital",
      description: "东汉都城。光武帝定都于此。",
      anecdote: "东汉大力建设洛阳，太学学生多达三万人。班固在此写《汉书》，蔡伦在此改进造纸术。董卓之乱时被焚毁。"
    },
    {
      name: "许昌 (许都)",
      modernName: "河南许昌",
      position: { lat: 34.03, lng: 113.85 },
      type: "capital",
      description: "东汉末年汉献帝的临时都城。",
      anecdote: "曹操“奉天子以令不臣”，将汉献帝迎至许昌，此处成为东汉末年的实际政治中心。"
    },
    {
      name: "白马寺",
      modernName: "河南洛阳",
      position: { lat: 34.72, lng: 112.60 },
      type: "cultural",
      description: "中国第一座官办佛教寺院。",
      anecdote: "汉明帝夜梦金人，遣使求法，白马驮经归来，故名白马寺。"
    },
    {
      name: "昆阳",
      modernName: "河南叶县",
      position: { lat: 33.62, lng: 113.35 },
      type: "battle",
      description: "光武帝刘秀的成名之战。",
      anecdote: "传说刘秀召唤陨石坠落敌营，以一万余人击溃王莽四十二万大军，位面之子传说源于此。"
    }
  ],
  states: [
     {
      name: "东汉",
      capital: "洛阳 -> 长安 (短暂停留) -> 许昌",
      position: { lat: 34.62, lng: 112.45 },
      startYear: "25",
      endYear: "220",
      monarchs: "光武帝 刘秀 (25-57)\n明帝 刘庄 (57-75)\n章帝 刘炟 (75-88)\n和帝 刘肇 (88-105)\n殇帝 刘隆 (105-106)\n安帝 刘祜 (106-125)\n少帝 刘懿 (125)\n顺帝 刘保 (125-144)\n冲帝 刘炳 (144-145)\n质帝 刘缵 (145-146)\n桓帝 刘志 (146-168)\n灵帝 刘宏 (168-189)\n少帝 刘辩 (189)\n献帝 刘协 (189-220)",
      fallReason: "黄巾起义瓦解统治基础，军阀割据混战，最终被曹魏取代。",
      source: "《后汉书》",
      description: "光武帝定都洛阳。末年董卓挟持献帝迁西京长安，后曹操迎献帝迁许昌。"
    }
  ]
};