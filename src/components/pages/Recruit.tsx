import React from 'react';

const Recruit: React.FC = () => {
  return (
    <main>
      <section id="recruit" className="container page-section">
        <h2>採用情報</h2>
        <p>ゆうき工芸では、ものづくりへの情熱を共有し、共に成長できる新しい仲間を募集しています。未経験の方も大歓迎です。</p>

        <div className="recruit-section">
          <h3>福利厚生</h3>
          <ul>
            <li>社会保険完備（健康保険、厚生年金、雇用保険、労災保険）</li>
            <li>交通費支給（上限あり）</li>
            <li>昇給・賞与あり（業績による）</li>
            <li>資格取得支援制度</li>
            <li>健康診断</li>
            <li>慶弔見舞金</li>
          </ul>
        </div>

        <div className="recruit-section">
          <h3>社員インタビュー</h3>
          <p>現在、社員インタビュー記事を準備中です。当社の社員が仕事のやりがいや職場の雰囲気について語ります。公開まで今しばらくお待ちください。</p>
          <h4>Aさん（入社3年目）</h4>
          <p>「未経験で入社しましたが、先輩方が丁寧に教えてくださり、今では一人で任される仕事も増えました。自分の作ったものが形になる喜びを感じられる職場です。」</p>
        </div>

        <div className="recruit-section">
          <h3>仕事の1日の流れ（例：船舶家具職人）</h3>
          <p>ここでは、ある職人の1日の流れをご紹介します。</p>
          <ol>
            <li><strong>8:00 出社・朝礼:</strong> その日の作業内容を確認し、安全に関する注意事項を共有します。</li>
            <li><strong>8:30 作業開始:</strong> 担当する家具の製作に取り掛かります。図面を確認しながら、木材の加工、組み立て、仕上げを行います。</li>
            <li><strong>12:00 昼休憩:</strong> 同僚と談笑したり、ゆっくり休んだり、各自自由に過ごします。</li>
            <li><strong>13:00 午後の作業開始:</strong> 午前中の作業の続きや、別の工程に取り掛かります。必要に応じて、先輩や同僚と協力しながら作業を進めます。</li>
            <li><strong>16:30 片付け・清掃:</strong> 作業場を整理整頓し、翌日の準備を行います。</li>
            <li><strong>17:00 退社:</strong> お疲れ様でした！</li>
          </ol>
        </div>

        <div className="recruit-links">
          <a href="#" className="btn">ハローワークの求人を見る</a>
          <a href="#" className="btn">Instagramで職場の雰囲気を見る</a>
        </div>
      </section>
    </main>
  );
};

export default Recruit;