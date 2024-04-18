
const Label = (props) => {
    const {children, htmlFor} = props;
    const style = {
        display: 'block',
        color: '#4b5563', 
        fontSize: '0.875rem', 
        fontWeight: 'bold',
        marginBottom: '0.5rem' 
    };
    
    return (
        <label htmlFor={htmlFor} style={style}>
        {children}
        </label>
    );
};

export default Label;