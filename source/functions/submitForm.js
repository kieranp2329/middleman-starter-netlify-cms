const fs = require('fs');

exports.handler = async (event, context) => {
  try {
    // Parse form data
    const { your_name, your_email, Phone_number, bid_amount, lot_number } = JSON.parse(event.body);

    // Create a string with the data to be saved in the text file
    const fileContent = `Name: ${your_name}\nEmail: ${your_email}\nPhone Number: ${Phone_number}\nBid Amount: ${bid_amount}\nLot Number: ${lot_number}\n\n`;

    // Write the data to a text file
    fs.appendFileSync('form_data.txt', fileContent);

    // Return a success response
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Form data saved successfully' }),
    };
  } catch (error) {
    // Return an error response
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to save form data' }),
    };
  }
};
