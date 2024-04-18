import Label from "./Label"
import Input from "./Input"

const InputFrom = (props) => {
    const { type, placeholder, htmlFrom, value, name, onChange } = props
    return (
        <div className="mb-6">
            <Label htmlFrom={htmlFrom}>{name}</Label>
            <Input 
                type={type} 
                placeholder={placeholder} 
                value={value} 
                name={name} 
                onChange={onChange}
            />
        </div>
    )
}

export default InputFrom;
