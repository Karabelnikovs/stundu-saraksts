function Stunda(props){
    return (
<table className="td_0" width="100%" border={0} align="center" cellSpacing={0} cellPadding={0} style={{borderLeft: '1px solid #bbbbbb', borderRight: '1px solid #bbbbbb', borderBottom: '1px solid #bbbbbb'}} title="8:30-9:10 / 9:15-9:55"><tbody><tr className="td_0"><td rowSpan={2} valign="middle" style={{textAlign: 'center', width: '5%'}} className="txm">1</td>
                                <td width="60%" className="txm">{props.st}</td>
                                <td width="35%" className="txn">{props.klase}</td></tr><tr height={0}><td colSpan={2} /></tr></tbody></table>
                          
    );
};
export default Stunda;