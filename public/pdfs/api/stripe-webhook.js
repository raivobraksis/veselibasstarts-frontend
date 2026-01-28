import Stripe from "stripe";
import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).send("Method Not Allowed");
  }

  const sig = req.headers["stripe-signature"];
  let event;

  try {
    const buf = await buffer(req);
    event = stripe.webhooks.constructEvent(
      buf,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;
    const customerEmail = session.customer_details.email;

    try {
      await sendEmail(customerEmail);
    } catch (error) {
      console.error(error);
      return res.status(500).send("Email failed");
    }
  }

  res.json({ received: true });
}

// ========== EMAIL FUNKCIJA ==========
async function sendEmail(to) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const pdfPath = path.join(process.cwd(), "public/pdfs/receptes.pdf");

  await transporter.sendMail({
    from: `"Veselības Starts" <${process.env.EMAIL_USER}>`,
    to,
    subject: "Tavas receptes 🎁",
    text: "Paldies par pirkumu! Pielikumā atradīsi receptes.",
    attachments: [
      {
        filename: "receptes.pdf",
        content: fs.createReadStream(pdfPath),
      },
    ],
  });
}

// ========== BUFFER ==========
function buffer(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    req.on("data", (chunk) => chunks.push(chunk));
    req.on("end", () => resolve(Buffer.concat(chunks)));
    req.on("error", reject);
  });
}
