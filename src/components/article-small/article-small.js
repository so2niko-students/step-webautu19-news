import React from 'react';

import './article-small.css';

function ArticleSmall(props){
    return (
        <div class="card bg-dark text-white article-small">
            <a 
                        className="article-title"
                        href="https://www.cyberscoop.com/alexander-vinnik-russia-extradition-laundering/">
                <img 
                    src="https://s3-us-west-2.amazonaws.com/cyberscoop-media/wp-content/uploads/2018/08/08153007/bitcoin-2007912_1920.jpg" 
                    class="card-img" 
                    alt="New Zealand freezes $90 million connected to accused bitcoin launderer Alexander Vinnik" />
                <div class="card-img-overlay">
                    <p class="card-text">
                        <span className="article-title">
                            New Zealand freezes $90 million connected to accused bitcoin launderer Alexander Vinnik
                        </span>
                    </p>
                </div>
            </a>
        </div>
    );
}

export default ArticleSmall;