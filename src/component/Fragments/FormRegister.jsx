import Button from "../Elements/Tombol/Button";
import InputFrom from "../Elements/Input/InputFrom";


const FormRegister = () => {
    return (
        <form action="">
        <InputFrom
        type="text"
        placeholder="Full Name" 
        htmlFor="Full Name"
        name="Full Name"
        />
        <InputFrom type="Email" 
        placeholder="example@example" 
        htmlFor='Email' 
        name="Email" 
        />
        <InputFrom type="Paswoord" 
        placeholder="********" 
        htmlFor='Paswoord' 
        name="Paswoord" 
        />
        <InputFrom type="Paswoord" 
        placeholder="********" 
        htmlFor='Paswoord' 
        name="Confirm Paswoord" 
        />
        <Button>Login</Button>
        </form>
    )
}

export default FormRegister;