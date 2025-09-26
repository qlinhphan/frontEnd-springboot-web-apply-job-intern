import videomp4 from '../../assets/demo.mp4';
import FormLogin from './form.login';
import './resstScss.scss'

const ManageLoginPage = () => {
    return (
        <div style={{ margin: 0, padding: 0, height: '100vh', width: '100vw' }}>
            <video autoPlay muted loop style={{ width: '100%', height: '100vh', objectFit: 'cover', display: 'block' }}>
                <source src={videomp4} type="video/mp4" />
            </video>
            <div style={{ position: 'absolute', zIndex: '3', left: '45%', top: '50%' }}>
                <FormLogin></FormLogin>
            </div>
        </div>
    )
}

export default ManageLoginPage


