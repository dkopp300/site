/* Pulls random image to display on page */

random_num = (Math.round((Math.random() * 3) + 1));


link = new Array;

link[1] = { flag: "../assets/flagImages/ad.png", value: 'andorra' };
link[2] = { flag: "../assets/flagImages/ae.png", value: 'uae' + 'united arab emirates' }
link[3] = { flag: "../assets/flagImages/af.png", value: 'afghanistan' };
link[4] = { flag: "../assets/flagImages/ag.png", value: 'antigua and barbuda' };



/* Function that compares user input to link value */

const guess = document.getElementById('guess');

function checkGuess() {

    event.preventDefault()

    if (link[random_num].value.toLowerCase() === guess.value.toLowerCase()) {
        alert('Correct!'); //correct guess 
    } else {
        alert('Wrong!'); //wrong guess 
    }

}


link[5] = "../assets/flagImages/ai.png";
link[6] = "../assets/flagImages/al.png";
link[7] = "../assets/flagImages/am.png";
link[8] = "../assets/flagImages/ao.png";
link[9] = "../assets/flagImages/aq.png";
link[10] = "../assets/flagImages/ar.png";
link[11] = "../assets/flagImages/as.png";
link[12] = "../assets/flagImages/at.png";
link[13] = "../assets/flagImages/au.png";
link[14] = "../assets/flagImages/aw.png";
link[15] = "../assets/flagImages/ax.png";
link[16] = "../assets/flagImages/az.png";
link[17] = "../assets/flagImages/ba.png";
link[18] = "../assets/flagImages/bb.png";
link[19] = "../assets/flagImages/bd.png";
link[20] = "../assets/flagImages/be.png";
link[21] = "../assets/flagImages/bf.png";
link[22] = "../assets/flagImages/bg.png";
link[23] = "../assets/flagImages/bh.png";
link[24] = "../assets/flagImages/bi.png";
link[25] = "../assets/flagImages/bj.png";
link[26] = "../assets/flagImages/bl.png";
link[27] = "../assets/flagImages/bm.png";
link[28] = "../assets/flagImages/bn.png";
link[29] = "../assets/flagImages/bo.png";
link[30] = "../assets/flagImages/bq.png";
link[31] = "../assets/flagImages/br.png";
link[32] = "../assets/flagImages/bs.png";
link[33] = "../assets/flagImages/bt.png";
link[34] = "../assets/flagImages/bv.png";
link[35] = "../assets/flagImages/bw.png";
link[36] = "../assets/flagImages/by.png";
link[37] = "../assets/flagImages/bz.png";
link[38] = "../assets/flagImages/ca.png";
link[39] = "../assets/flagImages/cc.png";
link[40] = "../assets/flagImages/cd.png";
link[41] = "../assets/flagImages/cf.png";
link[42] = "../assets/flagImages/cg.png";
link[43] = "../assets/flagImages/ch.png";
link[44] = "../assets/flagImages/ci.png";
link[45] = "../assets/flagImages/ck.png";
link[46] = "../assets/flagImages/cl.png";
link[47] = "../assets/flagImages/cm.png";
link[48] = "../assets/flagImages/cn.png";
link[49] = "../assets/flagImages/co.png";
link[50] = "../assets/flagImages/cr.png";
link[51] = "../assets/flagImages/cu.png";
link[52] = "../assets/flagImages/cv.png";
link[53] = "../assets/flagImages/cw.png";
link[54] = "../assets/flagImages/cx.png";
link[55] = "../assets/flagImages/cy.png";
link[56] = "../assets/flagImages/cz.png";
link[57] = "../assets/flagImages/de.png";
link[58] = "../assets/flagImages/dj.png";
link[59] = "../assets/flagImages/dk.png";
link[60] = "../assets/flagImages/dm.png";
link[61] = "../assets/flagImages/do.png";
link[62] = "../assets/flagImages/dz.png";
link[63] = "../assets/flagImages/ec.png";
link[64] = "../assets/flagImages/ee.png";
link[65] = "../assets/flagImages/eg.png";
link[66] = "../assets/flagImages/eh.png";
link[67] = "../assets/flagImages/er.png";
link[68] = "../assets/flagImages/es.png";
link[69] = "../assets/flagImages/et.png";
link[70] = "../assets/flagImages/fl.png";
link[71] = "../assets/flagImages/fj.png";
link[72] = "../assets/flagImages/fk.png";
link[73] = "../assets/flagImages/fm.png";
link[74] = "../assets/flagImages/fo.png";
link[75] = "../assets/flagImages/fr.png";
link[76] = "../assets/flagImages/ga.png";
link[77] = "../assets/flagImages/gb-eng.png";
link[78] = "../assets/flagImages/gb-nir.png";
link[79] = "../assets/flagImages/gb-sct.png";
link[80] = "../assets/flagImages/gb-wls.png";
link[81] = "../assets/flagImages/gb.png";
link[82] = "../assets/flagImages/gd.png";
link[83] = "../assets/flagImages/ge.png";
link[84] = "../assets/flagImages/gf.png";
link[85] = "../assets/flagImages/gg.png";
link[86] = "../assets/flagImages/gh.png";
link[87] = "../assets/flagImages/gi.png";
link[88] = "../assets/flagImages/gl.png";
link[89] = "../assets/flagImages/gm.png";
link[90] = "../assets/flagImages/gn.png";
link[91] = "../assets/flagImages/gp.png";
link[92] = "../assets/flagImages/gq.png";
link[93] = "../assets/flagImages/gr.png";
link[94] = "../assets/flagImages/gs.png";
link[95] = "../assets/flagImages/gt.png";
link[96] = "../assets/flagImages/gu.png";
link[97] = "../assets/flagImages/gw.png";
link[98] = "../assets/flagImages/hk.png";
link[99] = "../assets/flagImages/hm.png";
link[100] = "../assets/flagImages/hn.png";
link[101] = "../assets/flagImages/hr.png";
link[102] = "../assets/flagImages/ht.png";
link[103] = "../assets/flagImages/hu.png";
link[104] = "../assets/flagImages/id.png";
link[105] = "../assets/flagImages/ie.png";
link[106] = "../assets/flagImages/il.png";
link[107] = "../assets/flagImages/im.png";
link[108] = "../assets/flagImages/in.png";
link[109] = "../assets/flagImages/io.png";
link[110] = "../assets/flagImages/iq.png";
link[111] = "../assets/flagImages/ir.png";
link[112] = "../assets/flagImages/is.png";
link[113] = "../assets/flagImages/it.png";
link[114] = "../assets/flagImages/jo.png";
link[115] = "../assets/flagImages/jp.png";
link[116] = "../assets/flagImages/ke.png";
link[117] = "../assets/flagImages/kg.png";
link[118] = "../assets/flagImages/kh.png";
link[119] = "../assets/flagImages/ki.png";
link[120] = "../assets/flagImages/km.png";
link[121] = "../assets/flagImages/kn.png";
link[122] = "../assets/flagImages/kp.png";
link[123] = "../assets/flagImages/kr.png";
link[124] = "../assets/flagImages/kw.png";
link[125] = "../assets/flagImages/ky.png";
link[126] = "../assets/flagImages/kz.png";
link[127] = "../assets/flagImages/la.png";
link[128] = "../assets/flagImages/lb.png";
link[129] = "../assets/flagImages/lc.png";
link[130] = "../assets/flagImages/li.png";
link[131] = "../assets/flagImages/lk.png";
link[132] = "../assets/flagImages/lr.png";
link[133] = "../assets/flagImages/ls.png";
link[134] = "../assets/flagImages/lt.png";
link[135] = "../assets/flagImages/lu.png";
link[136] = "../assets/flagImages/lv.png";
link[137] = "../assets/flagImages/ly.png";
link[138] = "../assets/flagImages/ma.png";
link[139] = "../assets/flagImages/mc.png";
link[140] = "../assets/flagImages/md.png";
link[141] = "../assets/flagImages/me.png";
link[142] = "../assets/flagImages/mf.png";
link[143] = "../assets/flagImages/mg.png";
link[144] = "../assets/flagImages/mh.png";
link[145] = "../assets/flagImages/mk.png";
link[146] = "../assets/flagImages/ml.png";
link[147] = "../assets/flagImages/mm.png";
link[148] = "../assets/flagImages/mn.png";
link[149] = "../assets/flagImages/mo.png";
link[150] = "../assets/flagImages/mp.png";
link[151] = "../assets/flagImages/mq.png";
link[152] = "../assets/flagImages/mr.png";
link[153] = "../assets/flagImages/mt.png";
link[154] = "../assets/flagImages/mu.png";
link[155] = "../assets/flagImages/mv.png";
link[156] = "../assets/flagImages/mw.png";
link[157] = "../assets/flagImages/mx.png";
link[158] = "../assets/flagImages/my.png";
link[159] = "../assets/flagImages/mz.png";
link[160] = "../assets/flagImages/na.png";
link[161] = "../assets/flagImages/nc.png";
link[162] = "../assets/flagImages/ne.png";
link[163] = "../assets/flagImages/nf.png";
link[164] = "../assets/flagImages/ng.png";
link[165] = "../assets/flagImages/ni.png";
link[166] = "../assets/flagImages/nl.png";
link[167] = "../assets/flagImages/no.png";
link[168] = "../assets/flagImages/np.png";
link[169] = "../assets/flagImages/nr.png";
link[170] = "../assets/flagImages/nu.png";
link[171] = "../assets/flagImages/nz.png";
link[172] = "../assets/flagImages/om.png";
link[173] = "../assets/flagImages/pa.png";
link[174] = "../assets/flagImages/pe.png";
link[175] = "../assets/flagImages/pf.png";
link[176] = "../assets/flagImages/pg.png";
link[177] = "../assets/flagImages/ph.png";
link[178] = "../assets/flagImages/pk.png";
link[179] = "../assets/flagImages/pl.png";
link[180] = "../assets/flagImages/pm.png";
link[181] = "../assets/flagImages/pn.png";
link[182] = "../assets/flagImages/pr.png";
link[183] = "../assets/flagImages/ps.png";
link[184] = "../assets/flagImages/pt.png";
link[185] = "../assets/flagImages/pw.png";
link[186] = "../assets/flagImages/py.png";
link[187] = "../assets/flagImages/qa.png";
link[188] = "../assets/flagImages/re.png";
link[189] = "../assets/flagImages/ro.png";
link[190] = "../assets/flagImages/rs.png";
link[191] = "../assets/flagImages/ru.png";
link[192] = "../assets/flagImages/rw.png";
link[193] = "../assets/flagImages/sa.png";
link[194] = "../assets/flagImages/sb.png";
link[195] = "../assets/flagImages/sc.png";
link[196] = "../assets/flagImages/sd.png";
link[197] = "../assets/flagImages/se.png";
link[198] = "../assets/flagImages/sg.png";
link[199] = "../assets/flagImages/sh.png";
link[200] = "../assets/flagImages/si.png";
link[201] = "../assets/flagImages/sj.png";
link[202] = "../assets/flagImages/sk.png";
link[203] = "../assets/flagImages/sl.png";
link[204] = "../assets/flagImages/sm.png";
link[205] = "../assets/flagImages/sn.png";
link[206] = "../assets/flagImages/so.png";
link[207] = "../assets/flagImages/sr.png";
link[208] = "../assets/flagImages/ss.png";
link[209] = "../assets/flagImages/st.png";
link[210] = "../assets/flagImages/sv.png";
link[211] = "../assets/flagImages/sx.png";
link[212] = "../assets/flagImages/sy.png";
link[213] = "../assets/flagImages/sz.png";
link[214] = "../assets/flagImages/tc.png";
link[215] = "../assets/flagImages/td.png";
link[216] = "../assets/flagImages/tf.png";
link[217] = "../assets/flagImages/tg.png";
link[218] = "../assets/flagImages/th.png";
link[219] = "../assets/flagImages/tj.png";
link[220] = "../assets/flagImages/tl.png";
link[221] = "../assets/flagImages/tm.png";
link[222] = "../assets/flagImages/tn.png";
link[223] = "../assets/flagImages/to.png";
link[224] = "../assets/flagImages/tr.png";
link[225] = "../assets/flagImages/tt.png";
link[226] = "../assets/flagImages/tv.png";
link[227] = "../assets/flagImages/tw.png";
link[228] = "../assets/flagImages/tz.png";
link[229] = "../assets/flagImages/ua.png";
link[230] = "../assets/flagImages/ug.png";
link[231] = "../assets/flagImages/um.png";
link[232] = "../assets/flagImages/us.png";
link[233] = "../assets/flagImages/uy.png";
link[234] = "../assets/flagImages/uz.png";
link[235] = "../assets/flagImages/va.png";
link[236] = "../assets/flagImages/vc.png";
link[237] = "../assets/flagImages/ve.png";
link[238] = "../assets/flagImages/vg.png";
link[239] = "../assets/flagImages/vi.png";
link[240] = "../assets/flagImages/vn.png";
link[241] = "../assets/flagImages/vu.png";
link[242] = "../assets/flagImages/wf.png";
link[243] = "../assets/flagImages/ws.png";
link[244] = "../assets/flagImages/xk.png";
link[245] = "../assets/flagImages/ye.png";
link[246] = "../assets/flagImages/yt.png";
link[247] = "../assets/flagImages/za.png";
link[248] = "../assets/flagImages/zm.png";
link[249] = "../assets/flagImages/zw.png";
link[250] = "../assets/flagImages/fo.png";
link[251] = "../assets/flagImages/fr.png";
link[252] = "../assets/flagImages/ga.png";
link[253] = "../assets/flagImages/gb-eng.png";
link[254] = "../assets/flagImages/gb-nir.png";
link[255] = "../assets/flagImages/gb-sct.png";


