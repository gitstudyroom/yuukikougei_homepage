import React from 'react';

const About: React.FC = () => {
  return (
    <main>
      <section id="company" className="container page-section">
        <h2>会社概要・アクセス</h2>
        <div className="company-info">
          <dl>
            <dt>会社名</dt><dd>ゆうき工芸</dd>
            <dt>代表者</dt><dd>伊東</dd>
            <dt>所在地</dt><dd>〒851-0301 長崎県長崎市深堀町6丁目432番地</dd>
            <dt>電話番号</dt><dd>095-832-3871</dd>
            <dt>FAX番号</dt><dd>095-832-3872</dd>
            <dt>事業内容</dt><dd>船舶家具、船舶内装工事、オーダー家具製作</dd>
          </dl>
        </div>
        <div className="access-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3358.50198769344!2d129.8202633151742!3d32.67256998099968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35155a9576555555%3A0x5e8e7a8b8f8e8e8e!2z44CSODUxLTAzMDE!5e0!3m2!1sja!2sjp!4v1692772285141!5m2!1sja!2sjp"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </main>
  );
};

export default About;