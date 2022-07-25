import '../styles/globals.css';
import dynamic from 'next/dynamic';

const NoSSRApp = dynamic(() => import('./__app'), { ssr: false });

export default NoSSRApp;
