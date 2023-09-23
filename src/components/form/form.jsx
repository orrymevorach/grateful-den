import { useState } from 'react';
import Button from '../shared/button/button';
import styles from './form.module.scss';
import { createProfileAndAddToList } from '@/lib/klaviyo-lib';

export default function SignupForm() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    setIsLoading(true);
    const response = await createProfileAndAddToList({ email });
    setIsLoading(false);
    if (response.error) {
      setError(response.error.detail);
    } else {
      setIsSubmitted(true);
    }
  };

  const handleChange = e => {
    setError('');
    setEmail(e.target.value);
  };

  return (
    <div>
      <p className={styles.title}>Den Member Card</p>
      {!isSubmitted ? (
        <>
          <p className={styles.description}>
            We are on a mission to build a social wellness club in Toronto. This
            will be a space where people can work, play, invest in their
            wellness and find meaning with like-minded community.
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
              onChange={handleChange}
            />
            {error && <p className={styles.error}>{error}</p>}
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
