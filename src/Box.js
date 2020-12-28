import './Box.css';

const Box = ({ height, width, backgroundColor, id, handleClick }) => {
    const pxHeight = `${height}px`;
    const pxWidth = `${width}px`;
    return (
        <div className="Box" style={{ height: pxHeight, width: pxWidth, backgroundColor: backgroundColor }}>
            <div id={id} className="Box-remove-button" onClick={handleClick}>X</div>
        </div>
    )
}

export default Box;