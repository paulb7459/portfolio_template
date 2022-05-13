// Import Assets
import profile from '../assets/paulpic.jpg';

const Header = () => {
    return (
        <section className='header'>
            <img src={profile} alt="Paul Brady" />

            <div className='header__content'>
                <h1>Hi, I'm Paul Brady</h1>
                <p>Marine Veteran Turned Blockchain Developer</p>
                <a href="mailto:pbrady74@gmail.com" className='button'>Get In Touch</a>
            </div>
        </section>
    );
}

export default Header;