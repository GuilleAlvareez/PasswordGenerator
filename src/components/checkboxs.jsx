import './checkboxs.css'

export function Checkboxs({ text, checked, onChange }) {
    return (
        <label className="checkbox-label">
            <input type="checkbox" checked={checked} onChange={onChange}/>
            <span className="text">{text}</span>
        </label>
    );
}