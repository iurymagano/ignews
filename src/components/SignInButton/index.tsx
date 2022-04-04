import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi'

import styles from './styles.module.scss';

export function SignInButton() {
  const isUserLoggedIn = true;

  return isUserLoggedIn ? (
    <button
      className={styles.signButton} 
      type="button"
    >
      <FaGithub color='#04d361' />
      Iury Magano
      <FiX className={styles.closeIcon} />
    </button>
  ) : (
    <button
      className={styles.signButton} 
      type="button"
    >
      <FaGithub color='#eba417' />
      Sign in with Github
    </button>
  )
}