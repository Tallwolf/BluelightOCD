(function() {
    var WallTiles = [];
    var GooTiles = [];
        
    WallTile.prototype = window.GameObject.prototype;
    GooTile.prototype = window.GameObject.prototype;
    var WallSprite = window.LoadSprite("Wall_OnePiece.png");
    var LadderSprite = window.LoadSprite("Ladder.png");
    var GooSprite = window.LoadSprite("Goo.png");
    GooSpawnSprites = [];
    GooSpawnSprites[0]  = window.LoadSprite( "Goo_Create_Purp0001.png" );
    GooSpawnSprites[1]  = window.LoadSprite( "Goo_Create_Purp0002.png" );
    GooSpawnSprites[2]  = window.LoadSprite( "Goo_Create_Purp0003.png" );
    GooSpawnSprites[3]  = window.LoadSprite( "Goo_Create_Purp0004.png" );
    GooSpawnSprites[4]  = window.LoadSprite( "Goo_Create_Purp0005.png" );
    GooSpawnSprites[5]  = window.LoadSprite( "Goo_Create_Purp0006.png" );
    GooSpawnSprites[6]  = window.LoadSprite( "Goo_Create_Purp0007.png" );
    GooSpawnSprites[7]  = window.LoadSprite( "Goo_Create_Purp0008.png" );
    GooSpawnSprites[8]  = window.LoadSprite( "Goo_Create_Purp0009.png" );
    GooSpawnSprites[9]  = window.LoadSprite( "Goo_Create_Purp0010.png" );
    GooSpawnSprites[10] = window.LoadSprite( "Goo_Create_Purp0011.png" );
    GooSpawnSprites[11] = window.LoadSprite( "Goo_Create_Purp0012.png" );
    GooSpawnSprites[12] = window.LoadSprite( "Goo_Create_Purp0013.png" );
    GooSpawnSprites[13] = window.LoadSprite( "Goo_Create_Purp0014.png" );
    GooSpawnSprites[14] = window.LoadSprite( "Goo_Create_Purp0015.png" );
    GooSpawnSprites[15] = window.LoadSprite( "Goo_Create_Purp0016.png" );
    GooSpawnSprites[16] = window.LoadSprite( "Goo_Create_Purp0017.png" );
    GooSpawnSprites[17] = window.LoadSprite( "Goo_Create_Purp0018.png" );
    GooSpawnSprites[18] = window.LoadSprite( "Goo_Create_Purp0019.png" );
    GooSpawnSprites[19] = window.LoadSprite( "Goo_Create_Purp0020.png" );
    GooSpawnSprites[20] = window.LoadSprite( "Goo_Create_Purp0021.png" );
    GooSpawnSprites[21] = window.LoadSprite( "Goo_Create_Purp0022.png" );
    GooSpawnSprites[22] = window.LoadSprite( "Goo_Create_Purp0023.png" );
    GooSpawnSprites[23] = window.LoadSprite( "Goo_Create_Purp0024.png" );
    GooSpawnSprites[24] = window.LoadSprite( "Goo_Create_Purp0025.png" );
    
    GooWitherSprites = [];
    GooWitherSprites[0]  = window.LoadSprite( "Goo_Wither_Purp0001.png" );
    GooWitherSprites[1]  = window.LoadSprite( "Goo_Wither_Purp0002.png" );
    GooWitherSprites[2]  = window.LoadSprite( "Goo_Wither_Purp0003.png" );
    GooWitherSprites[3]  = window.LoadSprite( "Goo_Wither_Purp0004.png" );
    GooWitherSprites[4]  = window.LoadSprite( "Goo_Wither_Purp0005.png" );
    GooWitherSprites[5]  = window.LoadSprite( "Goo_Wither_Purp0006.png" );
    GooWitherSprites[6]  = window.LoadSprite( "Goo_Wither_Purp0007.png" );
    GooWitherSprites[7]  = window.LoadSprite( "Goo_Wither_Purp0008.png" );
    GooWitherSprites[8]  = window.LoadSprite( "Goo_Wither_Purp0009.png" );
    GooWitherSprites[9]  = window.LoadSprite( "Goo_Wither_Purp0010.png" );
    GooWitherSprites[10] = window.LoadSprite( "Goo_Wither_Purp0011.png" );
    GooWitherSprites[11] = window.LoadSprite( "Goo_Wither_Purp0012.png" );
    GooWitherSprites[12] = window.LoadSprite( "Goo_Wither_Purp0013.png" );
    GooWitherSprites[13] = window.LoadSprite( "Goo_Wither_Purp0014.png" );
    GooWitherSprites[14] = window.LoadSprite( "Goo_Wither_Purp0015.png" );
    GooWitherSprites[15] = window.LoadSprite( "Goo_Wither_Purp0016.png" );
    GooWitherSprites[16] = window.LoadSprite( "Goo_Wither_Purp0017.png" );
    GooWitherSprites[17] = window.LoadSprite( "Goo_Wither_Purp0018.png" );
    GooWitherSprites[18] = window.LoadSprite( "Goo_Wither_Purp0019.png" );
    GooWitherSprites[19] = window.LoadSprite( "Goo_Wither_Purp0020.png" );
    GooWitherSprites[20] = window.LoadSprite( "Goo_Wither_Purp0021.png" );
    GooWitherSprites[21] = window.LoadSprite( "Goo_Wither_Purp0022.png" );
    GooWitherSprites[22] = window.LoadSprite( "Goo_Wither_Purp0023.png" );
    GooWitherSprites[23] = window.LoadSprite( "Goo_Wither_Purp0024.png" );
    GooWitherSprites[24] = window.LoadSprite( "Goo_Wither_Purp0025.png" );
    GooWitherSprites[25] = window.LoadSprite( "Goo_Wither_Purp0026.png" );
    GooWitherSprites[26] = window.LoadSprite( "Goo_Wither_Purp0027.png" );
    GooWitherSprites[27] = window.LoadSprite( "Goo_Wither_Purp0028.png" );
    GooWitherSprites[28] = window.LoadSprite( "Goo_Wither_Purp0029.png" );
    GooWitherSprites[29] = window.LoadSprite( "Goo_Wither_Purp0030.png" );
    GooWitherSprites[30] = window.LoadSprite( "Goo_Wither_Purp0031.png" );
    GooWitherSprites[31] = window.LoadSprite( "Goo_Wither_Purp0032.png" );
    GooWitherSprites[32] = window.LoadSprite( "Goo_Wither_Purp0033.png" );
    GooWitherSprites[33] = window.LoadSprite( "Goo_Wither_Purp0034.png" );
    GooWitherSprites[34] = window.LoadSprite( "Goo_Wither_Purp0035.png" );
    GooWitherSprites[35] = window.LoadSprite( "Goo_Wither_Purp0036.png" );
    GooWitherSprites[36] = window.LoadSprite( "Goo_Wither_Purp0037.png" );
    GooWitherSprites[37] = window.LoadSprite( "Goo_Wither_Purp0038.png" );
    GooWitherSprites[38] = window.LoadSprite( "Goo_Wither_Purp0039.png" );
    GooWitherSprites[39] = window.LoadSprite( "Goo_Wither_Purp0040.png" );
    GooWitherSprites[40] = window.LoadSprite( "Goo_Wither_Purp0041.png" );
    GooWitherSprites[41] = window.LoadSprite( "Goo_Wither_Purp0042.png" );
    GooWitherSprites[42] = window.LoadSprite( "Goo_Wither_Purp0043.png" );
    GooWitherSprites[43] = window.LoadSprite( "Goo_Wither_Purp0044.png" );
    GooWitherSprites[44] = window.LoadSprite( "Goo_Wither_Purp0045.png" );
    GooWitherSprites[45] = window.LoadSprite( "Goo_Wither_Purp0046.png" );
    GooWitherSprites[46] = window.LoadSprite( "Goo_Wither_Purp0047.png" );
    GooWitherSprites[47] = window.LoadSprite( "Goo_Wither_Purp0048.png" );
    
    GooWitherAnims = [];
    GooWitherAnims[0] = new Animation( GooWitherSprites, window.GooWitherAnimSpeed, window.GooWitherAnimFrameSkip, true );
    GooWitherAnims[1] = new Animation( GooWitherSprites, window.GooWitherAnimSpeed, window.GooWitherAnimFrameSkip, true );
    GooWitherAnims[1].curSprite = 10;
    GooWitherAnims[2] = new Animation( GooWitherSprites, window.GooWitherAnimSpeed, window.GooWitherAnimFrameSkip, true );
    GooWitherAnims[2].curSprite = 20;
    GooWitherAnims[3] = new Animation( GooWitherSprites, window.GooWitherAnimSpeed, window.GooWitherAnimFrameSkip, true );
    GooWitherAnims[3].curSprite = 30;
    
    var DarknessSprites = [];
    DarknessSprites[  0] = window.LoadSprite( "Darkness_0001.png" );
    DarknessSprites[  1] = window.LoadSprite( "Darkness_0002.png" );
    DarknessSprites[  2] = window.LoadSprite( "Darkness_0003.png" );
    DarknessSprites[  3] = window.LoadSprite( "Darkness_0004.png" );
    DarknessSprites[  4] = window.LoadSprite( "Darkness_0005.png" );
    DarknessSprites[  5] = window.LoadSprite( "Darkness_0006.png" );
    DarknessSprites[  6] = window.LoadSprite( "Darkness_0007.png" );
    DarknessSprites[  7] = window.LoadSprite( "Darkness_0008.png" );
    DarknessSprites[  8] = window.LoadSprite( "Darkness_0009.png" );
    DarknessSprites[  9] = window.LoadSprite( "Darkness_0010.png" );
    DarknessSprites[ 10] = window.LoadSprite( "Darkness_0011.png" );
    DarknessSprites[ 11] = window.LoadSprite( "Darkness_0012.png" );
    DarknessSprites[ 12] = window.LoadSprite( "Darkness_0013.png" );
    DarknessSprites[ 13] = window.LoadSprite( "Darkness_0014.png" );
    DarknessSprites[ 14] = window.LoadSprite( "Darkness_0015.png" );
    DarknessSprites[ 15] = window.LoadSprite( "Darkness_0016.png" );
    DarknessSprites[ 16] = window.LoadSprite( "Darkness_0017.png" );
    DarknessSprites[ 17] = window.LoadSprite( "Darkness_0018.png" );
    DarknessSprites[ 18] = window.LoadSprite( "Darkness_0019.png" );
    DarknessSprites[ 19] = window.LoadSprite( "Darkness_0020.png" );
    DarknessSprites[ 20] = window.LoadSprite( "Darkness_0021.png" );
    DarknessSprites[ 21] = window.LoadSprite( "Darkness_0022.png" );
    DarknessSprites[ 22] = window.LoadSprite( "Darkness_0023.png" );
    DarknessSprites[ 23] = window.LoadSprite( "Darkness_0024.png" );
    DarknessSprites[ 24] = window.LoadSprite( "Darkness_0025.png" );
    DarknessSprites[ 25] = window.LoadSprite( "Darkness_0026.png" );
    DarknessSprites[ 26] = window.LoadSprite( "Darkness_0027.png" );
    DarknessSprites[ 27] = window.LoadSprite( "Darkness_0028.png" );
    DarknessSprites[ 28] = window.LoadSprite( "Darkness_0029.png" );
    DarknessSprites[ 29] = window.LoadSprite( "Darkness_0030.png" );
    DarknessSprites[ 30] = window.LoadSprite( "Darkness_0031.png" );
    DarknessSprites[ 31] = window.LoadSprite( "Darkness_0032.png" );
    DarknessSprites[ 32] = window.LoadSprite( "Darkness_0033.png" );
    DarknessSprites[ 33] = window.LoadSprite( "Darkness_0034.png" );
    DarknessSprites[ 34] = window.LoadSprite( "Darkness_0035.png" );
    DarknessSprites[ 35] = window.LoadSprite( "Darkness_0036.png" );
    DarknessSprites[ 36] = window.LoadSprite( "Darkness_0037.png" );
    DarknessSprites[ 37] = window.LoadSprite( "Darkness_0038.png" );
    DarknessSprites[ 38] = window.LoadSprite( "Darkness_0039.png" );
    DarknessSprites[ 39] = window.LoadSprite( "Darkness_0040.png" );
    DarknessSprites[ 40] = window.LoadSprite( "Darkness_0041.png" );
    DarknessSprites[ 41] = window.LoadSprite( "Darkness_0042.png" );
    DarknessSprites[ 42] = window.LoadSprite( "Darkness_0043.png" );
    DarknessSprites[ 43] = window.LoadSprite( "Darkness_0044.png" );
    DarknessSprites[ 44] = window.LoadSprite( "Darkness_0045.png" );
    DarknessSprites[ 45] = window.LoadSprite( "Darkness_0046.png" );
    DarknessSprites[ 46] = window.LoadSprite( "Darkness_0047.png" );
    DarknessSprites[ 47] = window.LoadSprite( "Darkness_0048.png" );
    DarknessSprites[ 48] = window.LoadSprite( "Darkness_0049.png" );
    DarknessSprites[ 49] = window.LoadSprite( "Darkness_0050.png" );
    DarknessSprites[ 50] = window.LoadSprite( "Darkness_0051.png" );
    DarknessSprites[ 51] = window.LoadSprite( "Darkness_0052.png" );
    DarknessSprites[ 52] = window.LoadSprite( "Darkness_0053.png" );
    DarknessSprites[ 53] = window.LoadSprite( "Darkness_0054.png" );
    DarknessSprites[ 54] = window.LoadSprite( "Darkness_0055.png" );
    DarknessSprites[ 55] = window.LoadSprite( "Darkness_0056.png" );
    DarknessSprites[ 56] = window.LoadSprite( "Darkness_0057.png" );
    DarknessSprites[ 57] = window.LoadSprite( "Darkness_0058.png" );
    DarknessSprites[ 58] = window.LoadSprite( "Darkness_0059.png" );
    DarknessSprites[ 59] = window.LoadSprite( "Darkness_0060.png" );
    DarknessSprites[ 60] = window.LoadSprite( "Darkness_0061.png" );
    DarknessSprites[ 61] = window.LoadSprite( "Darkness_0062.png" );
    DarknessSprites[ 62] = window.LoadSprite( "Darkness_0063.png" );
    DarknessSprites[ 63] = window.LoadSprite( "Darkness_0064.png" );
    DarknessSprites[ 64] = window.LoadSprite( "Darkness_0065.png" );
    DarknessSprites[ 65] = window.LoadSprite( "Darkness_0066.png" );
    DarknessSprites[ 66] = window.LoadSprite( "Darkness_0067.png" );
    DarknessSprites[ 67] = window.LoadSprite( "Darkness_0068.png" );
    DarknessSprites[ 68] = window.LoadSprite( "Darkness_0069.png" );
    DarknessSprites[ 69] = window.LoadSprite( "Darkness_0070.png" );
    DarknessSprites[ 70] = window.LoadSprite( "Darkness_0071.png" );
    DarknessSprites[ 71] = window.LoadSprite( "Darkness_0072.png" );
    DarknessSprites[ 72] = window.LoadSprite( "Darkness_0073.png" );
    DarknessSprites[ 73] = window.LoadSprite( "Darkness_0074.png" );
    DarknessSprites[ 74] = window.LoadSprite( "Darkness_0075.png" );
    DarknessSprites[ 75] = window.LoadSprite( "Darkness_0076.png" );
    DarknessSprites[ 76] = window.LoadSprite( "Darkness_0077.png" );
    DarknessSprites[ 77] = window.LoadSprite( "Darkness_0078.png" );
    DarknessSprites[ 78] = window.LoadSprite( "Darkness_0079.png" );
    DarknessSprites[ 79] = window.LoadSprite( "Darkness_0080.png" );
    DarknessSprites[ 80] = window.LoadSprite( "Darkness_0081.png" );
    DarknessSprites[ 81] = window.LoadSprite( "Darkness_0082.png" );
    DarknessSprites[ 82] = window.LoadSprite( "Darkness_0083.png" );
    DarknessSprites[ 83] = window.LoadSprite( "Darkness_0084.png" );
    DarknessSprites[ 84] = window.LoadSprite( "Darkness_0085.png" );
    DarknessSprites[ 85] = window.LoadSprite( "Darkness_0086.png" );
    DarknessSprites[ 86] = window.LoadSprite( "Darkness_0087.png" );
    DarknessSprites[ 87] = window.LoadSprite( "Darkness_0088.png" );
    DarknessSprites[ 88] = window.LoadSprite( "Darkness_0089.png" );
    DarknessSprites[ 89] = window.LoadSprite( "Darkness_0090.png" );
    DarknessSprites[ 90] = window.LoadSprite( "Darkness_0091.png" );
    DarknessSprites[ 91] = window.LoadSprite( "Darkness_0092.png" );
    DarknessSprites[ 92] = window.LoadSprite( "Darkness_0093.png" );
    DarknessSprites[ 93] = window.LoadSprite( "Darkness_0094.png" );
    DarknessSprites[ 94] = window.LoadSprite( "Darkness_0095.png" );
    DarknessSprites[ 95] = window.LoadSprite( "Darkness_0096.png" );
    DarknessSprites[ 96] = window.LoadSprite( "Darkness_0097.png" );
    DarknessSprites[ 97] = window.LoadSprite( "Darkness_0098.png" );
    DarknessSprites[ 98] = window.LoadSprite( "Darkness_0099.png" );
    DarknessSprites[ 99] = window.LoadSprite( "Darkness_0100.png" );
    DarknessSprites[100] = window.LoadSprite( "Darkness_0101.png" );
    DarknessSprites[101] = window.LoadSprite( "Darkness_0102.png" );
    DarknessSprites[102] = window.LoadSprite( "Darkness_0103.png" );
    DarknessSprites[103] = window.LoadSprite( "Darkness_0104.png" );
    DarknessSprites[104] = window.LoadSprite( "Darkness_0105.png" );
    DarknessSprites[105] = window.LoadSprite( "Darkness_0106.png" );
    DarknessSprites[106] = window.LoadSprite( "Darkness_0107.png" );
    DarknessSprites[107] = window.LoadSprite( "Darkness_0108.png" );
    DarknessSprites[108] = window.LoadSprite( "Darkness_0109.png" );
    DarknessSprites[109] = window.LoadSprite( "Darkness_0110.png" );
    DarknessSprites[110] = window.LoadSprite( "Darkness_0111.png" );
    DarknessSprites[111] = window.LoadSprite( "Darkness_0112.png" );
    DarknessSprites[112] = window.LoadSprite( "Darkness_0113.png" );
    DarknessSprites[113] = window.LoadSprite( "Darkness_0114.png" );
    DarknessSprites[114] = window.LoadSprite( "Darkness_0115.png" );
    DarknessSprites[115] = window.LoadSprite( "Darkness_0116.png" );
    DarknessSprites[116] = window.LoadSprite( "Darkness_0117.png" );
    DarknessSprites[117] = window.LoadSprite( "Darkness_0118.png" );
    DarknessSprites[118] = window.LoadSprite( "Darkness_0119.png" );
    DarknessSprites[119] = window.LoadSprite( "Darkness_0120.png" );
    DarknessSprites[120] = window.LoadSprite( "Darkness_0121.png" );
    DarknessSprites[121] = window.LoadSprite( "Darkness_0122.png" );
    DarknessSprites[122] = window.LoadSprite( "Darkness_0123.png" );
    DarknessSprites[123] = window.LoadSprite( "Darkness_0124.png" );
    DarknessSprites[124] = window.LoadSprite( "Darkness_0125.png" );
    DarknessSprites[125] = window.LoadSprite( "Darkness_0126.png" );
    DarknessSprites[126] = window.LoadSprite( "Darkness_0127.png" );
    DarknessSprites[127] = window.LoadSprite( "Darkness_0128.png" );
    DarknessSprites[128] = window.LoadSprite( "Darkness_0129.png" );
    DarknessSprites[129] = window.LoadSprite( "Darkness_0130.png" );
    DarknessSprites[130] = window.LoadSprite( "Darkness_0131.png" );
    DarknessSprites[131] = window.LoadSprite( "Darkness_0132.png" );
    DarknessSprites[132] = window.LoadSprite( "Darkness_0133.png" );
    DarknessSprites[133] = window.LoadSprite( "Darkness_0134.png" );
    DarknessSprites[134] = window.LoadSprite( "Darkness_0135.png" );
    DarknessSprites[135] = window.LoadSprite( "Darkness_0136.png" );
    DarknessSprites[136] = window.LoadSprite( "Darkness_0137.png" );
    DarknessSprites[137] = window.LoadSprite( "Darkness_0138.png" );
    DarknessSprites[138] = window.LoadSprite( "Darkness_0139.png" );
    DarknessSprites[139] = window.LoadSprite( "Darkness_0140.png" );
    DarknessSprites[140] = window.LoadSprite( "Darkness_0141.png" );
    DarknessSprites[141] = window.LoadSprite( "Darkness_0142.png" );
    DarknessSprites[142] = window.LoadSprite( "Darkness_0143.png" );
    DarknessSprites[143] = window.LoadSprite( "Darkness_0144.png" );
    DarknessSprites[144] = window.LoadSprite( "Darkness_0145.png" );
    DarknessSprites[145] = window.LoadSprite( "Darkness_0146.png" );
    DarknessSprites[146] = window.LoadSprite( "Darkness_0147.png" );
    DarknessSprites[147] = window.LoadSprite( "Darkness_0148.png" );
    DarknessSprites[148] = window.LoadSprite( "Darkness_0149.png" );
    DarknessSprites[149] = window.LoadSprite( "Darkness_0150.png" );
    DarknessSprites[150] = window.LoadSprite( "Darkness_0151.png" );
    DarknessSprites[151] = window.LoadSprite( "Darkness_0152.png" );
    DarknessSprites[152] = window.LoadSprite( "Darkness_0153.png" );
    DarknessSprites[153] = window.LoadSprite( "Darkness_0154.png" );
    DarknessSprites[154] = window.LoadSprite( "Darkness_0155.png" );
    DarknessSprites[155] = window.LoadSprite( "Darkness_0156.png" );
    DarknessSprites[156] = window.LoadSprite( "Darkness_0157.png" );
    DarknessSprites[157] = window.LoadSprite( "Darkness_0158.png" );
    DarknessSprites[158] = window.LoadSprite( "Darkness_0159.png" );
    DarknessSprites[159] = window.LoadSprite( "Darkness_0160.png" );
    DarknessSprites[160] = window.LoadSprite( "Darkness_0161.png" );
    DarknessSprites[161] = window.LoadSprite( "Darkness_0162.png" );
    DarknessSprites[162] = window.LoadSprite( "Darkness_0163.png" );
    DarknessSprites[163] = window.LoadSprite( "Darkness_0164.png" );
    DarknessSprites[164] = window.LoadSprite( "Darkness_0165.png" );
    DarknessSprites[165] = window.LoadSprite( "Darkness_0166.png" );
    DarknessSprites[166] = window.LoadSprite( "Darkness_0167.png" );
    DarknessSprites[167] = window.LoadSprite( "Darkness_0168.png" );
    DarknessSprites[168] = window.LoadSprite( "Darkness_0169.png" );
    DarknessSprites[169] = window.LoadSprite( "Darkness_0170.png" );
    DarknessSprites[170] = window.LoadSprite( "Darkness_0171.png" );
    DarknessSprites[171] = window.LoadSprite( "Darkness_0172.png" );
    DarknessSprites[172] = window.LoadSprite( "Darkness_0173.png" );
    DarknessSprites[173] = window.LoadSprite( "Darkness_0174.png" );
    DarknessSprites[174] = window.LoadSprite( "Darkness_0175.png" );
    DarknessSprites[175] = window.LoadSprite( "Darkness_0176.png" );
    DarknessSprites[176] = window.LoadSprite( "Darkness_0177.png" );
    DarknessSprites[177] = window.LoadSprite( "Darkness_0178.png" );
    DarknessSprites[178] = window.LoadSprite( "Darkness_0179.png" );
    DarknessSprites[179] = window.LoadSprite( "Darkness_0180.png" );
    DarknessSprites[180] = window.LoadSprite( "Darkness_0181.png" );
    DarknessSprites[181] = window.LoadSprite( "Darkness_0182.png" );
    DarknessSprites[182] = window.LoadSprite( "Darkness_0183.png" );
    DarknessSprites[183] = window.LoadSprite( "Darkness_0184.png" );
    DarknessSprites[184] = window.LoadSprite( "Darkness_0185.png" );
    DarknessSprites[185] = window.LoadSprite( "Darkness_0186.png" );
    DarknessSprites[186] = window.LoadSprite( "Darkness_0187.png" );
    DarknessSprites[187] = window.LoadSprite( "Darkness_0188.png" );
    DarknessSprites[188] = window.LoadSprite( "Darkness_0189.png" );
    DarknessSprites[189] = window.LoadSprite( "Darkness_0190.png" );
    DarknessSprites[190] = window.LoadSprite( "Darkness_0191.png" );
    DarknessSprites[191] = window.LoadSprite( "Darkness_0192.png" );
    DarknessSprites[192] = window.LoadSprite( "Darkness_0193.png" );
    DarknessSprites[193] = window.LoadSprite( "Darkness_0194.png" );
    DarknessSprites[194] = window.LoadSprite( "Darkness_0195.png" );
    DarknessSprites[195] = window.LoadSprite( "Darkness_0196.png" );
    DarknessSprites[196] = window.LoadSprite( "Darkness_0197.png" );
    DarknessSprites[197] = window.LoadSprite( "Darkness_0198.png" );
    DarknessSprites[198] = window.LoadSprite( "Darkness_0199.png" );
    DarknessSprites[199] = window.LoadSprite( "Darkness_0200.png" );
    DarknessSprites[200] = window.LoadSprite( "Darkness_0201.png" );
    DarknessSprites[201] = window.LoadSprite( "Darkness_0202.png" );
    DarknessSprites[202] = window.LoadSprite( "Darkness_0203.png" );
    DarknessSprites[203] = window.LoadSprite( "Darkness_0204.png" );
    DarknessSprites[204] = window.LoadSprite( "Darkness_0205.png" );
    DarknessSprites[205] = window.LoadSprite( "Darkness_0206.png" );
    DarknessSprites[206] = window.LoadSprite( "Darkness_0207.png" );
    DarknessSprites[207] = window.LoadSprite( "Darkness_0208.png" );
    DarknessSprites[208] = window.LoadSprite( "Darkness_0209.png" );
    DarknessSprites[209] = window.LoadSprite( "Darkness_0210.png" );
    DarknessSprites[210] = window.LoadSprite( "Darkness_0211.png" );
    DarknessSprites[211] = window.LoadSprite( "Darkness_0212.png" );
    DarknessSprites[212] = window.LoadSprite( "Darkness_0213.png" );
    DarknessSprites[213] = window.LoadSprite( "Darkness_0214.png" );
    DarknessSprites[214] = window.LoadSprite( "Darkness_0215.png" );
    DarknessSprites[215] = window.LoadSprite( "Darkness_0216.png" );
    DarknessSprites[216] = window.LoadSprite( "Darkness_0217.png" );
    DarknessSprites[217] = window.LoadSprite( "Darkness_0218.png" );
    DarknessSprites[218] = window.LoadSprite( "Darkness_0219.png" );
    DarknessSprites[219] = window.LoadSprite( "Darkness_0220.png" );
    DarknessSprites[220] = window.LoadSprite( "Darkness_0221.png" );
    DarknessSprites[221] = window.LoadSprite( "Darkness_0222.png" );
    DarknessSprites[222] = window.LoadSprite( "Darkness_0223.png" );
    DarknessSprites[223] = window.LoadSprite( "Darkness_0224.png" );
    DarknessSprites[224] = window.LoadSprite( "Darkness_0225.png" );
    DarknessSprites[225] = window.LoadSprite( "Darkness_0226.png" );
    DarknessSprites[226] = window.LoadSprite( "Darkness_0227.png" );
    DarknessSprites[227] = window.LoadSprite( "Darkness_0228.png" );
    DarknessSprites[228] = window.LoadSprite( "Darkness_0229.png" );
    DarknessSprites[229] = window.LoadSprite( "Darkness_0230.png" );
    DarknessSprites[230] = window.LoadSprite( "Darkness_0231.png" );
    DarknessSprites[231] = window.LoadSprite( "Darkness_0232.png" );
    DarknessSprites[232] = window.LoadSprite( "Darkness_0233.png" );
    DarknessSprites[233] = window.LoadSprite( "Darkness_0234.png" );
    DarknessSprites[234] = window.LoadSprite( "Darkness_0235.png" );
    DarknessSprites[235] = window.LoadSprite( "Darkness_0236.png" );
    DarknessSprites[236] = window.LoadSprite( "Darkness_0237.png" );
    DarknessSprites[237] = window.LoadSprite( "Darkness_0238.png" );
    DarknessSprites[238] = window.LoadSprite( "Darkness_0239.png" );
    DarknessSprites[239] = window.LoadSprite( "Darkness_0240.png" );
    DarknessSprites[240] = window.LoadSprite( "Darkness_0241.png" );
    DarknessSprites[241] = window.LoadSprite( "Darkness_0242.png" );
    DarknessSprites[242] = window.LoadSprite( "Darkness_0243.png" );
    DarknessSprites[243] = window.LoadSprite( "Darkness_0244.png" );
    
    var DarknessAnim = new Animation( DarknessSprites, window.DarknessAnimSpeed, window.DarknessAnimFrameSkip, false );
    
    function WallTile( inX, inY ) {
            var size = new Vector2D( BoxSize, BoxSize );
            window.GameObject.call( this, WallSprite, inX, inY, size.x, size.y, true, window.ObjType.wall );
    };
    function pickRandAnim (goo) {
                goo.sprite = GooWitherAnims[Math.floor(Math.random()*4)];
            };
    function GooTile( inX, inY ) {
            var size = new Vector2D( BoxSize - 2, BoxSize - 2 );
            
            var aCallBack = new AnimCallback(this, pickRandAnim);
            var GooAnim = new Animation( GooSpawnSprites, window.GooSpawnAnimSpeed, window.GooSpawnAnimFrameSkip, false, aCallBack ); //make a new one every time
            window.GameObject.call( this, GooAnim, inX, inY, size.x, size.y, true, window.ObjType.goo );
    };
    
    function Ladder( inX, inY ) {
            var size = new Vector2D( BoxSize, BoxSize);
            window.GameObject.call( this, LadderSprite, inX, inY, size.x, size.y, true, window.ObjType.ladder );
    };
    
    function InitWallTiles() {
    
        GenerateMaze();
        
        //set up map from matrix
        for( var i = 0; i < WallMatDimensions.y; i++)
        {
            for( var j = 0; j < WallMatDimensions.x; j++)
            {
                var item = WallMat[j][i];
                if( item == 1 )
                {
                    WallTiles.push( new WallTile(j*BoxSize + BoxSize*0.5, i*BoxSize + BoxSize*0.5) );
                }
                else if ( item == 2 )
                {
                    player.physBox.setPos(j*BoxSize + BoxSize*0.5, i*BoxSize + BoxSize*0.5);
                }
                else if ( item == 3 )
                {
                    if(GooTiles[j] == null)
                    {
                        GooTiles[j] = new Array();
                    }
                    GooTiles[j][i] = new GooTile(j*BoxSize + BoxSize*0.5, i*BoxSize+ BoxSize*0.5);
                }
            }
        }
    };
    
    
    Darkness.prototype = window.ScreenObject.prototype;
    
    function Darkness( inW, inH ) {
        this.startSize = new Vector2D( inW, inH );
        this.size = new Vector2D( inW, inH );
        //var anim = DarknessAnim;//window.LoadSprite("shadow.png");
        var noListflag = true;
        window.ScreenObject.call( this, DarknessAnim, (CANVAS_WIDTH)*0.5, (CANVAS_HEIGHT)*0.5, noListflag);
        this.reset = function () {
            this.sprite.pause();
            this.sprite.reset();
        };
        this.begin = function () {
            this.sprite.play();
        };
        
        this.resize = function ( inScale ) {

            this.size.x = inScale*this.startSize.x;
            this.size.y = inScale*this.startSize.y;
            
            //this is pretty inefficient, we should stop the callback and have
            //a more accurate way of checking this
            if(this.size.x <= CANVAS_WIDTH)
            {
                if(game.LightMeasureTime == false)
                {
                    game.LightMeasureTime = true;
                    game.LightTimePassed = 0;
                }
            
                this.size.x = CANVAS_WIDTH;
                this.size.y = CANVAS_HEIGHT;
            }
            else
            {
                if(game.LightMeasureTime == true)
                {
                    game.LightMeasureTime = false;
                    game.LightTimePassed = 0;
                }
            }
            
        };
        
        this.draw = function( ) {
            this.sprite.draw(canvas, this.position, this.size ); 
        };
    };
    
    GuidingLight.prototype = window.ScreenObject.prototype;
    
    function GuidingLight( inX, inY ) {
        this.size = new Vector2D( 500, 500 );
        var sprite = window.LoadSprite("WhiteLight.png");
        var noListflag = true;
        window.ScreenObject.call( this, sprite, inX, inY, noListflag);
        
        this.draw = function( ) {
            this.sprite.draw(canvas, this.position, this.size ); 
        };
        
        this.update = function( ) {
            if(game.Ladder == null)
            {
                alert( "The Ladder is missing!" );
            }
            var result = new Vector2D(game.Ladder.position.x - player.position.x, game.Ladder.position.y - player.position.y); //points from player to exit
            var wind = new Vector2D( -CANVAS_WIDTH*0.5, -CANVAS_HEIGHT*0.5 ); //from center to top left
            if( ( Math.abs(result.x) < Math.abs(wind.x) ) && ( Math.abs(result.y) < Math.abs(wind.y) ) )
            {
                this.position.x = result.x + CANVAS_WIDTH*0.5;  
                this.position.y = result.y + CANVAS_HEIGHT*0.5;
                return;
            }
            result.normalize();
            wind.normalize();
           // console.log("Result before: " + result.x + "," + result.y);
            
            if( Math.abs(result.x) > Math.abs(wind.x) ) //if our x is greater than wind's we hug one of the sides
            {
                if( result.x > 0 ) //figure out which side we want
                {
                    result.x = CANVAS_WIDTH;
                }
                else
                {
                    result.x = 0;
                }
                var len = Math.abs(wind.y) * 2;
                result.y = CANVAS_HEIGHT * ((result.y + Math.abs(wind.y)) / len);
            }
            else if ( Math.abs(result.y) >= Math.abs(wind.y) ) //if our y is greater than wind's we hug the top or bottom
            {
                if( result.y > 0) //top or bottom?
                {
                    result.y = CANVAS_HEIGHT;
                }
                else
                {
                    result.y = 0;
                }
                var len = Math.abs(wind.x) * 2;
                result.x = CANVAS_WIDTH * ((result.x + Math.abs(wind.x)) / len);
            }
            else
            {
                alert("You're wrong, Zach!");
            }
            this.position.x = result.x;
            this.position.y = result.y;
            
        };
    }
    
    window.WallMatDimensions = WallMatDimensions;
    window.WallMat = WallMat;
    window.WallTiles = WallTiles;
    window.GooTiles = GooTiles;
    window.GooTile = GooTile;
    window.InitWallTiles = InitWallTiles;
    window.Darkness = Darkness;
    window.GuidingLight = GuidingLight;
    window.Ladder = Ladder;
    
}()); // make an anonymous global function expression and immediately call it.