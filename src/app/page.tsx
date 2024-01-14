import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <main
      className={styles.main}
      style={{
        width: '100%',
        height: '100vh'
      }}
    >
      <iframe
        src="https://fptshop.com.vn/"
        style={{
          width: '100%',
          height: '100%',
          border: 0
        }}
      ></iframe>
    </main>
  );
}
