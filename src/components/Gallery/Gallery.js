import React, { useState } from 'react';
import './Gallery.css';

const Gallery = () => {
    const [showPopup, setShowPopup] = useState(false); // State to track pop-up visibility
    const [popupContent, setPopupContent] = useState({ src: '', caption: '' });

    const popup = document.querySelector('.popup-content');
    if (popup) {
        popup.style.display = 'none';
    }

    const openPopup = (imageSrc, caption) => {
        setPopupContent({ src: imageSrc, caption });
        setShowPopup(true);
    };

    const closePopup = () => {
        setShowPopup(false);
    };

    return (
        <>
            <div className="text-center">
                <h1 className="display-1">Dypiu Image Gallery</h1>
            </div>

            <div className="container">
                <div className="row">
                    <div className="gallery">
                        <figure onClick={() => openPopup('/4.jpg' )}>
                            <img src='/4.jpg' alt="" />
                            
                            <figcaption>Daytona Beach <small>United States</small><a href="/Comingsoon" className='seemore'><h5>See more</h5></a></figcaption>
                        </figure>

                        <figure onClick={() => openPopup('/5.jpg' )}>
                            <img src='/5.jpg' alt="" />
                            <figcaption>Daytona Beach <small>United States</small><a href="/Comingsoon" className='seemore'><h5>See more</h5></a></figcaption>
                        </figure>

                        <figure onClick={() => openPopup('/6.jpg' )}>
                            <img src='/6.jpg' alt="" />
                            <figcaption>Daytona Beach <small>United States</small><a href="/Comingsoon" className='seemore'><h5>See more</h5></a></figcaption>
                        </figure>
                      
                        <figure onClick={() => openPopup('https://images.unsplash.com/photo-1445964047600-cdbdb873673d?crop=entropy&fit=crop&fm=jpg&h=400&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=600')}>
                            <img src="https://images.unsplash.com/photo-1445964047600-cdbdb873673d?crop=entropy&fit=crop&fm=jpg&h=400&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=600" alt="" />
                            <figcaption>Bad Pyrmont <small>Deutschland</small><a href="/Comingsoon" className='seemore'><h5>See more</h5></a></figcaption>
                        </figure>

                        <figure onClick={() => openPopup('/building-image.jpg')}>
                            <img src='/building-image.jpg' alt="" />
                            <figcaption>Териберка, gorod Severomorsk <small>Russia</small><a href="/Comingsoon" className='seemore'><h5>See more</h5></a></figcaption>
                        </figure>

                        <figure onClick={() => openPopup('https://d2rdhxfof4qmbb.cloudfront.net/wp-content/uploads/20200303104522/Al-Khazneh-The-Treasury-in-Petra-1068x735.jpg', 'Petra<small> Jordan</small>')}>
    <img src="https://d2rdhxfof4qmbb.cloudfront.net/wp-content/uploads/20200303104522/Al-Khazneh-The-Treasury-in-Petra-1068x735.jpg" alt="Petra" />
    <figcaption>Petra<small> Jordan</small><a href="/Comingsoon" className='seemore'><h5>See more</h5></a></figcaption>
</figure>

<figure onClick={() => openPopup('https://images.unsplash.com/photo-1604476679223-80349206ce33?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80', 'Chitrakoot<small> India</small>')}>
    <img src="https://images.unsplash.com/photo-1604476679223-80349206ce33?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="Chitrakoot, India" />
    <figcaption>Chitrakoot<small> India</small><a href="/Comingsoon" className='seemore'><h5>See more</h5></a></figcaption>
</figure>

<figure onClick={() => openPopup('https://i.ibb.co/KFDtgXB/rio-de-janeiro-capa2019-03-820x430-1140x760.jpg', 'Cristo Redentor<small> Rio de Janeiro</small>')}>
    <img src="https://i.ibb.co/KFDtgXB/rio-de-janeiro-capa2019-03-820x430-1140x760.jpg" alt="Cristo Redentor, RJ" />
    <figcaption>Cristo Redentor<small> Rio de Janeiro</small><a href="/Comingsoon" className='seemore'><h5>See more</h5></a></figcaption>
</figure>

<figure onClick={() => openPopup('https://media.istockphoto.com/photos/taxis-in-times-square-with-7th-avenue-new-york-city-manhattan-picture-id1277102943?b=1&k=20&m=1277102943&s=170667a&w=0&h=tp_vCWDpgrKsUBtl2ZI-8yy2fMHtoZJPcaZBTcnN9nc=', 'NeyYork City<small> US</small>')}>
    <img src="https://media.istockphoto.com/photos/taxis-in-times-square-with-7th-avenue-new-york-city-manhattan-picture-id1277102943?b=1&k=20&m=1277102943&s=170667a&w=0&h=tp_vCWDpgrKsUBtl2ZI-8yy2fMHtoZJPcaZBTcnN9nc=" alt="NeyYorkCity" />
    <figcaption>NeyYork City<small> US</small><a href="/Comingsoon" className='seemore'><h5>See more</h5></a></figcaption>
</figure>

<figure onClick={() => openPopup('https://www.gotokyo.org/en/plan/tokyo-outline/images/main.jpg', 'Tokyo City<small> Japan</small>')}>
    <img src="https://www.gotokyo.org/en/plan/tokyo-outline/images/main.jpg" alt="Tokyo" />
    <figcaption>Tokyo City<small> Japan</small><a href="/Comingsoon" className='seemore'><h5>See more</h5></a></figcaption>
</figure>

<figure onClick={() => openPopup('https://img.traveltriangle.com/blog/wp-content/tr:w-700,h-400/uploads/2018/02/Kyoto1.jpg', 'Kyoto<small> Japan</small>')}>
    <img src="https://img.traveltriangle.com/blog/wp-content/tr:w-700,h-400/uploads/2018/02/Kyoto1.jpg" alt="Kyoto" />
    <figcaption>Kyoto<small> Japan</small><a href="/Comingsoon" className='seemore'><h5>See more</h5></a></figcaption>
</figure>

<figure onClick={() => openPopup('https://images.unsplash.com/photo-1597073420615-7801d12fe2d8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80', 'Puducherry<small> India</small>')}>
    <img src="https://images.unsplash.com/photo-1597073420615-7801d12fe2d8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80" alt="Puducherry, India"/>
    <figcaption>Puducherry<small> India</small><a href="/Comingsoon" className='seemore'><h5>See more</h5></a></figcaption>
</figure>
                    </div>
                </div>
            </div>

            {showPopup && (
                    <div className="popup" onClick={closePopup}>
                        <div className="popup-content">
                        <button class="close-btn" onclick="closePopup()">X</button>
                            <img src={popupContent.src} alt="Popup" className='gallery-popupimg' />
                            <figcaption>{popupContent.caption}</figcaption>
                        </div>
                    </div>
            )}


            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className='btn-primary top' title="Go to top">Top</button>

            <footer>
            <h2> Dypiu website &copy; all rights reserved</h2>
        </footer>
        </>
    );
};

export default Gallery;
