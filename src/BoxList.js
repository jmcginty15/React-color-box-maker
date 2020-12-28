import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import Box from './Box';
import NewBoxForm from './NewBoxForm';

const BoxList = () => {
    const [boxes, setBoxes] = useState([]);

    function handleNewBox({ height, width, backgroundColor }) {
        const newBoxes = [
            ...boxes,
            {
                height: height,
                width: width,
                backgroundColor: backgroundColor,
                id: uuid()
            }
        ]
        setBoxes(newBoxes);
        console.log(boxes);
    }

    return (
        <div className="BoxList">
            {boxes.map(box => <Box key={box.id} height={box.height} width={box.width} backgroundColor={box.backgroundColor} />)}
            <NewBoxForm addBox={(formData) => handleNewBox(formData)} />
        </div>
    )
}

export default BoxList;