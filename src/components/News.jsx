import React from 'react'

export default function News(props) {
    const { news } = props;
    let title = (news && news.description) || ""
    const max_length = 120
    if(title.length>max_length){
        title=title.substring(0, max_length) + "...";
    }
    return (
        <div className="col ms-5 ms-sm-0 news-text-container d-flex align-items-center flex-row">
            {title && 
                <p className='news-text m-0'>{title}</p>
            }
        </div>
    )
}
