export default function handler(req, res) {
    // Get data submitted in request's body.
    const body = req.body
  
    // Optional logging to see the responses
    // in the command line where next.js app is running.
    console.debug('handling form submission via non-js...')
    console.debug(`body: ${JSON.stringify(body)}`)
  
    // Guard clause checks for first and last name,
    // and returns early if they are not found
    if (!body.rating) {
      // Sends a HTTP bad request error code
      return res.status(400).json({ data: 'Rating not found' })
    }
  
    // Found the name.
    // Sends a HTTP success code
    // res.status(200).json({ data: `You selected ${body.rating} out of ${body.maxRating}` })
    res.redirect(307, '/thank-you')
  }