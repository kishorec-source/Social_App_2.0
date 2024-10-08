const adCampaigns = [
  {
    id: 1,
    advertiser: 'Company A',
    campaignName: 'Summer Sale',
    targetAudience: '18-25',
    budget: 5000,
    startDate: '2023-06-01',
    endDate: '2023-06-30',
  },
  {
    id: 2,
    advertiser: 'Company B',
    campaignName: 'Back to School',
    targetAudience: '13-18',
    budget: 3000,
    startDate: '2023-08-01',
    endDate: '2023-08-31',
  },
  {
    id: 3,
    advertiser: 'Company C',
    campaignName: 'Holiday Specials',
    targetAudience: '25-40',
    budget: 7000,
    startDate: '2023-12-01',
    endDate: '2023-12-31',
  },
];

// Function to add a new ad campaign
export function addAdCampaign(newCampaign) {
  newCampaign.id = adCampaigns.length
    ? adCampaigns[adCampaigns.length - 1].id + 1
    : 1;
  adCampaigns.push(newCampaign);
}

// Function to update an existing ad campaign
export function updateAdCampaign(updatedCampaign) {
  const index = adCampaigns.findIndex(
    campaign => campaign.id === updatedCampaign.id,
  );
  if (index !== -1) {
    adCampaigns[index] = updatedCampaign;
  }
}

// Function to delete an ad campaign
export function deleteAdCampaign(campaignId) {
  const updatedCampaigns = adCampaigns.filter(
    campaign => campaign.id !== campaignId,
  );
  adCampaigns.length = 0;
  adCampaigns.push(...updatedCampaigns);
}

// Dummy payment processing function
function processPayment(amount) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate payment success
      const paymentSuccess = true;
      if (paymentSuccess) {
        resolve('Payment successful');
      } else {
        reject(new Error('Payment failed'));
      }
    }, 1000); // Simulate network delay
  });
}

// Function to handle ad campaign purchase
export async function purchaseAdCampaign(newCampaign) {
  try {
    const paymentResult = await processPayment(newCampaign.budget);
    console.log(paymentResult);
    addAdCampaign(newCampaign);
    console.log('Ad campaign added successfully');
  } catch (error) {
    console.error(error);
  }
}

export default adCampaigns;
