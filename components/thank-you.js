import cx from 'classnames'
import Image from 'next/image'

import IconTablet from '../public/images/illustration-thank-you.svg'

export default function ThankYou({formRating}) {
  return (
    <>
      <header className='flex flex-col items-center fade-in'>
          <Image 
            className='w-[143px] h-[96px]'
            src={IconTablet} 
            layout='fixed'
            alt='thank you'
          />
          <span 
            className={cx('rounded-[22.5px] bg-dark-blue text-orange mt-6 mb-3 px-3 py-1 ',
                          'font-normal text-sm leading-[22px] w-fit')}>
              You selected {formRating} out of 5
          </span>
          <h1 className='fade-in'>Thank you!</h1>
      </header>
      <main>
          <p className='text-center fade-in'>
              We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!
          </p>
      </main>
    </>
  )
}
