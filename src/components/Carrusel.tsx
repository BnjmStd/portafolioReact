import Css from '../icons/Css';
import HtmlIcon from '../icons/HtmlIcon';
import NextjsIcon from '../icons/NextjsIcon';
import ReactIcon from '../icons/React';
import TypeScript from '../icons/TypeScript';
import './carrusel.css';

export default function Carrusel() {
    return (
        <div
            className="slider"
            style={{
                '--width': '100px',
                '--height': '50px',
                '--quantity': 10,
            } as React.CSSProperties}
        >
            <div className="list">

                <div

                    className="item"
                    style={{ '--position': `1` } as React.CSSProperties}
                >
                    <ReactIcon />
                </div>

                <div

                    className="item"
                    style={{ '--position': `2` } as React.CSSProperties}
                >
                    <TypeScript />
                </div>


                <div

                    className="item"
                    style={{ '--position': `3` } as React.CSSProperties}
                >
                    <Css />
                </div>


                <div

                    className="item"
                    style={{ '--position': `4` } as React.CSSProperties}
                >
                    <HtmlIcon />
                </div>

                <div

                    className="item"
                    style={{ '--position': `5` } as React.CSSProperties}
                >
                    <Css />
                </div>

            </div>
        </div>
    );
}