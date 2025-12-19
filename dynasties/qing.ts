import { DynastyData } from '../types';

export const qing: DynastyData = {
  summary: "中国最后的封建王朝，奠定现代中国版图。",
  territoryDescription: "疆域极广，包含外蒙古、唐努乌梁海及库页岛。",
  center: { lat: 40.0, lng: 105.0 },
  zoom: 3,
  boundary: [
    { lat: 55.0, lng: 135.0 }, { lat: 50.0, lng: 142.0 }, { lat: 43.0, lng: 132.0 },
    { lat: 40.0, lng: 128.0 }, { lat: 30.0, lng: 122.0 }, { lat: 22.0, lng: 115.0 },
    { lat: 18.0, lng: 109.0 }, { lat: 22.0, lng: 100.0 }, { lat: 28.0, lng: 85.0 },
    { lat: 35.0, lng: 75.0 }, { lat: 45.0, lng: 80.0 }, { lat: 50.0, lng: 90.0 },
    { lat: 52.0, lng: 120.0 }
  ],
  locations: [
    {
      name: "北京 (京师)",
      modernName: "北京",
      position: { lat: 39.90, lng: 116.40 },
      type: "capital",
      description: "清朝首都。沿用明朝紫禁城。",
      anecdote: "顺治帝入关后定都于此。在西郊大力营建“三山五园”（如圆明园、颐和园），形成庞大的皇家园林区。"
    },
    {
      name: "盛京 (沈阳)",
      modernName: "辽宁沈阳",
      position: { lat: 41.80, lng: 123.43 },
      type: "capital",
      description: "清朝入关前的都城，入关后为陪都。",
      anecdote: "皇太极在此改国号为清，建立沈阳故宫。清朝皇帝东巡祭祖时驻跸于此。"
    },
    {
      name: "赫图阿拉",
      modernName: "辽宁抚顺新宾",
      position: { lat: 41.70, lng: 124.87 },
      type: "capital",
      description: "后金第一都，清朝龙兴之地。",
      anecdote: "努尔哈赤在此建立后金，誓师伐明（七大恨）。"
    },
    {
      name: "辽阳",
      modernName: "辽宁辽阳",
      position: { lat: 41.27, lng: 123.17 },
      type: "capital",
      description: "后金中期都城。",
      anecdote: "努尔哈赤攻克辽东重镇辽阳后迁都于此，修建东京城，为进攻中原做准备。"
    },
    {
      name: "承德避暑山庄",
      modernName: "河北承德",
      position: { lat: 40.99, lng: 117.93 },
      type: "cultural",
      description: "清皇帝的夏宫，实际上的第二个政治中心。",
      anecdote: "清帝在此接见蒙古王公和外国使节（如马嘎尔尼），体现了“怀柔远人”的治国方略。"
    }
  ],
  states: [
    {
      name: "大清",
      capital: "赫图阿拉 -> 辽阳 -> 盛京 -> 北京",
      position: { lat: 39.90, lng: 116.40 },
      startYear: "1644",
      endYear: "1912",
      monarchs: "太祖 努尔哈赤 (1616-1626)\n太宗 皇太极 (1626-1643)\n世祖 福临 (顺治, 1643-1661)\n圣祖 玄烨 (康熙, 1661-1722)\n世宗 胤禛 (雍正, 1722-1735)\n高宗 弘历 (乾隆, 1735-1796)\n仁宗 颙琰 (嘉庆, 1796-1820)\n宣宗 旻宁 (道光, 1820-1850)\n文宗 奕詝 (咸丰, 1850-1861)\n穆宗 载淳 (同治, 1861-1875)\n德宗 载湉 (光绪, 1875-1908)\n宣统 溥仪 (1908-1912)",
      fallReason: "辛亥革命。",
      source: "《清史稿》",
      description: "入关前定都盛京（沈阳）。顺治元年迁都北京，以盛京为陪都。"
    },
    {
      name: "南明",
      capital: "南京 -> 福州 -> 肇庆",
      position: { lat: 32.06, lng: 118.79 },
      startYear: "1644",
      endYear: "1662",
      monarchs: "安宗 弘光帝 (1644-1645)\n绍宗 隆武帝 (1645-1646)\n文宗 绍武帝 (1646-1647)\n昭宗 永历帝 (1646-1662)",
      fallReason: "被清军攻灭。",
      source: "《南明史》",
      description: "弘光帝都南京，隆武帝都福州，永历帝都肇庆，流亡政权都城频繁变动。"
    },
    {
      name: "太平天国",
      capital: "天京 (南京)",
      position: { lat: 32.06, lng: 118.79 },
      startYear: "1851",
      endYear: "1864",
      monarchs: "天王 洪秀全 (1851-1864)\n幼天王 洪天贵福 (1864)",
      fallReason: "被湘军攻陷。",
      source: "《清史稿》",
      description: "攻克南京后改名天京，定都于此，修建天王府。"
    },
    {
      name: "准噶尔汗国",
      capital: "伊犁 (固勒扎)",
      position: { lat: 43.9, lng: 81.3 },
      startYear: "1634",
      endYear: "1755",
      monarchs: "巴图尔 (1634-1653)\n僧格 (1653-1671)\n葛尔丹 (1671-1697)\n策妄阿拉布坦 (1697-1727)\n噶尔丹策零 (1727-1745)\n策妄多尔济那木扎尔 (1745-1750)\n喇嘛达尔扎 (1750-1753)\n达瓦齐 (1753-1755)",
      fallReason: "被乾隆皇帝平定。",
      source: "《平定准噶尔方略》",
      description: "以伊犁为中心，建立牙帐。"
    }
  ]
};