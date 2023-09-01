import React from 'react';
import '../../../styles/components/TimelinePage/DetailTable1.scss';


const times = ['10:00','12:00','14:00','16:00','18:00', '20:00','22:00'];

const DetailTable2 = () => {

    return (
        <div className='DetailTable1_Container'>
            <div className='DetailTable1_TimeList'>
                <div className='TimeList_Title'>
                    <div>{/* Clock Icon */}</div>
                    <div>시간</div>
                </div>
                <div className='TimeList_items'>
                    {times.map(time => 
                        <div className='items_wrapper'>
                            <div className='TimeList_item'>{time}</div>
                            <div className='item_circle'></div>
                        </div>
                    )}
                </div>
            </div>
                <div className='DetailTable1_HorizonBar'></div>
            <div className='DetailTable1_InformationList'>
                <div className='InformationList_Title'>
                    <div>{/* Information Icon */}</div>
                    <div>이벤트</div>
                </div>
                <div className='Box_Collection'>
                    <div className='InformationBox1'>
                        <div className='Information_TextBox'>
                            <div>푸드트럭 & 부스운영</div>
                            <div>
                                <div>
                                    <div></div>
                                    <div>10:00-22:00</div>
                                </div>
                                <div>
                                    <div></div>
                                    <div>학생회관 앞</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='InformationBox2'>
                        <div>
                            <div>동아리 공연</div>
                            <div>
                                <div>
                                    <div></div>
                                    <div>16:00-19:30</div>
                                </div>
                                <div>
                                    <div></div>
                                    <div>노천극장</div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>개막식 & 총학생회 발대식</div>
                            <div>
                                <div>
                                    <div></div>
                                    <div>19:30-19:37</div>
                                </div>
                                <div>
                                    <div></div>
                                    <div>노천극장</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='InformationBox3'>
                        <div>
                            <div>학생회 이벤트 (무비 인 더 캠핑)</div>
                            <div>
                                <div>
                                    <div></div>
                                    <div>19:40-20:25</div>
                                </div>
                                <div>
                                    <div></div>
                                    <div>노천극장</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='InformationBox4'>
                        <div>
                            <div>동아리 공연</div>
                            <div>
                                <div>
                                    <div></div>
                                    <div>20:25-21:00</div>
                                </div>
                                <div>
                                    <div></div>
                                    <div>노천극장</div>                                    </div>
                            </div>
                        </div>
                    </div>
                    <div className='InformationBox5'>
                        <div>
                            <div>연예인 초청 공연</div>
                            <div>
                                <div>
                                    <div></div>
                                    <div>21:00-22:00</div>
                                </div>
                                <div>
                                    <div></div>
                                    <div>노천극장</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailTable2;
