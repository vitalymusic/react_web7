import { useState } from 'react';

function Tabi() {
    const data = [
        {
            id:1,
            tabTitle:"Pirmā lapa",
            tabContent:"Pirmās lapas saturs",
            img:"tab1.jpeg"
        },
        {
            id:2,
            tabTitle:"Otrā lapa",
            tabContent:"Otrās lapas saturs",
            img:"tab2.jpeg"
        },
        {
            id:3,
            tabTitle:"Trešā lapa",
            tabContent:"Trešās lapas saturs",
            img:"tab3.jpeg"
        }

    ]

    const [activeTab, setActiveTab] = useState(0);
    


    function showTab(id){
          setActiveTab(id-1)
    }


    return ( 
    <div className="tabs">
            <div className="tabButtons">
                {data.map(item=>(
                    <button 
                        className={activeTab+1==item.id?"btn btn-danger":"btn btn-primary"}
                        key={item.id} 
                        onClick={()=>{showTab(item.id)}} >
                            {item.tabTitle}
                    </button>
                ))}
            </div>
            <div className="tabContent">
                <h1>{data[activeTab].tabTitle}</h1>
                <p>{data[activeTab].tabContent}</p>
            </div>
            
    </div> 
    );
}

export default Tabi;