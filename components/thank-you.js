import Image from 'next/image'
import IconTablet from '../public/images/illustration-thank-you.svg'
import cx from 'classnames'

export default function ThankYou({formRating}) {
  return (
    <div className='flex flex-col items-center'>
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
        <h1>Thank you!</h1>
        <p className='text-center'>
            We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!
        </p>
    </div>
  )
}
