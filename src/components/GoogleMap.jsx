import React from 'react';

const GoogleMap = () => {
    return (
        <div className="map-area" style={{ width: '100%', height: '400px', position: 'relative' }}>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9582203.873394044!2d-15.017199381591523!3d54.10201971739094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x25a3b1142c791a9%3A0xc4f8a0433288257a!2sUnited%20Kingdom!5e0!3m2!1sen!2sng!4v1729043947454!5m2!1sen!2sng"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
            />
        </div>
    );
};

export default GoogleMap;
