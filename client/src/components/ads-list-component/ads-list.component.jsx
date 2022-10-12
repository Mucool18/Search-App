import './ads-list.styles.css';
import Table from 'react-bootstrap/Table';

const ListComponent = ({adsData})=>{
    return(
        <div>
            <Table bordered >
                <thead style={{color:"rgb(89 195 171)"}}>
                <tr>
                    <th>Company Id</th>
                    <th>PrimaryText</th>
                    <th>headline</th>
                    <th>Description</th>
                    <th>CTA</th>
                    <th>Image</th>
                </tr>
                </thead>
                <tbody style={{color:"#b4d3f3"}} >
                {adsData.map((ads=>{
                    return(
                    <tr>
                        <td>{ads.companyId}</td>
                        <td>{ads.primaryText}</td>
                        <td>{ads.headline}</td>
                        <td>{ads.description}</td>
                        <td>{ads.CTA}</td>
                        <td><img className="imageCell" src={ads.imageUrl} alt="preview"/></td>
                    </tr>
                    )
                    
                }))}
                </tbody>
                
            </Table>
        </div>
        
    )
}

export default ListComponent;