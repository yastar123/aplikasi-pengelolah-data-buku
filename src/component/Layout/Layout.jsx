import { Link } from 'react-router-dom';
import './Layout.css'

const Layout = (props) => {
    const { children, title, type } = props;
    return (
        <div>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 170"><path fill="#0099ff" fill-opacity="1" d="M0,128L80,122.7C160,117,320,107,480,117.3C640,128,800,160,960,154.7C1120,149,1280,107,1360,85.3L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
            </div>
            <div className="container">
                <div className="content">
                    <h1 className="title">{title}</h1>
                    <p className="description">
                        Welcome, Please enter your detail
                    </p>
                    {children}
                    <Navigation type={type} />
                </div>
            </div>
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 240"><path fill="#0099ff" fill-opacity="1" d="M0,96L1440,64L1440,320L0,320Z"></path></svg>
            </div>
        </div>

    )
}

const Navigation = ({ type }) => {
    if (type === 'login') {
        return (
            <p className='navigation-text'>
                Tidak Memiliki akun? {" "}
                <Link to="/register" className='link'>
                    Register
                </Link>
            </p>
        )
    } else if (type === 'register') {
        return (
            <p className='navigation-text'>
                Sudah Punya Akun? {" "}
                <Link to="/" className='link'>
                    Login
                </Link>
            </p>
        )
    }
}

export default Layout;
