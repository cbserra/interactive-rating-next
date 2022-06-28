import cx from 'classnames'
import Image from "next/image"
import { useState } from "react"

import IconStar from '../public/images/icon-star.svg'

export default function Form({setFormRating}) {
    const [rating, setRating] = useState(-1)

    // Handles the submit event on form submit.
  const handleSubmit = async (event) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault()
    setFormRating(event.target.rating.value)

  }

    return (
        <>
            <header  className='flex flex-col fade-in'>
                <div className='oval'>
                    <Image src={IconStar} className='w-[14px] h-[14px] ' alt='star' width={'14px'} height={'14px'}/>
                </div>
                <h1 className='fade-in'>How did we do?</h1>
            </header>
            <main>
                <p className='fade-in'>
                    Please let us know how we did with your support request. 
                    All feedback is appreciated to help us improve our offering!
                </p>
                <form className="mt-6 flex flex-col" action="/api/no-js-form" method="POST" onSubmit={handleSubmit}>
                    <fieldset className="flex items-center justify-between">
                        <input type="hidden" id="ratingMax" name="ratingMax" value="5" />
                        <Rating value={1} rating={rating} setRating={setRating} required={true} />
                        <Rating value={2} rating={rating} setRating={setRating} />
                        <Rating value={3} rating={rating} setRating={setRating} />
                        <Rating value={4} rating={rating} setRating={setRating} />
                        <Rating value={5} rating={rating} setRating={setRating} />
                    </fieldset>
                    <Submit />
                </form>
            </main>
        </>
    )
}

function Rating({value, rating, setRating, required = false}) {
    const checked = value === rating

    return (<label 
                htmlFor={`rating-${value}`} 
                className={cx("fade-in across flex items-center text-medium-grey hover:text-white checked:text-white p-0 m-0",
                )}
                >
                <input 
                    type='radio' 
                    name='rating' 
                    id={`rating-${value}`}
                    className={cx("peer bg-dark-blue hover:bg-orange checked:bg-medium-grey", 
                                    "w-10.5 h-10.5 md:w-[51px] md:h-[51px] rounded-[50%] border-none")} //w-0 h-0" 
                    value={value} 
                    onChange={() => setRating(value)}
                    checked={checked}
                    required={required}
                />
                <span
                    className={cx("bg-transparent peer-hover:bg-orange  hover:text-white font-bold",
                                    "relative cursor-pointer -left-1/2")}
                >
                    {value}
                </span>



            </label>)
}

function Submit() {
    return <input className="fade-in bg-orange rounded-[22.5px] py-3 mt-6 md:mt-8 text-[15px] leading-[19px] tracking-[2px] uppercase font-bold text-white w-full hover:text-orange hover:bg-white" type={'submit'} value='Submit' />
}