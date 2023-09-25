function Diena(props){
    return (
        
        <table className="stabr" border={0} cellSpacing={0} cellPadding={0}><tbody><tr>
                        <td style={{borderTop: '2px solid #000000', borderLeft: '1px solid #DDDDDD', borderRight: '1px solid #DDDDDD', borderBottom: '1px solid #DDDDDD', textAlign: 'left', height: '18px', width: '60%', backgroundColor: '#DDDDDD'}}>
                          <span className="info2"> &nbsp; Pārst.</span>
                          &nbsp; &nbsp; <a className="titl" href="?id=m&d=1&dat1=2023-09-25">{props.diena}</a>, &nbsp;2023<small>.gada</small> <b>{props.datums}</b> <span className="nedruka"><span slass="nedruka"> [šodien]</span></span></td></tr>
                      <tr><td valign="top">
                          <table className="td_0" width="100%" border={0} align="center" cellSpacing={0} cellPadding={0} style={{borderLeft: '1px solid #bbbbbb', borderRight: '1px solid #bbbbbb', borderBottom: '1px solid #bbbbbb'}} title="8:30-9:10 / 9:15-9:55"><tbody><tr className="td_0"><td rowSpan={2} valign="middle" style={{textAlign: 'center', width: '5%'}} className="txm">1</td>
                                <td width="60%" className="txm">{props.pirmast}</td>
                                <td width="35%" className="txn">{props.pirmaklase}</td></tr><tr height={0}><td colSpan={2} /></tr></tbody></table>
                          <table className="td_0" width="100%" border={0} align="center" cellSpacing={0} cellPadding={0} style={{borderLeft: '1px solid #bbbbbb', borderRight: '1px solid #bbbbbb', borderBottom: '1px solid #bbbbbb'}} title="10:15-10:55 / 11:00-11:40"><tbody><tr className="td_0"><td rowSpan={2} valign="middle" style={{textAlign: 'center', width: '5%'}} className="txm">2</td>
                                <td width="60%" className="txm">{props.otrast}</td>
                                <td width="35%" className="txn">{props.otraklase}</td></tr><tr height={0}><td colSpan={2} /></tr></tbody></table>
                          <table className="td_1" width="100%" border={0} align="center" cellSpacing={0} cellPadding={0} style={{borderLeft: '1px solid #bbbbbb', borderRight: '1px solid #bbbbbb', borderBottom: '1px solid #bbbbbb'}} title="11:50-12:30 // 13:15-13:55"><tbody><tr className="td_1"><td rowSpan={2} valign="middle" style={{textAlign: 'center', width: '5%'}} className="txm">3</td>
                                <td width="60%" className="txm">{props.tresast}</td>
                                <td width="35%" className="txn">{props.tresaklase}</td></tr><tr height={0}><td colSpan={2} /></tr></tbody></table>
                          <table className="td_0" width="100%" border={0} align="center" cellSpacing={0} cellPadding={0} style={{borderLeft: '1px solid #bbbbbb', borderRight: '1px solid #bbbbbb', borderBottom: '1px solid #bbbbbb'}} title="14:00-14:40 / 14:45-15:25"><tbody><tr className="td_0"><td rowSpan={2} valign="middle" style={{textAlign: 'center', width: '5%'}} className="txm">4</td>
                                <td width="60%" className="txm">{props.ceturtast}</td>
                                <td width="35%" className="txn">{props.ceturtaklase}</td></tr><tr height={0}><td colSpan={2} /></tr></tbody></table>
                        </td></tr></tbody></table>
    )
    return (
        <div className="App">
          <style dangerouslySetInnerHTML={{__html: "\nhtml { width: 100%; margin: 0 auto; overflow-x: hidden;}\n\nbody {\n\tmin-height: 100%;\n\tfont-family: verdana, arial, Helvetica, sans-serif;\n\tpadding: 0;\n\tbackground-image: url('');\n\tbackground-color: #FFFFFF;\n\t}\n\n@media print {\n\t.nedruka {display:none;}\n\t.tabulaw { width: 100%;\n\t\t\tdisplay:none;}\n  .tabula, .stab, .stabr {\n\tborder: none !important;\n\twidth: 100%;\n\tmargin-left: auto;\n\tmargin-right: auto;\n\t  }\n\n\t.izmanas { min-width: 140px;}\n\t.att {width: 94px;}\n\t.virsr {\n\t\tpadding: 0px 0px 2px 10px;\n\t\tbackground-color: #FFFFFF;\n\t\tmargin: 0px;\n\t\tfont-weight: bolder;\n\t\tfont-size: 16px;\n\t\tcolor: #000000;}\n\t.td_0, .td_1, .td_0p, .td_1p{\n\t\tbackground-color:transparent; \n\t}\n}\n\n@media screen {\n  body {\n    background: #FFFFFF;\n  }\n\t.tabulaw { width: 640px;}\n\t.tabula, .stab, .stabr {\n    width: 640px;\n    margin-left: auto;\n    margin-right: auto;\n\t}\n\t\n.dbox, .dboxi {\n\tfont-size:90%;\n    width: 88px;\n    height: 26px;\n\tdisplay: inline-block;\n}\n\t.izmanas { min-width: 330px;}\n\t.att {width: 281px;}\n\t.virsr {\n\t\tbackground-color: #888888;\n\t\tpadding: 3px 0px 2px 10px;\t\t\n\t\tmargin: 0 0 5px 0;\n\t\tfont-weight: bolder;\n\t\tfont-size: 16px;\n\t\tcolor: white;}\n\t.stabr {\n\tmargin-top:8px;\n\tborder-top: 4px solid orange;\n\tborder-left: 3px solid orange;\n\tborder-right: 3px solid orange;\n\tborder-bottom: 3px solid orange;\n\t} \n\t.stab {\n\tmargin-top:8px;\n\tborder-top: 2px solid #000000;\n\tborder-left: 1px solid #777777;\n\tborder-right: 1px solid #777777;\n\tborder-bottom: 1px solid #777777;\n\t} \n\t.td_0 {\t\n\t\tbackground-color:transparent;\n\t}\n\t.td_1 {\t\n\t\tbackground-Color:#FFC6C6;\n\t}\n\t.td_1:hover {\t\n\t\tbackground-color:#fff59d;\n\t}\t\n\t.td_1p:hover {\t\n\t\tbackground-color:#fff59d;\n\t\tcursor: pointer;\n\t}\n} \n\n@media screen and (max-width: 600px){\n  .tabula, .stab, .stabr {\n    width: 100%;\n    margin-left: auto;\n    margin-right: auto;\n  }\n  \n  .tabulaw {\n\t  width: 100%;\n  }\n\t.dbox, .dboxi {\n\t\tfont-size:140%;\n\t\twidth: 160px;\n\t\theight: 48px;\n\t\tdisplay: inline-block;\n\t}\n}\n\n@media screen  and (max-width: 768px){\n  .tabula, .stab, .stabr {\n    width: 100%;\n    margin-left: auto;\n    margin-right: auto;\n  }\n  .tabulaw { width: 100% ;}\n\t.dbox,.dboxi {\n\t\tfont-size:140%;\n\t\twidth: 160px;\n\t\theight: 48px;\n\t\tdisplay: inline-block;\n\t}\n\t\n}\n@media screen  and (max-width: 120px){\n  .tabula, .stab, .stabr {\n    width: 100%;\n    margin-left: auto;\n    margin-right: auto;\n  }\n  .tabulaw { width: 100% ;}\n\t.dbox, .dboxi {\n\t\tfont-size:140%;\n\t\twidth: 160px;\n\t\theight: 48px;\n\t\tdisplay: inline-block;\n\t}\n\t\n}\n\n.txi {\n  font-size: 9px;\n  color: #666666;\n  font-weight: 300;\n}\n.kraso {\n\tcolor: blue !important;\n}\n.krasop {\n\tcolor: #999999 !important;\n\tfont-size:80%;\n}\n.txms {\n  font-size: 9px;\n  color: #666666;\n  font-weight: 300;\n  text-align: left;\n  padding-left:0px;\n  text-decoration:line-through;\n}\n.txns {\n  font-size: 10px;\n  color: #666666;\n  font-weight: 300;\n  text-align: left;\n  padding-left:0px;\n  text-decoration:line-through;\n}\n.tdh{\n\tline-height: 12px;\n}\n\n.dbox {\n    margin: 1px;\n    border: 1px solid #888888;\n\ttext-align:center;\n\tpadding:0px;\n\ttext-indent:0px;\n\t-moz-border-radius: 4px;\n\tborder-radius: 4px;\n}\n.dboxi {\n    margin: 1px;\n    border: 1px solid #888888;\n\ttext-align:center;\n\tpadding:0px;\n\tbackground-color: #DDDDDD;\n\ttext-indent:0px;\n\t-moz-border-radius: 4px;\n\tborder-radius: 4px;\n}\n.dbox:hover, .dboxi:hover {\n\tcursor: pointer;\n\tcursor: hand;\n\tbackground-color: #FF6633;\n\tcolor: white !important;\n}\n" }} />
          <table className="tabula" border={0} align="center"><tbody>
                
              
              <tr><td colSpan={2}>
                  
                  <div align="center" className="titl" bis_skin_checked={1}>Grupa - <big>IPa22</big></div>
                  <div className="titl" style={{borderTop: '1px solid #999999', paddingTop: '10px'}} bis_skin_checked={1}><small>No</small> <b>25.septembra</b> <small>līdz</small> <b>29.septembrim</b> <small> 2023.</small></div><div className="nedruka" style={{textAlign: 'right', paddingRight: '30px'}} bis_skin_checked={1}>
                  </div>
                  <table className="stab" border={0} cellSpacing={0} cellPadding={0}><tbody><tr>
                        <td style={{borderTop: '2px solid #000000', borderLeft: '1px solid #DDDDDD', borderRight: '1px solid #DDDDDD', borderBottom: '1px solid #DDDDDD', textAlign: 'left', height: '18px', width: '60%', backgroundColor: '#DDDDDD'}}>
                          <span className="info2"> &nbsp; Pārst.</span>
                          &nbsp; &nbsp; <a className="titl" href="?id=m&d=2&dat1=2023-09-26">Otrdiena</a>, &nbsp;2023<small>.gada</small> <b>26.septembris</b> <span className="nedruka" /></td></tr>
                      <tr><td valign="top">
                          <table className="td_0" width="100%" border={0} align="center" cellSpacing={0} cellPadding={0} style={{borderLeft: '1px solid #bbbbbb', borderRight: '1px solid #bbbbbb', borderBottom: '1px solid #bbbbbb'}} title="8:30-9:10 / 9:15-9:55"><tbody><tr className="td_0"><td rowSpan={2} valign="middle" style={{textAlign: 'center', width: '5%'}} className="txm">1</td>
                                <td width="60%" className="txm">Sociālās zinības un vēsture</td>
                                <td width="35%" className="txn">C.206-I.Eglīte</td></tr><tr height={0}><td colSpan={2} /></tr></tbody></table>
                          <table className="td_0" width="100%" border={0} align="center" cellSpacing={0} cellPadding={0} style={{borderLeft: '1px solid #bbbbbb', borderRight: '1px solid #bbbbbb', borderBottom: '1px solid #bbbbbb'}} title="10:15-10:55 / 11:00-11:40"><tbody><tr className="td_0"><td rowSpan={2} valign="middle" style={{textAlign: 'center', width: '5%'}} className="txm">2</td>
                                <td width="60%" className="txm">Dabaszinības</td>
                                <td width="35%" className="txn">C.207-M.Strade</td></tr><tr height={0}><td colSpan={2} /></tr></tbody></table>
                          <table className="td_0" width="100%" border={0} align="center" cellSpacing={0} cellPadding={0} style={{borderLeft: '1px solid #bbbbbb', borderRight: '1px solid #bbbbbb', borderBottom: '1px solid #bbbbbb'}} title="11:50-12:30 // 13:15-13:55"><tbody><tr className="td_0"><td rowSpan={2} valign="middle" style={{textAlign: 'center', width: '5%'}} className="txm">3</td>
                                <td width="60%" className="txm">Matemātika</td>
                                <td width="35%" className="txn">C.304-G.Upena</td></tr><tr height={0}><td colSpan={2} /></tr></tbody></table>
                          <table className="td_0" width="100%" border={0} align="center" cellSpacing={0} cellPadding={0} style={{borderLeft: '1px solid #bbbbbb', borderRight: '1px solid #bbbbbb', borderBottom: '1px solid #bbbbbb'}} title="14:00-14:40 / 14:45-15:25"><tbody><tr className="td_0"><td rowSpan={2} valign="middle" style={{textAlign: 'center', width: '5%'}} className="txm">4</td>
                                <td width="60%" className="txm">Sports</td>
                                <td width="35%" className="txn">C.sporta zāle-K.Puriņa</td></tr><tr height={0}><td colSpan={2} /></tr></tbody></table>
                        </td></tr></tbody></table><table className="stab" border={0} cellSpacing={0} cellPadding={0}><tbody><tr>
                        <td style={{borderTop: '2px solid #000000', borderLeft: '1px solid #DDDDDD', borderRight: '1px solid #DDDDDD', borderBottom: '1px solid #DDDDDD', textAlign: 'left', height: '18px', width: '60%', backgroundColor: '#DDDDDD'}}>
                          <span className="info2"> &nbsp; Pārst.</span>
                          &nbsp; &nbsp; <a className="titl" href="?id=m&d=3&dat1=2023-09-27">Trešdiena</a>, &nbsp;2023<small>.gada</small> <b>27.septembris</b> <span className="nedruka" /></td></tr>
                      <tr><td valign="top">
                          <table className="td_0" width="100%" border={0} align="center" cellSpacing={0} cellPadding={0} style={{borderLeft: '1px solid #bbbbbb', borderRight: '1px solid #bbbbbb', borderBottom: '1px solid #bbbbbb'}} title="8:30-9:10 / 9:15-9:55"><tbody><tr className="td_0"><td rowSpan={2} valign="middle" style={{textAlign: 'center', width: '5%'}} className="txm">1</td>
                                <td width="60%" className="txm">Datorsistēmas un datortīkli</td>
                                <td width="35%" className="txn">C.110-S.Iesmiņš</td></tr><tr height={0}><td colSpan={2} /></tr></tbody></table>
                          <table className="td_0" width="100%" border={0} align="center" cellSpacing={0} cellPadding={0} style={{borderLeft: '1px solid #bbbbbb', borderRight: '1px solid #bbbbbb', borderBottom: '1px solid #bbbbbb'}} title="10:15-10:55 / 11:00-11:40"><tbody><tr className="td_0"><td rowSpan={2} valign="middle" style={{textAlign: 'center', width: '5%'}} className="txm">2</td>
                                <td width="60%" className="txm">Datorsistēmas un datortīkli</td>
                                <td width="35%" className="txn">C.110-S.Iesmiņš</td></tr><tr height={0}><td colSpan={2} /></tr></tbody></table>
                          <table className="td_0" width="100%" border={0} align="center" cellSpacing={0} cellPadding={0} style={{borderLeft: '1px solid #bbbbbb', borderRight: '1px solid #bbbbbb', borderBottom: '1px solid #bbbbbb'}} title="11:50-12:30 // 13:15-13:55"><tbody><tr className="td_0"><td rowSpan={2} valign="middle" style={{textAlign: 'center', width: '5%'}} className="txm">3</td>
                                <td width="60%" className="txm">Sistēmu programmēšana</td>
                                <td width="35%" className="txn">C.203-J.Krīgerts</td></tr><tr height={0}><td colSpan={2} /></tr></tbody></table>
                          <table className="td_0" width="100%" border={0} align="center" cellSpacing={0} cellPadding={0} style={{borderLeft: '1px solid #bbbbbb', borderRight: '1px solid #bbbbbb', borderBottom: '1px solid #bbbbbb'}} title="14:00-14:40 / 14:45-15:25"><tbody><tr className="td_0"><td rowSpan={2} valign="middle" style={{textAlign: 'center', width: '5%'}} className="txm">4</td>
                                <td width="60%" className="txm">Sistēmu programmēšana</td>
                                <td width="35%" className="txn">C.203-J.Krīgerts</td></tr><tr height={0}><td colSpan={2} /></tr></tbody></table>
                        </td></tr></tbody></table><table className="stab" border={0} cellSpacing={0} cellPadding={0}><tbody><tr>
                        <td style={{borderTop: '2px solid #000000', borderLeft: '1px solid #DDDDDD', borderRight: '1px solid #DDDDDD', borderBottom: '1px solid #DDDDDD', textAlign: 'left', height: '18px', width: '60%', backgroundColor: '#DDDDDD'}}>
                          <span className="info2"> &nbsp; Pārst.</span>
                          &nbsp; &nbsp; <a className="titl" href="?id=m&d=4&dat1=2023-09-28">Ceturtdiena</a>, &nbsp;2023<small>.gada</small> <b>28.septembris</b> <span className="nedruka" /></td></tr>
                      <tr><td valign="top">
                          <table className="td_0" width="100%" border={0} align="center" cellSpacing={0} cellPadding={0} style={{borderLeft: '1px solid #bbbbbb', borderRight: '1px solid #bbbbbb', borderBottom: '1px solid #bbbbbb'}} title="8:30-9:10 / 9:15-9:55"><tbody><tr className="td_0"><td rowSpan={2} valign="middle" style={{textAlign: 'center', width: '5%'}} className="txm">1</td>
                                <td width="60%" className="txm">Sistēmu programmēšana</td>
                                <td width="35%" className="txn">C.203-J.Krīgerts</td></tr><tr height={0}><td colSpan={2} /></tr></tbody></table>
                          <table className="td_0" width="100%" border={0} align="center" cellSpacing={0} cellPadding={0} style={{borderLeft: '1px solid #bbbbbb', borderRight: '1px solid #bbbbbb', borderBottom: '1px solid #bbbbbb'}} title="10:15-10:55 / 11:00-11:40"><tbody><tr className="td_0"><td rowSpan={2} valign="middle" style={{textAlign: 'center', width: '5%'}} className="txm">2</td>
                                <td width="60%" className="txm">Matemātika</td>
                                <td width="35%" className="txn">C.304-G.Upena</td></tr><tr height={0}><td colSpan={2} /></tr></tbody></table>
                          <table className="td_0" width="100%" border={0} align="center" cellSpacing={0} cellPadding={0} style={{borderLeft: '1px solid #bbbbbb', borderRight: '1px solid #bbbbbb', borderBottom: '1px solid #bbbbbb'}} title="11:50-12:30 // 13:15-13:55"><tbody><tr className="td_0"><td rowSpan={2} valign="middle" style={{textAlign: 'center', width: '5%'}} className="txm">3</td>
                                <td width="60%" className="txm">Latviešu valoda un literatūra</td>
                                <td width="35%" className="txn">C.305-G.Jēgere</td></tr><tr height={0}><td colSpan={2} /></tr></tbody></table>
                          <table className="td_0" width="100%" border={0} align="center" cellSpacing={0} cellPadding={0} style={{borderLeft: '1px solid #bbbbbb', borderRight: '1px solid #bbbbbb', borderBottom: '1px solid #bbbbbb'}} title="14:00-14:40 / 14:45-15:25"><tbody><tr className="td_0"><td rowSpan={2} valign="middle" style={{textAlign: 'center', width: '5%'}} className="txm">4</td>
                                <td width="60%" className="txm">"Valodas, kultūras izpratne un izpausmes A"</td>
                                <td width="35%" className="txn">C.206-Ž.Otersone</td></tr><tr height={0}><td colSpan={2} /></tr></tbody></table>
                        </td></tr></tbody></table><table className="stab" border={0} cellSpacing={0} cellPadding={0}><tbody><tr>
                        <td style={{borderTop: '2px solid #000000', borderLeft: '1px solid #DDDDDD', borderRight: '1px solid #DDDDDD', borderBottom: '1px solid #DDDDDD', textAlign: 'left', height: '18px', width: '60%', backgroundColor: '#DDDDDD'}}>
                          <span className="info2"> &nbsp; Pārst.</span>
                          &nbsp; &nbsp; <a className="titl" href="?id=m&d=5&dat1=2023-09-29">Piektdiena</a>, &nbsp;2023<small>.gada</small> <b>29.septembris</b> <span className="nedruka" /></td></tr>
                      <tr><td valign="top">
                          <table className="td_0" width="100%" border={0} align="center" cellSpacing={0} cellPadding={0} style={{borderLeft: '1px solid #bbbbbb', borderRight: '1px solid #bbbbbb', borderBottom: '1px solid #bbbbbb'}} title="8:30-9:10 / 9:15-9:55"><tbody><tr className="td_0"><td rowSpan={2} valign="middle" style={{textAlign: 'center', width: '5%'}} className="txm">1</td>
                                <td width="60%" className="txm">Angļu valoda</td>
                                <td width="35%" className="txn">C.306-T.Stālmane</td></tr><tr height={0}><td colSpan={2} /></tr></tbody></table>
                          <table className="td_0" width="100%" border={0} align="center" cellSpacing={0} cellPadding={0} style={{borderLeft: '1px solid #bbbbbb', borderRight: '1px solid #bbbbbb', borderBottom: '1px solid #bbbbbb'}} title="10:05-10:45 / 10:50-11:30"><tbody><tr className="td_0"><td rowSpan={2} valign="middle" style={{textAlign: 'center', width: '5%'}} className="txm">2</td>
                                <td width="60%" className="txm">Sociālās zinības un vēsture</td>
                                <td width="35%" className="txn">C.206-I.Eglīte</td></tr><tr height={0}><td colSpan={2} /></tr></tbody></table>
                        </td></tr></tbody></table></td></tr>
            </tbody></table>
        </div>
    );
}
export default Diena;