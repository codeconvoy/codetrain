import Image from 'next/image';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ExploreIcon from '@mui/icons-material/Explore';
import InfoIcon from '@mui/icons-material/Info';

import firebase from 'firebase/app';
import signInWithGoogle from '../util/signInWithGoogle.js';
import createUser from '../util/createUser.js';

import styles from '../styles/components/Header.module.css';

export default function Header(props) {
  const { username } = props;

  return (
    <>
      <div className={styles.container}>
        <a href="/" className={styles.icon}> {/* eslint-disable-line @next/next/no-html-link-for-pages */}
          <Image src="/logo.png" height="48" width="48" alt="logo" />
        </a>
        <h1>Codetrain</h1>
        <span className="flexfill" />
        <a href="/" className={styles.link}>Home</a> {/* eslint-disable-line @next/next/no-html-link-for-pages */}
        <a href="/create" className={styles.link}>Create</a> {/* eslint-disable-line @next/next/no-html-link-for-pages */}
        <a href="/explore" className={styles.link}>Explore</a> {/* eslint-disable-line @next/next/no-html-link-for-pages */}
        <a href="/docs" className={styles.link}>Docs</a> {/* eslint-disable-line @next/next/no-html-link-for-pages */}
        {
          username === null ?
          <Tooltip title="Choose Username" arrow>
            <IconButton onClick={createUser}>
              <HelpOutlineIcon />
            </IconButton>
          </Tooltip> :
          username ?
          <Tooltip title="Sign Out" arrow>
            <IconButton onClick={() => firebase.auth().signOut()}>
              <ExitToAppIcon />
            </IconButton>
          </Tooltip> :
          <Tooltip title="Sign In" arrow>
            <IconButton onClick={signInWithGoogle}>
              <PersonOutlineIcon />
            </IconButton>
          </Tooltip>
        }
      </div>
      <div style={{ height: 60 }} />
    </>
  );
}
