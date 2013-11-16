(function() {

    Player.prototype = window.GameObject.prototype;
    
    function Player() {
        this.combo = new window.CircleCombo();
        this.size = new Vector2D( BoxSize - 2, BoxSize - 2);
        this.ForwardSprites = [];
        this.ForwardSprites[0]  = window.LoadSprite( "Char_ForwardWalk_01.png" );
        this.ForwardSprites[1]  = window.LoadSprite( "Char_ForwardWalk_02.png" );
        this.ForwardSprites[2]  = window.LoadSprite( "Char_ForwardWalk_03.png" );
        this.ForwardSprites[3]  = window.LoadSprite( "Char_ForwardWalk_04.png" );
        this.ForwardSprites[4]  = window.LoadSprite( "Char_ForwardWalk_05.png" );
        this.ForwardSprites[5]  = window.LoadSprite( "Char_ForwardWalk_06.png" );
        this.ForwardSprites[6]  = window.LoadSprite( "Char_ForwardWalk_07.png" );
        this.ForwardSprites[7]  = window.LoadSprite( "Char_ForwardWalk_08.png" );
        this.ForwardSprites[8]  = window.LoadSprite( "Char_ForwardWalk_09.png" );
        this.ForwardSprites[9]  = window.LoadSprite( "Char_ForwardWalk_10.png" );
        this.ForwardSprites[10] = window.LoadSprite( "Char_ForwardWalk_11.png" );
        this.ForwardSprites[11] = window.LoadSprite( "Char_ForwardWalk_12.png" );
        this.ForwardSprites[12] = window.LoadSprite( "Char_ForwardWalk_13.png" );
        this.ForwardSprites[13] = window.LoadSprite( "Char_ForwardWalk_14.png" );
        this.ForwardSprites[14] = window.LoadSprite( "Char_ForwardWalk_15.png" );
        this.ForwardSprites[15] = window.LoadSprite( "Char_ForwardWalk_16.png" );
        this.ForwardSprites[16] = window.LoadSprite( "Char_ForwardWalk_17.png" );
        this.ForwardSprites[17] = window.LoadSprite( "Char_ForwardWalk_18.png" );
        this.ForwardSprites[18] = window.LoadSprite( "Char_ForwardWalk_19.png" );
        this.ForwardSprites[19] = window.LoadSprite( "Char_ForwardWalk_20.png" );
        this.ForwardSprites[20] = window.LoadSprite( "Char_ForwardWalk_21.png" );
        this.ForwardSprites[21] = window.LoadSprite( "Char_ForwardWalk_22.png" );
        this.ForwardSprites[22] = window.LoadSprite( "Char_ForwardWalk_23.png" );
        this.ForwardSprites[23] = window.LoadSprite( "Char_ForwardWalk_24.png" );
        this.ForwardSprites[24] = window.LoadSprite( "Char_ForwardWalk_25.png" );
        this.ForwardSprites[25] = window.LoadSprite( "Char_ForwardWalk_26.png" );
        this.ForwardSprites[26] = window.LoadSprite( "Char_ForwardWalk_27.png" );
        this.ForwardSprites[27] = window.LoadSprite( "Char_ForwardWalk_28.png" );
        this.ForwardSprites[28] = window.LoadSprite( "Char_ForwardWalk_29.png" );
        this.ForwardSprites[29] = window.LoadSprite( "Char_ForwardWalk_30.png" );
        this.ForwardSprites[30] = window.LoadSprite( "Char_ForwardWalk_31.png" );
        this.ForwardSprites[31] = window.LoadSprite( "Char_ForwardWalk_32.png" );
        this.ForwardSprites[32] = window.LoadSprite( "Char_ForwardWalk_33.png" );
        this.ForwardSprites[33] = window.LoadSprite( "Char_ForwardWalk_34.png" );
        this.ForwardSprites[34] = window.LoadSprite( "Char_ForwardWalk_35.png" );
        this.ForwardSprites[35] = window.LoadSprite( "Char_ForwardWalk_36.png" );
        this.ForwardSprites[36] = window.LoadSprite( "Char_ForwardWalk_37.png" );
        this.ForwardSprites[37] = window.LoadSprite( "Char_ForwardWalk_38.png" );
        this.ForwardSprites[38] = window.LoadSprite( "Char_ForwardWalk_39.png" );
        this.ForwardSprites[39] = window.LoadSprite( "Char_ForwardWalk_40.png" );
        this.ForwardSprites[40] = window.LoadSprite( "Char_ForwardWalk_41.png" );
        this.ForwardSprites[41] = window.LoadSprite( "Char_ForwardWalk_42.png" );
        this.ForwardSprites[42] = window.LoadSprite( "Char_ForwardWalk_43.png" );
        this.ForwardSprites[43] = window.LoadSprite( "Char_ForwardWalk_44.png" );
        this.ForwardSprites[44] = window.LoadSprite( "Char_ForwardWalk_45.png" );
        this.ForwardSprites[45] = window.LoadSprite( "Char_ForwardWalk_46.png" );
        this.ForwardSprites[46] = window.LoadSprite( "Char_ForwardWalk_47.png" );
        this.ForwardSprites[47] = window.LoadSprite( "Char_ForwardWalk_48.png" );
        this.ForwardSprites[48] = window.LoadSprite( "Char_ForwardWalk_49.png" );
        this.ForwardSprites[49] = window.LoadSprite( "Char_ForwardWalk_50.png" );
        this.ForwardSprites[50] = window.LoadSprite( "Char_ForwardWalk_51.png" );
        this.ForwardSprites[51] = window.LoadSprite( "Char_ForwardWalk_52.png" );
        this.ForwardSprites[52] = window.LoadSprite( "Char_ForwardWalk_53.png" );
        this.ForwardSprites[53] = window.LoadSprite( "Char_ForwardWalk_54.png" );
        this.ForwardSprites[54] = window.LoadSprite( "Char_ForwardWalk_55.png" );
        this.ForwardSprites[55] = window.LoadSprite( "Char_ForwardWalk_56.png" );
        this.ForwardSprites[56] = window.LoadSprite( "Char_ForwardWalk_57.png" );
        this.ForwardSprites[57] = window.LoadSprite( "Char_ForwardWalk_58.png" );
        this.ForwardSprites[58] = window.LoadSprite( "Char_ForwardWalk_59.png" );
        this.ForwardSprites[59] = window.LoadSprite( "Char_ForwardWalk_60.png" );        
        this.BackwardSprites = [];
        this.BackwardSprites[0]  = window.LoadSprite( "Char_BackWalk_01.png" );
        this.BackwardSprites[1]  = window.LoadSprite( "Char_BackWalk_02.png" );
        this.BackwardSprites[2]  = window.LoadSprite( "Char_BackWalk_03.png" );
        this.BackwardSprites[3]  = window.LoadSprite( "Char_BackWalk_04.png" );
        this.BackwardSprites[4]  = window.LoadSprite( "Char_BackWalk_05.png" );
        this.BackwardSprites[5]  = window.LoadSprite( "Char_BackWalk_06.png" );
        this.BackwardSprites[6]  = window.LoadSprite( "Char_BackWalk_07.png" );
        this.BackwardSprites[7]  = window.LoadSprite( "Char_BackWalk_08.png" );
        this.BackwardSprites[8]  = window.LoadSprite( "Char_BackWalk_09.png" );
        this.BackwardSprites[9]  = window.LoadSprite( "Char_BackWalk_10.png" );
        this.BackwardSprites[10] = window.LoadSprite( "Char_BackWalk_11.png" );
        this.BackwardSprites[11] = window.LoadSprite( "Char_BackWalk_12.png" );
        this.BackwardSprites[12] = window.LoadSprite( "Char_BackWalk_13.png" );
        this.BackwardSprites[13] = window.LoadSprite( "Char_BackWalk_14.png" );
        this.BackwardSprites[14] = window.LoadSprite( "Char_BackWalk_15.png" );
        this.BackwardSprites[15] = window.LoadSprite( "Char_BackWalk_16.png" );
        this.BackwardSprites[16] = window.LoadSprite( "Char_BackWalk_17.png" );
        this.BackwardSprites[17] = window.LoadSprite( "Char_BackWalk_18.png" );
        this.BackwardSprites[18] = window.LoadSprite( "Char_BackWalk_19.png" );
        this.BackwardSprites[19] = window.LoadSprite( "Char_BackWalk_20.png" );
        this.BackwardSprites[20] = window.LoadSprite( "Char_BackWalk_21.png" );
        this.BackwardSprites[21] = window.LoadSprite( "Char_BackWalk_22.png" );
        this.BackwardSprites[22] = window.LoadSprite( "Char_BackWalk_23.png" );
        this.BackwardSprites[23] = window.LoadSprite( "Char_BackWalk_24.png" );
        this.BackwardSprites[24] = window.LoadSprite( "Char_BackWalk_25.png" );
        this.BackwardSprites[25] = window.LoadSprite( "Char_BackWalk_26.png" );
        this.BackwardSprites[26] = window.LoadSprite( "Char_BackWalk_27.png" );
        this.BackwardSprites[27] = window.LoadSprite( "Char_BackWalk_28.png" );
        this.BackwardSprites[28] = window.LoadSprite( "Char_BackWalk_29.png" );
        this.BackwardSprites[29] = window.LoadSprite( "Char_BackWalk_30.png" );
        this.BackwardSprites[30] = window.LoadSprite( "Char_BackWalk_31.png" );
        this.BackwardSprites[31] = window.LoadSprite( "Char_BackWalk_32.png" );
        this.BackwardSprites[32] = window.LoadSprite( "Char_BackWalk_33.png" );
        this.BackwardSprites[33] = window.LoadSprite( "Char_BackWalk_34.png" );
        this.BackwardSprites[34] = window.LoadSprite( "Char_BackWalk_35.png" );
        this.BackwardSprites[35] = window.LoadSprite( "Char_BackWalk_36.png" );
        this.BackwardSprites[36] = window.LoadSprite( "Char_BackWalk_37.png" );
        this.BackwardSprites[37] = window.LoadSprite( "Char_BackWalk_38.png" );
        this.BackwardSprites[38] = window.LoadSprite( "Char_BackWalk_39.png" );
        this.BackwardSprites[39] = window.LoadSprite( "Char_BackWalk_40.png" );
        this.BackwardSprites[40] = window.LoadSprite( "Char_BackWalk_41.png" );
        this.BackwardSprites[41] = window.LoadSprite( "Char_BackWalk_42.png" );
        this.BackwardSprites[42] = window.LoadSprite( "Char_BackWalk_43.png" );
        this.BackwardSprites[43] = window.LoadSprite( "Char_BackWalk_44.png" );
        this.BackwardSprites[44] = window.LoadSprite( "Char_BackWalk_45.png" );
        this.BackwardSprites[45] = window.LoadSprite( "Char_BackWalk_46.png" );
        this.BackwardSprites[46] = window.LoadSprite( "Char_BackWalk_47.png" );
        this.BackwardSprites[47] = window.LoadSprite( "Char_BackWalk_48.png" );
        this.BackwardSprites[48] = window.LoadSprite( "Char_BackWalk_49.png" );
        this.BackwardSprites[49] = window.LoadSprite( "Char_BackWalk_50.png" );
        this.BackwardSprites[50] = window.LoadSprite( "Char_BackWalk_51.png" );
        this.BackwardSprites[51] = window.LoadSprite( "Char_BackWalk_52.png" );
        this.BackwardSprites[52] = window.LoadSprite( "Char_BackWalk_53.png" );
        this.BackwardSprites[53] = window.LoadSprite( "Char_BackWalk_54.png" );
        this.BackwardSprites[54] = window.LoadSprite( "Char_BackWalk_55.png" );
        this.BackwardSprites[55] = window.LoadSprite( "Char_BackWalk_56.png" );
        this.BackwardSprites[56] = window.LoadSprite( "Char_BackWalk_57.png" );
        this.BackwardSprites[57] = window.LoadSprite( "Char_BackWalk_58.png" );
        this.BackwardSprites[58] = window.LoadSprite( "Char_BackWalk_59.png" );
        this.BackwardSprites[59] = window.LoadSprite( "Char_BackWalk_60.png" );  
        this.LeftSprites = [];
        this.LeftSprites[0]  = window.LoadSprite( "Char_SideWalk_Left_01.png" );
        this.LeftSprites[1]  = window.LoadSprite( "Char_SideWalk_Left_02.png" );
        this.LeftSprites[2]  = window.LoadSprite( "Char_SideWalk_Left_03.png" );
        this.LeftSprites[3]  = window.LoadSprite( "Char_SideWalk_Left_04.png" );
        this.LeftSprites[4]  = window.LoadSprite( "Char_SideWalk_Left_05.png" );
        this.LeftSprites[5]  = window.LoadSprite( "Char_SideWalk_Left_06.png" );
        this.LeftSprites[6]  = window.LoadSprite( "Char_SideWalk_Left_07.png" );
        this.LeftSprites[7]  = window.LoadSprite( "Char_SideWalk_Left_08.png" );
        this.LeftSprites[8]  = window.LoadSprite( "Char_SideWalk_Left_09.png" );
        this.LeftSprites[9]  = window.LoadSprite( "Char_SideWalk_Left_10.png" );
        this.LeftSprites[10] = window.LoadSprite( "Char_SideWalk_Left_11.png" );
        this.LeftSprites[11] = window.LoadSprite( "Char_SideWalk_Left_12.png" );
        this.LeftSprites[12] = window.LoadSprite( "Char_SideWalk_Left_13.png" );
        this.LeftSprites[13] = window.LoadSprite( "Char_SideWalk_Left_14.png" );
        this.LeftSprites[14] = window.LoadSprite( "Char_SideWalk_Left_15.png" );
        this.LeftSprites[15] = window.LoadSprite( "Char_SideWalk_Left_16.png" );
        this.LeftSprites[16] = window.LoadSprite( "Char_SideWalk_Left_17.png" );
        this.LeftSprites[17] = window.LoadSprite( "Char_SideWalk_Left_18.png" );
        this.LeftSprites[18] = window.LoadSprite( "Char_SideWalk_Left_19.png" );
        this.LeftSprites[19] = window.LoadSprite( "Char_SideWalk_Left_20.png" );
        this.LeftSprites[20] = window.LoadSprite( "Char_SideWalk_Left_21.png" );
        this.LeftSprites[21] = window.LoadSprite( "Char_SideWalk_Left_22.png" );
        this.LeftSprites[22] = window.LoadSprite( "Char_SideWalk_Left_23.png" );
        this.LeftSprites[23] = window.LoadSprite( "Char_SideWalk_Left_24.png" );
        this.LeftSprites[24] = window.LoadSprite( "Char_SideWalk_Left_25.png" );
        this.LeftSprites[25] = window.LoadSprite( "Char_SideWalk_Left_26.png" );
        this.LeftSprites[26] = window.LoadSprite( "Char_SideWalk_Left_27.png" );
        this.LeftSprites[27] = window.LoadSprite( "Char_SideWalk_Left_28.png" );
        this.LeftSprites[28] = window.LoadSprite( "Char_SideWalk_Left_29.png" );
        this.LeftSprites[29] = window.LoadSprite( "Char_SideWalk_Left_30.png" );
        this.LeftSprites[30] = window.LoadSprite( "Char_SideWalk_Left_31.png" );
        this.LeftSprites[31] = window.LoadSprite( "Char_SideWalk_Left_32.png" );
        this.LeftSprites[32] = window.LoadSprite( "Char_SideWalk_Left_33.png" );
        this.LeftSprites[33] = window.LoadSprite( "Char_SideWalk_Left_34.png" );
        this.LeftSprites[34] = window.LoadSprite( "Char_SideWalk_Left_35.png" );
        this.LeftSprites[35] = window.LoadSprite( "Char_SideWalk_Left_36.png" );
        this.LeftSprites[36] = window.LoadSprite( "Char_SideWalk_Left_37.png" );
        this.LeftSprites[37] = window.LoadSprite( "Char_SideWalk_Left_38.png" );
        this.LeftSprites[38] = window.LoadSprite( "Char_SideWalk_Left_39.png" );
        this.LeftSprites[39] = window.LoadSprite( "Char_SideWalk_Left_40.png" );
        this.LeftSprites[40] = window.LoadSprite( "Char_SideWalk_Left_41.png" );
        this.LeftSprites[41] = window.LoadSprite( "Char_SideWalk_Left_42.png" );
        this.LeftSprites[42] = window.LoadSprite( "Char_SideWalk_Left_43.png" );
        this.LeftSprites[43] = window.LoadSprite( "Char_SideWalk_Left_44.png" );
        this.LeftSprites[44] = window.LoadSprite( "Char_SideWalk_Left_45.png" );
        this.LeftSprites[45] = window.LoadSprite( "Char_SideWalk_Left_46.png" );
        this.LeftSprites[46] = window.LoadSprite( "Char_SideWalk_Left_47.png" );
        this.LeftSprites[47] = window.LoadSprite( "Char_SideWalk_Left_48.png" );
        this.LeftSprites[48] = window.LoadSprite( "Char_SideWalk_Left_49.png" );
        this.LeftSprites[49] = window.LoadSprite( "Char_SideWalk_Left_50.png" );
        this.LeftSprites[50] = window.LoadSprite( "Char_SideWalk_Left_51.png" );
        this.LeftSprites[51] = window.LoadSprite( "Char_SideWalk_Left_52.png" );
        this.LeftSprites[52] = window.LoadSprite( "Char_SideWalk_Left_53.png" );
        this.LeftSprites[53] = window.LoadSprite( "Char_SideWalk_Left_54.png" );
        this.LeftSprites[54] = window.LoadSprite( "Char_SideWalk_Left_55.png" );
        this.LeftSprites[55] = window.LoadSprite( "Char_SideWalk_Left_56.png" );
        this.LeftSprites[56] = window.LoadSprite( "Char_SideWalk_Left_57.png" );
        this.LeftSprites[57] = window.LoadSprite( "Char_SideWalk_Left_58.png" );
        this.LeftSprites[58] = window.LoadSprite( "Char_SideWalk_Left_59.png" );
        this.LeftSprites[59] = window.LoadSprite( "Char_SideWalk_Left_60.png" );
        this.LeftSprites[60] = window.LoadSprite( "Char_SideWalk_Left_61.png" );
        this.RightSprites = [];
        this.RightSprites[0]  = window.LoadSprite( "Char_SideWalk_Right_01.png" );
        this.RightSprites[1]  = window.LoadSprite( "Char_SideWalk_Right_02.png" );
        this.RightSprites[2]  = window.LoadSprite( "Char_SideWalk_Right_03.png" );
        this.RightSprites[3]  = window.LoadSprite( "Char_SideWalk_Right_04.png" );
        this.RightSprites[4]  = window.LoadSprite( "Char_SideWalk_Right_05.png" );
        this.RightSprites[5]  = window.LoadSprite( "Char_SideWalk_Right_06.png" );
        this.RightSprites[6]  = window.LoadSprite( "Char_SideWalk_Right_07.png" );
        this.RightSprites[7]  = window.LoadSprite( "Char_SideWalk_Right_08.png" );
        this.RightSprites[8]  = window.LoadSprite( "Char_SideWalk_Right_09.png" );
        this.RightSprites[9]  = window.LoadSprite( "Char_SideWalk_Right_10.png" );
        this.RightSprites[10] = window.LoadSprite( "Char_SideWalk_Right_11.png" );
        this.RightSprites[11] = window.LoadSprite( "Char_SideWalk_Right_12.png" );
        this.RightSprites[12] = window.LoadSprite( "Char_SideWalk_Right_13.png" );
        this.RightSprites[13] = window.LoadSprite( "Char_SideWalk_Right_14.png" );
        this.RightSprites[14] = window.LoadSprite( "Char_SideWalk_Right_15.png" );
        this.RightSprites[15] = window.LoadSprite( "Char_SideWalk_Right_16.png" );
        this.RightSprites[16] = window.LoadSprite( "Char_SideWalk_Right_17.png" );
        this.RightSprites[17] = window.LoadSprite( "Char_SideWalk_Right_18.png" );
        this.RightSprites[18] = window.LoadSprite( "Char_SideWalk_Right_19.png" );
        this.RightSprites[19] = window.LoadSprite( "Char_SideWalk_Right_20.png" );
        this.RightSprites[20] = window.LoadSprite( "Char_SideWalk_Right_21.png" );
        this.RightSprites[21] = window.LoadSprite( "Char_SideWalk_Right_22.png" );
        this.RightSprites[22] = window.LoadSprite( "Char_SideWalk_Right_23.png" );
        this.RightSprites[23] = window.LoadSprite( "Char_SideWalk_Right_24.png" );
        this.RightSprites[24] = window.LoadSprite( "Char_SideWalk_Right_25.png" );
        this.RightSprites[25] = window.LoadSprite( "Char_SideWalk_Right_26.png" );
        this.RightSprites[26] = window.LoadSprite( "Char_SideWalk_Right_27.png" );
        this.RightSprites[27] = window.LoadSprite( "Char_SideWalk_Right_28.png" );
        this.RightSprites[28] = window.LoadSprite( "Char_SideWalk_Right_29.png" );
        this.RightSprites[29] = window.LoadSprite( "Char_SideWalk_Right_30.png" );
        this.RightSprites[30] = window.LoadSprite( "Char_SideWalk_Right_31.png" );
        this.RightSprites[31] = window.LoadSprite( "Char_SideWalk_Right_32.png" );
        this.RightSprites[32] = window.LoadSprite( "Char_SideWalk_Right_33.png" );
        this.RightSprites[33] = window.LoadSprite( "Char_SideWalk_Right_34.png" );
        this.RightSprites[34] = window.LoadSprite( "Char_SideWalk_Right_35.png" );
        this.RightSprites[35] = window.LoadSprite( "Char_SideWalk_Right_36.png" );
        this.RightSprites[36] = window.LoadSprite( "Char_SideWalk_Right_37.png" );
        this.RightSprites[37] = window.LoadSprite( "Char_SideWalk_Right_38.png" );
        this.RightSprites[38] = window.LoadSprite( "Char_SideWalk_Right_39.png" );
        this.RightSprites[39] = window.LoadSprite( "Char_SideWalk_Right_40.png" );
        this.RightSprites[40] = window.LoadSprite( "Char_SideWalk_Right_41.png" );
        this.RightSprites[41] = window.LoadSprite( "Char_SideWalk_Right_42.png" );
        this.RightSprites[42] = window.LoadSprite( "Char_SideWalk_Right_43.png" );
        this.RightSprites[43] = window.LoadSprite( "Char_SideWalk_Right_44.png" );
        this.RightSprites[44] = window.LoadSprite( "Char_SideWalk_Right_45.png" );
        this.RightSprites[45] = window.LoadSprite( "Char_SideWalk_Right_46.png" );
        this.RightSprites[46] = window.LoadSprite( "Char_SideWalk_Right_47.png" );
        this.RightSprites[47] = window.LoadSprite( "Char_SideWalk_Right_48.png" );
        this.RightSprites[48] = window.LoadSprite( "Char_SideWalk_Right_49.png" );
        this.RightSprites[49] = window.LoadSprite( "Char_SideWalk_Right_50.png" );
        this.RightSprites[50] = window.LoadSprite( "Char_SideWalk_Right_51.png" );
        this.RightSprites[51] = window.LoadSprite( "Char_SideWalk_Right_52.png" );
        this.RightSprites[52] = window.LoadSprite( "Char_SideWalk_Right_53.png" );
        this.RightSprites[53] = window.LoadSprite( "Char_SideWalk_Right_54.png" );
        this.RightSprites[54] = window.LoadSprite( "Char_SideWalk_Right_55.png" );
        this.RightSprites[55] = window.LoadSprite( "Char_SideWalk_Right_56.png" );
        this.RightSprites[56] = window.LoadSprite( "Char_SideWalk_Right_57.png" );
        this.RightSprites[57] = window.LoadSprite( "Char_SideWalk_Right_58.png" );
        this.RightSprites[58] = window.LoadSprite( "Char_SideWalk_Right_59.png" );
        this.RightSprites[59] = window.LoadSprite( "Char_SideWalk_Right_60.png" );
        this.RightSprites[60] = window.LoadSprite( "Char_SideWalk_Right_61.png" );
        this.ForwardAnim = new Animation( this.ForwardSprites, window.PlayerWalkAnimSpeed, window.PlayerWalkAnimFrameSkip, true );
        this.BackwardAnim = new Animation( this.BackwardSprites, window.PlayerWalkAnimSpeed, window.PlayerWalkAnimFrameSkip, true );
        this.LeftAnim = new Animation( this.LeftSprites, window.PlayerWalkAnimSpeed, window.PlayerWalkAnimFrameSkip, true );
        this.RightAnim = new Animation( this.RightSprites, window.PlayerWalkAnimSpeed, window.PlayerWalkAnimFrameSkip, true );
        window.GameObject.call( this, this.ForwardAnim, 0, 0, this.size.x, this.size.y, false, window.ObjType.player ); //player is placed by maze
        this.lastDir = directions.none;
        this.lastInput = new Array(5);
        
        this.isGooey = false;

        this.velocity = new Vector2D( 0, 0 );
        
        this.speed = window.PlayerSpeed;
        
        this.onCollide = function( objType ) {
                if(objType == window.ObjType.goo)
                {
                    if(!this.isGooey)
                    {
                        PlaySoundInterruptLoop("background");
                        window.game.BeginDarkness();
                        this.isGooey = true;
                    }
                }
                else if(objType == window.ObjType.ladder)
                {
                    //resolve player ladder collision
                    SwitchScene( window.WinScene );
                }
        };
        
        this.GetSpriteNeeded = function (moveDir) {
            var dirSprite;
            switch( moveDir )
            {
                case directions.up:
                    dirSprite = this.BackwardAnim;
                break;
                case directions.down:
                    dirSprite = this.ForwardAnim;
                break;
                case directions.left:
                    dirSprite = this.LeftAnim;
                break;
                case directions.right:
                    dirSprite = this.RightAnim;
                break;
                case directions.none:
                    dirSprite = this.sprite;
                break;
                default:
                    alert("invalid move direction");
                break;
            }
            return dirSprite;
        }
        
        this.checkInput = function () {
            var moveDir = this.lastDir;
            var anyKey = false;
            if(keydown.left) {
                if(this.lastInput[directions.left] == 0)
                {
                    moveDir = directions.left;
                    this.lastInput[directions.left] = 1;
                }
                anyKey = true;
            }
            else 
            {
                this.lastInput[directions.left] = 0;
            }
            
            if(keydown.right) {
                if(this.lastInput[directions.right] == 0)
                {
                    moveDir = directions.right;
                    this.lastInput[directions.right] = 1;
                }
                anyKey = true;
            }
            else
            {
                this.lastInput[directions.right] = 0;
            }
            
            if(keydown.up) {
                if(this.lastInput[directions.up] == 0)
                {
                    moveDir = directions.up;
                    this.lastInput[directions.up] = 1;
                }
                anyKey = true;
            }
            else
            {
                this.lastInput[directions.up] = 0;
            }
            
            if(keydown.down) {
                if(this.lastInput[directions.down] == 0)
                {
                    moveDir = directions.down;
                    this.lastInput[directions.down] = 1;
                }
                anyKey = true;
            }
            else
            {
                this.lastInput[directions.down] = 0;
            }
            
            if(!anyKey)
            {
                moveDir = directions.none;
                this.lastInput[directions.none] = 1;
            }
            else
            {
                this.lastInput[directions.none] = 0;
            }
            
            return moveDir;
        };
        
        this.move = function( moveDir ) {
            var didChangeDir = false;
            switch( moveDir )
            {
                case directions.up:
                    this.velocity.y = -this.speed;
                break;
                case directions.down:
                    this.velocity.y = this.speed;
                break;
                case directions.left:
                    this.velocity.x = -this.speed;
                break;
                case directions.right:
                    this.velocity.x = this.speed;
                break;
                case directions.none:
                break;
                default:
                    alert("invalid direction - tell a programmer");
                break;
            }
            
            if(moveDir == directions.none)
            {
                //set lastDir
                this.lastDir = directions.none;
                return didChangeDir;
            }
            
            if( this.lastDir != moveDir ) //if we don't have the current direction saved off as the last one
            {
                if( this.combo.AddMove(moveDir) )
                {
                    this.isGooey = false;
                    PlaySoundInterrupt("exhale");
                    window.game.RitualComplete();
                }
                didChangeDir = true;
            }
            
            if(this.isGooey)
            {
                var curX = this.gridPosition.x;
                var curY = this.gridPosition.y;
                if(WallMat[curX][curY] != 3)
                {
                    WallMat[curX][curY] = 3;
                    if(GooTiles[curX] == null)
                    {
                        GooTiles[curX] = new Array();
                    }
                    PlaySoundInterrupt("squish");
                    GooTiles[curX][curY] = new GooTile(curX*BoxSize + BoxSize*0.5, curY*BoxSize + BoxSize*0.5);
                }
            }
            
            //set lastDir
            this.lastDir = moveDir;
            
            return didChangeDir; //this is sort of an awkward thing to be returning considering the function's purpose
        };
        
        this.update = function() {
            var moveDir = this.checkInput();
            var dirChange = this.move(moveDir);
            
            if((moveDir==directions.none) && !this.sprite.isPaused)
            {
                this.sprite.pause();
                this.sprite.reset();
            }
            else if(moveDir!=directions.none)
            {
                if(this.sprite.isPaused)
                {
                    this.sprite.unpause();
                    this.sprite = this.GetSpriteNeeded(moveDir);
                    this.sprite.reset();
                }
                else if (dirChange) //if we simply changed direction, but did not stop moving
                {
                    this.sprite = this.GetSpriteNeeded(moveDir);
                    this.sprite.reset();
                }
            }
            
            this.physBox.setVel(this.velocity);
            
            this.physBox.getPos(this.position);
            this.gridPosition.x = Math.floor(this.position.x / BoxSize);
            this.gridPosition.y = Math.floor(this.position.y / BoxSize);
            
            //have the camera follow the player
            window.camera.setPosition(this.position);
            
            this.velocity.x = 0;
            this.velocity.y = 0;
            
        };
    };
    
    var ThePlayer = new Player();

    window.player = ThePlayer;
    
}()); // make an anonymous global function expression and immediately call it.