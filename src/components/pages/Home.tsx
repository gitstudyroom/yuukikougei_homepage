import React from 'react';
import SlideShow from '../SlideShow';

const Home: React.FC = () => {
  return (
    <main>
      <section id="home" className="slideshow-section">
        <SlideShow />
        <div className="slideshow-text">
          <h2 className="slideshow-title fade-in-text">船の中に「特別な居心地」を。</h2>
        </div>
      </section>

      <section className="container">
        <h2>長崎の海と共に、ものづくりの未来を担う</h2>
        <p>
          ゆうき工芸は、長崎市に拠点を置き、船舶内装工事とオーダーメイド家具製作を専門としています。一つひとつの仕事に心を込め、確かな技術でお客様の信頼に応えてきました。事業拡大を見据え、私たちの技術と情熱を受け継いでくれる新しい仲間を募集しています。
        </p>
        <div className="intro-links">
          <a href="/services" className="btn">事業内容を見る</a>
          <a href="/recruit" className="btn">求人情報を見る</a>
        </div>
      </section>
    </main>
  );
};

export default Home;
