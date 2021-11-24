dataSetVersion = "2019-08-16"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
    {
    name: "Filter by Agency",
    key: "agency",
    tooltip: "Check this to restrict to certain agencies.",
    checked: true,
    sub: [
      { name: "Cover", key: "cover", checked: true },
      { name: "Nijisanji", key: "niji", checked: false },
    ]
  },
  {
    name: "Filter by Group",
    key: "groups",
    tooltip: "Check this to restrict to certain groups.",
    checked: false,
    sub: [
      // cover
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
      { name: "Retired Holo Members", key: "retired" },
      // nijisanji
      { name: "NIJISANJI EN LazuLight", key: "nijien1" },
      { name: "NIJISANJI EN OBSYDIA", key: "nijien2" },
      { name: "NIJISANJI EN Ethyria", key: "nijien3" },
      { name: "NIJISANJI ID 3SetBBQ", key: "nijiid1" },
      { name: "NIJISANJI ID CloverMcOver", key: "nijiid2" },
      { name: "NIJISANJI ID LAN_NEE3S", key: "nijiid3" },
      { name: "NIJISANJI ID 3FicLite", key: "nijiid4" },
      { name: "NIJISANJI ID 53Renade", key: "nijiid5" },
      { name: "NIJISANJI ID 6WS", key: "nijiid6" },
      { name: "NIJISANJI KR 1", key: "nijikr1" },
      { name: "NIJISANJI KR 2", key: "nijikr2" },
      { name: "NIJISANJI KR 3", key: "nijikr3" },
      { name: "NIJISANJI KR 4", key: "nijikr4" },
      { name: "NIJISANJI KR 5", key: "nijikr5" },
      { name: "NIJISANJI KR 6", key: "nijikr6" },
      { name: "Oliver", key: "oliver" },
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
  {
    name: "Oliver Evans",
    img: "https://static.wikia.nocookie.net/virtualyoutuber/images/8/8e/Oliver_Evans_Portrait.png/revision/latest/scale-to-width-down/1000?cb=20210722163908",
    opts: {
      agency: ["niji"],
      groups: ["oliver"]
    }
  },
  {
    name: "Hana Macchia",
    img: "https://static.wikia.nocookie.net/virtualyoutuber/images/e/e6/Hana_Macchia_Portrait.png/revision/latest/scale-to-width-down/1000?cb=20210325072418",
    opts: {
      agency: ["niji"],
      groups: ["nijiid1"]
    }
  },
  {
    name: "ZEA Cornelia",
    img: "https://static.wikia.nocookie.net/virtualyoutuber/images/c/c8/ZEA_Cornelia_Portrait.png/revision/latest/scale-to-width-down/1000?cb=20210325073137",
    opts: {
      agency: ["niji"],
      groups: ["nijiid1"]
    }
  },
  {
    name: "Taka Radjiman",
    img: "https://static.wikia.nocookie.net/virtualyoutuber/images/4/47/Taka_Radjiman_Portrait.png/revision/latest/scale-to-width-down/1000?cb=20210325074537",
    opts: {
      agency: ["niji"],
      groups: ["nijiid1"]
    }
  },
  {
    name: "Rai Galilei",
    img: "https://static.wikia.nocookie.net/virtualyoutuber/images/5/51/Rai_Galilei_Portrait.png/revision/latest/scale-to-width-down/1000?cb=20210326111732",
    opts: {
      agency: ["niji"],
      groups: ["nijiid2"]
    }
  },
  {
    name: "Riksa Dhirendra",
    img: "https://static.wikia.nocookie.net/virtualyoutuber/images/1/12/Riksa_Dhirendra_Portrait.png/revision/latest/scale-to-width-down/1000?cb=20210326112937",
    opts: {
      agency: ["niji"],
      groups: ["nijiid2"]
    }
  },
  {
    name: "Amicia Michella",
    img: "https://static.wikia.nocookie.net/virtualyoutuber/images/6/61/Amicia_Michella_Portrait.png/revision/latest/scale-to-width-down/1000?cb=20210327133646",
    opts: {
      agency: ["niji"],
      groups: ["nijiid2"]
    }
  },
  {
    name: "Miyu Ottavia",
    img: "https://static.wikia.nocookie.net/virtualyoutuber/images/0/01/Miyu_Ottavia_Portrait.png/revision/latest/scale-to-width-down/1000?cb=20210327134420",
    opts: {
      agency: ["niji"],
      groups: ["nijiid2"]
    }
  },
  {
    name: "Azura Cecillia",
    img: "https://static.wikia.nocookie.net/virtualyoutuber/images/3/3e/Azura_Cecillia_Portrait.png/revision/latest/scale-to-width-down/1000?cb=20210328131835",
    opts: {
      agency: ["niji"],
      groups: ["nijiid3"]
    }
  },
  {
    name: "Layla Alstroemeria",
    img: "https://static.wikia.nocookie.net/virtualyoutuber/images/6/69/Layla_Alstroemeria_Portrait.png/revision/latest/scale-to-width-down/1000?cb=20210328132927",
    opts: {
      agency: ["niji"],
      groups: ["nijiid3"]
    }
  },
  {
    name: "Nara Haramaung",
    img: "https://static.wikia.nocookie.net/virtualyoutuber/images/3/30/Nara_Haramaung_Portrait.png/revision/latest/scale-to-width-down/1000?cb=20210328133344",
    opts: {
      agency: ["niji"],
      groups: ["nijiid3"]
    }
  },
  {
    name: "Etna Crimson",
    img: "https://static.wikia.nocookie.net/virtualyoutuber/images/a/a6/Etna_Crimson_Portrait.png/revision/latest/scale-to-width-down/1000?cb=20210329095225",
    opts: {
      agency: ["niji"],
      groups: ["nijiid4"]
    }
  },
  {
    name: "Bonnivier Pranaja",
    img: "https://static.wikia.nocookie.net/virtualyoutuber/images/5/53/Bonnivier_Pranaja_Portrait.png/revision/latest/scale-to-width-down/1000?cb=20210329100805",
    opts: {
      agency: ["niji"],
      groups: ["nijiid4"]
    }
  },
  {
    name: "Siska Leontyne",
    img: "https://static.wikia.nocookie.net/virtualyoutuber/images/0/00/Siska_Leontyne_Portrait.png/revision/latest/scale-to-width-down/1000?cb=20210329101049",
    opts: {
      agency: ["niji"],
      groups: ["nijiid4"]
    }
  },
  {
    name: "Nagisa Arcinia",
    img: "https://static.wikia.nocookie.net/virtualyoutuber/images/9/93/Nagisa_Arcinia_Portrait.png/revision/latest/scale-to-width-down/1000?cb=20210330092032",
    opts: {
      agency: ["niji"],
      groups: ["nijiid5"]
    }
  },
  {
    name: "Derem Kado",
    img: "https://static.wikia.nocookie.net/virtualyoutuber/images/2/2b/Derem_Kado_Portrait.png/revision/latest/scale-to-width-down/1000?cb=20210330092406",
    opts: {
      agency: ["niji"],
      groups: ["nijiid5"]
    }
  },
  {
    name: "Reza Avanluna",
    img: "https://static.wikia.nocookie.net/virtualyoutuber/images/a/a8/Reza_Avanluna_Portrait.png/revision/latest/scale-to-width-down/1000?cb=20210330092717",
    opts: {
      agency: ["niji"],
      groups: ["nijiid5"]
    }
  },
  {
    name: "Hyona Elatiora",
    img: "https://static.wikia.nocookie.net/virtualyoutuber/images/4/44/Hyona_Elatiora_Portrait.webp/revision/latest/scale-to-width-down/564?cb=20210805050508",
    opts: {
      agency: ["niji"],
      groups: ["nijiid6"]
    }
  },
  {
    name: "Xia Ekavira",
    img: "https://static.wikia.nocookie.net/virtualyoutuber/images/a/a1/Xia_Ekavira_Portrait.webp/revision/latest/scale-to-width-down/564?cb=20210805064451",
    opts: {
      agency: ["niji"],
      groups: ["nijiid6"]
    }
  },
  {
    name: "Mika Melatika",
    img: "https://static.wikia.nocookie.net/virtualyoutuber/images/e/e8/Mika_Melatika_Portrait.webp/revision/latest/scale-to-width-down/564?cb=20210805100414",
    opts: {
      agency: ["niji"],
      groups: ["nijiid6"]
    }
  },
  {
    name: "Min Suha",
    img: "https://static.wikia.nocookie.net/virtualyoutuber/images/6/68/Min_Suha_Portrait.png/revision/latest/scale-to-width-down/1000?cb=20210324045512",
    opts: {
      agency: ["niji"],
      groups: ["nijikr1"]
    }
  },
  {
    name: "Gaon",
    img: "https://static.wikia.nocookie.net/virtualyoutuber/images/4/40/Gaon_Portrait.png/revision/latest/scale-to-width-down/1000?cb=20210324045735",
    opts: {
      agency: ["niji"],
      groups: ["nijikr1"]
    }
  },
  {
    name: "Han Chiho",
    img: "https://static.wikia.nocookie.net/virtualyoutuber/images/5/53/Han_Chiho_2nd_Portrait.png/revision/latest/scale-to-width-down/1000?cb=20210324045958",
    opts: {
      agency: ["niji"],
      groups: ["nijikr1"]
    }
  },
  {
    name: "Lee Siu",
    img: "https://static.wikia.nocookie.net/virtualyoutuber/images/b/ba/Lee_Siu_Portrait.png/revision/latest/scale-to-width-down/1000?cb=20210324050740",
    opts: {
      agency: ["niji"],
      groups: ["nijikr2"]
    }
  },
  {
    name: "So Nagi",
    img: "https://static.wikia.nocookie.net/virtualyoutuber/images/0/0a/So_Nagi_Portrait.png/revision/latest/scale-to-width-down/1000?cb=20210324050254",
    opts: {
      agency: ["niji"],
      groups: ["nijikr2"]
    }
  },
  {
    name: "Chae Ara",
    img: "https://static.wikia.nocookie.net/virtualyoutuber/images/5/54/Chae_Ara_Portrait.png/revision/latest/scale-to-width-down/1000?cb=20210324050551",
    opts: {
      agency: ["niji"],
      groups: ["nijikr2"]
    }
  },
  {
    name: "Akira Ray",
    img: "https://static.wikia.nocookie.net/virtualyoutuber/images/b/be/Akira_Ray_Portrait.png/revision/latest/scale-to-width-down/1000?cb=20210324051336",
    opts: {
      agency: ["niji"],
      groups: ["nijikr3"]
    }
  },
  {
    name: "Lee Roha",
    img: "https://static.wikia.nocookie.net/virtualyoutuber/images/4/44/Lee_Roha_Portrait.png/revision/latest/scale-to-width-down/1000?cb=20210324051554",
    opts: {
      agency: ["niji"],
      groups: ["nijikr3"]
    }
  },
  {
    name: "Nun Bora",
    img: "https://static.wikia.nocookie.net/virtualyoutuber/images/8/8d/Nun_Bora_Portrait.png/revision/latest/scale-to-width-down/1000?cb=20210324050950",
    opts: {
      agency: ["niji"],
      groups: ["nijikr3"]
    }
  },
  {
    name: "Oh Jiyu",
    img: "https://static.wikia.nocookie.net/virtualyoutuber/images/a/aa/Oh_Jiyu_Portrait.png/revision/latest/scale-to-width-down/1000?cb=20210324052443",
    opts: {
      agency: ["niji"],
      groups: ["nijikr4"]
    }
  },
  {
    name: "Shin Kiru",
    img: "https://static.wikia.nocookie.net/virtualyoutuber/images/c/cd/Shin_Kiru_Portrait.png/revision/latest/scale-to-width-down/1000?cb=20210324052245",
    opts: {
      agency: ["niji"],
      groups: ["nijikr4"]
    }
  },
  {
    name: "Yang Nari",
    img: "https://static.wikia.nocookie.net/virtualyoutuber/images/9/96/Yang_Nari_Portrait.png/revision/latest/scale-to-width-down/1000?cb=20210324051834",
    opts: {
      agency: ["niji"],
      groups: ["nijikr4"]
    }
  },
  {
    name: "Ryu Hari",
    img: "https://static.wikia.nocookie.net/virtualyoutuber/images/b/b1/Ryu_Hari_Portrait.png/revision/latest/scale-to-width-down/1000?cb=20210324052121",
    opts: {
      agency: ["niji"],
      groups: ["nijikr4"]
    }
  },
  {
    name: "Seffyna",
    img: "https://static.wikia.nocookie.net/virtualyoutuber/images/3/36/Seffyna_Portrait.png/revision/latest/scale-to-width-down/1000?cb=20210528111232",
    opts: {
      agency: ["niji"],
      groups: ["nijikr5"]
    }
  },
  {
    name: "Ban Hada",
    img: "https://static.wikia.nocookie.net/virtualyoutuber/images/c/c0/Ban_Hada_Portrait.png/revision/latest/scale-to-width-down/1000?cb=20210528111307",
    opts: {
      agency: ["niji"],
      groups: ["nijikr5"]
    }
  },
  {
    name: "Song Mia",
    img: "https://static.wikia.nocookie.net/virtualyoutuber/images/4/43/Song_Mia_Portrait.png/revision/latest/scale-to-width-down/1000?cb=20210528111326",
    opts: {
      agency: ["niji"],
      groups: ["nijikr5"]
    }
  },
  {
    name: "Ko Yami",
    img: "https://static.wikia.nocookie.net/virtualyoutuber/images/d/d3/Ko_Yami_Portrait.png/revision/latest/scale-to-width-down/1000?cb=20210923075911",
    opts: {
      agency: ["niji"],
      groups: ["nijikr6"]
    }
  },
  {
    name: "Ha Yun",
    img: "https://static.wikia.nocookie.net/virtualyoutuber/images/2/2a/Ha_Yun_Portrait.png/revision/latest/scale-to-width-down/1000?cb=20210923083812",
    opts: {
      agency: ["niji"],
      groups: ["nijikr6"]
    }
  },
  {
    name: "Na Sera",
    img: "https://static.wikia.nocookie.net/virtualyoutuber/images/a/ad/Na_Sera_Portrait.png/revision/latest/scale-to-width-down/1000?cb=20210923085212",
    opts: {
      agency: ["niji"],
      groups: ["nijikr6"]
    }
  },
  {
    name: "Lee On",
    img: "https://static.wikia.nocookie.net/virtualyoutuber/images/f/ff/Lee_On_Portrait.png/revision/latest/scale-to-width-down/1000?cb=20210923091207",
    opts: {
      agency: ["niji"],
      groups: ["nijikr6"]
    }
  },
  {
    name: "Pomu Rainpuff",
    img: "https://static.wikia.nocookie.net/virtualyoutuber/images/a/a8/Pomu_Rainpuff_Portrait.png/revision/latest/scale-to-width-down/1000?cb=20210517092410",
    opts: {
      agency: ["niji"],
      groups: ["nijien1"]
    }
  },
  {
    name: "Elira Pendora",
    img: "https://static.wikia.nocookie.net/virtualyoutuber/images/5/5b/Elira_Pendora_Portrait.png/revision/latest/scale-to-width-down/1000?cb=20210517092344",
    opts: {
      agency: ["niji"],
      groups: ["nijien1"]
    }
  },
  {
    name: "Finana Ryugu",
    img: "https://static.wikia.nocookie.net/virtualyoutuber/images/6/6f/Finana_Ryugu_Portrait.png/revision/latest/scale-to-width-down/1000?cb=20210517092433",
    opts: {
      agency: ["niji"],
      groups: ["nijien1"]
    }
  },
  {
    name: "Rosemi Lovelock",
    img: "https://static.wikia.nocookie.net/virtualyoutuber/images/c/ce/Rosemi_Lovelock_Portrait.png/revision/latest/scale-to-width-down/1000?cb=20210719061433",
    opts: {
      agency: ["niji"],
      groups: ["nijien2"]
    }
  },
  {
    name: "Petra Gurin",
    img: "https://static.wikia.nocookie.net/virtualyoutuber/images/d/d7/Petra_Gurin_Portrait.png/revision/latest/scale-to-width-down/1000?cb=20210719065217",
    opts: {
      agency: ["niji"],
      groups: ["nijien2"]
    }
  },
  {
    name: "Selen Tatsuki",
    img: "https://static.wikia.nocookie.net/virtualyoutuber/images/4/4e/Selen_Tatsuki_Portrait.png/revision/latest/scale-to-width-down/1000?cb=20210719072816",
    opts: {
      agency: ["niji"],
      groups: ["nijien2"]
    }
  },
  {
    name: "Nina Kosaka",
    img: "https://static.wikia.nocookie.net/virtualyoutuber/images/f/f6/Nina_Kosaka_Portrait.png/revision/latest/scale-to-width-down/1000?cb=20211012224605",
    opts: {
      agency: ["niji"],
      groups: ["nijien3"]
    }
  },
  {
    name: "Millie Parfait",
    img: "https://static.wikia.nocookie.net/virtualyoutuber/images/e/e6/Millie_Parfait_Portrait.png/revision/latest/scale-to-width-down/1000?cb=20211012225042",
    opts: {
      agency: ["niji"],
      groups: ["nijien3"]
    }
  },
  {
    name: "Enna Alouette",
    img: "https://static.wikia.nocookie.net/virtualyoutuber/images/f/f1/Enna_Alouette_Portrait.png/revision/latest/scale-to-width-down/1000?cb=20211012224041",
    opts: {
      agency: ["niji"],
      groups: ["nijien3"]
    }
  },
  {
    name: "Reimu Endou",
    img: "https://static.wikia.nocookie.net/virtualyoutuber/images/c/c5/Reimu_Endou_Portrait.png/revision/latest/scale-to-width-down/1000?cb=20211012225419",
    opts: {
      agency: ["niji"],
      groups: ["nijien3"]
    }
  },
]

/*
  {
    name: "",
    img: "",
    opts: {
      agency: ["niji"],
      groups: [""]
    }
  },
*/