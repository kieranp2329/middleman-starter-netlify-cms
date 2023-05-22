exports.handler = async (event, context) => {
  try {
    // Parse form data
    const { your_name, your_email, Phone_number, bid_amount, lot_number } = JSON.parse(event.body);

    // Log the form data
    console.log('Form Data:', {
      Name: your_name,
      Email: your_email,
      Phone_Number: Phone_number,
      Bid_Amount: bid_amount,
      Lot_Number: lot_number,
    });

    // Return a success response
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Form data received successfully' }),
    };
  } catch (error) {
    // Return an error response
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to receive form data' }),
    };
  }
};
