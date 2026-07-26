import React from 'react';

const AboutUs = () => {
  return (
    <div style={{ maxWidth: 1100, margin: '0 auto', padding: 30, fontFamily: 'Arial, sans-serif', color: '#333' }}>
      
      {/* Hero Section */}
      <section style={{ padding: '60px 0', backgroundImage: 'url(https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80)', backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: 8, color: 'white', textAlign: 'center' }}>
        <h1 style={{ fontSize: 32, fontWeight: 'bold', marginBottom: 10 }}>Nourishing Hope, Building Community</h1>
        <p style={{ fontSize: 18, maxWidth: 600, margin: '0 auto' }}>
          Learn about our unwavering commitment to infant health and our journey to provide life-saving human milk.
        </p>
      </section>

      {/* Our Journey So Far (UPDATED) */}
      <section style={{ marginTop: 60 }}>
        <h2 style={{ textAlign: 'center', marginBottom: 30 }}>Our Journey So Far</h2>
        {/* Added textAlign: 'center' to center the text within the paragraph block */}
        <p style={{ maxWidth: 700, margin: '0 auto', fontSize: 16, lineHeight: 2, textAlign: 'center' }}>
          Founded in 20XX, Mothers Milk Bank was born from a profound understanding of the critical need for human milk, especially for the most vulnerable infants. Our founders, a group of dedicated healthcare professionals and passionate community advocates, recognized the life-saving potential of donated breast milk for premature and medically fragile newborns.
          <br /><br />
          What began as a grassroots effort quickly grew into a fully accredited milk bank, adhering to the highest standards of safety, screening, and pasteurization. Over the years, we have proudly served thousands of families and hospitals, contributing to healthier starts for countless babies. Our history is a testament to the power of community, compassion, and the incredible generosity of our milk donors.
        </p>
      </section>

      {/* Our Core Purpose */}
      <section style={{ backgroundColor: '#f9f9f9', padding: '40px 20px', marginTop: 60, borderRadius: 8, display: 'flex', justifyContent: 'space-around', gap: 40 }}>
        <div style={{ maxWidth: 300, textAlign: 'center' }}>
          <h3 style={{ color: '#2C5282' }}>Our Mission</h3>
          <p>To provide a safe, screened, and abundant supply of pasteurized donor human milk to premature and medically fragile infants, ensuring optimal nutrition and improved health outcomes.</p>
        </div>
        <div style={{ maxWidth: 300, textAlign: 'center' }}>
          <h3 style={{ color: '#2C5282' }}>Our Vision</h3>
          <p>A world where every infant has access to the life-giving benefits of human milk, fostering healthier communities and brighter futures.</p>
        </div>
      </section>

      {/* Our Guiding Values */}
      <section style={{ marginTop: 60 }}>
        <h2 style={{ textAlign: 'center' }}>Our Guiding Values</h2>
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 30, marginTop: 40 }}>
          {[
            { title: 'Compassion', desc: 'We approach every family and every donation with empathy, understanding, and deep care for the well-being of infants.' },
            { title: 'Integrity', desc: 'Operating with unwavering transparency, honesty, and ethical practices in all aspects of our work and relationships.' },
            { title: 'Excellence', desc: 'Committed to the highest standards in milk screening, processing, and distribution to ensure safety and quality.' },
            { title: 'Innovation', desc: 'Continuously seeking new ways to improve our processes, expand our reach, and enhance the support we offer.' }
          ].map(value => (
            <div key={value.title} style={{ flexBasis: 'calc(25% - 25px)', maxWidth: '250px', textAlign: 'center' }}>
              <h4 style={{ color: '#2C5282' }}>{value.title}</h4>
              <p style={{ color: '#555', fontSize: 14 }}>{value.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Join Our Mission */}
      <section style={{ marginTop: 60, backgroundColor: '#2C5282', padding: 40, borderRadius: 8, color: 'white', textAlign: 'center' }}>
        <h2>Join Our Mission</h2>
        <p>Every contribution, whether through donation or support, helps us nourish hope and make a lasting impact on vulnerable lives.</p>
        <div style={{ marginTop: 20 }}>
          <button style={{ backgroundColor: 'white', color: '#2C5282', border: 'none', padding: '10px 30px', borderRadius: 25, cursor: 'pointer', marginRight: 10 }}>
            Donate Milk
          </button>
          <button style={{ backgroundColor: 'white', color: '#2C5282', border: 'none', padding: '10px 30px', borderRadius: 25, cursor: 'pointer' }}>
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;