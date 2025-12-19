import { DynastyData } from '../types';

export const spring_autumn: DynastyData = {
  summary: "王室衰微，诸侯争霸，礼崩乐坏。",
  territoryDescription: "周天子共主地位动摇，晋、楚、齐、秦、吴、越争夺霸权。",
  center: { lat: 33.0, lng: 113.0 },
  zoom: 5,
  boundary: [
    { lat: 40.0, lng: 110.0 }, { lat: 41.0, lng: 119.0 }, { lat: 37.0, lng: 122.0 },
    { lat: 30.0, lng: 121.0 }, { lat: 28.0, lng: 112.0 }, { lat: 29.0, lng: 108.0 },
    { lat: 32.0, lng: 105.0 }, { lat: 35.0, lng: 106.0 }
  ],
  locations: [
    {
      name: "洛邑",
      modernName: "河南洛阳",
      position: { lat: 34.66, lng: 112.45 },
      type: "capital",
      description: "东周天子都城。",
      anecdote: "此时的周天子已无实权，虽然名义上仍是天下共主，但常常需要向诸侯求援。洛阳作为都城，见证了王权的衰落。"
    },
    {
      name: "临淄",
      modernName: "山东淄博",
      position: { lat: 36.8, lng: 118.3 },
      type: "capital",
      description: "齐国都城。春秋战国时期最大的工商业城市之一。",
      anecdote: "姜子牙封地，齐桓公在此任用管仲改革，九合诸侯，使齐国成为春秋首霸。"
    },
    {
      name: "郢",
      modernName: "湖北荆州",
      position: { lat: 30.3, lng: 112.2 },
      type: "capital",
      description: "楚国最长久的都城（纪南城）。",
      anecdote: "楚庄王在此“一鸣惊人”，问鼎中原。屈原也曾在此生活、作赋。"
    },
    {
      name: "丹阳",
      modernName: "河南淅川",
      position: { lat: 33.13, lng: 111.48 },
      type: "capital",
      description: "楚国早期都城。",
      anecdote: "楚人“筚路蓝缕，以启山林”的发祥地。楚文王迁都于郢之前的政治中心。"
    },
    {
      name: "姑苏",
      modernName: "江苏苏州",
      position: { lat: 31.30, lng: 120.58 },
      type: "capital",
      description: "吴国都城。",
      anecdote: "伍子胥建阖闾大城（即今苏州古城），孙武在此练兵。后被越王勾践攻破。"
    },
    {
      name: "会稽",
      modernName: "浙江绍兴",
      position: { lat: 30.00, lng: 120.58 },
      type: "capital",
      description: "越国都城。",
      anecdote: "越王勾践卧薪尝胆，十年生聚，十年教训，最终吞并吴国。"
    },
    {
      name: "曲阜",
      modernName: "山东曲阜",
      position: { lat: 35.58, lng: 116.98 },
      type: "capital",
      description: "鲁国都城，孔子故里。",
      anecdote: "周公长子伯禽封地，保留了最完整的周礼，被称为“礼义之邦”。孔子在此编订《春秋》。"
    },
    {
      name: "新田",
      modernName: "山西侯马",
      position: { lat: 35.61, lng: 111.37 },
      type: "capital",
      description: "晋国晚期都城。",
      anecdote: "晋景公迁都于此，直至三家分晋，历时200余年，是晋国最长久的都城。盟书遗址见证了当时的政治活动。"
    },
    {
      name: "雍城",
      modernName: "陕西凤翔",
      position: { lat: 34.52, lng: 107.38 },
      type: "capital",
      description: "秦国定都时间最长的都城（294年）。",
      anecdote: "秦穆公在此称霸西戎。秦始皇即位初期的加冕典礼也是在此举行的。"
    },
    {
      name: "新郑",
      modernName: "河南新郑",
      position: { lat: 34.39, lng: 113.73 },
      type: "capital",
      description: "郑国都城。",
      anecdote: "郑国东迁后定都于此。春秋小霸郑庄公在此抵御北戎。后来被韩国攻灭并作为都城。"
    }
  ],
  states: [
    {
      name: "晋国",
      capital: "翼 -> 曲沃 -> 新田",
      position: { lat: 35.61, lng: 111.37 },
      startYear: "前1033",
      endYear: "前376",
      monarchs: "文侯(前780-前746)\n昭侯\n孝侯\n鄂侯\n哀侯\n小子侯\n晋侯缗\n武公\n献公(前676-前651)\n惠公\n怀公\n文公 重耳(前636-前628)\n襄公\n灵公\n成公\n景公\n厉公\n悼公\n平公\n昭公\n顷公\n定公\n出公\n哀公\n幽公\n烈公\n孝公\n静公",
      fallReason: "三家分晋。韩、赵、魏三家大夫瓜分晋国。",
      source: "《史记·晋世家》",
      description: "春秋中原霸主，因“曲沃代翼”发生内战，后定都新田。"
    },
    {
      name: "齐国 (姜齐)",
      capital: "临淄",
      position: { lat: 36.8, lng: 118.3 },
      startYear: "前1046",
      endYear: "前386",
      monarchs: "太公\n丁公\n乙公\n...\n僖公(前730-前698)\n襄公\n桓公 小白(前685-前643)\n孝公\n昭公\n懿公\n惠公\n顷公\n灵公\n庄公\n景公\n悼公\n简公\n平公\n宣公\n康公",
      fallReason: "田氏代齐。",
      source: "《史记·齐太公世家》",
      description: "姜子牙封地，鱼盐之利，春秋首霸。"
    },
    {
      name: "楚国",
      capital: "丹阳 -> 郢 (荆州) -> 鄀 -> 鄢",
      position: { lat: 30.3, lng: 112.2 },
      startYear: "前1042",
      endYear: "前223",
      monarchs: "若敖\n霄敖\n蚡冒\n武王(前740-前690)\n文王\n堵敖\n成王(前671-前626)\n穆王\n庄王(前613-前591)\n共王\n康王\n郏敖\n灵王\n平王\n昭王\n惠王\n简王\n声王",
      fallReason: "秦灭楚。",
      source: "《史记·楚世家》",
      description: "南方超级大国，早期都丹阳，后迁都郢（纪南城），长期以此为中心。"
    },
    {
      name: "秦国",
      capital: "西垂 -> 雍城 -> 泾阳 -> 栎阳",
      position: { lat: 34.44, lng: 107.62 },
      startYear: "前770",
      endYear: "前206",
      monarchs: "襄公(前777-前766)\n文公\n宁公\n出子\n武公\n德公\n宣公\n成公\n穆公(前659-前621)\n康公\n共公\n桓公\n景公\n哀公\n惠公\n悼公",
      fallReason: "统一天下。",
      source: "《史记·秦本纪》",
      description: "秦穆公时期称霸西戎，雍城是其定都时间最长的都城（近300年）。"
    },
    {
      name: "吴国",
      capital: "吴 (无锡) -> 姑苏 (苏州)",
      position: { lat: 31.30, lng: 120.58 },
      startYear: "前585",
      endYear: "前473",
      monarchs: "寿梦(前585-前561)\n诸樊\n余祭\n余眛\n僚\n阖闾(前514-前496)\n夫差(前495-前473)",
      fallReason: "被越王勾践所灭。",
      source: "《史记·吴太伯世家》",
      description: "泰伯奔吴建立。阖闾时期迁都姑苏，成为春秋晚期一霸。"
    },
    {
      name: "越国",
      capital: "会稽 (绍兴) -> 琅琊 (连云港)",
      position: { lat: 30.00, lng: 120.58 },
      startYear: "前537",
      endYear: "前306",
      monarchs: "允常(?-前497)\n勾践(前496-前465)\n鹿郢\n不寿\n朱勾\n翳\n之侯\n无疆",
      fallReason: "被楚国所灭。",
      source: "《史记·越王勾践世家》",
      description: "勾践灭吴后，曾短暂迁都北方的琅琊以称霸中原，后退回会稽。"
    },
    {
      name: "宋国",
      capital: "商丘",
      position: { lat: 34.41, lng: 115.65 },
      startYear: "前1040",
      endYear: "前286",
      monarchs: "微子\n...\n襄公(前650-前637)\n成公\n昭公\n文公\n共公\n平公\n元公\n景公\n昭公\n悼公\n休公\n辟公\n剔成君\n康王(宋王偃)",
      fallReason: "被齐、楚、魏瓜分。",
      source: "《史记·宋微子世家》",
      description: "商朝后裔，定都商丘（微子封地），从未迁都。"
    },
    {
      name: "燕国",
      capital: "蓟 (北京)",
      position: { lat: 39.90, lng: 116.40 },
      startYear: "前1044",
      endYear: "前222",
      monarchs: "召公\n...\n庄公\n襄公\n桓公\n宣公\n昭公\n武公\n文公\n懿公\n惠公\n悼公\n共公\n平公\n简公\n孝公\n成公\n闵公\n厘公",
      fallReason: "秦灭燕。",
      source: "《史记·燕召公世家》",
      description: "周室宗亲，定都蓟（今北京西南），是北京作为城市历史的开端。"
    },
    {
      name: "郑国",
      capital: "新郑",
      position: { lat: 34.39, lng: 113.73 },
      startYear: "前806",
      endYear: "前375",
      monarchs: "桓公\n武公\n庄公 (前743-前701)\n厉公\n文公\n穆公\n襄公\n悼公\n成公\n声公\n哀公\n繻公",
      fallReason: "被韩国所灭。",
      source: "《史记·郑世家》",
      description: "郑庄公“小霸”中原，是春秋初期的强国。新郑后来成为韩国都城。"
    },
    {
      name: "鲁国",
      capital: "曲阜",
      position: { lat: 35.58, lng: 116.98 },
      startYear: "前1043",
      endYear: "前256",
      monarchs: "周公旦(祖)\n伯禽\n隐公\n桓公\n庄公\n禧公\n文公\n宣公\n成公\n襄公\n昭公\n定公\n哀公",
      fallReason: "被楚国所灭。",
      source: "《史记·鲁周公世家》",
      description: "周公封地，保留周礼最完整，“周礼尽在鲁矣”。"
    }
  ]
};