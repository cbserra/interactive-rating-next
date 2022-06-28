import { useState } from "react"
import Image from "next/image"
import cx from 'classnames'
import IconStar from '../public/images/icon-star.svg'

export default function Form({formRating, setFormRating}) {
    const [rating, setRating] = useState(-1)

    // Handles the submit event on form submit.
  const handleSubmit = async (event) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault()

    console.debug('submitting via javascript...')

    setFormRating(event.target.rating.value)

    // // Get data from the form.
    // const data = {
    //   rating: event.target.rating.value,
    //   maxRating: event.target.ratingMax.value
    // }

    // // Send the data to the server in JSON format.
    // const jsonData = JSON.stringify(data)
    // console.table(jsonData)

    // // API endpoint where we send form data.
    // const endpoint = '/api/form'

    // // Form the request for sending data to the server.
    // const options = {
    //   // The method is POST because we are sending data.
    //   method: 'POST',
    //   // Tell the server we're sending JSON.
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   // Body of the request is the JSON data we created above.
    //   body: jsonData,
    // }

    // // Send the form data to our forms API on Vercel and get a response.
    // const response = await fetch(endpoint, options)

    // // Get the response data from server as JSON.
    // // If server returns the name submitted, that means the form works.
    // const result = await response.json()
    // alert(`Is this your rating?: ${result.data}`)

    // response.redirect(307, '/thank-you')

  }

    return (
        <>
            <header  className='flex flex-col'>
                <div className='oval'>
                    <Image src={IconStar} className='w-[14px] h-[14px] ' alt='star' width={'14px'} height={'14px'}/>
                </div>
            </header>
            <h1>How did we do?</h1>
            <p>
                Please let us know how we did with your support request. 
                All feedback is appreciated to help us improve our offering!
            </p>
            <form className="my-6 flex flex-col" action="/api/no-js-form" method="POST" onSubmit={handleSubmit}>
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
        </>
    )
}

function Rating({value, rating, setRating, required = false}) {
    const checked = value === rating
    return (<label 
                htmlFor={`rating-${value}`} 
                className="flex items-center text-medium-grey hover:text-white checked:text-white p-0 m-0" 
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
    return <input className="bg-orange rounded-[22.5px] py-3 mt-6 md:mt-8 text-[15px] leading-[19px] tracking-[2px] uppercase font-bold text-white w-full hover:text-orange hover:bg-white" type={'submit'} value='Submit' />
}