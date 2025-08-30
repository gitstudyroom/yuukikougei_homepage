import React from 'react';

const Works: React.FC = () => {
  // Dynamically import all images matching PRJ_xxx.JPG
  const importAll = (r: __WebpackModuleApi.RequireContext): string[] => r.keys().map(r) as string[];
  const images = importAll(require.context('../../../images/', false, /PRJ_\d{3}\.JPG$/));

  return (
    <main>
      <section id="works" className="container page-section page-content">
        <h2>施工事例</h2>
        <div className="works-grid">
          {images.map((image: string, index: number) => (
            <div className="work-item" key={index}>
              <img src={image} alt={`施工事例${index + 1}`} />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Works;
