import React from 'react';
import {StStatisticPage} from './styled';
import Header from '../Header';
import Footer from '../Footer';


const StatisticPage=()=>{
    return(
        <StStatisticPage>
            <Header/>
            <div className="timeless">There is nothing in here for you...yet</div>
            <Footer/>
        </StStatisticPage>
    )
}

export default StatisticPage