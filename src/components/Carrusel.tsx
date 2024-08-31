import BashIcon from '../icons/BashIcon';
import CIcon from '../icons/CIcon';
import Css from '../icons/Css';
import HtmlIcon from '../icons/HtmlIcon';
import JavaScriptIcon from '../icons/JavaScriptIcon';
import NextjsIcon from '../icons/NextjsIcon';
import PythonIcon from '../icons/PythonIcon';
import ReactIcon from '../icons/React';
import TypeScript from '../icons/TypeScript';
import UbuntuIcon from '../icons/UbuntuIcon';
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
                    <NextjsIcon />
                </div>

                <div
                    className='item'
                    style={{ '--position': `6` } as React.CSSProperties}
                >
                    <UbuntuIcon />
                </div>

                <div
                    className='item'
                    style={{ '--position': `7` } as React.CSSProperties}
                >
                    <JavaScriptIcon />
                </div>

                <div
                    className='item'
                    style={{ '--position': `8` } as React.CSSProperties}
                >
                    <CIcon />
                </div>

                <div
                    className='item'
                    style={{ '--position': `9` } as React.CSSProperties}
                >
                    <BashIcon />
                </div>

                <div
                    className='item'
                    style={{ '--position': `10` } as React.CSSProperties}
                >
                    <PythonIcon />
                </div>

            </div>
        </div>
    );
}