import { DynastyData } from '../types';

export const three_kingdoms: DynastyData = {
  summary: "天下三分，魏蜀吴三足鼎立，英雄辈出的时代。",
  territoryDescription: "魏据北方，蜀据巴蜀，吴据江东。",
  center: { lat: 32.0, lng: 112.0 },
  zoom: 4,
  boundary: [
    { lat: 40.5, lng: 122.0 }, { lat: 40.0, lng: 110.0 }, { lat: 38.0, lng: 105.0 },
    { lat: 33.0, lng: 105.0 }, { lat: 30.0, lng: 98.0 }, { lat: 25.0, lng: 99.0 },
    { lat: 22.0, lng: 105.0 }, { lat: 20.0, lng: 108.0 }, { lat: 22.0, lng: 115.0 },
    { lat: 30.0, lng: 122.0 }, { lat: 35.0, lng: 120.0 }
  ],
  locations: [
    {
      name: "洛阳",
      modernName: "河南洛阳",
      position: { lat: 34.62, lng: 112.45 },
      type: "capital",
      description: "曹魏都城。曹丕代汉后定都于此。",
      anecdote: "曹魏重建了被董卓烧毁的洛阳宫殿，使其恢复了帝都气象。司马昭之心路人皆知的故事发生于此。"
    },
    {
      name: "邺城",
      modernName: "河北邯郸临漳",
      position: { lat: 36.32, lng: 114.45 },
      type: "capital",
      description: "曹魏“五都”之一。",
      anecdote: "袁绍和曹操的根据地。曹操在此建铜雀台，“东风不与周郎便，铜雀春深锁二乔”即指此处。"
    },
    {
      name: "成都",
      modernName: "四川成都",
      position: { lat: 30.66, lng: 104.06 },
      type: "capital",
      description: "蜀汉都城。",
      anecdote: "刘备在此称帝，延续汉室香火。诸葛亮在成都治理蜀国，“道不拾遗，民不忍欺”。"
    },
    {
      name: "建业",
      modernName: "江苏南京",
      position: { lat: 32.06, lng: 118.79 },
      type: "capital",
      description: "东吴都城。南京作为“六朝古都”的开端。",
      anecdote: "孙权听从张纮建议迁都于此，利用长江天险抗衡北方。称帝后改名建业，意为“建功立业”。"
    },
     {
      name: "武昌 (鄂州)",
      modernName: "湖北鄂州",
      position: { lat: 30.39, lng: 114.89 },
      type: "capital",
      description: "东吴曾短暂迁都于此（孙权时期）。",
      anecdote: "孙权为便于指挥荆州战事曾迁都武昌，后迁回建业。孙皓时期也曾短暂迁回。"
    },
    {
      name: "赤壁",
      modernName: "湖北赤壁",
      position: { lat: 29.87, lng: 113.63 },
      type: "battle",
      description: "奠定三国鼎立局面的决定性战役。",
      anecdote: "周瑜诸葛亮联手，黄盖诈降，火烧连环船。曹操败走华容道，关羽义释曹操。"
    },
    {
      name: "五丈原",
      modernName: "陕西岐山",
      position: { lat: 34.30, lng: 107.60 },
      type: "battle",
      description: "诸葛亮北伐的终点。",
      anecdote: "诸葛亮在此病逝，死前遗计斩魏延。司马懿见其营垒，赞叹“天下奇才也”。"
    }
  ],
  states: [
    {
      name: "曹魏",
      capital: "许昌 -> 洛阳",
      position: { lat: 34.6, lng: 112.4 }, 
      startYear: "220",
      endYear: "266",
      monarchs: "文帝 曹丕 (220-226)\n明帝 曹叡 (226-239)\n齐王 曹芳 (239-254)\n高贵乡公 曹髦 (254-260)\n元帝 曹奂 (260-265)",
      fallReason: "司马氏掌握实权，司马炎逼迫曹奂禅让。",
      source: "《三国志·魏书》",
      description: "曹丕称帝后，从许昌迁回故都洛阳，作为政治中心。许昌、邺城、谯、长安作为“五都”。"
    },
    {
      name: "蜀汉",
      capital: "成都",
      position: { lat: 30.6, lng: 104.0 }, 
      startYear: "221",
      endYear: "263",
      monarchs: "昭烈帝 刘备 (221-223)\n后主 刘禅 (223-263)",
      fallReason: "魏灭蜀之战。邓艾偷渡阴平，刘禅投降。",
      source: "《三国志·蜀书》",
      description: "一直定都成都，依托四川盆地易守难攻的地形。"
    },
    {
      name: "东吴",
      capital: "武昌 -> 建业 (南京)",
      position: { lat: 32.0, lng: 118.7 }, 
      startYear: "229",
      endYear: "280",
      monarchs: "大帝 孙权 (229-252)\n会稽王 孙亮 (252-258)\n景帝 孙休 (258-264)\n末帝 孙皓 (264-280)",
      fallReason: "晋灭吴之战。",
      source: "《三国志·吴书》",
      description: "孙权初都武昌，后迁建业。末帝孙皓曾短暂迁回武昌，但遭反对后回建业。"
    }
  ]
};