dataSetVersion = "2019-08-16"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
    {
    name: "Filter by Agency",
    key: "agency",
    tooltip: "Check this to restrict to certain agencies.",
    checked: false,
    sub: [
      { name: "Cover", key: "cover" },
      { name: "Nijisanji", key: "niji" },
    ]
  },
  {
    name: "Filter by Group",
    key: "groups",
    tooltip: "Check this to restrict to certain groups.",
    checked: false,
    sub: [
      { name: "Hololive 0th Generation", key: "jp0" },
      { name: "INNK Music", key: "innk" },
      { name: "Hololive 1st Generation", key: "jp1" },
      { name: "Hololive 2nd Generation", key: "jp2" },
      { name: "Hololive GAMERS", key: "gamers" },
      { name: "Hololive 3rd Generation", key: "jp3" },
      { name: "Hololive 4th Generation", key: "jp4" },
      { name: "Hololive 5th Generation", key: "jp5" },
      { name: "Holostars 1st Generation", key: "star1" },
      { name: "Holostars 2nd Generation", key: "star2" },
      { name: "Holostars 3rd Generation", key: "star3" },
      { name: "Hololive ID 1st Generation", key: "id1" },
      { name: "Hololive ID 2nd Generation", key: "id2" },
      { name: "Hololive EN Myth", key: "en1" },
      { name: "Hololive EN HOPE", key: "hope" },
      { name: "Hololive EN Council", key: "en2" },
      { name: "Retired Members", key: "retired" },
    ]
  },
];

dataSet[dataSetVersion].characterData = [
  {
    name: "Tokino Sora",
    img: "https://static.miraheze.org/hololivewiki/thumb/0/0f/Tokino_Sora_-_Portrait_06-1.png/240px-Tokino_Sora_-_Portrait_06-1.png",
    opts: {
      agency: ["cover"],
      groups: ["jp0"]
    }
  },
  {
    name: "Roboco",
    img: "https://static.miraheze.org/hololivewiki/thumb/7/7e/Roboco_-_Portrait_01-1.png/240px-Roboco_-_Portrait_01-1.png",
    opts: {
      agency: ["cover"],
      groups: ["jp0"]
    }
  },
  {
    name: "Sakura Miko",
    img: "https://static.miraheze.org/hololivewiki/thumb/5/51/Sakura_Miko_-_Portrait_3D_03.png/240px-Sakura_Miko_-_Portrait_3D_03.png",
    opts: {
      agency: ["cover"],
      groups: ["jp0"]
    }
  },
  {
    name: "Hoshimachi Suisei",
    img: "https://static.miraheze.org/hololivewiki/thumb/1/1f/Hoshimachi_Suisei_-_Portrait_04.png/240px-Hoshimachi_Suisei_-_Portrait_04.png",
    opts: {
      agency: ["cover"],
      groups: ["jp0"]
    }
  },
  {
    name: "AZKi",
    img: "https://static.miraheze.org/hololivewiki/thumb/5/51/AZKi_-_Portrait_03.png/240px-AZKi_-_Portrait_03.png",
    opts: {
      agency: ["cover"],
      groups: ["innk"]
    }
  },
  {
    name: "Yozora Mel",
    img: "https://static.miraheze.org/hololivewiki/thumb/f/fe/Yozora_Mel_-_Portrait_01-2.png/240px-Yozora_Mel_-_Portrait_01-2.png",
    opts: {
      agency: ["cover"],
      groups: ["jp1"]
    }
  },
  {
    name: "Shirakami Fubuki",
    img: "https://static.miraheze.org/hololivewiki/c/c6/Shirakami_Fubuki_-_Portrait_01.png",
    opts: {
      agency: ["cover"],
      groups: ["jp1", "gamers"]
    }
  },
  {
    name: "Natsuiro Matsuri",
    img: "https://static.miraheze.org/hololivewiki/thumb/e/e2/Natsuiro_Matsuri_-_Portrait_01.png/240px-Natsuiro_Matsuri_-_Portrait_01.png",
    opts: {
      agency: ["cover"],
      groups: ["jp1"]
    }
  },
  {
    name: "Aki Rosenthal",
    img: "https://static.miraheze.org/hololivewiki/thumb/b/b5/Aki_Rosenthal_-_Portrait_01.png/240px-Aki_Rosenthal_-_Portrait_01.png",
    opts: {
      agency: ["cover"],
      groups: ["jp1"]
    }
  },
  {
    name: "Akai Haato",
    img: "https://static.miraheze.org/hololivewiki/8/81/Akai_Haato_-_Portrait_01-1.png",
    opts: {
      agency: ["cover"],
      groups: ["jp1"]
    }
  },
  {
    name: "Minato Aqua",
    img: "https://static.miraheze.org/hololivewiki/thumb/6/6d/Minato_Aqua_-_Portrait_01.png/240px-Minato_Aqua_-_Portrait_01.png",
    opts: {
      agency: ["cover"],
      groups: ["jp2"]
    }
  },
  {
    name: "Murasaki Shion",
    img: "https://static.miraheze.org/hololivewiki/a/ae/Murasaki_Shion_-_Portrait_01.png",
    opts: {
      agency: ["cover"],
      groups: ["jp2"]
    }
  },
  {
    name: "Nakiri Ayame",
    img: "https://static.miraheze.org/hololivewiki/4/40/Nakiri_Ayame_-_Portrait_01.png",
    opts: {
      agency: ["cover"],
      groups: ["jp2"]
    }
  },
  {
    name: "Yuzuki Choco",
    img: "https://static.miraheze.org/hololivewiki/thumb/a/a7/Yuzuki_Choco_-_Portrait_01.png/240px-Yuzuki_Choco_-_Portrait_01.png",
    opts: {
      agency: ["cover"],
      groups: ["jp2"]
    }
  },
  {
    name: "Oozora Subaru",
    img: "https://static.miraheze.org/hololivewiki/1/12/Oozora_Subaru_-_Portrait_01.png",
    opts: {
      agency: ["cover"],
      groups: ["jp2"]
    }
  },
  {
    name: "Ookami Mio",
    img: "https://static.miraheze.org/hololivewiki/4/44/Ookami_Mio_-_Portrait_01.png",
    opts: {
      agency: ["cover"],
      groups: ["gamers"]
    }
  },
  {
    name: "Nekomata Okayu",
    img: "https://static.miraheze.org/hololivewiki/thumb/0/0c/Nekomata_Okayu_-_Portrait_01.png/240px-Nekomata_Okayu_-_Portrait_01.png",
    opts: {
      agency: ["cover"],
      groups: ["gamers"]
    }
  },
  {
    name: "Inugami Korone",
    img: "https://static.miraheze.org/hololivewiki/b/bd/Inugami_Korone_-_Portrait_01-1.png",
    opts: {
      agency: ["cover"],
      groups: ["gamers"]
    }
  },
  {
    name: "Usada Pekora",
    img: "https://static.miraheze.org/hololivewiki/thumb/d/d0/Usada_Pekora_-_Portrait_01.png/240px-Usada_Pekora_-_Portrait_01.png",
    opts: {
      agency: ["cover"],
      groups: ["jp3"]
    }
  },
  {
    name: "Uruha Rushia",
    img: "https://static.miraheze.org/hololivewiki/1/16/Uruha_Rushia_-_Portrait_01.png",
    opts: {
      agency: ["cover"],
      groups: ["jp3"]
    }
  },
  {
    name: "Shiranui Flare",
    img: "https://static.miraheze.org/hololivewiki/thumb/1/1b/Shiranui_Flare_-_Portrait_01.png/240px-Shiranui_Flare_-_Portrait_01.png",
    opts: {
      agency: ["cover"],
      groups: ["jp3"]
    }
  },
  {
    name: "Shirogane Noel",
    img: "https://static.miraheze.org/hololivewiki/8/8c/Shirogane_Noel_-_Portrait_01.png",
    opts: {
      agency: ["cover"],
      groups: ["jp3"]
    }
  },
  {
    name: "Houshou Marine",
    img: "https://static.miraheze.org/hololivewiki/thumb/c/cb/Houshou_Marine_-_Portrait_01.png/240px-Houshou_Marine_-_Portrait_01.png",
    opts: {
      agency: ["cover"],
      groups: ["jp3"]
    }
  },
  {
    name: "Amane Kanata",
    img: "https://static.miraheze.org/hololivewiki/thumb/3/36/Amane_Kanata_-_Portrait_01.png/240px-Amane_Kanata_-_Portrait_01.png",
    opts: {
      agency: ["cover"],
      groups: ["jp4"]
    }
  },
  {
    name: "Tsunomaki Watame",
    img: "https://static.miraheze.org/hololivewiki/thumb/0/05/Tsunomaki_Watame_-_Portrait_01.png/240px-Tsunomaki_Watame_-_Portrait_01.png",
    opts: {
      agency: ["cover"],
      groups: ["jp4"]
    }
  },
  {
    name: "Tokoyami Towa",
    img: "https://static.miraheze.org/hololivewiki/thumb/9/9d/Tokoyami_Towa_-_Portrait_01.png/240px-Tokoyami_Towa_-_Portrait_01.png",
    opts: {
      agency: ["cover"],
      groups: ["jp4"]
    }
  },
  {
    name: "Himemori Luna",
    img: "https://static.miraheze.org/hololivewiki/thumb/c/ce/Himemori_Luna_-_Portrait_01.png/240px-Himemori_Luna_-_Portrait_01.png",
    opts: {
      agency: ["cover"],
      groups: ["jp4"]
    }
  },
  {
    name: "Yukihana Lamy",
    img: "https://static.miraheze.org/hololivewiki/thumb/6/68/Yukihana_Lamy_-_Portrait_01.png/240px-Yukihana_Lamy_-_Portrait_01.png",
    opts: {
      agency: ["cover"],
      groups: ["jp5"]
    }
  },
  {
    name: "Momosuzu Nene",
    img: "https://static.miraheze.org/hololivewiki/thumb/a/a0/Momosuzu_Nene_-_Portrait_02.png/240px-Momosuzu_Nene_-_Portrait_02.png",
    opts: {
      agency: ["cover"],
      groups: ["jp5"]
    }
  },
  {
    name: "Shishiro Botan",
    img: "https://static.miraheze.org/hololivewiki/thumb/e/e2/Shishiro_Botan_-_Portrait_01.png/240px-Shishiro_Botan_-_Portrait_01.png",
    opts: {
      agency: ["cover"],
      groups: ["jp5"]
    }
  },
  {
    name: "Omaru Polka",
    img: "https://static.miraheze.org/hololivewiki/thumb/c/c3/Omaru_Polka_-_Portrait_01.png/240px-Omaru_Polka_-_Portrait_01.png",
    opts: {
      agency: ["cover"],
      groups: ["jp5"]
    }
  },
  {
    name: "Ayunda Risu",
    img: "https://static.miraheze.org/hololivewiki/thumb/f/fe/Ayunda_Risu_-_Portrait_01.png/288px-Ayunda_Risu_-_Portrait_01.png",
    opts: {
      agency: ["cover"],
      groups: ["id1"]
    }
  },
  {
    name: "Moona Hoshinova",
    img: "https://static.miraheze.org/hololivewiki/thumb/f/f5/Moona_Hoshinova_-_Portrait_01.png/288px-Moona_Hoshinova_-_Portrait_01.png",
    opts: {
      agency: ["cover"],
      groups: ["id1"]
    }
  },
  {
    name: "Airani Iofifteen",
    img: "https://static.miraheze.org/hololivewiki/thumb/8/85/Airani_Iofifteen_-_Portrait_01.png/240px-Airani_Iofifteen_-_Portrait_01.png",
    opts: {
      agency: ["cover"],
      groups: ["id1"]
    }
  },
  {
    name: "Kureiji Ollie",
    img: "https://static.miraheze.org/hololivewiki/thumb/1/1f/Kureiji_Ollie_-_Portrait_01.png/240px-Kureiji_Ollie_-_Portrait_01.png",
    opts: {
      agency: ["cover"],
      groups: ["id2"]
    }
  },
  {
    name: "Anya Melfissa",
    img: "https://static.miraheze.org/hololivewiki/thumb/4/41/Anya_Melfissa_-_Portrait_01.png/240px-Anya_Melfissa_-_Portrait_01.png",
    opts: {
      agency: ["cover"],
      groups: ["id2"]
    }
  },
  {
    name: "Pavolia Reine",
    img: "https://static.miraheze.org/hololivewiki/thumb/2/24/Pavolia_Reine_-_Portrait_01.png/240px-Pavolia_Reine_-_Portrait_01.png",
    opts: {
      agency: ["cover"],
      groups: ["id2"]
    }
  },
  {
    name: "Mori Calliope",
    img: "https://static.miraheze.org/hololivewiki/5/57/Mori_Calliope_-_Portrait_01-1.png",
    opts: {
      agency: ["cover"],
      groups: ["en1"]
    }
  },
  {
    name: "Takanashi Kiara",
    img: "https://static.miraheze.org/hololivewiki/thumb/6/6e/Takanashi_Kiara_-_Portrait_01.png/240px-Takanashi_Kiara_-_Portrait_01.png",
    opts: {
      agency: ["cover"],
      groups: ["en1"]
    }
  },
  {
    name: "Ninomae Ina'nis",
    img: "https://static.miraheze.org/hololivewiki/4/47/Ninomae_Ina'nis_-_Portrait_01-1.png",
    opts: {
      agency: ["cover"],
      groups: ["en1"]
    }
  },
  {
    name: "Gawr Gura",
    img: "https://static.miraheze.org/hololivewiki/thumb/6/69/Gawr_Gura_-_Portrait_01.png/240px-Gawr_Gura_-_Portrait_01.png",
    opts: {
      agency: ["cover"],
      groups: ["en1"]
    }
  },
  {
    name: "Watson Amelia",
    img: "https://static.miraheze.org/hololivewiki/thumb/e/e8/Watson_Amelia_-_Portrait_01.png/240px-Watson_Amelia_-_Portrait_01.png",
    opts: {
      agency: ["cover"],
      groups: ["en1"]
    }
  },
  {
    name: "IRyS",
    img: "https://static.miraheze.org/hololivewiki/thumb/2/29/IRyS_-_Portrait_01.png/240px-IRyS_-_Portrait_01.png",
    opts: {
      agency: ["cover"],
      groups: ["hope"]
    }
  },
  {
    name: "Tsukumo Sana",
    img: "https://static.miraheze.org/hololivewiki/thumb/6/6f/Tsukumo_Sana_-_Portrait_01.png/240px-Tsukumo_Sana_-_Portrait_01.png",
    opts: {
      agency: ["cover"],
      groups: ["en2"]
    }
  },
  {
    name: "Ceres Fauna",
    img: "https://static.miraheze.org/hololivewiki/thumb/a/ab/Ceres_Fauna_-_Portrait_01.png/240px-Ceres_Fauna_-_Portrait_01.png",
    opts: {
      agency: ["cover"],
      groups: ["en2"]
    }
  },
  {
    name: "Ouro Kronii",
    img: "https://static.miraheze.org/hololivewiki/thumb/a/a1/Ouro_Kronii_-_Portrait_01.png/240px-Ouro_Kronii_-_Portrait_01.png",
    opts: {
      agency: ["cover"],
      groups: ["en2"]
    }
  },
  {
    name: "Nanashi Mumei",
    img: "https://static.miraheze.org/hololivewiki/8/80/Nanashi_Mumei_-_Portrait_01.png",
    opts: {
      agency: ["cover"],
      groups: ["en2"]
    }
  },
  {
    name: "Hakos Baelz",
    img: "https://static.miraheze.org/hololivewiki/thumb/1/16/Hakos_Baelz_-_Portrait_01.png/240px-Hakos_Baelz_-_Portrait_01.png",
    opts: {
      agency: ["cover"],
      groups: ["en2"]
    }
  },
  {
    name: "Hanasaki Miyabi",
    img: "https://static.miraheze.org/hololivewiki/thumb/5/54/Hanasaki_Miyabi_-_Portrait_01.png/240px-Hanasaki_Miyabi_-_Portrait_01.png",
    opts: {
      agency: ["cover"],
      groups: ["star1"]
    }
  },
  {
    name: "Kanade Izuru",
    img: "https://static.miraheze.org/hololivewiki/thumb/4/41/Kanade_Izuru_-_Portrait_01.png/240px-Kanade_Izuru_-_Portrait_01.png",
    opts: {
      agency: ["cover"],
      groups: ["star1"]
    }
  },
  {
    name: "Arurandeisu",
    img: "https://static.miraheze.org/hololivewiki/thumb/e/e2/Arurandeisu_-_Portrait_01.png/240px-Arurandeisu_-_Portrait_01.png",
    opts: {
      agency: ["cover"],
      groups: ["star1"]
    }
  },
  {
    name: "Rikkaroid",
    img: "https://static.miraheze.org/hololivewiki/thumb/d/d7/Rikka_-_Portrait_01.png/240px-Rikka_-_Portrait_01.png",
    opts: {
      agency: ["cover"],
      groups: ["star1"]
    }
  },
  {
    name: "Astel Leda",
    img: "https://static.miraheze.org/hololivewiki/d/d0/Astel_Leda_-_Portrait_01-1.png",
    opts: {
      agency: ["cover"],
      groups: ["star2"]
    }
  },
  {
    name: "Kishido Temma",
    img: "https://static.miraheze.org/hololivewiki/a/aa/Kishido_Temma_-_Portrait_01-1.png",
    opts: {
      agency: ["cover"],
      groups: ["star2"]
    }
  },
  {
    name: "Yukoku Roberu",
    img: "https://static.miraheze.org/hololivewiki/4/41/Yukoku_Roberu_-_Portrait_01-1.png",
    opts: {
      agency: ["cover"],
      groups: ["star2"]
    }
  },
  {
    name: "Kageyama Shien",
    img: "https://static.miraheze.org/hololivewiki/thumb/7/74/Kageyama_Shien_-_Portrait_01.png/240px-Kageyama_Shien_-_Portrait_01.png",
    opts: {
      agency: ["cover"],
      groups: ["star3"]
    }
  },
  {
    name: "Aragami Oga",
    img: "https://static.miraheze.org/hololivewiki/thumb/f/f7/Aragami_Oga_-_Portrait_01.png/240px-Aragami_Oga_-_Portrait_01.png",
    opts: {
      agency: ["cover"],
      groups: ["star3"]
    }
  },
  {
    name: "Kiryu Coco",
    img: "https://static.miraheze.org/hololivewiki/thumb/c/ce/Kiryu_Coco_-_Portrait_01.png/240px-Kiryu_Coco_-_Portrait_01.png",
    opts: {
      agency: ["cover"],
      groups: ["jp4", "retired"]
    }
  },
  {
    name: "Kagami Kira",
    img: "https://static.miraheze.org/hololivewiki/thumb/5/5d/Kagami_Kira_-_Portrait_01.png/240px-Kagami_Kira_-_Portrait_01.png",
    opts: {
      agency: ["cover"],
      groups: ["star1", "retired"]
    }
  },
  {
    name: "Yakushiji Suzaku",
    img: "https://static.miraheze.org/hololivewiki/thumb/3/3a/Yakushiji_Suzaku_-_Portrait_01.png/239px-Yakushiji_Suzaku_-_Portrait_01.png",
    opts: {
      agency: ["cover"],
      groups: ["star1", "retired"]
    }
  },
  {
    name: "Tsukishita Kaoru",
    img: "https://static.miraheze.org/hololivewiki/7/75/Tsukishita_Kaoru_-_Portrait_01.png",
    opts: {
      agency: ["cover"],
      groups: ["star3", "retired"]
    }
  },
  {
    name: "Mano Aloe",
    img: "https://static.miraheze.org/hololivewiki/thumb/9/98/Mano_Aloe_-_Portrait_01.png/240px-Mano_Aloe_-_Portrait_01.png",
    opts: {
      agency: ["cover"],
      groups: ["jp4", "retired"]
    }
  },
]

/*
  {
    name: "",
    img: "",
    opts: {
      agency: ["cover"],
      groups: [""]
    }
  },
*/