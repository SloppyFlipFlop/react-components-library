import React from 'react';
// import a from 'next/link';
// import Image from 'next/image';

import { AiOutlineInstagram, AiOutlineLink } from 'react-icons/ai';
import { FaDiscord, FaGithub, FaLinkedin } from 'react-icons/fa';

// import CodeDevilsLogo from './../../public/logo-small.png';

const Footer = () => {
  return (
    <footer className='mt-auto bg-white'>
      <div className='p-4 py-6 lg:py-8'>
        <div className='mx-auto w-full max-w-screen-2xl md:flex md:justify-between'>
          <div className='mb-6 flex flex-col md:mb-0'>
            {/* <a href='/' className='flex w-fit items-center'>
              <Image
                src={CodeDevilsLogo}
                alt='CodeDevils logo'
                width={100}
                height={200}
                className='h-auto w-auto'
              />
            </a> */}
            <p className='my-2 text-sm text-gray-100 md:mb-0 md:mt-2 md:w-7/12'>
              CodeDevils is an inclusive online student organization at Arizona
              State University that aims to bring students together.
            </p>
          </div>
          <div className='grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6'>
            <div>
              <h2 className='mb-6 text-sm font-semibold uppercase text-gray-900'>
                Organization
              </h2>
              <ul className='font-medium text-black'>
                {[
                  ['About', 'https://codedevils.org/about'],
                  ['Leadership', 'https://codedevils.org/about/#leadership'],
                  ['Contact', 'https://codedevils.org/contact'],
                ].map(([title, url], key) => (
                  <li key={key} className='mb-4'>
                    <a
                      aria-label={`Learn more about CodeDevils by heading to ${title}`}
                      href={url as string}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='hover:text-maroon hover:underline'
                    >
                      {title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className='mb-6 text-sm font-semibold uppercase text-gray-900 '>
                Resources
              </h2>
              <ul className='font-medium text-black'>
                <li className='mb-4'>
                  <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href={
                      'https://codedevils.notion.site/CodeDevils-Constitution-79dd330604ca416cb17378ca429891f3?pvs=4'
                    }
                    className='hover:text-maroon hover:underline'
                  >
                    Constitution
                  </a>
                </li>
                <li className='mb-4'>
                  <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href={
                      'https://codedevils.notion.site/Welcome-Docs-d786e78b46a6418a8748c8ca579ea717?pvs=4'
                    }
                    className='hover:text-maroon hover:underline'
                  >
                    Welcome Docs
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className='mb-6 text-sm font-semibold uppercase text-gray-900'>
                Legal
              </h2>
              <ul className='font-medium text-black'>
                <li className='mb-4 last:mb-0'>
                  <a
                    target='_blank'
                    rel='noopener noreferrer'
                    className='hover:text-maroon hover:underline'
                    href={
                      'https://codedevils.notion.site/CodeDevils-Privacy-Policy-bc0544f3eebe42fc9d60d39f8d731834?pvs=4'
                    }
                  >
                    Privacy Policy
                  </a>
                </li>
                <li className='mb-4 last:mb-0'>
                  <a
                    target='_blank'
                    rel='noopener noreferrer'
                    className='hover:text-maroon hover:underline'
                    href={
                      'https://codedevils.notion.site/Terms-Conditions-59c663cb99e9471a8e0fae12cbb09008?pvs=4'
                    }
                  >
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className='my-6 border-gray-500 sm:mx-auto lg:my-4' />
        <div className='mx-auto w-full max-w-screen-2xl sm:flex sm:items-center sm:justify-between'>
          <span className='text-sm text-black'>
            © 2024{' '}
            <a
              href='/'
              className='text-marron transition-colors duration-200 ease-in-out hover:text-maroon md:text-black'
            >
              CodeDevils - Arizona State University
            </a>
            . All Rights Reserved.
          </span>
          <ul className='mt-4 flex space-x-5 sm:mt-0 sm:justify-center'>
            <li>
              <a
                className='text-black transition-colors duration-200 ease-in-out hover:text-maroon'
                target='_blank'
                href='https://www.instagram.com/codedevils.asu/'
              >
                <span className='h-4 w-4'>
                  <AiOutlineInstagram />
                </span>
                <span className='sr-only'>Instagram</span>
              </a>
            </li>
            <li>
              <a
                className='text-black transition-colors duration-200 ease-in-out hover:text-maroon'
                target='_blank'
                href='https://discord.gg/eevXKjVmm2'
              >
                <span className='h-4 w-4'>
                  <FaDiscord />
                </span>
                <span className='sr-only'>Discord</span>
              </a>
            </li>
            <li>
              <a
                className='text-black transition-colors duration-200 ease-in-out hover:text-maroon'
                target='_blank'
                href='https://asu.campuslabs.com/engage/organization/codedevils/'
              >
                <span className='h-4 w-4'>
                  <AiOutlineLink />
                </span>
                <span className='sr-only'>SunDevilSync</span>
              </a>
            </li>
            <li>
              <a
                className='text-black transition-colors duration-200 ease-in-out hover:text-maroon'
                target='_blank'
                href='https://github.com/ASU-CodeDevils/'
              >
                <span className='h-4 w-4'>
                  <FaGithub />
                </span>
                <span className='sr-only'>Github</span>
              </a>
            </li>
            <li>
              <a
                className='text-black transition-colors duration-200 ease-in-out hover:text-maroon'
                target='_blank'
                href='https://www.linkedin.com/company/codedevils-official/'
              >
                <span className='h-4 w-4'>
                  <FaLinkedin />
                </span>
                <span className='sr-only'>LinkedIn</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
