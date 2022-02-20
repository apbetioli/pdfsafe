import { NextApiRequest, NextApiResponse } from 'next'

module.exports = async (_: NextApiRequest, res: NextApiResponse) => {
  try {
    res.send('hello');
  } catch (e) {
    console.error(e);
    res
      .status(400)
      .send(e);
  }
}