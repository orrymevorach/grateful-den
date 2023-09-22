import { useState } from 'react';
import Button from '../shared/button/button';
import styles from './form.module.scss';
import { createProfileAndAddToList } from '@/lib/klaviyo-lib';
import bear from 'public/Bear.png';
import lightning from 'public/Lightning.png';
import sun from 'public/Sun.png';
import Image from 'next/image';

export default function SignupForm() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();
    setIsLoading(true);
    await createProfileAndAddToList({ email });
    setIsLoading(false);
    setIsSubmitted(true);
  };

  return (
    <div>
      <p className={styles.title}>Den Member Card</p>
      {!isSubmitted ? (
        <>
          <p className={styles.description}>
            We are on a mission to build a social wellness club in Toronto. This
            will be a space where people can work, play, invest in their
            wellness and find meaning with like-minded community. Sign up to
            reciever access to our latest lifestyle partnerships and events.{' '}
          </p>
          <p className={styles.signUp}>
            Sign up to receive access to our latest lifestyle partnerships and
            events.
          </p>

          <form action="#" className={styles.form} onSubmit={handleSubmit}>
            <input
              type="email"
              className={styles.email}
              placeholder="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <Button isLoading={isLoading}>Sign me up!</Button>
          </form>
        </>
      ) : (
        <p className={styles.submitted}>
          Thank you for joining our community! We look forward to sharing
          exciting news and updates with you.
          <div className={styles.icons}>
            <Image src={bear} alt="" className={styles.icon} />
            <Image src={lightning} alt="" className={styles.icon} />
            <Image src={sun} alt="" className={styles.icon} />
          </div>
        </p>
      )}
    </div>
  );
}
