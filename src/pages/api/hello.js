// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { khodam } = req.body
    return res.status(200).json({ status: 200, khodam, message: "Berhasil Check Khodam" })
  } else {
    res.status(200).json({ name: "Lans The Prodigy" });
  }
}
