// Button handler utilities for Hum Makerz Foundation website

export const handleDonateNow = () => {
  // Scroll to contribute section
  const contributeSection = document.getElementById('contribute');
  if (contributeSection) {
    contributeSection.scrollIntoView({ behavior: 'smooth' });
  }
};

export const handleJoinMission = () => {
  // Scroll to contribute section and select volunteer tab
  const contributeSection = document.getElementById('contribute');
  if (contributeSection) {
    contributeSection.scrollIntoView({ behavior: 'smooth' });
    // Set volunteer tab after a short delay
    setTimeout(() => {
      const volunteerTab = document.querySelector('[data-tab="volunteer"]') as HTMLButtonElement;
      if (volunteerTab) {
        volunteerTab.click();
      }
    }, 1000);
  }
};

export const handleLearnMore = (section: string) => {
  // Handle learn more clicks based on section
  switch (section) {
    case 'about':
      // Open about modal or scroll to detailed section
      alert('Learn more about our purpose-driven approach and community impact!');
      break;
    case 'women-growth':
      alert('Learn more about our Women\'s Growth & Well-Being programs!');
      break;
    case 'community':
      alert('Learn more about our Community Building & Social Inclusion initiatives!');
      break;
    case 'learning':
      alert('Learn more about our Learning, Creativity & Skill Development workshops!');
      break;
    case 'mental-health':
      alert('Learn more about our Mental Health, Wellness & Happiness programs!');
      break;
    case 'social-work':
      alert('Learn more about our Social Work & Community Outreach activities!');
      break;
    case 'networking':
      alert('Learn more about our Networking & Relationship Building opportunities!');
      break;
    default:
      console.log(`Learn more about ${section}`);
  }
};

export const handleJoinCommunity = () => {
  // Open community registration form
  const modal = document.createElement('div');
  modal.innerHTML = `
    <div style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); z-index: 9999; display: flex; align-items: center; justify-content: center;">
      <div style="background: white; padding: 2rem; border-radius: 1rem; max-width: 500px; width: 90%;">
        <h2 style="margin-bottom: 1rem; color: #333;">Join Hum Makerz Community</h2>
        <p style="margin-bottom: 1.5rem; color: #666;">Become part of our vibrant community and stay updated with our latest initiatives and events.</p>
        <form onsubmit="event.preventDefault(); alert('Thank you for your interest! We will contact you soon.'); this.closest('[style*=position]').remove();">
          <div style="margin-bottom: 1rem;">
            <label style="display: block; margin-bottom: 0.5rem; color: #333;">Full Name *</label>
            <input type="text" required style="width: 100%; padding: 0.75rem; border: 1px solid #ddd; border-radius: 0.5rem;" placeholder="Enter your full name">
          </div>
          <div style="margin-bottom: 1rem;">
            <label style="display: block; margin-bottom: 0.5rem; color: #333;">Email *</label>
            <input type="email" required style="width: 100%; padding: 0.75rem; border: 1px solid #ddd; border-radius: 0.5rem;" placeholder="Enter your email">
          </div>
          <div style="margin-bottom: 1rem;">
            <label style="display: block; margin-bottom: 0.5rem; color: #333;">Phone Number</label>
            <input type="tel" style="width: 100%; padding: 0.75rem; border: 1px solid #ddd; border-radius: 0.5rem;" placeholder="Enter your phone number">
          </div>
          <div style="margin-bottom: 1.5rem;">
            <label style="display: block; margin-bottom: 0.5rem; color: #333;">Interests</label>
            <select multiple style="width: 100%; padding: 0.75rem; border: 1px solid #ddd; border-radius: 0.5rem;">
              <option value="women-growth">Women's Growth & Well-Being</option>
              <option value="community">Community Building</option>
              <option value="learning">Learning & Creativity</option>
              <option value="mental-health">Mental Health</option>
              <option value="volunteering">Volunteering</option>
            </select>
          </div>
          <div style="display: flex; gap: 1rem;">
            <button type="submit" style="flex: 1; padding: 0.75rem; background: #dc2626; color: white; border: none; border-radius: 0.5rem; cursor: pointer;">Join Community</button>
            <button type="button" onclick="this.closest('[style*=position]').remove();" style="padding: 0.75rem; background: #6b7280; color: white; border: none; border-radius: 0.5rem; cursor: pointer;">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
};

export const handleGetInvolved = () => {
  // Scroll to contribute section
  handleDonateNow();
};

export const handleSupportWork = () => {
  // Scroll to contribute section
  handleDonateNow();
};

export const handleRegisterActivities = () => {
  // Open activity registration modal
  const modal = document.createElement('div');
  modal.innerHTML = `
    <div style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); z-index: 9999; display: flex; align-items: center; justify-content: center;">
      <div style="background: white; padding: 2rem; border-radius: 1rem; max-width: 600px; width: 90%; max-height: 80vh; overflow-y: auto;">
        <h2 style="margin-bottom: 1rem; color: #333;">Register for Activities</h2>
        <p style="margin-bottom: 1.5rem; color: #666;">Choose the activities you're interested in joining:</p>
        <form onsubmit="event.preventDefault(); alert('Registration successful! We will contact you with details.'); this.closest('[style*=position]').remove();">
          <div style="margin-bottom: 1rem;">
            <label style="display: block; margin-bottom: 0.5rem; color: #333;">Full Name *</label>
            <input type="text" required style="width: 100%; padding: 0.75rem; border: 1px solid #ddd; border-radius: 0.5rem;" placeholder="Enter your full name">
          </div>
          <div style="margin-bottom: 1rem;">
            <label style="display: block; margin-bottom: 0.5rem; color: #333;">Email *</label>
            <input type="email" required style="width: 100%; padding: 0.75rem; border: 1px solid #ddd; border-radius: 0.5rem;" placeholder="Enter your email">
          </div>
          <div style="margin-bottom: 1rem;">
            <label style="display: block; margin-bottom: 0.5rem; color: #333;">Phone Number</label>
            <input type="tel" style="width: 100%; padding: 0.75rem; border: 1px solid #ddd; border-radius: 0.5rem;" placeholder="Enter your phone number">
          </div>
          <div style="margin-bottom: 1.5rem;">
            <label style="display: block; margin-bottom: 0.5rem; color: #333;">Select Activities *</label>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem;">
              <label style="display: flex; align-items: center; margin-bottom: 0.5rem;">
                <input type="checkbox" value="plantation" style="margin-right: 0.5rem;"> Plantation Drive
              </label>
              <label style="display: flex; align-items: center; margin-bottom: 0.5rem;">
                <input type="checkbox" value="bullet-riding" style="margin-right: 0.5rem;"> Women's Bullet Riding Camp
              </label>
              <label style="display: flex; align-items: center; margin-bottom: 0.5rem;">
                <input type="checkbox" value="macrame" style="margin-right: 0.5rem;"> Macramé Workshop
              </label>
              <label style="display: flex; align-items: center; margin-bottom: 0.5rem;">
                <input type="checkbox" value="pottery" style="margin-right: 0.5rem;"> Pottery Workshop
              </label>
              <label style="display: flex; align-items: center; margin-bottom: 0.5rem;">
                <input type="checkbox" value="cycling" style="margin-right: 0.5rem;"> Women's Cycling Activity
              </label>
              <label style="display: flex; align-items: center; margin-bottom: 0.5rem;">
                <input type="checkbox" value="cpr" style="margin-right: 0.5rem;"> CPR Workshop
              </label>
            </div>
          </div>
          <div style="display: flex; gap: 1rem;">
            <button type="submit" style="flex: 1; padding: 0.75rem; background: #dc2626; color: white; border: none; border-radius: 0.5rem; cursor: pointer;">Register</button>
            <button type="button" onclick="this.closest('[style*=position]').remove();" style="padding: 0.75rem; background: #6b7280; color: white; border: none; border-radius: 0.5rem; cursor: pointer;">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
};

export const handleViewCalendar = () => {
  // Open calendar modal
  const modal = document.createElement('div');
  modal.innerHTML = `
    <div style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); z-index: 9999; display: flex; align-items: center; justify-content: center;">
      <div style="background: white; padding: 2rem; border-radius: 1rem; max-width: 800px; width: 90%; max-height: 80vh; overflow-y: auto;">
        <h2 style="margin-bottom: 1rem; color: #333;">Activity Calendar</h2>
        <p style="margin-bottom: 1.5rem; color: #666;">Upcoming Events and Activities</p>
        <div style="background: #f9fafb; padding: 1rem; border-radius: 0.5rem; margin-bottom: 1rem;">
          <h3 style="color: #dc2626; margin-bottom: 0.5rem;">January 2026</h3>
          <div style="display: grid; grid-template-columns: repeat(7, 1fr); gap: 0.25rem; text-align: center;">
            <div style="font-weight: bold; padding: 0.5rem; background: #e5e7eb;">Sun</div>
            <div style="font-weight: bold; padding: 0.5rem; background: #e5e7eb;">Mon</div>
            <div style="font-weight: bold; padding: 0.5rem; background: #e5e7eb;">Tue</div>
            <div style="font-weight: bold; padding: 0.5rem; background: #e5e7eb;">Wed</div>
            <div style="font-weight: bold; padding: 0.5rem; background: #e5e7eb;">Thu</div>
            <div style="font-weight: bold; padding: 0.5rem; background: #e5e7eb;">Fri</div>
            <div style="font-weight: bold; padding: 0.5rem; background: #e5e7eb;">Sat</div>
            <!-- Calendar days -->
            ${Array.from({length: 31}, (_, i) => i + 1).map(day => {
              const hasEvent = [5, 12, 19, 26].includes(day);
              return `<div style="padding: 0.5rem; ${hasEvent ? 'background: #dc2626; color: white; font-weight: bold;' : 'background: white;'} cursor: pointer; border-radius: 0.25rem;">${day}</div>`;
            }).join('')}
          </div>
        </div>
        <div style="margin-bottom: 1rem;">
          <h4 style="color: #dc2626; margin-bottom: 0.5rem;">Upcoming Activities:</h4>
          <ul style="list-style: none; padding: 0;">
            <li style="padding: 0.5rem; margin-bottom: 0.5rem; background: #fef3c7; border-left: 4px solid #dc2626; border-radius: 0.25rem;">
              <strong>Jan 5:</strong> Plantation Drive - 9:00 AM
            </li>
            <li style="padding: 0.5rem; margin-bottom: 0.5rem; background: #fef3c7; border-left: 4px solid #dc2626; border-radius: 0.25rem;">
              <strong>Jan 12:</strong> Women's Bullet Riding Camp - 7:00 AM
            </li>
            <li style="padding: 0.5rem; margin-bottom: 0.5rem; background: #fef3c7; border-left: 4px solid #dc2626; border-radius: 0.25rem;">
              <strong>Jan 19:</strong> Macramé Workshop - 2:00 PM
            </li>
            <li style="padding: 0.5rem; margin-bottom: 0.5rem; background: #fef3c7; border-left: 4px solid #dc2626; border-radius: 0.25rem;">
              <strong>Jan 26:</strong> CPR Workshop - 10:00 AM
            </li>
          </ul>
        </div>
        <button onclick="this.closest('[style*=position]').remove();" style="padding: 0.75rem 1.5rem; background: #dc2626; color: white; border: none; border-radius: 0.5rem; cursor: pointer;">Close</button>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
};

export const handleBankTransfer = () => {
  // Copy bank details to clipboard
  const bankDetails = `Account Name: HUM MAKERZ FOUNDATION\nBank Name: State Bank of India\nAccount Number: 1234567890123456\nIFSC Code: SBIN0001234\nBranch: Bangalore Main Branch`;
  
  navigator.clipboard.writeText(bankDetails).then(() => {
    alert('Bank details copied to clipboard!\n\nYou can now use these details to make a transfer through your banking app.\n\nThank you for your donation! 🙏');
  }).catch(() => {
    alert('Bank Details:\n\n' + bankDetails + '\n\nPlease copy these details for your bank transfer. Thank you for your donation! 🙏');
  });
};

export const handleAmountSelection = (amount: string) => {
  if (amount === 'Custom') {
    // Open custom amount modal
    const modal = document.createElement('div');
    modal.innerHTML = `
      <div style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); z-index: 9999; display: flex; align-items: center; justify-content: center;">
        <div style="background: white; padding: 2rem; border-radius: 1rem; max-width: 400px; width: 90%;">
          <h2 style="margin-bottom: 1rem; color: #333;">Enter Custom Amount</h2>
          <form onsubmit="event.preventDefault(); const amount = this.querySelector('input[type=number]').value; if(amount && amount > 0) { alert('Thank you for your generous donation of ₹' + amount + '! Proceed to payment to complete.'); this.closest('[style*=position]').remove(); } else { alert('Please enter a valid amount.'); }">
            <div style="margin-bottom: 1rem;">
              <label style="display: block; margin-bottom: 0.5rem; color: #333;">Amount (₹) *</label>
              <input type="number" min="1" required style="width: 100%; padding: 0.75rem; border: 1px solid #ddd; border-radius: 0.5rem;" placeholder="Enter amount">
            </div>
            <div style="display: flex; gap: 1rem;">
              <button type="submit" style="flex: 1; padding: 0.75rem; background: #dc2626; color: white; border: none; border-radius: 0.5rem; cursor: pointer;">Donate ₹{document.querySelector('input[type=number]')?.value || '0'}</button>
              <button type="button" onclick="this.closest('[style*=position]').remove();" style="padding: 0.75rem; background: #6b7280; color: white; border: none; border-radius: 0.5rem; cursor: pointer;">Cancel</button>
            </div>
          </form>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
  } else {
    // Handle predefined amount selection
    alert(`Thank you for selecting ${amount} donation!\n\nProceed with payment to complete your generous contribution. 🙏\n\nEvery contribution helps us build stronger communities!`);
  }
};

export const handleWhatsApp = () => {
  // Open WhatsApp with pre-filled message
  const message = encodeURIComponent("Hi! I'm interested in learning more about Hum Makerz Foundation and would like to get involved in your community initiatives.");
  const phoneNumber = "919876543210"; // Update with actual number
  window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
};

export const handleContactPartnership = () => {
  // Open email client for partnership inquiry
  const subject = encodeURIComponent("Partnership Inquiry - Hum Makerz Foundation");
  const body = encodeURIComponent("Hi Team,\n\nI'm interested in exploring partnership opportunities with Hum Makerz Foundation. Please provide more information about collaboration possibilities.\n\nThank you!");
  window.location.href = `mailto:info@hummakerz.org?subject=${subject}&body=${body}`;
};
