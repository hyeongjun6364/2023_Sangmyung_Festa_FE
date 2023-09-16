import React from 'react';
import smung from '../../../assets/EventPage/smung.webp';
import stick from '../../../assets/EventPage/stick.webp';
import soldoutsmung from '../../../assets/EventPage/soldoutsmung.webp';
import soldoutstick from '../../../assets/EventPage/soldoutstick.webp';
import '../../../styles/components/EventPage/DressCode.scss';


const DressCode = ({datas}) => {
    return (
        <div className='DressCode_Container'>
            <div className='DressCode_Wrapper'>
                <div className='DressCode_Wrapper_MainTitle'>
                    드레스코드
                </div>
                <div className='Detail_Gift'>
                    <div className='Detail_Gift_LayOut' style={{marginRight : '23px'}}>
                        <div className='Detail_Gift_Name' style={{marginBottom: '9px'}}>상품1</div>
                        <div className='Detail_Gift_Img'>{datas[0].dress === 1 ? <img src={stick} alt=''/> : <img src={soldoutstick} alt=''/>}</div>
                        <div className='Detail_Gift_DetailName' style={{fontSize: '18px'}}>야광봉</div>
                        <div className='Detail_Gift_CountBox'>{datas[0].dress === 1 ? '남은수량 500개' : '남은수량 0개'}</div>
                    </div>
                    <div className='Detail_Gift_LayOut'>
                        <div className='Detail_Gift_LayOut'>
                            <div className='Detail_Gift_Name' style={{marginBottom: '4px'}}>상품2</div>
                            <div className='Detail_Gift_Img'>{datas[1].dress === 1 ? <img src={smung} alt=''/> : <img src={soldoutsmung} alt=''/>}</div>
                            <div className='Detail_Gift_DetailName' style={{fontSize: '16px', marginTop: '7px'}}>수뭉이 타투 스티커(10종)</div>
                            <div className='Detail_Gift_CountBox'>{datas[1].dress === 1 ? '남은수량 1000개' : '남은수량 0개'}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DressCode;