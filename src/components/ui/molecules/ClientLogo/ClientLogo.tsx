import Image from 'next/image';
import styles from './ClientLogo.module.css';

interface ClientLogoProps {
  name: string;
  logo: string;
}

export default function ClientLogo({ name, logo }: ClientLogoProps) {
  return (
    <div className={styles.clientLogo}>
      <Image src={logo} alt={name} width={150} height={60} />
    </div>
  );
}
