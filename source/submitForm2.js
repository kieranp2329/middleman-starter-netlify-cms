exports.handler = async (event, context) => {
  try {
    // Parse form data
    const { your_name, your_email, Phone_number, bid_amount, lot_number } = JSON.parse(event.body);

    // Log the form data in a formatted way
    console.log(`Form Data:
      Name: ${your_name}
      Email: ${your_email}
      Phone Number: ${Phone_number}
      Bid Amount: ${bid_amount}
      Lot Number: ${lot_number}
    `);

    // Create the popup message
    const popupMessage = `Your bid for ${bid_amount} on lot number ${lot_number} has been saved`;

    // Return a success response
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Form data received successfully', popupMessage }),
    };
  } catch (error) {
    // Return an error response
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to receive form data' }),
    };
  }
};
