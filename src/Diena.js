import Stunda from './stunda';

function Diena(props){
    return (
      
        <table className="stabr" border={0} cellSpacing={0} cellPadding={0}><tbody><tr>
                        <td style={{borderTop: '2px solid #000000', borderLeft: '1px solid #DDDDDD', borderRight: '1px solid #DDDDDD', borderBottom: '1px solid #DDDDDD', textAlign: 'left', height: '18px', width: '60%', backgroundColor: '#DDDDDD'}}>
                          <span className="info2"> &nbsp; Pārst.</span>
                          &nbsp; &nbsp; <a className="titl" href="?id=m&d=1&dat1=2023-09-25">{props.diena}</a>, &nbsp;2023<small>.gada</small> <b>{props.datums}</b> <span className="nedruka"><span slass="nedruka"> [šodien]</span></span></td></tr>
                      <tr><td valign="top">
                        <Stunda st={props.st[0]}
                        klase={props.pirmaklase}/>
                        <Stunda st={props.st[1]}
                        klase={props.otraklase}/>
                        <Stunda st={props.st[2]}
                        klase={props.tresaklase}/>
                        <Stunda st={props.st[3]}
                        klase={props.ceturtaklase}/>
                        </td></tr></tbody></table>
    )
};
export default Diena;