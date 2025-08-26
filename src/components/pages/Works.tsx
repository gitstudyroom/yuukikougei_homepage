import React from 'react';

// 画像ファイルの型エラーを回避するために、画像のインポートをrequireに変更
const IMG_7702 = require('../../../images/IMG_7702.JPG');
const IMG_7703 = require('../../../images/IMG_7703.JPG');
const IMG_7704 = require('../../../images/IMG_7704.JPG');
const IMG_7705 = require('../../../images/IMG_7705.JPG');
const IMG_7706 = require('../../../images/IMG_7706.JPG');

const Works: React.FC = () => {
  return (
    <main>
      <section id="works" className="container page-section page-content">
        <h2>施工事例</h2>
        <div className="works-grid">
          <div className="work-item"><img src={IMG_7702} alt="施工事例1" /></div>
          <div className="work-item"><img src={IMG_7703} alt="施工事例2" /></div>
          <div className="work-item"><img src={IMG_7704} alt="施工事例3" /></div>
          <div className="work-item"><img src={IMG_7705} alt="施工事例4" /></div>
          <div className="work-item"><img src={IMG_7706} alt="施工事例5" /></div>
        </div>
      </section>
    </main>
  );
};

export default Works;
