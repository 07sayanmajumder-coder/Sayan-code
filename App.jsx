import { useState } from 'react';

function App() {
  const [showMessage, setShowMessage] = useState(false);

  const styles = {
    page: {
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #ffecd2, #fcb69f)',
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center',
      padding: '20px',
    },
    card: {
      background: '#ffffff',
      borderRadius: '24px',
      padding: '40px 30px',
      maxWidth: '520px',
      width: '100%',
      boxShadow: '0 12px 30px rgba(0, 0, 0, 0.15)',
    },
    title: {
      color: '#e85d75',
      fontSize: '42px',
      marginBottom: '12px',
    },
    name: {
      color: '#6c63ff',
      fontSize: '36px',
      margin: '10px 0',
    },
    message: {
      color: '#555',
      fontSize: '18px',
      lineHeight: 1.6,
    },
    button: {
      background: '#e85d75',
      color: '#fff',
      border: 'none',
      borderRadius: '25px',
      padding: '12px 24px',
      fontSize: '16px',
      cursor: 'pointer',
      marginTop: '20px',
    },
  };

  return (
    <main style={styles.page}>
      <section style={styles.card}>
        <div style={{ fontSize: '50px' }}>🎉🎂🎈</div>
        <h1 style={styles.title}>Happy Birthday!</h1>
        <h2 style={styles.name}>Dear Sujoy</h2>

        <p style={styles.message}>
          Wishing you a wonderful birthday filled with happiness, laughter,
          success, and unforgettable moments. May all your dreams come true!
        </p>

        <button style={styles.button} onClick={() => setShowMessage(!showMessage)}>
          {showMessage ? 'Hide Wishes' : 'Show Special Wish'}
        </button>

        {showMessage && (
          <p style={{ ...styles.message, color: '#e85d75', fontWeight: 'bold' }}>
            Have an amazing day, Sujoy! Keep smiling and enjoy every moment! 🥳
          </p>
        )}
      </section>
    </main>
  );
}

export default App;