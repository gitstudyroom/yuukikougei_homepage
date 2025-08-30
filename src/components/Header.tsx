import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/LOGO.JPG';

const Header: React.FC = () => {
  return (
    <header>
      <div className="container">
        <h1 className="logo">
          <Link to="/">
            <img src={logo} alt="ゆうき工芸ロゴ" className="header-logo" />
            ゆうき工芸
          </Link>
        </h1> {/* Use Link */}
        <nav>
          <ul>
            <li><Link to="/">ホーム</Link></li> {/* Use Link */}
            <li><Link to="/services">事業内容</Link></li> {/* Use Link */}
            <li><Link to="/works">施工事例</Link></li> {/* Use Link */}
            <li><Link to="/recruit">採用情報</Link></li> {/* Use Link */}
            <li><Link to="/about">会社概要</Link></li> {/* Use Link */}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;