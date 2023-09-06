import React from 'react';
import '../../../styles/components/MainPage/CreatorView.scss';
import likelionImage from '../../../assets/MainPage/likelion.png';


const CreatorBox = ({ title, description, image }) => {
    const splitTitle = title.split(' ');
    return (
        <div className="creator_box">
            <p className="box_title">
                {splitTitle.map((word, index) => (
                    <div key={index} style={{width : '70px'}}>
                        {word}
                        {index !== splitTitle.length - 1 && <br />}
                    </div>
                ))}
            </p>
            <p className="arrow_position"> {description}</p>  
            <img className="image_position" style={{width:'92px', height:'41px'}} src={image} alt={title} />
        </div>
    );
};

const CreatorView = () => {
    return (
        <div className='CreatorView_Container'>
            <div className="Creator_Text">
                <p>🤷 누가 만들었나요?</p>
            </div>
            <div className="creator_box_container" >
                <CreatorBox title="Switch 총학생회" description=">" image={likelionImage} />
                <CreatorBox title="멋쟁이 사자처럼" description=">" image={likelionImage}/>
                <CreatorBox title="커뮤니케이션 디자인전공" description=">" image={likelionImage}/>
            </div>
        </div>
    );
};

export default CreatorView;

