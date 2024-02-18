import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import axios from 'axios';
import React from 'react';

const baseURL = "http://localhost:3001/get_stock_price"

function StockRotator() {

    const [post, setPost] = React.useState(null);

    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 5 },
    };
    
    var stocks = []

    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
          setPost(response.data);
        });
      }, []);

    if (!post) return null;
    for (const [key, value] of Object.entries(post)) {
        stocks.push([key.split(";")[1], "$" + value.split(";")[0]])
    }
    const items = [
        <a className="item" data-value="1" href={"/stocks?=" + stocks[0][0]}>
        {/* // <a className="item" data-value="1" href="/stocks" onclick="location.href=this.href+'?stock='+stocks[0][0]"> */}
            {/* <img className = 'pfpimage' src='../images/logo192.png' alt='imgHERE'></img> */}
            <h3>{stocks[0][0]}</h3>
            <h4>{stocks[0][1]}</h4>
        </a>,
        <a className="item" data-value="1" href={"/stocks?=" + stocks[1][0]}>
            {/* <img className = 'pfpimage' src='../images/logo192.png' alt='imgHERE'></img> */}
            <h3>{stocks[1][0]}</h3>
            <h4>{stocks[1][1]}</h4>
        </a>,
            <a className="item" data-value="1" href={"/stocks?=" + stocks[2][0]}>
            {/* <img className = 'pfpimage' src='../images/logo192.png' alt='imgHERE'></img> */}
            <h3>{stocks[2][0]}</h3>
            <h4>{stocks[2][1]}</h4>
        </a>,
            <a className="item" data-value="1" href={"/stocks?=" + stocks[3][0]}>
            {/* <img className = 'pfpimage' src='../images/logo192.png' alt='imgHERE'></img> */}
            <h3>{stocks[3][0]}</h3>
            <h4>{stocks[3][1]}</h4>
        </a>,
            <a className="item" data-value="1" href={"/stocks?=" + stocks[4][0]}>
            {/* <img className = 'pfpimage' src='../images/logo192.png' alt='imgHERE'></img> */}
            <h3>{stocks[4][0]}</h3>
            <h4>{stocks[4][1]}</h4>
        </a>,
    ]

    return(
        <AliceCarousel
            mouseTracking
            items={items}
            responsive={responsive}
            controlsStrategy="alternate"
            autoPlay
            autoPlayControls={false}
            autoPlayStrategy="none"
            autoPlayInterval={3000}
            animationDuration={3000}
            animationType="fadeout"
            infinite
            touchTracking={false}
            disableDotsControls
            disableButtonsControls
        />
    );
}

export default StockRotator;