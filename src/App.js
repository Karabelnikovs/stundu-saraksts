
import Diena from './Diena';


function App() {
return(
  <>
  <style dangerouslySetInnerHTML={{__html: "\nhtml { width: 100%; margin: 0 auto; overflow-x: hidden;}\n\nbody {\n\tmin-height: 100%;\n\tfont-family: verdana, arial, Helvetica, sans-serif;\n\tpadding: 0;\n\tbackground-image: url('');\n\tbackground-color: #FFFFFF;\n\t}\n\n@media print {\n\t.nedruka {display:none;}\n\t.tabulaw { width: 100%;\n\t\t\tdisplay:none;}\n  .tabula, .stab, .stabr {\n\tborder: none !important;\n\twidth: 100%;\n\tmargin-left: auto;\n\tmargin-right: auto;\n\t  }\n\n\t.izmanas { min-width: 140px;}\n\t.att {width: 94px;}\n\t.virsr {\n\t\tpadding: 0px 0px 2px 10px;\n\t\tbackground-color: #FFFFFF;\n\t\tmargin: 0px;\n\t\tfont-weight: bolder;\n\t\tfont-size: 16px;\n\t\tcolor: #000000;}\n\t.td_0, .td_1, .td_0p, .td_1p{\n\t\tbackground-color:transparent; \n\t}\n}\n\n@media screen {\n  body {\n    background: #FFFFFF;\n  }\n\t.tabulaw { width: 640px;}\n\t.tabula, .stab, .stabr {\n    width: 640px;\n    margin-left: auto;\n    margin-right: auto;\n\t}\n\t\n.dbox, .dboxi {\n\tfont-size:90%;\n    width: 88px;\n    height: 26px;\n\tdisplay: inline-block;\n}\n\t.izmanas { min-width: 330px;}\n\t.att {width: 281px;}\n\t.virsr {\n\t\tbackground-color: #888888;\n\t\tpadding: 3px 0px 2px 10px;\t\t\n\t\tmargin: 0 0 5px 0;\n\t\tfont-weight: bolder;\n\t\tfont-size: 16px;\n\t\tcolor: white;}\n\t.stabr {\n\tmargin-top:8px;\n\tborder-top: 4px solid orange;\n\tborder-left: 3px solid orange;\n\tborder-right: 3px solid orange;\n\tborder-bottom: 3px solid orange;\n\t} \n\t.stab {\n\tmargin-top:8px;\n\tborder-top: 2px solid #000000;\n\tborder-left: 1px solid #777777;\n\tborder-right: 1px solid #777777;\n\tborder-bottom: 1px solid #777777;\n\t} \n\t.td_0 {\t\n\t\tbackground-color:transparent;\n\t}\n\t.td_1 {\t\n\t\tbackground-Color:#FFC6C6;\n\t}\n\t.td_1:hover {\t\n\t\tbackground-color:#fff59d;\n\t}\t\n\t.td_1p:hover {\t\n\t\tbackground-color:#fff59d;\n\t\tcursor: pointer;\n\t}\n} \n\n@media screen and (max-width: 600px){\n  .tabula, .stab, .stabr {\n    width: 100%;\n    margin-left: auto;\n    margin-right: auto;\n  }\n  \n  .tabulaw {\n\t  width: 100%;\n  }\n\t.dbox, .dboxi {\n\t\tfont-size:140%;\n\t\twidth: 160px;\n\t\theight: 48px;\n\t\tdisplay: inline-block;\n\t}\n}\n\n@media screen  and (max-width: 768px){\n  .tabula, .stab, .stabr {\n    width: 100%;\n    margin-left: auto;\n    margin-right: auto;\n  }\n  .tabulaw { width: 100% ;}\n\t.dbox,.dboxi {\n\t\tfont-size:140%;\n\t\twidth: 160px;\n\t\theight: 48px;\n\t\tdisplay: inline-block;\n\t}\n\t\n}\n@media screen  and (max-width: 120px){\n  .tabula, .stab, .stabr {\n    width: 100%;\n    margin-left: auto;\n    margin-right: auto;\n  }\n  .tabulaw { width: 100% ;}\n\t.dbox, .dboxi {\n\t\tfont-size:140%;\n\t\twidth: 160px;\n\t\theight: 48px;\n\t\tdisplay: inline-block;\n\t}\n\t\n}\n\n.txi {\n  font-size: 9px;\n  color: #666666;\n  font-weight: 300;\n}\n.kraso {\n\tcolor: blue !important;\n}\n.krasop {\n\tcolor: #999999 !important;\n\tfont-size:80%;\n}\n.txms {\n  font-size: 9px;\n  color: #666666;\n  font-weight: 300;\n  text-align: left;\n  padding-left:0px;\n  text-decoration:line-through;\n}\n.txns {\n  font-size: 10px;\n  color: #666666;\n  font-weight: 300;\n  text-align: left;\n  padding-left:0px;\n  text-decoration:line-through;\n}\n.tdh{\n\tline-height: 12px;\n}\n\n.dbox {\n    margin: 1px;\n    border: 1px solid #888888;\n\ttext-align:center;\n\tpadding:0px;\n\ttext-indent:0px;\n\t-moz-border-radius: 4px;\n\tborder-radius: 4px;\n}\n.dboxi {\n    margin: 1px;\n    border: 1px solid #888888;\n\ttext-align:center;\n\tpadding:0px;\n\tbackground-color: #DDDDDD;\n\ttext-indent:0px;\n\t-moz-border-radius: 4px;\n\tborder-radius: 4px;\n}\n.dbox:hover, .dboxi:hover {\n\tcursor: pointer;\n\tcursor: hand;\n\tbackground-color: #FF6633;\n\tcolor: white !important;\n}\n" }} />
  <Diena 
  diena="pirmdiena"
  datums="25.09"
  
  pirmaklase="C.201-D.Tarasova"
  otraklase="C.206-I.Eglīte"
  tresaklase="C.203-J.Krīgerts"
  ceturtaklase="C.203-J.Krīgerts"
  />
  <Diena 
  diena="otrdiena"
  datums="26.09"
  pirmast="Sociālās zinības un vēsture"
  otrast="Dabaszinības"
  tresast="Matemātika"
  ceturtast="Sports"
  pirmaklase="C.206-I.Eglīte"
  otraklase="C.207-M.Strade"
  tresaklase="C.304-G.Upena"
  ceturtaklase="C.sporta zāle-K.Puriņa"
  />
  <Diena 
  diena="tresdiena"
  datums="27.09"
  pirmast="Datorsistēmas un datortīkli"
  otrast="Datorsistēmas un datortīkli"
  tresast="Sistēmu programmēšana"
  ceturtast="Sistēmu programmēšana"
  pirmaklase="C.110-S.Iesmiņš"
  otraklase="C.110-S.Iesmiņš"
  tresaklase="C.203-J.Krīgerts"
  ceturtaklase="C.203-J.Krīgerts"
  />
  <Diena 
  diena="ceturtdiena"
  datums="28.09"
  pirmast="Sistēmu programmēšana"
  otrast="Matemātika"
  tresast="Latviešu valoda un literatūra"
  ceturtast='"Valodas, kultūras izpratne un izpausmes A"'
  pirmaklase="C.203-J.Krīgerts"
  otraklase="C.304-G.Upena"
  tresaklase="C.305-G.Jēgere"
  ceturtaklase="C.206-Ž.Otersone"
  />
  <Diena 
  diena="piektdiena"
  datums="29.09"
  pirmast="Angļu valoda"
  otrast="Sociālās zinības un vēsture"
  pirmaklase="C.306-T.Stālmane"
  otraklase="C.206-I.Eglīte"
  />
  </>
)
}

export default App;
