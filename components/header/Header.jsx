import Socials from './Social';
import ME from '../image/Francis.jpeg';
import {MdCallMade} from 'react-icons/md';
import Image from 'next/image';
import './header.css';
import {motion} from 'framer-motion';

function Header() {
  return (
    <section className="header_container">
      <div className="header_container-left">
        <div className="header_container-text">
          <motion.h3 initial={{x: -1000}} animate={{x: 0}}>
            HI 👋, I&apos;M FRANCIS ULOHO OKPOLUAEFE
          </motion.h3>
          <h1>Frontend Developer</h1>
          <p>
            A Full-Stack Software Engineer with a strong focus on <span>frontend development</span>,
            dedicated to turning complex challenges into scalable, user-friendly solutions by
            blending innovative design and cutting-edge technology,{' '}
            <a href="/about">discover more.</a>
          </p>
        </div>

        <motion.div
          className="header_actions"
          initial={{x: 900, opacity: 0}}
          animate={{x: 0, opacity: 1}}>
          <div className="header_socials">
            <Socials className="socials-header" />
          </div>

          <div className="divider"></div>

          <a
            className="btn btn-call"
            href="https://calendly.com/deulo-careers/meeting-with-francis-u-okpoluaefe"
            target="_blank"
            rel="noopener noreferrer">
            Book call <MdCallMade />
          </a>

          <div className="divider2"></div>

          <button
            className="btn btn-message"
            onClick={() => (window.location.href = 'mailto:deulo.dev@gmail.com')}>
            Message <MdCallMade />
          </button>
        </motion.div>
      </div>

      <div className="header_container-right">
        <Image
          src={ME}
          width={500}
          height={500}
          quality={100}
          priority={true}
          style={{objectFit: 'contain'}}
          alt="Picture of Francis Uloho Okpoluaefe _ Frontent Developer"
        />
      </div>
    </section>
  );
}
export default Header;
