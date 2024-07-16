// U51313007
// src/components/Gallery.js
import React, { useState, useEffect } from 'react';
import `./Gallery.css`;

const Gallery = () => {
    const [tours, setTours] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://course-api.com/react-tours-project')
            .then((response) => response.json())
            .then((data) => {
                setTours(data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setLoading(false);
            });
    }, []);

    const removeTour = (id) => {
        setTours(tours.filter((tour) => tour.id !== id));
    };

    const toggleReadMore = (id) => {
        setTours(
            tours.map((tour) => 
                tour.id === id ? { ...tour, readMore: !tour.readMore } : tour
            )
        );
    };

    if (loading) {
        return <div className="loading">Loading...</div>;
    }

    if (error) {
        return <div className="error">Error: {error}</div>;
    }

    return (
        <div className="gallery">
            {tours.map((tour) => (
                <div key={tour.id} className="tour">
                    <img src={tour.image} alt={tour.name} />
                    <div className="tour.info">
                        <h2>{tour.name}</h2>
                        <h4>${tour.price}</h4>
                        <p>
                            {tour.readMore ? tour.info : `${tour.info.substring(0, 100)}...`}
                            <button onClick={() => toggleReadMore(tour.id)}>
                                {tour.readMore ? 'Show Less' : 'Read More'}
                            </button>
                        </p>
                        <button onClick={() => removeTour(tour.id)}>Not Interested</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Gallery;