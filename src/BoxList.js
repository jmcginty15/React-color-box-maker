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
    }

    function removeBox(evt) {
        const boxId = evt.target.id;
        const newBoxes = [...boxes];
        
        let i = 0;
        while (i < newBoxes.length && boxId !== newBoxes[i].id) i++;
        if (i !== newBoxes.length) newBoxes.splice(i, 1);
        setBoxes(newBoxes);
    }

    return (
        <div className="BoxList">
            {boxes.map(box => <Box key={box.id} id={box.id} height={box.height} width={box.width} backgroundColor={box.backgroundColor} handleClick={removeBox} />)}
            <NewBoxForm addBox={(formData) => handleNewBox(formData)} />
        </div>
    )
}

export default BoxList;