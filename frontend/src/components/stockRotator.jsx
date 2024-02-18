import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

function StockRotator() {

    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 5 },
    };

    var stocks = [
        ["BTC", "£50000"],
        ["ETH", "£70000"],
        ["AAPL", "£50000"],
        ["MSFT", "£10000"],
        ["Bitcoin", "£50000"],
    ]

    const items = [
        <a className="item" data-value="1" href="/stocks/?stock={stock[0][0]}">
        {/* // <a className="item" data-value="1" href="/stocks" onclick="location.href=this.href+'?stock='+stocks[0][0]"> */}
            {/* <img className = 'pfpimage' src='../images/logo192.png' alt='imgHERE'></img> */}
            <h3>{stocks[0][0]}</h3>
            <h4>{stocks[0][1]}</h4>
        </a>,
        <a className="item" data-value="1" href="/stocks">
            {/* <img className = 'pfpimage' src='../images/logo192.png' alt='imgHERE'></img> */}
            <h3>{stocks[1][0]}</h3>
            <h4>{stocks[1][1]}</h4>
        </a>,
            <a className="item" data-value="1" href="/stocks">
            {/* <img className = 'pfpimage' src='../images/logo192.png' alt='imgHERE'></img> */}
            <h3>{stocks[2][0]}</h3>
            <h4>{stocks[2][1]}</h4>
        </a>,
            <a className="item" data-value="1" href="/stocks">
            {/* <img className = 'pfpimage' src='../images/logo192.png' alt='imgHERE'></img> */}
            <h3>{stocks[3][0]}</h3>
            <h4>{stocks[3][1]}</h4>
        </a>,
            <a className="item" data-value="1" href="/stocks">
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