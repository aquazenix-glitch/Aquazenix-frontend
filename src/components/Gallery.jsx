import React, { useState } from 'react';
import { Play, X, ZoomIn } from 'lucide-react';

const Gallery = () => {
    const [filter, setFilter] = useState('all');
    const [selectedItem, setSelectedItem] = useState(null);

    const galleryItems = [
        {
            id: 1,
            type: 'photo',
            src: '/images/gallery_before_after_1765647281671.png',
            title: 'Transformation Results',
            category: 'Cleaning'
        },
        {
            id: 2,
            type: 'video',
            src: '/images/gallery_worker_jet_1765647264588.png',
            title: 'High Pressure Cleaning',
            category: 'Process'
        },
        {
            id: 3,
            type: 'photo',
            src: '/images/gallery_uv_system_1765647298281.png',
            title: 'Advanced UV Systems',
            category: 'Technology'
        },
        {
            id: 4,
            type: 'video',
            src: '/images/gallery_clear_water_1765647314661.png',
            title: 'Purity Demonstrated',
            category: 'Results'
        },
        {
            id: 5,
            type: 'photo',
            src: '/images/gallery_team_van_1765647332542.png',
            title: 'Expert Team',
            category: 'Team'
        },
        {
            id: 6,
            type: 'video',
            src: '/images/gallery_sludge_removal_1765647351869.png',
            title: 'Sludge Removal Action',
            category: 'Process'
        }
    ];

    const filteredItems = filter === 'all'
        ? galleryItems
        : galleryItems.filter(item => item.type === filter);

    return (
        <section id="gallery" className="gallery-section">
            <div className="container">
                <div className="section-header">
                    <h2>Project Gallery</h2>
                    <p>See our advanced cleaning technology in action</p>
                </div>

                <div className="gallery-filters">
                    <button
                        className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
                        onClick={() => setFilter('all')}
                    >
                        All
                    </button>
                    <button
                        className={`filter-btn ${filter === 'photo' ? 'active' : ''}`}
                        onClick={() => setFilter('photo')}
                    >
                        Photos
                    </button>
                    <button
                        className={`filter-btn ${filter === 'video' ? 'active' : ''}`}
                        onClick={() => setFilter('video')}
                    >
                        Videos
                    </button>
                </div>

                <div className="gallery-grid">
                    {filteredItems.map((item) => (
                        <div
                            key={item.id}
                            className="gallery-item"
                            onClick={() => setSelectedItem(item)}
                        >
                            <div className="image-wrapper">
                                <img src={item.src} alt={item.title} />
                                <div className="overlay">
                                    {item.type === 'video' ? (
                                        <div className="play-icon">
                                            <Play fill="white" size={32} />
                                        </div>
                                    ) : (
                                        <div className="zoom-icon">
                                            <ZoomIn size={32} />
                                        </div>
                                    )}
                                    <div className="item-info">
                                        <h4>{item.title}</h4>
                                        <span>{item.category}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            {selectedItem && (
                <div className="lightbox" onClick={() => setSelectedItem(null)}>
                    <button className="close-btn" onClick={() => setSelectedItem(null)}>
                        <X size={32} />
                    </button>
                    <div className="lightbox-content" onClick={e => e.stopPropagation()}>
                        <img src={selectedItem.src} alt={selectedItem.title} />
                        {selectedItem.type === 'video' && (
                            <div className="video-player-mock">
                                <Play size={64} fill="white" />
                                <span>Simulated Video Player</span>
                            </div>
                        )}
                        <div className="lightbox-caption">
                            <h3>{selectedItem.title}</h3>
                            <p>{selectedItem.category}</p>
                        </div>
                    </div>
                </div>
            )}

            <style>{`
        .gallery-section {
          padding: 100px 0;
          background: #f8fbff;
        }
        .section-header {
          text-align: center;
          margin-bottom: 50px;
        }
        .section-header h2 {
          font-size: 36px;
          margin-bottom: 16px;
          color: #0a1e3b;
        }
        .section-header p {
          color: var(--text-gray);
          font-size: 18px;
        }

        .gallery-filters {
          display: flex;
          justify-content: center;
          gap: 16px;
          margin-bottom: 40px;
        }
        .filter-btn {
          padding: 10px 24px;
          border-radius: 30px;
          border: 1px solid #e0e0e0;
          background: white;
          color: var(--text-gray);
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .filter-btn.active, .filter-btn:hover {
          background: var(--primary-blue);
          color: white;
          border-color: var(--primary-blue);
          box-shadow: 0 4px 12px rgba(0, 102, 255, 0.2);
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 30px;
        }
        .gallery-item {
          border-radius: 16px;
          overflow: hidden;
          cursor: pointer;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
          transition: transform 0.3s ease;
          background: white;
        }
        .gallery-item:hover {
          transform: translateY(-5px);
        }
        .image-wrapper {
          position: relative;
          padding-top: 75%; /* 4:3 Aspect Ratio */
          overflow: hidden;
        }
        .image-wrapper img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .gallery-item:hover img {
          transform: scale(1.05);
        }
        
        .overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
          opacity: 0;
          transition: opacity 0.3s ease;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 20px;
        }
        .gallery-item:hover .overlay {
          opacity: 1;
        }
        
        .play-icon, .zoom-icon {
          align-self: center;
          margin-top: auto;
          margin-bottom: auto;
          color: white;
          background: rgba(255,255,255,0.2);
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          backdrop-filter: blur(4px);
        }
        .item-info {
          margin-top: auto;
          color: white;
        }
        .item-info h4 {
          font-size: 18px;
          margin-bottom: 4px;
        }
        .item-info span {
          font-size: 14px;
          opacity: 0.8;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        /* Lightbox */
        .lightbox {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.95);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px;
          animation: fadeIn 0.3s ease;
        }
        .close-btn {
          position: absolute;
          top: 30px;
          right: 30px;
          background: transparent;
          border: none;
          color: white;
          cursor: pointer;
        }
        .lightbox-content {
          max-width: 1000px;
          width: 100%;
          position: relative;
        }
        .lightbox-content img {
          width: 100%;
          border-radius: 8px;
          max-height: 80vh;
          object-fit: contain;
        }
        .video-player-mock {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: white;
          background: rgba(0,0,0,0.4);
          gap: 16px;
        }
        .lightbox-caption {
          margin-top: 20px;
          color: white;
          text-align: center;
        }
        .lightbox-caption h3 {
          margin-bottom: 8px;
          font-size: 24px;
        }
        .lightbox-caption p {
          opacity: 0.7;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @media (max-width: 768px) {
          .gallery-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
        </section>
    );
};

export default Gallery;
