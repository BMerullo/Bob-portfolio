import Header from '../components/Header';

const AboutUs = (props) => {
    const {title} = props
    return(
        <div className="content-body">
            <div className="top-banner">
            <Header title={title} />
            <h1 className="content-title">About Me</h1>
            <p>Learn what I am all about</p>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
    )
}

export default AboutUs;