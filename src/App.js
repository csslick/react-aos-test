import './App.css';
import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'
import rocket from './rocket.png'

function App() {
  useEffect(() => {
    AOS.init();
  })

  return (
    <div className="App">
      <section className='s1'>
        <div>
          <h1>Animate on Scroll</h1>
          <p>스크롤시 애니메이션 효과 주기</p>
        </div>
      </section>
      <section className='s2'>
        <h1 data-aos='fade-left'>section 2</h1>
      </section>
      <section className='s3'>
        <div>
          <h1 
            data-aos="fade-down" 
            data-aos-delay="1500">위대한 도약</h1>
          {/* custom ani */}
          <img 
            data-aos 
            data-aos-duration='3000'
            data-aos-delay='0'
            className='rocket'
            style={{
              width: '600px'
            }}
            src={rocket} alt="rocket" />
        </div>
      </section>
    </div>
  );
}

export default App;
