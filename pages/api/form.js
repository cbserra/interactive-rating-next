export default async function handler(req, res) {

  const handleFormInputAsync = ({ rating, maxRating} ) => {
    // Guard clause checks for first and last name,
    // and returns early if they are not found
    let missingFields = []
    if (!rating) {
      missingFields.push('Rating')
    }
    if (!maxRating) {
      missingFields.push('Max Rating')
    }

    // Sends a HTTP bad request error code
    return res.status(400).json({ data: `${missingFields.join(', ')} not found.`  })
  }

  console.log(JSON.stringify(req))

  const { rating, maxRating } = req.body

  // Optional logging to see the responses
  // in the command line where next.js app is running.
  console.table('body: ', body)
  console.log(JSON.stringify(res))

  try {
    await handleFormInputAsync({ rating, maxRating })
    res.redirect(307, '/thank-you')
  } catch (err) {
    res.status(500).send({ error: 'failed to fetch data' })
  }
}

// export default function handler(req, res) {
//     // Get data submitted in request's body.
//     const body = req.body
  
//     // Optional logging to see the responses
//     // in the command line where next.js app is running.
//     console.log('body: ', body)
  
//     // Guard clause checks for first and last name,
//     // and returns early if they are not found
//     if (!body.rating) {
//       // Sends a HTTP bad request error code
//       return res.status(400).json({ data: 'Rating not found' })
//     }
  
//     // Found the name.
//     // Sends a HTTP success code
    // res.status(200).json({ data: `You selected ${body.rating} out of ${body.maxRating}` })
  // }