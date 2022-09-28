import styles from '../styles/redirect.module.css';
import Image from 'next/image';
import { useRouter } from 'next/router';

const Redirect = () => {
    const router = useRouter();
    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <div
                        className={styles.closeIcon}
                        onClick={() => router.back()}
                    >
                        <Image
                            src="/assets/close_icon.svg"
                            alt="Close"
                            width={18}
                            height={18}
                        />
                    </div>
                    <h1>Sign Up to Comicverse Account</h1>
                    <div className={styles.content}>
                        <ul className={styles.list}>
                            <li>Create your story</li>
                            <li>Share story</li>
                            <li>Publish story</li>
                        </ul>
                        <div className={styles.buttonGroup}>
                            <button className={styles.primaryButton}>
                                Log In
                            </button>
                            <button className={styles.secondaryButton}>
                                Register
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Redirect;
