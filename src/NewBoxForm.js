import { useState } from 'react';
import './NewBoxForm.css';

const NewBoxForm = ({ addBox }) => {
    const defaultFormData = {
        height: 0,
        width: 0,
        backgroundColor: '#000000'
    };
    const [formData, setFormData] = useState(defaultFormData);

    function handleChange(evt) {
        const { name, value } = evt.target;
        const newFormData = {
            ...formData,
            [name]: value
        };
        setFormData(newFormData);
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        addBox(formData);
        setFormData(defaultFormData);
    }

    return (
        <form className="NewBoxForm" onSubmit={handleSubmit}>
            <h4 className="NewBoxForm-header">Add a New Box:</h4>
            <p className="NewBoxForm-line"><label htmlFor="height">Height in pixels:</label>
                <span className="NewBoxForm-input">{formData.height}&nbsp;
                    <input name="height" type="range" min="0" max="500" value={formData.height} onChange={handleChange} />
                </span>
            </p>
            <p className="NewBoxForm-line"><label htmlFor="width">Width in pixels:</label>
                <span className="NewBoxForm-input">{formData.width}&nbsp;
                    <input name="width" type="range" min="0" max="500" value={formData.width} onChange={handleChange} />
                </span>
            </p>
            <p className="NewBoxForm-line"><label htmlFor="backgroundColor">Background color:</label>
                <span className="NewBoxForm-input">{formData.backgroundColor}&nbsp;
                    <input name="backgroundColor" type="color" value={formData.backgroundColor} onChange={handleChange} />
                </span>
            </p>
            <p className="NewBoxForm-line NewBoxForm-button">
                <button type="submit">Add Box</button>
            </p>
        </form>
    )
}

export default NewBoxForm;