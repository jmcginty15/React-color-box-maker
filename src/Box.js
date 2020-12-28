import './Box.css';

const Box = ({ height, width, backgroundColor }) => {
    const pxHeight = `${height}px`;
    const pxWidth = `${width}px`;
    return <div className="Box" style={{ height: pxHeight, width: pxWidth, backgroundColor: backgroundColor}}></div>
}

export default Box;