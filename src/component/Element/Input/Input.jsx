const Input = (props) => {
    const {type, placeholder, name} = props;
    const style = {
        fontSize: '0.875rem', // Setarakan dengan text-sm dari Tailwind
        border: '1px solid #e5e7eb', // Default border color from Tailwind
        borderRadius: '0.25rem', // Setarakan dengan rounded dari Tailwind
        width: '50%', // Setarakan dengan w-full dari Tailwind
        paddingTop: '0.5rem', // Setarakan dengan py-2 dari Tailwind
        paddingBottom: '0.5rem', // Setarakan dengan py-2 dari Tailwind
        paddingLeft: '0.75rem', // Setarakan dengan px-3 dari Tailwind
        paddingRight: '0.75rem', // Setarakan dengan px-3 dari Tailwind
        color: '#4b5563', // Setarakan dengan text-slate-700 dari Tailwind
    };
    return (
        <input type={type} style={style} 
        placeholder={placeholder}
        name={name}
        id={name}/>
    )
}

export default Input