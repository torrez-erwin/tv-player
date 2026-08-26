const CHANNELS = [
  {
    name: "TIGO 24/7  Opc.2",
    url: "http://45.170.130.224:8000/play/a04k/index.m3u8",
    type: "HLS",
    category: "FUTBOL LOCAL",
    number: 1
  },
  {
    name: "Tigo Sport 24/7 Opc. 3",
    url: "https://stmv1.voxtvhd.com.br/toplatin1/toplatin1/playlist.m3u8",
    type: "HLS",
    category: "FUTBOL LOCAL",
    number: 2
  },
  {
    name: "ESPN Disney+ 1",
    url: "http://cablemaxsigloxxi.com:8000/play/a0t6/index.m3u8?hls",
    type: "HLS",
    category: "ESPN DISNEY+",
    number: 3
  },
  {
    name: "ESPN Disney+ 2",
    url: "http://cablemaxsigloxxi.com:8000/play/a0t5/index.m3u8?hls",
    type: "HLS",
    category: "ESPN DISNEY+",
    number: 4
  },
  {
    name: "ESPN Disney+ 3",
    url: "https://cablemaxsigloxxi.com:8000/play/a07p/index.m3u8?hls",
    type: "HLS",
    category: "ESPN DISNEY+",
    number: 5
  },
  {
    name: "ESPN Disney+ 6",
    url: "http://186.33.54.46:8000/play/a01c/index.m3u8",
    type: "HLS",
    category: "ESPN DISNEY+",
    number: 6
  },
  {
    name: "ESPN Disney+ 4",
    url: "http://cablemaxsigloxxi.com:8000/play/a075/index.m3u8?hls",
    type: "HLS",
    category: "ESPN DISNEY+",
    number: 7
  },
  {
    name: "ESPN Disney+ 5",
    url: "http://cablemaxsigloxxi.com:8000/play/a0t1/index.m3u8?hls",
    type: "HLS",
    category: "ESPN DISNEY+",
    number: 8
  },
  {
    name: "ESPN Disney+ 7",
    url: "http://cablemaxsigloxxi.com:8000/play/a0l5/index.m3u8?hls",
    type: "HLS",
    category: "ESPN DISNEY+",
    number: 9
  },
  {
    name: "AL NASSR VS AL HILAL",
    url: "https://aegis-cloudfront-1.tubi.video/62883227-8fc8-4992-97ff-614d283b4789/playlist.m3u8",
    type: "HLS",
    category: "EVENTOS DEL DIA",
    number: 10
  },
  {
    name: "SNT",
    url: "https://d2qsan2ut81n2k.cloudfront.net/live/2e1f1b6a-9d03-4194-8559-2eabe61a1555/ts:abr.m3u8",
    type: "HLS",
    category: "CANALES PARAGUAYO",
    number: 11
  },
  {
    name: "CNN ESPA\u00d1OL",
    url: "http://45.170.130.224:8000/play/a01b/index.m3u8",
    type: "HLS",
    category: "CANALES PARAGUAYO",
    number: 12
  },
  {
    name: "SNT SD",
    url: "http://45.170.130.224:8000/play/a013/index.m3u8",
    type: "HLS",
    category: "CANALES PARAGUAYO",
    number: 13
  },
  {
    name: "C9N",
    url: "https://d1y0t05eznkmpn.cloudfront.net/index.m3u8",
    type: "HLS",
    category: "CANALES PARAGUAYO",
    number: 14
  },
  {
    name: "C9N SD",
    url: "http://45.170.130.224:8000/play/a033/index.m3u8",
    type: "HLS",
    category: "CANALES PARAGUAYO",
    number: 15
  },
  {
    name: "TELEFUTURO",
    url: "https://rds3gen.desdeparaguay.net/telefuturo/telefuturo_alta/index.m3u8?admin=tvaccion",
    type: "HLS",
    category: "CANALES PARAGUAYO",
    number: 16
  },
  {
    name: "TELEFUTURO PY SD",
    url: "http://45.170.130.224:8000/play/a04m/index.m3u8",
    type: "HLS",
    category: "CANALES PARAGUAYO",
    number: 17
  },
  {
    name: "NPY",
    url: "https://rds3gen.desdeparaguay.net/npy/npy_py_alta/playlist.m3u8?admin=tvaccion",
    type: "HLS",
    category: "CANALES PARAGUAYO",
    number: 18
  },
  {
    name: "NPY SD",
    url: "http://45.170.130.224:8000/play/a035/index.m3u8",
    type: "HLS",
    category: "CANALES PARAGUAYO",
    number: 19
  },
  {
    name: "GEN TV",
    url: "https://rds3gen.desdeparaguay.net/gentv/gentv_py_alta/chunklist.m3u8?admin=nacion",
    type: "HLS",
    category: "CANALES PARAGUAYO",
    number: 20
  },
  {
    name: "GEN HD",
    url: "http://45.170.130.224:8000/play/a04j/index.m3u8",
    type: "HLS",
    category: "CANALES PARAGUAYO",
    number: 21
  },
  {
    name: "MONUMENTAL AM 1080 TV",
    url: "https://rds3gen.desdeparaguay.net/monumentaltv/monumentaltv_med/playlist.m3u8?admin=tvaccion",
    type: "HLS",
    category: "CANALES PARAGUAYO",
    number: 22
  },
  {
    name: "LA TELE HD",
    url: "https://rds3gen.desdeparaguay.net/latele/latele_py_alta/playlist.m3u8?admin=tvaccion",
    type: "HLS",
    category: "CANALES PARAGUAYO",
    number: 23
  },
  {
    name: "LA TELE SD",
    url: "http://45.170.130.224:8000/play/a03u/index.m3u8",
    type: "HLS",
    category: "CANALES PARAGUAYO",
    number: 24
  },
  {
    name: "SUR TV  SD",
    url: "http://45.170.130.224:8000/play/a036/index.m3u8",
    type: "HLS",
    category: "CANALES PARAGUAYO",
    number: 25
  },
  {
    name: "AMERICA TV PY",
    url: "http://45.170.130.224:8000/play/a02o/index.m3u8",
    type: "HLS",
    category: "CANALES PARAGUAYO",
    number: 26
  },
  {
    name: "HEI",
    url: "https://rds3gen.desdeparaguay.net/heitv/heitv_py_alta/playlist.m3u8?admin=nacion",
    type: "HLS",
    category: "CANALES PARAGUAYO",
    number: 27
  },
  {
    name: "POPU TV",
    url: "https://rds3gen.desdeparaguay.net/universotv/universotv_py_alta/chunklist.m3u8?admin=nacion",
    type: "HLS",
    category: "CANALES PARAGUAYO",
    number: 28
  },
  {
    name: "PARAGUAY TV SD",
    url: "http://45.170.130.224:8000/play/a02r/index.m3u8",
    type: "HLS",
    category: "CANALES PARAGUAYO",
    number: 29
  },
  {
    name: "E40",
    url: "https://rds3gen.desdeparaguay.net/e40tv/e40tv_py_alta/playlist.m3u8?admin=tvaccion",
    type: "HLS",
    category: "CANALES PARAGUAYO",
    number: 30
  },
  {
    name: "PROBANDO",
    url: "http://45.170.130.224:8000/play/a04i/index.m3u8",
    type: "HLS",
    category: "CANALES PARAGUAYO",
    number: 31
  },
  {
    name: "PARAVISION  SD",
    url: "http://45.170.130.224:8000/play/a032/index.m3u8",
    type: "HLS",
    category: "CANALES PARAGUAYO",
    number: 32
  },
  {
    name: "\u00d1ANDUTI TV",
    url: "https://rds3gen.desdeparaguay.net/nandutitv/nandutitv_baja/playlist.m3u8",
    type: "HLS",
    category: "PARAGUAY",
    number: 33
  },
  {
    name: "UNION TV",
    url: "https://copacogen.desdeparaguay.net/800tv/800tv/playlist.m3u8",
    type: "HLS",
    category: "PARAGUAY",
    number: 34
  },
  {
    name: "TELEFE Arg",
    url: "http://181.13.252.102:8000/play/a06c/index.m3u8",
    type: "HLS",
    category: "ARGENTINA\ud83c\udde6\ud83c\uddf7",
    number: 35
  },
  {
    name: "AMERICA TV  Arg",
    url: "http://181.209.105.115:2525/play/america/index.m3u8",
    type: "HLS",
    category: "ARGENTINA\ud83c\udde6\ud83c\uddf7",
    number: 36
  },
  {
    name: "EL TRECE HD Arg",
    url: "https://livetrx01.vodgc.net/eltrecetv/index.m3u8",
    type: "HLS",
    category: "ARGENTINA\ud83c\udde6\ud83c\uddf7",
    number: 37
  },
  {
    name: "C5N Arg",
    url: "http://181.13.252.102:8000/play/a01p/index.m3u8",
    type: "HLS",
    category: "ARGENTINA\ud83c\udde6\ud83c\uddf7",
    number: 38
  },
  {
    name: "CRONICA",
    url: "http://181.209.105.115:2525/play/cronica/index.m3u8",
    type: "HLS",
    category: "ARGENTINA\ud83c\udde6\ud83c\uddf7",
    number: 39
  },
  {
    name: "TN HD Arg",
    url: "http://181.209.105.115:2525/play/tn/index.m3u8",
    type: "HLS",
    category: "ARGENTINA\ud83c\udde6\ud83c\uddf7",
    number: 40
  },
  {
    name: "AR|12",
    url: "http://190.7.19.197:232/play/a00o/index.m3u8",
    type: "HLS",
    category: "ARGENTINA\ud83c\udde6\ud83c\uddf7",
    number: 41
  },
  {
    name: "EL TRECE",
    url: "https://livetrx01.vodgc.net/eltrecetv/index.m3u8",
    type: "HLS",
    category: "ARGENTINA\ud83c\udde6\ud83c\uddf7",
    number: 42
  },
  {
    name: "CNN ESPA\u00d1OL",
    url: "http://181.13.252.102:8000/play/a054/index.m3u8",
    type: "HLS",
    category: "INTERNACIONALES",
    number: 43
  },
  {
    name: "C5N ARG",
    url: "http://181.13.252.102:8000/play/a01p/index.m3u8",
    type: "HLS",
    category: "INTERNACIONALES",
    number: 44
  },
  {
    name: "GALICIA TV",
    url: "http://181.13.252.102:8000/play/a02q/index.m3u8",
    type: "HLS",
    category: "INTERNACIONALES",
    number: 45
  },
  {
    name: "RAI ITALIA",
    url: "http://181.13.252.102:8000/play/a02p/index.m3u8",
    type: "HLS",
    category: "INTERNACIONALES",
    number: 46
  },
  {
    name: "TVE",
    url: "http://181.13.252.102:8000/play/a072/index.m3u8",
    type: "HLS",
    category: "INTERNACIONALES",
    number: 47
  },
  {
    name: "RT ESPA\u00d1OL",
    url: "http://181.13.252.102:8000/play/a0ac/index.m3u8",
    type: "HLS",
    category: "INTERNACIONALES",
    number: 48
  },
  {
    name: "CNN CHILE",
    url: "http://45.170.130.224:8000/play/a00y/index.m3u8",
    type: "HLS",
    category: "INTERNACIONALES",
    number: 49
  },
  {
    name: "CNN BRASIL",
    url: "https://d25usgadhphvwi.cloudfront.net/hls/main.m3u8",
    type: "HLS",
    category: "INTERNACIONALES",
    number: 50
  },
  {
    name: "GRAN HERMANO",
    url: "https://dplatino.net:80/live/B002F0072A7E/02F0072A7EB0/454927.m3u8",
    type: "HLS",
    category: "GRAN HERMANO ARG.",
    number: 51
  },
  {
    name: "ESPN PREMIUM",
    url: "http://181.13.252.102:8000/play/a078/index.m3u8",
    type: "HLS",
    category: "DEPORTES ESPN Y FOX SPORT ARGENTINA\ud83c\udde6\ud83c\uddf7",
    number: 52
  },
  {
    name: "FOX SPORT AR",
    url: "http://45.5.151.147:8000/play/a00n/index.m3u8?hls",
    type: "HLS",
    category: "DEPORTES ESPN Y FOX SPORT ARGENTINA\ud83c\udde6\ud83c\uddf7",
    number: 53
  },
  {
    name: "FOX SPORT 2",
    url: "http://45.5.151.147:8000/play/a00o/index.m3u8?hls",
    type: "HLS",
    category: "DEPORTES ESPN Y FOX SPORT ARGENTINA\ud83c\udde6\ud83c\uddf7",
    number: 54
  },
  {
    name: "FOX SPORT 3",
    url: "http://45.5.151.147:8000/play/a00p/index.m3u8?hls",
    type: "HLS",
    category: "DEPORTES ESPN Y FOX SPORT ARGENTINA\ud83c\udde6\ud83c\uddf7",
    number: 55
  },
  {
    name: "ESPN PREMIUM IPTV",
    url: "http://45.5.151.147:8000/play/a00m/index.m3u8?hls",
    type: "HLS",
    category: "DEPORTES ESPN Y FOX SPORT ARGENTINA\ud83c\udde6\ud83c\uddf7",
    number: 56
  },
  {
    name: "Directv sport 1",
    url: "http://177.53.152.117:8000/play/a07f/index.m3u8",
    type: "HLS",
    category: "Directv Sport \ud83c\udde6\ud83c\uddf7",
    number: 57
  },
  {
    name: "Directv Sport plus",
    url: "http://45.170.130.224:8000/play/a06h/index.m3u8",
    type: "HLS",
    category: "Directv Sport \ud83c\udde6\ud83c\uddf7",
    number: 58
  },
  {
    name: "Motor Sur\ud83c\uddf5\ud83c\uddfe\ud83c\udfce",
    url: "https://edge.enhdtv.com/8116/index.m3u8",
    type: "HLS",
    category: "\ud83c\udfceDeportes Motors\ud83c\udfc1",
    number: 59
  },
  {
    name: "RALLY TV",
    url: "https://dms.redbull.tv/v5/destination/rallytv/07f960dc-fd36-466c-971f-64a597518b83/personal_computer/http/us/es_US/playlist.m3u8",
    type: "HLS",
    category: "\ud83c\udfceDeportes Motors\ud83c\udfc1",
    number: 60
  },
  {
    name: "FOX ONE",
    url: "https://live-manifest.production-public.tubi.io/live/35557bb9-7c94-40ea-85f7-c94d852f8374/playlist.m3u8",
    type: "HLS",
    category: "DEPORTE MEXICO\ud83c\uddf2\ud83c\uddfd",
    number: 61
  },
  {
    name: "FOX ONE EXTRA",
    url: "https://live-manifest.production-public.tubi.io/live/13a764a8-a91d-4a17-a7f7-ee99250598b5/playlist.m3u8",
    type: "HLS",
    category: "DEPORTE MEXICO\ud83c\uddf2\ud83c\uddfd",
    number: 62
  },
  {
    name: "FOX ONE 2",
    url: "http://74.208.30.121/a181/tracks-v1a1/mono.m3u8",
    type: "HLS",
    category: "DEPORTE MEXICO\ud83c\uddf2\ud83c\uddfd",
    number: 63
  },
  {
    name: "ESPN 1",
    url: "http://45.170.130.224:8000/play/a01y/index.m3u8",
    type: "HLS",
    category: "DEPORTE ARGENTINA SAT",
    number: 64
  },
  {
    name: "ESPN 2 Latin",
    url: "http://45.170.130.224:8000/play/a01x/index.m3u8",
    type: "HLS",
    category: "DEPORTE ARGENTINA SAT",
    number: 65
  },
  {
    name: "ESPN 3",
    url: "http://45.170.130.224:8000/play/a03s/index.m3u8",
    type: "HLS",
    category: "DEPORTE ARGENTINA SAT",
    number: 66
  },
  {
    name: "ESPN 4sd",
    url: "http://45.170.130.224:8000/play/a02k/index.m3u8",
    type: "HLS",
    category: "DEPORTE ARGENTINA SAT",
    number: 67
  },
  {
    name: "ESPN 4",
    url: "http://45.170.130.224:8000/play/a01w/index.m3u8",
    type: "HLS",
    category: "DEPORTE ARGENTINA SAT",
    number: 68
  },
  {
    name: "ESPN CO",
    url: "http://45.170.130.224:8000/play/a034/index.m3u8",
    type: "HLS",
    category: "DEPORTE ARGENTINA SAT",
    number: 69
  },
  {
    name: "TIGO EVENTOS",
    url: "http://45.170.130.224:8000/play/a04l/index.m3u8",
    type: "HLS",
    category: "DEPORTE ARGENTINA SAT",
    number: 70
  },
  {
    name: "EVENTOS HD",
    url: "http://45.170.130.224:8000/play/a04k/index.m3u8",
    type: "HLS",
    category: "DEPORTE ARGENTINA SAT",
    number: 71
  },
  {
    name: "ESPN 7",
    url: "http://45.170.130.224:8000/play/a027/index.m3u8",
    type: "HLS",
    category: "DEPORTE ARGENTINA SAT",
    number: 72
  },
  {
    name: "FOX SPORTS 3",
    url: "http://45.170.130.224:8000/play/a028/index.m3u8",
    type: "HLS",
    category: "DEPORTE ARGENTINA SAT",
    number: 73
  },
  {
    name: "TyC Sports",
    url: "http://45.170.130.224:8000/play/a020/index.m3u8",
    type: "HLS",
    category: "DEPORTE ARGENTINA SAT",
    number: 74
  },
  {
    name: "ESPN 1",
    url: "http://38.187.2.124:8000/play/a00y/index.m3u8?hls",
    type: "HLS",
    category: "DEPORTE PER\u00da\ud83c\uddf5\ud83c\uddea",
    number: 75
  },
  {
    name: "ESPN 2",
    url: "http://38.187.2.124:8000/play/a01d/index.m3u8?hls",
    type: "HLS",
    category: "DEPORTE PER\u00da\ud83c\uddf5\ud83c\uddea",
    number: 76
  },
  {
    name: "Espn 3",
    url: "http://38.187.2.124:8000/play/a01n/index.m3u8?hls",
    type: "HLS",
    category: "DEPORTE PER\u00da\ud83c\uddf5\ud83c\uddea",
    number: 77
  },
  {
    name: "ESPN 4",
    url: "http://38.187.2.124:8000/play/a00i/index.m3u8?hls",
    type: "HLS",
    category: "DEPORTE PER\u00da\ud83c\uddf5\ud83c\uddea",
    number: 78
  },
  {
    name: "ESPN 5",
    url: "http://38.187.2.124:8000/play/a01e/index.m3u8?hls",
    type: "HLS",
    category: "DEPORTE PER\u00da\ud83c\uddf5\ud83c\uddea",
    number: 79
  },
  {
    name: "ESPN 6",
    url: "http://38.187.2.124:8000/play/a017/index.m3u8?hls",
    type: "HLS",
    category: "DEPORTE PER\u00da\ud83c\uddf5\ud83c\uddea",
    number: 80
  },
  {
    name: "ESPN 7",
    url: "http://38.187.2.124:8000/play/a00b/index.m3u8?hls",
    type: "HLS",
    category: "DEPORTE PER\u00da\ud83c\uddf5\ud83c\uddea",
    number: 81
  },
  {
    name: "LIGA 1 MAX",
    url: "http://38.224.231.47:8000/play/a06a/index.m3u8",
    type: "HLS",
    category: "DEPORTE PER\u00da\ud83c\uddf5\ud83c\uddea",
    number: 82
  },
  {
    name: "ESPN PREMIUN",
    url: "http://38.187.2.124:8000/play/a010/index.m3u8?hls",
    type: "HLS",
    category: "DEPORTE PER\u00da\ud83c\uddf5\ud83c\uddea",
    number: 83
  },
  {
    name: "Dazn la liga",
    url: "http://cb163385.amazzin.pw/iptv/MLLNWFWVC3H9YNUQTDBDHZGK/31856/index.m3u8",
    type: "HLS",
    category: "DEPORTE ESPA\u00d1A\ud83c\uddea\ud83c\uddf8",
    number: 84
  },
  {
    name: "ESPN 1",
    url: "http://190.93.229.30:8000/play/a0fw/index.m3u8",
    type: "HLS",
    category: "DEPORTE CHILE\ud83c\udde8\ud83c\uddf1",
    number: 85
  },
  {
    name: "ESPN 2",
    url: "http://190.93.229.30:8000/play/a0ba/index.m3u8",
    type: "HLS",
    category: "DEPORTE CHILE\ud83c\udde8\ud83c\uddf1",
    number: 86
  },
  {
    name: "ESPN 3",
    url: "http://190.93.229.30:8000/play/a0f6/index.m3u8",
    type: "HLS",
    category: "DEPORTE CHILE\ud83c\udde8\ud83c\uddf1",
    number: 87
  },
  {
    name: "ESPN 4",
    url: "http://190.93.229.30:8000/play/a0hz/index.m3u8",
    type: "HLS",
    category: "DEPORTE CHILE\ud83c\udde8\ud83c\uddf1",
    number: 88
  },
  {
    name: "ESPN 5",
    url: "http://190.93.229.30:8000/play/a0bb/index.m3u8",
    type: "HLS",
    category: "DEPORTE CHILE\ud83c\udde8\ud83c\uddf1",
    number: 89
  },
  {
    name: "ESPN 6",
    url: "http://190.93.229.30:8000/play/a0b4/index.m3u8",
    type: "HLS",
    category: "DEPORTE CHILE\ud83c\udde8\ud83c\uddf1",
    number: 90
  },
  {
    name: "ESPN 7",
    url: "http://190.93.229.30:8000/play/a0hs/index.m3u8",
    type: "HLS",
    category: "DEPORTE CHILE\ud83c\udde8\ud83c\uddf1",
    number: 91
  },
  {
    name: "ESPN PREMIUM",
    url: "http://190.93.229.30:8000/play/a0fd/index.m3u8",
    type: "HLS",
    category: "DEPORTE CHILE\ud83c\udde8\ud83c\uddf1",
    number: 92
  },
  {
    name: "ESPN 1",
    url: "http://45.188.229.33:8000/play/a1ac/index.m3u8?hls",
    type: "HLS",
    category: "DEPORTE ECUADOR\ud83c\uddea\ud83c\udde8",
    number: 93
  },
  {
    name: "ESPN 2",
    url: "http://45.188.229.33:8000/play/a1ab/index.m3u8?hls",
    type: "HLS",
    category: "DEPORTE ECUADOR\ud83c\uddea\ud83c\udde8",
    number: 94
  },
  {
    name: "ESPN 3",
    url: "http://45.188.229.33:8000/play/a1b0/index.m3u8?hls",
    type: "HLS",
    category: "DEPORTE ECUADOR\ud83c\uddea\ud83c\udde8",
    number: 95
  },
  {
    name: "ESPN 4",
    url: "http://45.188.229.33:8000/play/a10g/index.m3u8?hls",
    type: "HLS",
    category: "DEPORTE ECUADOR\ud83c\uddea\ud83c\udde8",
    number: 96
  },
  {
    name: "ESPN 5",
    url: "http://45.188.229.33:8000/play/a12n/index.m3u8?hls",
    type: "HLS",
    category: "DEPORTE ECUADOR\ud83c\uddea\ud83c\udde8",
    number: 97
  },
  {
    name: "ESPN 6",
    url: "http://45.188.229.33:8000/play/a12h/index.m3u8?hls",
    type: "HLS",
    category: "DEPORTE ECUADOR\ud83c\uddea\ud83c\udde8",
    number: 98
  },
  {
    name: "ESPN 7",
    url: "http://45.188.229.33:8000/play/a1ey/index.m3u8?hls",
    type: "HLS",
    category: "DEPORTE ECUADOR\ud83c\uddea\ud83c\udde8",
    number: 99
  },
  {
    name: "ESPN 1",
    url: "http://181.118.158.103:8000/play/a038/index.m3u8?hls",
    type: "HLS",
    category: "ESPN COLOMBIA\ud83c\udde8\ud83c\uddf4",
    number: 100
  },
  {
    name: "ESPN 2",
    url: "http://181.118.158.103:8000/play/a039/index.m3u8?hls",
    type: "HLS",
    category: "ESPN COLOMBIA\ud83c\udde8\ud83c\uddf4",
    number: 101
  },
  {
    name: "ESPN 3",
    url: "http://181.118.158.103:8000/play/a03a/index.m3u8?hls",
    type: "HLS",
    category: "ESPN COLOMBIA\ud83c\udde8\ud83c\uddf4",
    number: 102
  },
  {
    name: "ESPN 4",
    url: "http://181.78.8.199:8000/play/a0do/index.m3u8",
    type: "HLS",
    category: "ESPN COLOMBIA\ud83c\udde8\ud83c\uddf4",
    number: 103
  },
  {
    name: "ESPN 5",
    url: "http://181.118.158.103:8000/play/a03c/index.m3u8?hls",
    type: "HLS",
    category: "ESPN COLOMBIA\ud83c\udde8\ud83c\uddf4",
    number: 104
  },
  {
    name: "ESPN 6",
    url: "http://181.118.158.103:8000/play/a03d/index.m3u8?hls",
    type: "HLS",
    category: "ESPN COLOMBIA\ud83c\udde8\ud83c\uddf4",
    number: 105
  },
  {
    name: "ESPN 7",
    url: "http://181.118.158.103:8000/play/a03e/index.m3u8?hls",
    type: "HLS",
    category: "ESPN COLOMBIA\ud83c\udde8\ud83c\uddf4",
    number: 106
  },
  {
    name: "CAZ\u00c9 TV",
    url: "https://dfr80qz435crc.cloudfront.net/MNOP/Amagi/Caze/Caze_TV_BR/Caze_TV.m3u8",
    type: "HLS",
    category: "DEPORTE BRASIL\ud83c\udde7\ud83c\uddf7",
    number: 107
  },
  {
    name: "NSPORT",
    url: "https://ssai2-ads.api.leiniao.com/global-adinsertion-api/hls/live/v2/e8f0afbd0dc24b80ac2737ef1d36210e/playlist.m3u8",
    type: "HLS",
    category: "DEPORTE BRASIL\ud83c\udde7\ud83c\uddf7",
    number: 108
  },
  {
    name: "RALLY TV",
    url: "https://dms.redbull.tv/v5/destination/rallytv/07f960dc-fd36-466c-971f-64a597518b83/personal_computer/http/us/es_US/playlist.m3u8",
    type: "HLS",
    category: "\u26bd DEPORTES VARIADOS",
    number: 109
  },
  {
    name: "UFC EVENTOS",
    url: "http://108.181.2.153:8080/live/xtream2323XSTREA/gphzPzzWFcRb/519020.m3u8?_cb=1776093328789&token=ThUKWEAMEQgXBlwCA1pXUQ9cDFZRUgUDBgIBU1cDUFFXAwQLCwIACldGFERDTREDVwlnWVRBDAQGXQZXUhxAFEZSEGZaABEIF1AJUgAPU0QaRkxZXQYUCwdIFBULVEBbFwRbCgNSAAoXSBoDSE0GFFgFVG9UBkBYVAEUXwxFDg0ZFQ1XbABWX1QKXEQKG1JEGkZRQ0BBDF9CCFpJQFILFUdWFlwRXhEGA1EORBwbAAlDCkxCSUEME2c9FElAVRoVUFkRUFwKEQgXCQsTCBtPRF8XZ0JVEEJDUgVbABASWEMFFU4bXgVLbVYLVghVWhcPWQpLEgpBBRMbRlsKDFkWDkdoElBXRgkQBl0LVgUPWkRL",
    type: "HLS",
    category: "\u26bd DEPORTES VARIADOS",
    number: 110
  },
  {
    name: "Boxeo Tv",
    url: "http://108.181.2.153:8080/live/xtream2323XSTREA/gphzPzzWFcRb/519024.m3u8?_cb=1776093328789&token=ThUKWEAMEQgXBl0FVAxTAgVSCQgFUVJXUlZSUgdSVVdQAlNcV1AFBgdGFERDTREDVwlnWVRBDAQGXQZXVhxAFEZSEGZaABEIF1AJUgAPU0QaRkxZXQYUCwdIFBULVEBbW0IOVR9GVkpBAUoIUVU8AlMSUVNVQQxfQghaSUBfDD5RUg9YXQARCBdVGkoSUBAWFF5WRVwPGhNVDUIXA0QHQw9ZF1VfSBFRWhFWEkJAQVwUNGESHEFTSUMBWBYLXwxDDxUPCkZcER4XDUs5QlwQEkQBWV1VERQLFVQUSUBdAxlqVA1XXQFQRlwLVhUSA0FVFEgaXV8NX0VYFmkVC1RAW1tCDlVO",
    type: "HLS",
    category: "\u26bd DEPORTES VARIADOS",
    number: 111
  },
  {
    name: "CINEMAX Sat",
    url: "http://45.170.130.224:8000/play/a03e/index.m3u8",
    type: "HLS",
    category: "CINE Y SERIES \ud83c\udfac",
    number: 112
  },
  {
    name: "CANELA NARCO DRAMA",
    url: "https://amg00658-amg00658c13-canelatv-international-7229.playouts.now.amagi.tv/playlist/amg00658-canelamediafast-narcodramaltus-canelatvinternational/cb573f166573638b84c83c65cef24082847b3dcb0e6c886470af4a9765d97800dbe8ae84ae5b910c4c9e1fc061017d360439cd1dd56c49c1da63b820743c4b21fdcde00080dd0d0cb1df11292ca36265299a7369cc350f7bd2ec5a2f803ebe764c53cb017c593f88f258a9764cc59e0a957f39e8fc8b307b24455a9c5a43e6a64cb7fdb25e40da6aa5e50141947b44fa83439fd401e987d30a83118475f6179ec1a48f8115d48cad599c04ed241959501ef3e129c9be37d9de9f7f309f74174a1f5be1b692f94b4ee22d2159eba5a1d506fb1ddafb46eb0167e170f2278d368b54be10b7e43cc4c7d9f1631b40ceae5a71379fe7b584ff3936cf0d91cbeadc7d7995f75a6c519318b24f2a2880c2d8008bd110a9a33189c60d775aeeb01ff5f7d08aecc2e520fa0cebe5a5d56a18030967068f59d0dc079f2dd87cad994b72050045f8cc5189d2dd0b332f16d0d80a99421ae0d98ed7880a3f92341d00970ab34e1653dc26656ae42ee0e84d06e6281f893902ee4b0a9050f5ae2df6be818e6c58b9d3d3309b058d9b2be0f668d105bdf29fd1884e6a760e10e5e06f19357d8376f0d2dee4647b788695e3dfb09ebc9a5b6d3f2284f0f378dbafcd2c0f1fc2525c003e7045d06c5e0eae838cfb8a899ef18c70ecb685e4d6f29f9f17354d9bcda38884d78567bd76d0cefa3615f63809b21e0a3c67dfba8c16a8761b3e326a8901604caa141a6cded598b5d7d0358eab6da46e364f23dda6430849736373069ea76dd575eb8752ecc89d129fb9cd5a6ead088e2d5cdedcd567fdada6c24c049fe3173a6f85dc2ac03c7c93479a7bc6823e88f066071a3d52418ddb07a811ea89e8b241f01ba4410771fd6bfbcdb3c1b14862a7c01a7d6373167d197579230bb4dfaf142373feb32ae31dabab62a04c503c28549ce5245b95e363138c3f1d31f1f9d3ea4dabd1a037c892a28f0ee36cc4541a627f4adceb42fd53/149/1920x1080_6423560/index.m3u8",
    type: "HLS",
    category: "\ud83c\udfac CINES 24/7",
    number: 113
  },
  {
    name: "CANELA CINEMA",
    url: "https://amg00658-amg00658c8-canelatv-international-7227.playouts.now.amagi.tv/playlist/amg00658-canelamediafast-cinemalt-canelatvinternational/playlist.m3u8",
    type: "HLS",
    category: "\ud83c\udfac CINES 24/7",
    number: 114
  },
  {
    name: "CINE PLEX",
    url: "https://amg00658-amg00658c95-canelatv-international-6696.playouts.now.amagi.tv/playlist/amg00658-canelamediafast-pelimexta-canelatvinternational/playlist.m3u8",
    type: "HLS",
    category: "\ud83c\udfac CINES 24/7",
    number: 115
  },
  {
    name: "The Walking Dead",
    url: "https://jmp2.uk/plu-678aa0b3680721c77c5035dd.m3u8",
    type: "HLS",
    category: "\ud83c\udfac CINES 24/7",
    number: 116
  },
  {
    name: "ACCION MEXICANA",
    url: "https://amg00658-amg00658c104-canelatv-international-7980.playouts.now.amagi.tv/playlist/amg00658-canelamediafast-accionmexicana-canelatvinternational/playlist.m3u8",
    type: "HLS",
    category: "\ud83c\udfac CINES 24/7",
    number: 117
  },
  {
    name: "DIOS TV",
    url: "https://s.emisoras.tv:8081/diostevetv/tracks-v1a1/mono.m3u8",
    type: "HLS",
    category: "\ud83d\ude4f\ud83c\udffb CANALES CRISTIANOS",
    number: 118
  },
  {
    name: "Daystar Espa\u00f1ol",
    url: "https://live-mcl.cdn01.net/web/v2a5w28m3/playlist.m3u8",
    type: "HLS",
    category: "\ud83d\ude4f\ud83c\udffb CANALES CRISTIANOS",
    number: 119
  },
  {
    name: "ESPERANZA TV",
    url: "https://cdn-us-mia.b-cdn.net/hcorg_7IehiLEKH5q/s/jsl_kRualFlRu2u/master.m3u8",
    type: "HLS",
    category: "\ud83d\ude4f\ud83c\udffb CANALES CRISTIANOS",
    number: 120
  },
  {
    name: "MISI\u00d3N DE VIDA",
    url: "https://5bf8041cb3fed.streamlock.net/zoefm/zoefm/playlist.m3u8",
    type: "HLS",
    category: "\ud83d\ude4f\ud83c\udffb CANALES CRISTIANOS",
    number: 121
  },
  {
    name: "BAND",
    url: "https://5b7f3c45ab7c2.streamlock.net/arapuan/ngrp:arapuan_all/playlist.m3u8",
    type: "HLS",
    category: "BRASIL\ud83c\udde7\ud83c\uddf7",
    number: 122
  },
  {
    name: "RECORD",
    url: "http://tvconquistalrv.duckdns.org:8080/hls/tvconquistalrv.m3u8",
    type: "HLS",
    category: "BRASIL\ud83c\udde7\ud83c\uddf7",
    number: 123
  },
  {
    name: "CNN BRASIL",
    url: "https://d25usgadhphvwi.cloudfront.net/hls/main.m3u8",
    type: "HLS",
    category: "BRASIL\ud83c\udde7\ud83c\uddf7",
    number: 124
  },
  {
    name: "AGRO CANAL",
    url: "https://607d2a1a47b1f.streamlock.net/crur/smil:canalrural.smil/chunklist_w1004797184.m3u8",
    type: "HLS",
    category: "BRASIL\ud83c\udde7\ud83c\uddf7",
    number: 125
  },
  {
    name: "REDES BRASIL",
    url: "https://video09.logicahost.com.br/redebrasiloficial/redebrasiloficial/chunklist_w1413219916.m3u8",
    type: "HLS",
    category: "BRASIL\ud83c\udde7\ud83c\uddf7",
    number: 126
  },
  {
    name: "RUNTIME A\u00c7\u00c3O",
    url: "https://stream.ads.ottera.tv/playlist.m3u8?network_id=2552",
    type: "HLS",
    category: "BRASIL\ud83c\udde7\ud83c\uddf7",
    number: 127
  },
  {
    name: "RUNTIME ROMANCE",
    url: "https://stream.ads.ottera.tv/playlist.m3u8?network_id=4866",
    type: "HLS",
    category: "BRASIL\ud83c\udde7\ud83c\uddf7",
    number: 128
  },
  {
    name: "RUNTIME CRIME",
    url: "https://stream.ads.ottera.tv/playlist.m3u8?network_id=4864",
    type: "HLS",
    category: "BRASIL\ud83c\udde7\ud83c\uddf7",
    number: 129
  },
  {
    name: "SBT",
    url: "https://cdn.live.br1.jmvstream.com/w/LVW-10801/LVW10801_Xvg4R0u57n/chunklist.m3u8",
    type: "HLS",
    category: "BRASIL\ud83c\udde7\ud83c\uddf7",
    number: 130
  },
  {
    name: "TELEMUNDO NOTICIAS",
    url: "https://d3rciv7av2te5a.cloudfront.net/v1/master/3fec3e5cac39a52b2132f9c66c83dae043dc17d4/prod-plex/master.m3u8?ads.xumo_channelId=88889467",
    type: "HLS",
    category: "TELEMUNDO INTERNACIONAL",
    number: 131
  },
  {
    name: "TELEMUNDO 51",
    url: "https://d368vp0qqzvkid.cloudfront.net/manifest/3fec3e5cac39a52b2132f9c66c83dae043dc17d4/prod_default_nbc-direct/32d83610-b3ed-4e0c-bc1a-9cf4055cc405/3.m3u8",
    type: "HLS",
    category: "TELEMUNDO INTERNACIONAL",
    number: 132
  },
  {
    name: "TELEMUNDO ACCION",
    url: "https://d3rciv7av2te5a.cloudfront.net/v1/master/3fec3e5cac39a52b2132f9c66c83dae043dc17d4/prod-plex/master.m3u8?ads.xumo_channelId=88889470",
    type: "HLS",
    category: "TELEMUNDO INTERNACIONAL",
    number: 133
  },
  {
    name: "TELEMUNDO 3",
    url: "https://d1rqgw5gocwo9i.cloudfront.net/manifest/3fec3e5cac39a52b2132f9c66c83dae043dc17d4/prod_default_xumo-nbcu-stitched/10a44c37-f976-4d2b-ab23-8637a7a094ca/3.m3u8",
    type: "HLS",
    category: "TELEMUNDO INTERNACIONAL",
    number: 134
  },
  {
    name: "FREE TV ACCION",
    url: "https://stream.ads.ottera.tv/playlist.m3u8?network_id=16317",
    type: "HLS",
    category: "FREE TV LIVE",
    number: 135
  },
  {
    name: "FREE TV CRIMEN",
    url: "https://oly-ftvcbr.otteravision.com/oly/ftvcbr/ftvcbr.m3u8",
    type: "HLS",
    category: "FREE TV LIVE",
    number: 136
  },
  {
    name: "FREE TV DRAMA BRASIL",
    url: "https://oly-ftvcbr.otteravision.com/oly/ftvdrbr/ftvdrbr.m3u8",
    type: "HLS",
    category: "FREE TV LIVE",
    number: 137
  },
  {
    name: "Popcom Central Canal 6.4",
    url: "https://stream.ads.ottera.tv/playlist.m3u8?network_id=16333",
    type: "HLS",
    category: "FREE TV LIVE",
    number: 138
  },
  {
    name: "FREE TV ASIA",
    url: "https://stream.ads.ottera.tv/playlist.m3u8?network_id=16328",
    type: "HLS",
    category: "FREE TV LIVE",
    number: 139
  },
  {
    name: "FREE CLASICO",
    url: "https://stream.ads.ottera.tv/playlist.m3u8?network_id=16324",
    type: "HLS",
    category: "FREE TV LIVE",
    number: 140
  },
  {
    name: "FREE TV DRAMA",
    url: "https://stream.ads.ottera.tv/playlist.m3u8?network_id=16316",
    type: "HLS",
    category: "FREE TV LIVE",
    number: 141
  },
  {
    name: "FREE TV ESTELAR",
    url: "https://stream.ads.ottera.tv/playlist.m3u8?network_id=16318",
    type: "HLS",
    category: "FREE TV LIVE",
    number: 142
  },
  {
    name: "FREE TV LIVE",
    url: "https://stream.ads.ottera.tv/playlist.m3u8?network_id=16329",
    type: "HLS",
    category: "FREE TV LIVE",
    number: 143
  },
  {
    name: "FREE TV SURE\u00d1O",
    url: "https://stream.ads.ottera.tv/playlist.m3u8?network_id=16323",
    type: "HLS",
    category: "FREE TV LIVE",
    number: 144
  },
  {
    name: "FREE TV TERROR",
    url: "https://stream.ads.ottera.tv/playlist.m3u8?network_id=16319",
    type: "HLS",
    category: "FREE TV LIVE",
    number: 145
  },
  {
    name: "MIEDO TV",
    url: "https://streams2.sofast.tv/ptnr-stirr/genre-Movies/lang-Spanish/ctgr-Movies/title-MI-MIEDO-CANAL-SPA/sofastplayout/bf03a5cc-e672-9612-ef64-5296cfdb_HLS/playlist.m3u8",
    type: "HLS",
    category: "ESPECIAL HALLOWEN",
    number: 146
  },
  {
    name: "GRITOS",
    url: "https://streams2.sofast.tv/ptnr-stirr/genre-Movies/lang-Spanish/ctgr-Movies/title-TRINIAN-GRITOS-TV-SPA/vglive-sk-187404/playlist.m3u8",
    type: "HLS",
    category: "ESPECIAL HALLOWEN",
    number: 147
  },
  {
    name: "HORROR",
    url: "https://streams2.sofast.tv/ptnr-yupptv/title-HORROR-TV-ENG_yupptv/v1/master/611d79b11b77e2f571934fd80ca1413453772ac7/93dc292b-cbcf-4988-ab97-94feced4c14b/master.m3u8?hdnts=st=1761557896~exp=1761561496~acl=!*/611d79b11b77e2f571934fd80ca1413453772ac7/93dc292b-cbcf-4988-ab97-94feced4c14b/*!yuppTVCom_5_-1_181b8e8f22fd430d_UY_179.27.200.30/payload/yuppTVCom_5_-1_181b8e8f22fd430d_UY_179.27.200.30/*~hmac=c15e71b0f2f9872e5136ffede3c7c2894792365643f3099ce6292a08732f949f&ads.app_bundle=&ads.app_store_url=&ads.content_livestream=1&ads.language=ENG&ads.content_genre=OTH&ads.channel=6607&ads.channel_name=HORRORTV&ads.network_name=yupptv&ads.user=0",
    type: "HLS",
    category: "ESPECIAL HALLOWEN",
    number: 148
  },
  {
    name: "ESPANTO FILM FEST",
    url: "https://stream.ads.ottera.tv/playlist.m3u8?network_id=6126&avod=1&coppa=0&is_lat=0",
    type: "HLS",
    category: "ESPECIAL HALLOWEN",
    number: 149
  },
  {
    name: "SONY ONE ACCION",
    url: "https://375132e20edd4ed0bbddadeefa5b652d.mediatailor.us-west-2.amazonaws.com/v1/master/ba62fe743df0fe93366eba3a257d792884136c7f/LINEAR-829-ES-SONYONEHITSACCIN-LG_ES/playlist.m3u8",
    type: "HLS",
    category: "ESPECIAL HALLOWEN",
    number: 150
  },
  {
    name: "VALLE NUEVO TV",
    url: "https://stmv6.voxtvhd.com.br/vallenuevotv/vallenuevotv/playlist.m3u8",
    type: "HLS",
    category: "CINES VARIADOS 24/7",
    number: 151
  },
  {
    name: "CANELA CINEMA",
    url: "https://amg00658-amg00658c8-canelatv-international-7227.playouts.now.amagi.tv/playlist/amg00658-canelamediafast-cinemalt-canelatvinternational/playlist.m3u8",
    type: "HLS",
    category: "CINES VARIADOS 24/7",
    number: 152
  },
  {
    name: "RETRO PLUS",
    url: "https://scl.edge.grupoz.cl/retroplustvuno/live/playlist.m3u8",
    type: "HLS",
    category: "CINES VARIADOS 24/7",
    number: 153
  },
  {
    name: "CINE PLEX",
    url: "https://amg00658-amg00658c95-canelatv-international-6696.playouts.now.amagi.tv/playlist/amg00658-canelamediafast-pelimexta-canelatvinternational/playlist.m3u8",
    type: "HLS",
    category: "CINES VARIADOS 24/7",
    number: 154
  },
  {
    name: "FILM RISE",
    url: "https://d3rciv7av2te5a.cloudfront.net/v1/master/3fec3e5cac39a52b2132f9c66c83dae043dc17d4/prod-plex/master.m3u8?ads.xumo_channelId=88889309",
    type: "HLS",
    category: "CINES VARIADOS 24/7",
    number: 155
  },
  {
    name: "CR JNGO",
    url: "https://amogonetworx-grjngo-2-eu.plex.wurl.tv/playlist.m3u8",
    type: "HLS",
    category: "CINES VARIADOS 24/7",
    number: 156
  },
  {
    name: "ACCION",
    url: "https://amg01024-olympusat-topcinelatam-ono-ad-99.amagi.tv/1080p-cc/index.m3u8",
    type: "HLS",
    category: "CINES VARIADOS 24/7",
    number: 157
  },
  {
    name: "FAMILIA TV",
    url: "https://amg01024-olympusat-juntos-ono-ad-h5.amagi.tv/1080p-cc/index.m3u8",
    type: "HLS",
    category: "CINES VARIADOS 24/7",
    number: 158
  },
  {
    name: "RUNTIME 1",
    url: "https://stream.ads.ottera.tv/playlist.m3u8?network_id=2154&avod=1&coppa=0&is_lat=0",
    type: "HLS",
    category: "RUNTIME CINE PREMIUM",
    number: 159
  },
  {
    name: "RUNTIME 2",
    url: "https://stream.ads.ottera.tv/playlist.m3u8?&network_id=2218&avod=1&coppa=0&is_lat=0",
    type: "HLS",
    category: "RUNTIME CINE PREMIUM",
    number: 160
  },
  {
    name: "COMEDIA",
    url: "https://stream.ads.ottera.tv/playlist.m3u8?network_id=6127&avod=1&coppa=0&is_lat=0",
    type: "HLS",
    category: "RUNTIME CINE PREMIUM",
    number: 161
  },
  {
    name: "ESPANTO",
    url: "https://stream.ads.ottera.tv/playlist.m3u8?network_id=6126&avod=1&coppa=0&is_lat=0",
    type: "HLS",
    category: "RUNTIME CINE PREMIUM",
    number: 162
  },
  {
    name: "FAMILIA",
    url: "https://stream.ads.ottera.tv/playlist.m3u8?network_id=6118&avod=1&coppa=0&is_lat=0",
    type: "HLS",
    category: "RUNTIME CINE PREMIUM",
    number: 163
  },
  {
    name: "ROMANCE",
    url: "https://stream.ads.ottera.tv/playlist.m3u8?network_id=6119&avod=1&coppa=0&is_lat=0",
    type: "HLS",
    category: "RUNTIME CINE PREMIUM",
    number: 164
  },
  {
    name: "PELISES",
    url: "https://stream.ads.ottera.tv/playlist.m3u8?network_id=2152&avod=1&coppa=0&is_lat=0",
    type: "HLS",
    category: "RUNTIME CINE PREMIUM",
    number: 165
  },
  {
    name: "CRIMEN",
    url: "https://stream.ads.ottera.tv/playlist.m3u8?network_id=6129&avod=1&coppa=0&is_lat=0",
    type: "HLS",
    category: "RUNTIME CINE PREMIUM",
    number: 166
  },
  {
    name: "SERIES",
    url: "https://stream.ads.ottera.tv/playlist.m3u8?network_id=6132&avod=1&coppa=0&is_lat=0",
    type: "HLS",
    category: "RUNTIME CINE PREMIUM",
    number: 167
  },
  {
    name: "ACCION",
    url: "https://stream.ads.ottera.tv/playlist.m3u8?network_id=2550&avod=1&coppa=0&is_lat=0",
    type: "HLS",
    category: "RUNTIME CINE PREMIUM",
    number: 168
  },
  {
    name: "DIRECTV SPORT",
    url: "http://167.17.67.240:8888/DSPORTS/tracks-v1a1/mono.m3u8",
    type: "HLS",
    category: "\u26bdDEPORTES ESPN Y FOX SPORTS AR\ud83c\udde6\ud83c\uddf7()",
    number: 169
  },
  {
    name: "Directv sport 2",
    url: "http://167.17.67.240:8888/dsport2colombia/tracks-v1a1/mono.m3u8",
    type: "HLS",
    category: "\u26bdDEPORTES ESPN Y FOX SPORTS AR\ud83c\udde6\ud83c\uddf7()",
    number: 170
  },
  {
    name: "DIRECTV SPORT 2",
    url: "http://167.17.67.240:8888/dsport2colombia/tracks-v1a1/mono.m3u8",
    type: "HLS",
    category: "\u26bdDEPORTES ESPN Y FOX SPORTS AR\ud83c\udde6\ud83c\uddf7()",
    number: 171
  },
  {
    name: "DIRECTV SPORT 2",
    url: "http://167.17.67.240:8888/Dsportsmas/tracks-v1a1/mono.m3u8",
    type: "HLS",
    category: "\u26bdDEPORTES ESPN Y FOX SPORTS AR\ud83c\udde6\ud83c\uddf7()",
    number: 172
  },
  {
    name: "Canal 20",
    url: "https://live20.bozztv.com/giatv/giatv-canal20hd/canal20hd/chunks.m3u8",
    type: "HLS",
    category: "INTERIOR PY",
    number: 173
  },
  {
    name: "HISTORY CHANNEL",
    url: "http://181.13.252.102:8000/play/a051/index.m3u8",
    type: "HLS",
    category: "CHANEL HISTORY",
    number: 174
  },
  {
    name: "HISTORY 2",
    url: "http://181.13.252.102:8000/play/a0ab/index.m3u8",
    type: "HLS",
    category: "CHANEL HISTORY",
    number: 175
  },
  {
    name: "AE MUNDO",
    url: "http://45.170.130.224:8000/play/a022/index.m3u8",
    type: "HLS",
    category: "CHANEL HISTORY",
    number: 176
  },
  {
    name: "AXN",
    url: "http//45.170.130.224:8000/play/a03g/index.m3u8",
    type: "HLS",
    category: "CHANEL HISTORY",
    number: 177
  },
  {
    name: "ANIMAL PLANET",
    url: "http://45.170.130.224:8000/play/a01t/index.m3u8",
    type: "HLS",
    category: "CHANEL HISTORY",
    number: 178
  },
  {
    name: "CNN CHILE",
    url: "http://45.170.130.224:8000/play/a00y/index.m3u8",
    type: "HLS",
    category: "CHANEL HISTORY",
    number: 179
  },
  {
    name: "CANAL DE LAS ESTRELLAS",
    url: "http://45.170.130.224:8000/play/a026/index.m3u8",
    type: "HLS",
    category: "CHANEL HISTORY",
    number: 180
  },
  {
    name: "CARTOON NETWOR",
    url: "http://45.170.130.224:8000/play/a011/index.m3u8",
    type: "HLS",
    category: "CHANEL HISTORY",
    number: 181
  },
  {
    name: "CINECANAL",
    url: "http://45.170.130.224:8000/play/a00t/index.m3u8",
    type: "HLS",
    category: "CHANEL HISTORY",
    number: 182
  },
  {
    name: "CINEMAX",
    url: "https://45.170.130.224:8000/play/a03e/index.m3u8",
    type: "HLS",
    category: "CHANEL HISTORY",
    number: 183
  },
  {
    name: "DISCOVERY CHANEL",
    url: "http://45.170.130.224:8000/play/a01s/index.m3u8",
    type: "HLS",
    category: "CHANEL HISTORY",
    number: 184
  },
  {
    name: "DISVOVERY CHANEL CLON",
    url: "https://45.170.130.224:8000/play/a04u/index.m3u8",
    type: "HLS",
    category: "CHANEL HISTORY",
    number: 185
  },
  {
    name: "DISCOVERY ID",
    url: "https://45.170.130.224:8000/play/a02b/index.m3u8",
    type: "HLS",
    category: "CHANEL HISTORY",
    number: 186
  },
  {
    name: "ESPN 1 HD",
    url: "http://181.13.252.102:8000/play/a05a/index.m3u8",
    type: "HLS",
    category: "Deportes Argentina Sin cortes\ud83c\udde6\ud83c\uddf7",
    number: 187
  },
  {
    name: "ESPN 2 HD",
    url: "http://181.13.252.102:8000/play/a059/index.m3u8",
    type: "HLS",
    category: "Deportes Argentina Sin cortes\ud83c\udde6\ud83c\uddf7",
    number: 188
  },
  {
    name: "ESPN 3 HD",
    url: "http://181.13.252.102:8000/play/a05b/index.m3u8",
    type: "HLS",
    category: "Deportes Argentina Sin cortes\ud83c\udde6\ud83c\uddf7",
    number: 189
  },
  {
    name: "ESPN 4 HD",
    url: "http://181.13.252.102:8000/play/a076/index.m3u8",
    type: "HLS",
    category: "Deportes Argentina Sin cortes\ud83c\udde6\ud83c\uddf7",
    number: 190
  },
  {
    name: "Fox Sport 2",
    url: "http://181.13.252.102:8000/play/a05c/index.m3u8",
    type: "HLS",
    category: "Deportes Argentina Sin cortes\ud83c\udde6\ud83c\uddf7",
    number: 191
  },
  {
    name: "Fox sport 1",
    url: "http://181.209.105.115:2525/play/foxsports/index.m3u8",
    type: "HLS",
    category: "Deportes Argentina Sin cortes\ud83c\udde6\ud83c\uddf7",
    number: 192
  },
  {
    name: "Fox sport 3",
    url: "http://181.13.252.102:8000/play/a02t/index.m3u8",
    type: "HLS",
    category: "Deportes Argentina Sin cortes\ud83c\udde6\ud83c\uddf7",
    number: 193
  },
  {
    name: "ESPN PREMIUM",
    url: "http://181.13.252.102:8000/play/a078/index.m3u8",
    type: "HLS",
    category: "Deportes Argentina Sin cortes\ud83c\udde6\ud83c\uddf7",
    number: 194
  },
  {
    name: "ESPN 5",
    url: "http://181.13.252.102:8000/play/a05a/index.m3u8",
    type: "HLS",
    category: "Deportes Argentina Sin cortes\ud83c\udde6\ud83c\uddf7",
    number: 195
  },
  {
    name: "Ty C Sports",
    url: "http://181.13.252.102:8000/play/a02s/index.m3u8",
    type: "HLS",
    category: "Deportes Argentina Sin cortes\ud83c\udde6\ud83c\uddf7",
    number: 196
  }
];

const CATEGORIES = [
  "Todos",
  "ARGENTINA\ud83c\udde6\ud83c\uddf7",
  "BRASIL\ud83c\udde7\ud83c\uddf7",
  "CANALES PARAGUAYO",
  "CHANEL HISTORY",
  "CINE Y SERIES \ud83c\udfac",
  "CINES VARIADOS 24/7",
  "DEPORTE ARGENTINA SAT",
  "DEPORTE BRASIL\ud83c\udde7\ud83c\uddf7",
  "DEPORTE CHILE\ud83c\udde8\ud83c\uddf1",
  "DEPORTE ECUADOR\ud83c\uddea\ud83c\udde8",
  "DEPORTE ESPA\u00d1A\ud83c\uddea\ud83c\uddf8",
  "DEPORTE MEXICO\ud83c\uddf2\ud83c\uddfd",
  "DEPORTE PER\u00da\ud83c\uddf5\ud83c\uddea",
  "DEPORTES ESPN Y FOX SPORT ARGENTINA\ud83c\udde6\ud83c\uddf7",
  "Deportes Argentina Sin cortes\ud83c\udde6\ud83c\uddf7",
  "Directv Sport \ud83c\udde6\ud83c\uddf7",
  "ESPECIAL HALLOWEN",
  "ESPN COLOMBIA\ud83c\udde8\ud83c\uddf4",
  "ESPN DISNEY+",
  "EVENTOS DEL DIA",
  "FREE TV LIVE",
  "FUTBOL LOCAL",
  "GRAN HERMANO ARG.",
  "INTERIOR PY",
  "INTERNACIONALES",
  "PARAGUAY",
  "RUNTIME CINE PREMIUM",
  "TELEMUNDO INTERNACIONAL",
  "\u26bd DEPORTES VARIADOS",
  "\u26bdDEPORTES ESPN Y FOX SPORTS AR\ud83c\udde6\ud83c\uddf7()",
  "\ud83c\udfac CINES 24/7",
  "\ud83c\udfceDeportes Motors\ud83c\udfc1",
  "\ud83d\ude4f\ud83c\udffb CANALES CRISTIANOS",
];
