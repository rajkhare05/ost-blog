import "../styles/header.css";

export function Header() {
    return (
        <div className = "header-container">
            <header>
                <div className = "hamburger-menu">
                    <div className = "bar"></div>
                    <div className = "bar"></div>
                    <div className = "half-bar"></div>
                </div>
                <div className = "blog-title"> OST </div>
                <img className = "profile-pic" src = "https://api.multiavatar.com/avatar.png" alt = "profile pic" />
            </header>
            <hr />
        </div>
    );
}

