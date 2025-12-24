import "./WhatsappButton.css";

export default function WhatsappButton() {
    return (
        <div className="btn-circle">
            <a href="https://wa.me/5541999631609" target="_blank" rel="noopener noreferrer">            
                <svg 
                    width="100%" 
                    height="100%" 
                    viewBox="0 0 32 32" 
                    version="1.1" 
                    xmlns="http://www.w3.org/2000/svg" 
                    xmlnsXlink="http://www.w3.org/1999/xlink" 
                    xmlSpace="preserve"                     
                    style={{fillRule: 'evenodd', clipRule: 'evenodd', strokeLinecap: 'round', strokeLinejoin: 'round', strokeMiterlimit: 10}}
                >
                    <path 
                        d="M17,1C9.3,1 3,7.3 3,15C3,18.4 4.3,21.6 6.3,24L4,31L11.3,27.8C13,28.6 15,29 17,29C24.7,29 31,22.7 31,15C31,7.3 24.7,1 17,1Z" 
                        style={{fill: 'none', fillRule: 'nonzero', stroke: 'white', strokeWidth: '2px'}}
                    />
                    <g id="Page-1">
                        <g id="Whatsapp" transform="matrix(1,0,0,1,1,1)">
                            <path 
                                id="Stroke-28" 
                                d="M23.7,19.1C24,18.2 24,17.5 23.9,17.3C23.8,17.1 23.6,17.1 23.2,16.9C22.8,16.7 21,15.8 20.7,15.7C20.4,15.6 20,15.6 19.8,16C19.4,16.5 19.1,17 18.8,17.3C18.6,17.5 18.2,17.6 17.9,17.4C17.5,17.2 16.3,16.8 14.9,15.6C13.8,14.6 13.1,13.4 12.8,13C12.6,12.6 12.8,12.4 13,12.2C13.2,12 13.4,11.8 13.6,11.6C13.8,11.4 13.9,11.3 14,11C14.1,10.8 14,10.5 13.9,10.3C13.8,10.1 13.1,8.3 12.8,7.6C12.6,7 12.4,7 12,7L11.6,7C11.1,7 10.6,7.1 10.3,7.5C9.9,7.9 9,8.8 9,10.6C9,12.4 10.3,14.2 10.5,14.4C10.7,14.6 13.1,18.4 16.8,20C19.7,21.2 20.6,21.1 21.2,21C22.2,20.7 23.4,20 23.7,19.1Z" 
                                style={{fill: 'none', fillRule: 'nonzero', stroke: 'white', strokeWidth: '2px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 4}}
                            />
                        </g>
                    </g>
                </svg>
            </a>
        </div>
    )
}
