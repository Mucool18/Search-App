import 'bootstrap/dist/css/bootstrap.min.css';

import { useState,useEffect } from 'react';
import SearchBoxComponent from './components/search-box/search-box.component';
import ListComponent from './components/ads-list-component/ads-list.component'
import './App.css';

function App() {
  const [searchedCompnies,setCompanies] = useState([]);
  useEffect(()=>{
    getAllAds();
  },[])
  
  const getAllAds = ()=>{
    fetch('http://localhost:8000/allAds/').then(response=>response.json()).then(company=>setCompanies(company))
  }
  const onAdsSearch = (event)=>{
    let key = event.target.value;
    key = key.trim()
    if(key){
      fetch('http://localhost:8000/ads/'+key).then(response=>response.json()).then(result=>{
        if(result.statusCode ==="ok"){
          setCompanies(result.data);
        }else{
          setCompanies([]);
        } 
      })
    }else{
      getAllAds();
    }
    
  }
  return (
    <div className="App">
      <h1 className='app-title'><i>Company Finder</i></h1>
       <br/>
      <SearchBoxComponent  onChangeHandler={onAdsSearch}  />
      <br/>
      <br/>
      <ListComponent adsData={searchedCompnies} />
      
    </div>
  );
}

export default App;
