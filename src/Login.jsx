import FormLogin from "./component/Fragments/FormLogin";
import Layout from "./component/Layout/Layout";
import React from 'react';



const Login = () => {
    return (
            <Layout title='Login' type='login' >
                <FormLogin />
            </Layout>
    )
};

export default Login;