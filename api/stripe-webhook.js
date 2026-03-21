export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).send('Method Not Allowed');
  }

  try {
    const event = req.body;

    if (event.type === 'checkout.session.completed') {
      const session = event.data.object;

      const data = {
        fecha: new Date().toISOString(),
        email: session.customer_details?.email || '',
        monto: session.amount_total / 100,
        moneda: session.currency,
        producto: session.metadata?.product || 'Producto',
        estado_pago: 'Pagado'
      };

      await fetch("https://script.google.com/macros/s/AKfycbwDTXGCM1Y7NsCgHtbSMD9ZYLT4mB9VuaGq5A3KNhfq1CisGf1RRV9Eu1w0zSQmaX71/exec", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });
    }

    res.status(200).json({ received: true });

  } catch (error) {
    res.status(500).send('Error');
  }
}
