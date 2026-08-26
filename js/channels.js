const CHANNELS = [
  {
    name: 'La Nacion+',
    img: 'https://i.ibb.co/6yX3q8h/la-nacion.png',
    getURL: 'TGFfTmFjaW9u',
    keyId: 'f4eade7bbc39b25402acfa301bbad04a',
    key: 'a74d1df4235a74878327aa8d53ff283c',
    number: 1,
    pid: 'LCH3267',
    category: 'Nacionales'
  },
  {
    name: 'TN',
    img: 'https://i.ibb.co/3s3hY4t/tn.png',
    getURL: 'VG9kb05vdGljaWFz',
    keyId: '7ceb1cd0622cd7e88fcdc99fe3a55de6',
    key: '951637093d41c7388a1ef3f620cfea21',
    number: 2,
    pid: 'LCH3338',
    category: 'Noticias'
  },
  {
    name: 'A24',
    img: 'https://i.ibb.co/686Xf0L/a24.png',
    getURL: 'QW1lcmljYTI0',
    keyId: '3b1b027dd011af20fd9956c16dc084fb',
    key: '45f75aacf06593c9b693fe427c67e5b8',
    number: 3,
    pid: 'LCH3805',
    category: 'Noticias'
  },
  {
    name: 'America TV',
    img: 'https://i.ibb.co/7CqYp9D/america-tv.png',
    getURL: 'QW1lcmljYVRW',
    keyId: '8ea235ce0826408b221c498115a9b62d',
    key: '7aa9266ed91ea4510483370029dfcf45',
    number: 4,
    pid: 'LCH3339',
    category: 'Nacionales'
  },
  {
    name: 'TV Publica',
    img: 'https://i.ibb.co/3Wf1tWz/tv-publica.png',
    getURL: 'Q2FuYWw3',
    keyId: 'cc8c82ac2ec7e9799527c29db7354e81',
    key: 'cc4aae173dd2ef17ae26be3f7ae87662',
    number: 5,
    pid: 'LCH3075',
    category: 'Nacionales'
  },
  {
    name: 'Canal 9',
    img: 'https://i.ibb.co/4TGqfWn/canal9.png',
    getURL: 'Q2FuYWw5',
    keyId: '24f4ff211136ae6512a1b552200db405',
    key: '602122f8426c5c942b8c18d299cc6020',
    number: 6,
    pid: 'LCH3077',
    category: 'Nacionales'
  },
  {
    name: 'Telefe',
    img: 'https://i.ibb.co/spF87Ccr/Telefe-nuevo-logo.png',
    getURL: 'VGVsZWZlSEQ=',
    keyId: '3cec1b1ea9799dda5596e64f37e5ed20',
    key: 'c69f3afde2085dcaaaddbf55246a0323',
    number: 7,
    pid: 'LCH3346',
    category: 'Nacionales'
  },
  {
    name: 'El Trece',
    img: 'https://i.ibb.co/3sJqYQh/eltrece.png',
    getURL: 'QXJ0ZWFySEQ',
    keyId: '5179017f49326d14af0a9ceec831aee6',
    key: '09b4a463b029ebc28a288bed2da70a76',
    number: 8,
    pid: 'LCH3337',
    category: 'Nacionales'
  },
  {
    name: 'Cronica TV',
    img: 'https://i.ibb.co/1nL8XfV/cronica.png',
    getURL: 'Q3JvbmljYVRW',
    keyId: '745e7abcc90d41ab706b2ac2f4371da3',
    key: '50acd9d19d1361cb4a8a13a867bdc352',
    number: 9,
    pid: 'LCH3079',
    category: 'Nacionales'
  },
  {
    name: 'C5N',
    img: 'https://i.ibb.co/68Yc6Hf/c5n.png',
    getURL: 'QzVO',
    keyId: '050df5c6e78c774e78c3e99eef8a1b29',
    key: '0e4141d6ab21a36cbc4da777ab3096d4',
    number: 10,
    pid: 'LCH3340',
    category: 'Noticias'
  },
  {
    name: 'Canal 26',
    img: 'https://i.ibb.co/3dRnK7X/canal26.png',
    getURL: 'MjZfVFZfSEQ',
    keyId: 'e32aaa4b67430b3b51be1efce5a74ac5',
    key: 'ad60c5e1d378a97271bf8688f094d092',
    number: 11,
    pid: 'LCH6358',
    category: 'Noticias'
  },
  {
    name: 'Metro',
    img: 'https://i.ibb.co/6yX3q8h/metro.png',
    getURL: 'TWV0cm8',
    keyId: '719aa3a5e270c7f69eba374ed80d7986',
    key: '97ac59118cf4cf242e2c31e87cd38e1e',
    number: 12,
    category: 'Nacionales'
  },
  {
    name: 'Ciudad Magazine',
    img: 'https://i.ibb.co/3dRnK7X/ciudad.png',
    getURL: 'TWFnYXppbmU=',
    keyId: '4f1235069d34c22cb73d9b78bae15587',
    key: '55e068ff6b152e34c66dc639b38e8692',
    number: 13,
    pid: 'LCH3369',
    category: 'Nacionales'
  },
  {
    name: 'CineAR',
    img: 'https://i.ibb.co/1nL8XfV/cinear.png',
    getURL: 'SU5DQUFfVHY=',
    keyId: 'd44f40e49d2945c1a3701c0885ff0b00',
    key: '6382b6279087402714b6824688c456df',
    number: 14,
    pid: 'LCH3804',
    category: 'Cine'
  },
  {
    name: 'Encuentro',
    img: 'https://i.ibb.co/4TGqfWn/encuentro.png',
    getURL: 'RW5jdWVudHJv',
    keyId: 'ac3ae78beb64478ab390b4ad70e3e0c9',
    key: 'c7d669761c3516d852a0edf9e07c9198',
    number: 15,
    pid: 'LCH3070',
    category: 'Educacion'
  },
  {
    name: 'Volver',
    img: 'https://i.ibb.co/3sJqYQh/volver.png',
    getURL: 'Vm9sdmVy',
    keyId: '194e53184a424ce6989ad82c5f28fbc5',
    key: '65d60c5cc4de031172be0a6a51edbdfe',
    number: 16,
    pid: 'LCH3869',
    category: 'Cine'
  },
  {
    name: 'Net TV',
    img: 'https://i.ibb.co/68Yc6Hf/nettv.png',
    getURL: 'TmV0X1RW',
    keyId: '89d433166edd31d56df2a59df8ec6704',
    key: 'b2015faded0a456d10aa8db1b4cbac68',
    number: 17,
    pid: 'LCH3983',
    category: 'Nacionales'
  },
  {
    name: 'PAKA PAKA',
    img: 'https://i.ibb.co/1nL8XfV/pakapaka.png',
    getURL: 'UEFLQV9QQUtB',
    keyId: '334001b2f2644df9bdf35e92d2b89f8f',
    key: '475ec87d86ed0636dbb6d6d9d4a43bb7',
    number: 18,
    pid: 'LCH3071',
    category: 'Infantil'
  },
  {
    name: 'Discovery Kids',
    img: 'https://i.ibb.co/3dRnK7X/discoverykids.png',
    getURL: 'RGlzY292ZXJ5X0tpZHM=',
    keyId: 'ffb2f0f63c23a3592d4653e938b9ca19',
    key: 'd3661ae881fc55fc7a15815cd439747b',
    number: 19,
    pid: 'LCH3363',
    category: 'Infantil'
  },
  {
    name: 'Cartoon Network',
    img: 'https://i.ibb.co/4TGqfWn/cartoon.png',
    getURL: 'Q2FydG9vbk5ldHdvcms=',
    keyId: 'd7df56efaa36a71141d238854cc46d1d',
    key: '8abb2ee9150d8b2af8ebec0de0f833c8',
    number: 20,
    pid: 'LCH3305',
    category: 'Infantil'
  },
  {
    name: 'Disney Channel',
    img: 'https://i.ibb.co/6yX3q8h/disney.png',
    getURL: 'RGlzbmV5Q2hhbm5lbEhE',
    keyId: '4a742e478d14023e1993e011d9415f94',
    key: '0df77ede9bc744376836d21afa137dda',
    number: 21,
    pid: 'LCH3328',
    category: 'Infantil'
  },
  {
    name: 'Nickelodeon',
    img: 'https://i.ibb.co/3sJqYQh/nick.png',
    getURL: 'Tmlja2Vsb2Rlb24=',
    keyId: '61c18cefecc2d067beaa9ff181305345',
    key: '38d6f650cbf9a38fd9f35c01f98e647a',
    number: 22,
    pid: 'LCH3306',
    category: 'Infantil'
  },
  {
    name: 'Adult Swim',
    img: 'https://i.ibb.co/1nL8XfV/adultswim.png',
    getURL: 'QWR1bHRfU3dpbQ==',
    keyId: '9be1432e1e594c8d0648a44d3d9f0c46',
    key: '8e6c785b14d973c504074b1920f11b15',
    number: 23,
    pid: 'LCH6603',
    category: 'Infantil'
  },
  {
    name: 'Cartoonito',
    img: 'https://i.ibb.co/4TGqfWn/cartoonito.png',
    getURL: 'Qm9vbWVyYW5n',
    keyId: '5792e613fceb699c79cbc0e75fe4cd37',
    key: 'a672793730476ed23e5c1bce2ff570c6',
    number: 24,
    pid: 'LCH3353',
    category: 'Infantil'
  },
  {
    name: 'History',
    img: 'https://i.ibb.co/68Yc6Hf/history.png',
    getURL: 'SGlzdG9yeUhE',
    keyId: 'e82318e518ba70cea3d7b37bef99e692',
    key: 'a05fcb634c071a514e3039e1c274b4db',
    number: 25,
    pid: 'LCH3176',
    category: 'Documentales'
  },
  {
    name: 'Animal Planet',
    img: 'https://i.ibb.co/3dRnK7X/animalplanet.png',
    getURL: 'QW5pbWFsUGxhbmV0',
    keyId: '4146a8ecbb0540dc807c6389ee87e0bc',
    key: '0c3cdc1b3e4617c57361265e9fa4c5bd',
    number: 26,
    pid: 'LCH3893',
    category: 'Documentales'
  },
  {
    name: 'Nat Geo',
    img: 'https://i.ibb.co/6yX3q8h/natgeo.png',
    getURL: 'TmF0R2VvSEQ=',
    keyId: '4be0c61ceddc62294cc9e23b627af53d',
    key: '852c1935d11c3c53d0a1ceff3bb3bf16',
    number: 27,
    pid: 'LCH3322',
    category: 'Documentales'
  },
  {
    name: 'Discovery Channel',
    img: 'https://i.ibb.co/3sJqYQh/discovery.png',
    getURL: 'RGlzY292ZXJ5SEQ=',
    keyId: 'c283c84a7af0d7c8b9b612a8fb22a001',
    key: 'f45510c721eebd6eaa86a2e16ccbd77d',
    number: 28,
    pid: 'LCH3364',
    category: 'Documentales'
  },
  {
    name: 'TLC',
    img: 'https://i.ibb.co/1nL8XfV/tlc.png',
    getURL: 'VExD',
    keyId: '58761c7b2819491eb3a0d765842c341a',
    key: '9dabc48f88bd7f266734e57501bd6f47',
    number: 29,
    pid: 'LCH3897',
    category: 'Documentales'
  },
  {
    name: 'Comedy Central',
    img: 'https://i.ibb.co/4TGqfWn/comedy.png',
    getURL: 'Q29tZWR5Q2VudHJhbA',
    keyId: '4013f784c5ef4318ad47024e61eb094e',
    key: 'bad433a547f97c7f65cda5e83b8dd416',
    number: 30,
    pid: 'LCH3310',
    category: 'Entretenimiento'
  },
  {
    name: 'E Entertainment',
    img: 'https://i.ibb.co/68Yc6Hf/eentertainment.png',
    getURL: 'RV9FbnRlcnRhaW5tZW50X1RlbGV2aXNpb24=',
    keyId: '5883553207f13e3dc8cecd1113d5ba68',
    key: '45434d40636dfa0e5312b93218e02185',
    number: 31,
    pid: 'LCH3282',
    category: 'Entretenimiento'
  },
  {
    name: 'AMC',
    img: 'https://i.ibb.co/3dRnK7X/amc.png',
    getURL: 'QU1D',
    keyId: '1fa6a86fd80b6d1425dde74482b5dc9c',
    key: '744c3636d57a651ab444cf9fe5f95b33',
    number: 32,
    pid: 'LCH3887',
    category: 'Cine'
  },
  {
    name: 'TNT',
    img: 'https://i.ibb.co/6yX3q8h/tnt.png',
    getURL: 'VE5UX0hEX0FyZw==',
    keyId: 'faad1722a575f4d9ec7b774db63c879c',
    key: 'cf0184830344ba36ad2ffef9dd2dd9d0',
    number: 33,
    pid: 'LCH3351',
    category: 'Cine'
  },
  {
    name: 'TNT Series',
    img: 'https://i.ibb.co/3sJqYQh/tntseries.png',
    getURL: 'VE5UU2VyaWVz',
    keyId: '5c14d6aeb19bf113edf91a7b544253cb',
    key: '8d776d6f9c5c840ebe88d767dd731692',
    number: 34,
    pid: 'LCH3352',
    category: 'Series'
  },
  {
    name: 'FX',
    img: 'https://i.ibb.co/1nL8XfV/fx.png',
    getURL: 'RlhIRA==',
    keyId: '9ab9c42c713e0fb5517dc77cc19d6755',
    key: 'd8c271b82387e609b6c19e5e79240aff',
    number: 35,
    pid: 'LCH3321',
    category: 'Series'
  },
  {
    name: 'Studio Universal',
    img: 'https://i.ibb.co/4TGqfWn/studiouniversal.png',
    getURL: 'U3R1ZGlvX1VuaXZlcnNhbA==',
    keyId: 'd9b541e3cd064d569843da42788d4263',
    key: 'bba5d26ad5051fb3f2cf7e3dd8a4a7d8',
    number: 36,
    pid: 'LCH3984',
    category: 'Cine'
  },
  {
    name: 'Warner Bros',
    img: 'https://i.ibb.co/68Yc6Hf/warner.png',
    getURL: 'V2FybmVySEQ=',
    keyId: '069bd3f0b6c279467e08549f17bf5bd0',
    key: '5afa7e369a6de1093818a85af912a775',
    number: 37,
    pid: 'LCH3173',
    category: 'Cine'
  },
  {
    name: 'Cinemax',
    img: 'https://i.ibb.co/3dRnK7X/cinemax.png',
    getURL: 'Q2luZW1heA==',
    keyId: '977928a92b82ba3781741a6470f8f45b',
    key: '51f4e62827c128f7210b79a11587661a',
    number: 38,
    pid: 'LCH3123',
    category: 'Cine'
  },
  {
    name: 'Cinecanal',
    img: 'https://i.ibb.co/6yX3q8h/cinecanal.png',
    getURL: 'Q2luZWNhbmFsSEQ=',
    keyId: '6003e92dd0d9f548329015c9e15dd578',
    key: '213cf85cb5f9fe569757004a77e05948',
    number: 39,
    pid: 'LCH3269',
    category: 'Cine'
  },
  {
    name: 'Sony Channel',
    img: 'https://i.ibb.co/3sJqYQh/sony.png',
    getURL: 'U29ueUhE',
    keyId: 'fd9619f9d7c2d5115a339941279e0b4b',
    key: 'bf55635e6591f905659fa27ab3ca2812',
    number: 40,
    pid: 'LCH3178',
    category: 'Cine'
  },
  {
    name: 'Space',
    img: 'https://i.ibb.co/1nL8XfV/space.png',
    getURL: 'U3BhY2U=',
    keyId: '0942e4ecd1bd3567e8f9447f45c20a12',
    key: 'efca6264f04cf7373de0c30ec79fe909',
    number: 41,
    pid: 'LCH3317',
    category: 'Cine'
  },
  {
    name: 'Star Channel',
    img: 'https://i.ibb.co/4TGqfWn/star.png',
    getURL: 'Rk9YSEQ=',
    keyId: '8023e85ef9d17561ee1b424179b1b15e',
    key: '477ad189f1fcd2baec026068107f862f',
    number: 42,
    pid: 'LCH3268',
    category: 'Cine'
  },
  {
    name: 'Paramount',
    img: 'https://i.ibb.co/68Yc6Hf/paramount.png',
    getURL: 'UGFyYW1vdW50',
    keyId: 'b85b710ecff3e38f31fc8e249b1c1cef',
    key: 'a1544c193dde6f8858c9358ee69a60a7',
    number: 43,
    pid: 'LCH3307',
    category: 'Cine'
  },
  {
    name: 'AXN',
    img: 'https://i.ibb.co/3dRnK7X/axn.png',
    getURL: 'QVhOSEQ=',
    keyId: '03e77b5bbf5135a85d587c5af2f2f730',
    key: '1dd1ab1938a791d03f09eb88478b4880',
    number: 44,
    pid: 'LCH3177',
    category: 'Series'
  },
  {
    name: 'TCM',
    img: 'https://i.ibb.co/6yX3q8h/tcm.png',
    getURL: 'VENN',
    keyId: 'a5f44a5e30714cf3bcee7c7f15a08b4e',
    key: 'c3c141ae941ab9750339c3af45a65ce2',
    number: 45,
    pid: 'LCH3348',
    category: 'Cine'
  },
  {
    name: 'Universal TV',
    img: 'https://i.ibb.co/3sJqYQh/universal.png',
    getURL: 'VW5pdmVyc2FsX0NoYW5uZWxfSEQ=',
    keyId: '6cf9a13d6fd65a0f2e1cee3969aab9f5',
    key: 'ea61c3c1adee71b5c2e9744e41d4b75f',
    number: 46,
    pid: 'LCH3802',
    category: 'Series'
  },
  {
    name: 'HBO',
    img: 'https://i.ibb.co/1nL8XfV/hbo.png',
    getURL: 'SEJPSEQ=',
    keyId: '5317283f4110fac3fb3a0becd9f648bc',
    key: '0754a03c926b1247216e01d9dbcfac28',
    number: 47,
    pid: 'LCH3119',
    category: 'Premium'
  },
  {
    name: 'HBO 2',
    img: 'https://i.ibb.co/4TGqfWn/hbo2.png',
    getURL: 'SEJPXzI=',
    keyId: 'c90cc57ad2c436e5a77db2f8d9db2d85',
    key: '04f6c73984bdcffd013050608497935d',
    number: 48,
    pid: 'LCH3117',
    category: 'Premium'
  },
  {
    name: 'HBO Plus',
    img: 'https://i.ibb.co/68Yc6Hf/hboplus.png',
    getURL: 'SEJPX1BsdXM=',
    keyId: 'f0e7f7d458990edfab7b98b412564615',
    key: '79205754b7f84a62661c2dbe9de5dd5d',
    number: 49,
    pid: 'LCH3121',
    category: 'Premium'
  },
  {
    name: 'HBO Family',
    img: 'https://i.ibb.co/3dRnK7X/hbofamily.png',
    getURL: 'SEJPX0ZhbWlseQ==',
    keyId: '535473132f68082160b489482ca35f8e',
    key: 'e90fd91fcd3fc809bed2b1c0d37f7297',
    number: 50,
    pid: 'LCH3118',
    category: 'Premium'
  },
  {
    name: 'HBO Xtreme',
    img: 'https://i.ibb.co/6yX3q8h/hboxtreme.png',
    getURL: 'SEJPX0V4dHJlbWU=',
    keyId: 'd504011bbef467c0de3a7534e302a6d4',
    key: '334103e2abe16faa7f9ab2e3097c5a58',
    number: 51,
    pid: 'LCH3120',
    category: 'Premium'
  },
  {
    name: 'HBO Mundi',
    img: 'https://i.ibb.co/3sJqYQh/hbomundi.png',
    getURL: 'SEJPX011bmRp',
    keyId: '7821b2662148fe333d5191acbb8a5c1f',
    key: 'ae43f3e2545237ebda58b13813b5d328',
    number: 52,
    pid: 'LCH3128',
    category: 'Premium'
  },
  {
    name: 'HBO POP',
    img: 'https://i.ibb.co/1nL8XfV/hbopop.png',
    getURL: 'SEJPX1BPUA==',
    keyId: 'f4e1ce5cef7e9a110fe968f8881b21fa',
    key: '6bbe2062b150b11496cdd5fbdd9c89d6',
    number: 53,
    pid: 'LCH3129',
    category: 'Premium'
  },
  {
    name: 'HBO Signature',
    img: 'https://i.ibb.co/4TGqfWn/hbosignature.png',
    getURL: 'SEJPX1NpZ25hdHVyZQ==',
    keyId: 'e866499fbc1149f49989672075aa3a68',
    key: 'd2dd5c95623c6343240981c2202fc311',
    number: 54,
    pid: 'LCH3127',
    category: 'Premium'
  },
  {
    name: 'TyC Sports',
    img: 'https://i.ibb.co/68Yc6Hf/tycsports.png',
    getURL: 'VHlDU3BvcnQ',
    keyId: '2b21c8fa9a329cce311a4c4a4aa996a1',
    key: 'cc23ea1fb32629f9e1f48c8deeae3e5b',
    number: 55,
    pid: 'LCH3356',
    category: 'Deportes'
  },
  {
    name: 'Fox Sports',
    img: 'https://i.ibb.co/3dRnK7X/foxsports.png',
    getURL: 'Rm94U3BvcnRz',
    keyId: 'cbc2a0c7a38df0aa3333cd71841d3b0d',
    key: 'aac61b730e2ac1df23f1e872e7541c1b',
    number: 56,
    pid: 'LCH3280',
    category: 'Deportes'
  },
  {
    name: 'Fox Sports 2',
    img: 'https://i.ibb.co/6yX3q8h/foxsports2.png',
    getURL: 'Rm94U3BvcnRzMkhE',
    keyId: 'c98ddffc470fe449ae1a8d6492116976',
    key: '5086d370e840010232cf4532b16e197f',
    number: 57,
    pid: 'LCH3320',
    category: 'Deportes'
  },
  {
    name: 'Fox Sports 3',
    img: 'https://i.ibb.co/3sJqYQh/foxsports3.png',
    getURL: 'Rm94U3BvcnRzM0hE',
    keyId: '55b47390cf9e4997dae6dac85e057875',
    key: 'fa39e855543c5d70f30600d59e5e4c1b',
    number: 58,
    pid: 'LCH3308',
    category: 'Deportes'
  },
  {
    name: 'TNT Sports',
    img: 'https://i.ibb.co/1nL8XfV/tntsports.png',
    getURL: 'VE5UX1Nwb3J0c19IRA',
    keyId: 'bc80fa3da696e503f940fde5f681a1c5',
    key: 'ea46e4e9f1132e8dd71fb77f7d55058a',
    number: 59,
    pid: 'LCH3349',
    category: 'Deportes'
  },
  {
    name: 'ESPN Premium',
    img: 'https://i.ibb.co/4TGqfWn/espnpremium.png',
    getURL: 'Rm94X1Nwb3J0c19QcmVtaXVuX0hE',
    keyId: '4c230dbc7f6a4bfa6ad0aa73ff792374',
    key: '4186a7c2a15f590a9399886feaec4257',
    number: 60,
    pid: 'LCH3281',
    category: 'Deportes'
  },
  {
    name: 'ESPN',
    img: 'https://i.ibb.co/68Yc6Hf/espn.png',
    getURL: 'RVNQTjJIRA',
    keyId: 'e884b711ab111beb8a7ba1e7bcbdc9bf',
    key: 'cb89ee3961599e3e648a5aad60895f34',
    number: 61,
    pid: 'LCH3175',
    category: 'Deportes'
  },
  {
    name: 'ESPN 2',
    img: 'https://i.ibb.co/3dRnK7X/espn2.png',
    getURL: 'RVNQTjJfQXJn',
    keyId: '65a5bfa3c7a72dde60be9b0c7406c8fc',
    key: '0b40ae9f78a7bac3b57ecbf72d3c081e',
    number: 62,
    pid: 'LCH3125',
    category: 'Deportes'
  },
  {
    name: 'ESPN 3',
    img: 'https://i.ibb.co/6yX3q8h/espn3.png',
    getURL: 'RVNQTjM',
    keyId: 'f4c9f97e2a36feab0e5077f2b44cbc4e',
    key: '1743cd03dfe3736b2c95da91a783af38',
    number: 63,
    pid: 'LCH3124',
    category: 'Deportes'
  },
  {
    name: 'ESPN 4',
    img: 'https://i.ibb.co/3sJqYQh/espn4.png',
    getURL: 'RVNQTkhE',
    keyId: 'cc8d44406ed6bf1898ad9f7a2d64f29e',
    key: 'fb85d059687ab0fc67805806204edbdf',
    number: 64,
    pid: 'LCH3179',
    category: 'Deportes'
  },
  {
    name: 'DEPORTV',
    img: 'https://i.ibb.co/1nL8XfV/deportv.png',
    getURL: 'RGVwb3JUVkhE',
    keyId: 'f362097815892a4b83950f1d106ff0b2',
    key: '4349e42e81c31a8389f4a42fcd298928',
    number: 65,
    category: 'Deportes'
  },
  {
    name: 'NBA TV',
    img: 'https://i.ibb.co/4TGqfWn/nbatv.png',
    getURL: 'TkJBX1RW',
    keyId: 'd0c38de3c9844e4e9f975dffb3eff8ad',
    key: '141ca0fdf6ebadfa7107576b8e09e117',
    number: 66,
    category: 'Deportes'
  },
  {
    name: 'MTV',
    img: 'https://i.ibb.co/68Yc6Hf/mtv.png',
    getURL: 'TVRWX0hE',
    keyId: '0c9eb3ead38a122ac460ad96a8ebfd2e',
    key: '66bfbfa4449eb8bc1bcf7577d5bffaad',
    number: 67,
    pid: 'LCH3303',
    category: 'Musica'
  },
  {
    name: 'hTV',
    img: 'https://i.ibb.co/3dRnK7X/htv.png',
    getURL: 'SFRW',
    keyId: 'daecef5fe32f4ce083c6a0c692755d6a',
    key: 'd4227f24389a9ba77293214b93eb0d7d',
    number: 68,
    pid: 'LCH3350',
    category: 'Musica'
  },
  {
    name: 'Quiero Musica',
    img: 'https://i.ibb.co/6yX3q8h/quiero.png',
    getURL: 'UXVpZXJvX0hE',
    keyId: 'a354b0c82a3a720c4a6f52ed5a1190f4',
    key: '45a76dcc84f058cfabc8b958d7303b28',
    number: 69,
    pid: 'LCH3868',
    category: 'Musica'
  },
  {
    name: 'Lifetime',
    img: 'https://i.ibb.co/3sJqYQh/lifetime.png',
    getURL: 'TGlmZXRpbWU=',
    keyId: 'eae51b1d67ff47adac7b6bd3a4b1120a',
    key: 'b4d6bb47193f33ffc12379cdc447455d',
    number: 70,
    pid: 'LCH3172',
    category: 'Entretenimiento'
  },
  {
    name: 'Antena 3',
    img: 'https://i.ibb.co/1nL8XfV/antena3.png',
    getURL: 'QW50ZW5hXzM=',
    keyId: '1e1ad422a6714482b66fa702c16e50c6',
    key: '4fdf28a0ab91356ca55a75f4e9bf8c92',
    number: 71,
    pid: 'LCH3078',
    category: 'Internacionales'
  },
  {
    name: 'BBC World News',
    img: 'https://i.ibb.co/4TGqfWn/bbc.png',
    getURL: 'QkJDX1dvcmxkX05ld3M',
    keyId: '019f72f2091d4cbea59ff8c85b117f86',
    key: 'a4eac51195506752f9f63ad24def9c37',
    number: 72,
    pid: 'LCH3076',
    category: 'Internacionales'
  },
  {
    name: 'TV Espana',
    img: 'https://i.ibb.co/68Yc6Hf/tve.png',
    getURL: 'VFZfRXNwYW5h',
    keyId: '53e0a3741e2e4ff5843f165b53309088',
    key: '45095caabd9a359cd7ea3910d865d643',
    number: 73,
    pid: 'LCH3341',
    category: 'Internacionales'
  },
  {
    name: 'Canal de las Estrellas',
    img: 'https://i.ibb.co/3dRnK7X/lasestrellas.png',
    getURL: 'Q2FuYWxfZGVfbGFzX2VzdHJlbGxhcw==',
    keyId: 'b37d85be9d2b4b619f945beff713fda3',
    key: '917309c98f072b0bd484dd6560c6d166',
    number: 74,
    category: 'Internacionales'
  },
  {
    name: 'Telesur',
    img: 'https://i.ibb.co/3sJqYQh/telesur.png',
    getURL: 'VGVsZXN1cg==',
    keyId: '5235d8ee29f14ce6b26ea5d828aee77a',
    key: '6bf6bd339e3098babc2ab0b984cd2376',
    number: 75,
    category: 'Internacionales'
  },
  {
    name: 'Rai Italia',
    img: 'https://i.ibb.co/6yX3q8h/rai.png',
    getURL: 'UkFJ',
    keyId: 'd214547d7d9a4011a39a899ce6e70071',
    key: '16c2ed0617cf1e123f3af6ea8875a82d',
    number: 76,
    pid: 'LCH3987',
    category: 'Internacionales'
  },
  {
    name: 'Food Network',
    img: 'https://i.ibb.co/1nL8XfV/foodnetwork.png',
    getURL: 'Rm9vZF9OZXR3b3Jr',
    keyId: '6ca0fbad21a0e908c0280dcc27e6ee0e',
    key: '62670eedbafdf9360b4ecaed738e26cd',
    number: 77,
    pid: 'LCH3342',
    category: 'Gourmet'
  },
  {
    name: 'Gourmet',
    img: 'https://i.ibb.co/4TGqfWn/gourmet.png',
    getURL: 'R291cm1ldA==',
    keyId: '93d853ac4c8e24cf0295f6f97ee53bd3',
    key: 'fa5817fab4fb054ccea1abb9f3d767ed',
    number: 78,
    pid: 'LCH3312',
    category: 'Gourmet'
  },
  {
    name: 'Canal 12 Cordoba',
    img: 'https://i.ibb.co/3dRnK7X/eldoce.png',
    getURL: 'Q2FuYWxfMTJfQ0JB',
    keyId: '90422640d3e846159fa450f83870ed4a',
    key: 'abb3cd94aece1a462df25a8f21085cca',
    number: 79,
    category: 'Interior'
  },
  {
    name: 'Telefe Cordoba',
    img: 'https://i.ibb.co/68Yc6Hf/telefe.png',
    getURL: 'Q2FuYWxfOF9DQkE',
    keyId: '103ce214b4d04c8eb4dd43670e956dad',
    key: '20e030576b8dc4df0d1c68e16af3bc0f',
    number: 80,
    category: 'Interior'
  },
  {
    name: 'Telefe Rosario',
    img: 'https://i.ibb.co/3sJqYQh/telefe.png',
    getURL: 'Q2FuYWxfNV9Sb3Nhcmlv',
    keyId: 'c61b5ac8e1664bf5b544e92ea2597e1c',
    key: '938437ac25f0a18e04efc1a083489edc',
    number: 81,
    category: 'Interior'
  },
  {
    name: 'Canal 7 Neuquen',
    img: 'https://i.ibb.co/6yX3q8h/canal7.png',
    getURL: 'VGVsZWZlX05ldXF1ZW4=',
    keyId: '55828b728b8affe6d1d57d050025645d',
    key: '8ac11ed6d0ccaeac3f8218419f65bb94',
    number: 82,
    category: 'Interior'
  },
  {
    name: 'Canal 4 Uruguay',
    img: 'https://i.ibb.co/3dRnK7X/canal4.png',
    getURL: 'Q2FuYWw0X1VSVQ==',
    keyId: 'dabefaac89742589778fcfab78f08354',
    key: '896dd914683b01c8044ffd34d7b6416b',
    number: 83,
    category: 'Internacionales'
  },
  {
    name: 'Canal 10 Uruguay',
    img: 'https://i.ibb.co/1nL8XfV/canal10.png',
    getURL: 'Q2FuYWwxMF9VUlU=',
    keyId: '8dd34782d754f8fcb1e8b38da9ffad0b',
    key: '6fb97467c0f0ea13f86d41a70e029c51',
    number: 84,
    category: 'Internacionales'
  },
  {
    name: 'Canal 12 Uruguay',
    img: 'https://i.ibb.co/4TGqfWn/canal12.png',
    getURL: 'Q2FuYWwxMlVSVQ==',
    keyId: 'dfde9d35d7438bfdf61da5dfac0557c1',
    key: 'acb13370c03a7254e2bb9cc9d2125017',
    number: 85,
    category: 'Internacionales'
  },
  {
    name: 'Paraguay TV',
    img: 'https://i.ibb.co/68Yc6Hf/pytv.png',
    getURL: 'UGFyYWd1YXlfVFY=',
    keyId: '68a5bd6c58e6c05bacfd18d3feec31f2',
    key: 'ae23f8357512df2dfabcb8104b078182',
    number: 86,
    category: 'Internacionales'
  },
  {
    name: 'Trece Paraguay',
    img: 'https://i.ibb.co/3sJqYQh/trecepy.png',
    getURL: 'UlBDX0M0',
    keyId: 'a8093cdcb2d504bd38f16764bd21b6e5',
    key: 'bfcf3b033b5f0b5ae020751a6746326f',
    number: 87,
    category: 'Internacionales'
  },
  {
    name: 'Fox News',
    img: 'https://i.ibb.co/3dRnK7X/foxnews.png',
    getURL: 'Rm94X05ld3M=',
    keyId: '3fe3f31a5e7b48a1b548e9364757ce66',
    key: '32993fc281207fe915f6f1e990957868',
    number: 88,
    category: 'Internacionales'
  },
  {
    name: 'Mas Chic',
    img: 'https://i.ibb.co/6yX3q8h/maschic.png',
    getURL: 'TWFzX0NoaWM=',
    keyId: 'dac8ff1688994efd898222acdd05cafc',
    key: '22fdf97c7233667518258ed16ccb2545',
    number: 89,
    pid: 'LCH3888',
    category: 'Estilo'
  }
];

const CATEGORIES = [
  'Todos',
  'Nacionales',
  'Noticias',
  'Deportes',
  'Cine',
  'Series',
  'Premium',
  'Infantil',
  'Documentales',
  'Entretenimiento',
  'Musica',
  'Internacionales',
  'Interior',
  'Educacion',
  'Gourmet',
  'Estilo'
];
