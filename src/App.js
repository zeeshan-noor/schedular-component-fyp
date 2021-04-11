import React from 'react';
import './Anouncement.css'
import Scheduler from 'devextreme-react/scheduler';

import { data } from './data.js';


function App() {
  const currentDate = new Date(2021, 3, 10);
  const views = ['agenda'];

    return (
      <div>
       
        <Scheduler
          timeZone="America/Los_Angeles"
          dataSource={data}
          views={views}
          currentView="agenda"
          defaultCurrentDate={currentDate}
          height={600}
          startDayHour={9} 
          showCurrentTimeIndicator={true}/>
      </div>
     
    );
  
}

export default App;
