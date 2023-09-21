import { useState } from 'react';
import Button from '../shared/button/button';
import styles from './form.module.scss';
import { createProfileAndAddToList } from '@/lib/klaviyo-lib';

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
            Sign up to receive access to our latest partnerships and events.
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
        </p>
      )}
    </div>
  );
}
