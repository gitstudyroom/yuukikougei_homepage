import React from 'react';

const Services: React.FC = () => {
  return (
    <main>
      <section id="business" className="container page-section page-content">
        <h2>事業内容</h2>
        <div className="business-content">
          <div className="business-item">
            <h3>船舶内装</h3>
            <p>船舶木艤装内装工事を主に、木根太、シナベニヤ、アスベストボード、パネル等の壁材を使った施工や、居住区、トイレ等の什器の取り付けを行っています。年間6〜8隻の受注生産で、お客様のニーズに合わせた高品質な内装を提供します。</p>
          </div>
          <div className="business-item">
            <h3>オーダー家具製作</h3>
            <p>お客様のニーズに応じたオーダー家具の製作も行っています。船舶家具で培った技術を活かし、デザイン性と耐久性を両立した家具を一つひとつ丁寧に製作します。</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;