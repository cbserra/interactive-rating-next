
export default async function handler(req, res) {
  const { rating, maxRating } = req.body

  const missingFields = validateForm(rating, maxRating)

  if (missingFields.length > 0) {
    return res.status(400).json({ data: `${missingFields.join(', ')} not found.`  })
  }

  try {
    res.status(200).json({ data: `You selected ${rating} out of ${maxRating}` })
  } catch (err) {
    res.status(500).send({ error: 'failed to fetch data' })
  }
}

function validateForm({ rating, maxRating} ) {
  let missingFields = []

  if (!rating) {
    missingFields.push('Rating')
  }

  if (!maxRating) {
    missingFields.push('Max Rating')
  }

  return missingFields
}
