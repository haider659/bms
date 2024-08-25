import React from 'react';

const Agreement = () => (
  <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
    <h1>LEASE AGREEMENT</h1>

    <h2>I. THE PARTIES.</h2>
    <div>
      <label htmlFor="landlordName">Landlord:</label>
      <input type="text" id="landlordName" placeholder="Landlord's Name" />
    </div>
    <div>
      <label htmlFor="landlordAddress">Mailing Address:</label>
      <input type="text" id="landlordAddress" placeholder="Landlord's Address" />
    </div>
    <div>
      <label htmlFor="tenantName">Tenant(s):</label>
      <input type="text" id="tenantName" placeholder="Tenant's Name" />
    </div>
    <div>
      <label htmlFor="tenantAddress">Mailing Address:</label>
      <input type="text" id="tenantAddress" placeholder="Tenant's Address" />
    </div>

    <h2>II. PREMISES.</h2>
    <div>
      <label htmlFor="propertyAddress">Property Address:</label>
      <input type="text" id="propertyAddress" placeholder="Property Address" />
    </div>
    <div>
      <label>Residence Type:</label>
      <div>
        <input type="radio" id="apartment" name="residenceType" value="Apartment" />
        <label htmlFor="apartment">Apartment</label>
        <input type="radio" id="house" name="residenceType" value="House" />
        <label htmlFor="house">House</label>
        <input type="radio" id="condo" name="residenceType" value="Condo" />
        <label htmlFor="condo">Condo</label>
        <input type="radio" id="other" name="residenceType" value="Other" />
        <label htmlFor="other">Other</label>
      </div>
    </div>
    <div>
      <label htmlFor="bedrooms">Bedroom(s):</label>
      <input type="text" id="bedrooms" placeholder="Number of Bedrooms" />
    </div>
    <div>
      <label htmlFor="bathrooms">Bathroom(s):</label>
      <input type="text" id="bathrooms" placeholder="Number of Bathrooms" />
    </div>

    <h2>III. LEASE TYPE.</h2>
    <div>
      <label>Lease Type:</label>
      <div>
        <input type="radio" id="fixedLease" name="leaseType" value="Fixed Lease" />
        <label htmlFor="fixedLease">Fixed Lease</label>
        <input type="radio" id="monthToMonth" name="leaseType" value="Month-to-Month Lease" />
        <label htmlFor="monthToMonth">Month-to-Month Lease</label>
      </div>
    </div>
    <div>
      <label htmlFor="leaseStartDate">Start Date:</label>
      <input type="date" id="leaseStartDate" />
    </div>
    <div>
      <label htmlFor="leaseEndDate">End Date:</label>
      <input type="date" id="leaseEndDate" />
    </div>

    <h2>IV. PAYMENT TERMS.</h2>
    <div>
      <input type="checkbox" id="monthlyRent" />
      <label htmlFor="monthlyRent">Monthly Rent</label>
      <input type="text" id="monthlyRentAmount" placeholder="Amount" />
    </div>
    <div>
      <input type="checkbox" id="securityDeposit" />
      <label htmlFor="securityDeposit">Security Deposit</label>
      <input type="text" id="securityDepositAmount" placeholder="Amount" />
    </div>
    <div>
      <input type="checkbox" id="lastMonthsRent" />
      <label htmlFor="lastMonthsRent">Last Month's Rent</label>
      <input type="text" id="lastMonthsRentAmount" placeholder="Amount" />
    </div>
    <div>
      <input type="checkbox" id="otherPaymentTerms" />
      <label htmlFor="otherPaymentTerms">Other</label>
      <input type="text" id="otherPaymentTermsDetails" placeholder="Details" />
    </div>

    <h2>V. UTILITIES.</h2>
    <div>
      <label htmlFor="utilities">Utilities:</label>
      <textarea id="utilities" placeholder="Details about utilities" />
    </div>

    <h2>VI. ADDITIONAL TERMS.</h2>
    <div>
      <label htmlFor="additionalTerms">Additional Terms:</label>
      <textarea id="additionalTerms" placeholder="Additional terms and conditions" />
    </div>

    <h2>Signatures</h2>
    <div>
      <label htmlFor="landlordSignature">Landlord's Signature:</label>
      <input type="text" id="landlordSignature" placeholder="Landlord's Signature" />
    </div>
    <div>
      <label htmlFor="landlordPrintName">Print Name:</label>
      <input type="text" id="landlordPrintName" placeholder="Landlord's Print Name" />
    </div>
    <div>
      <label htmlFor="tenantSignature">Tenant's Signature:</label>
      <input type="text" id="tenantSignature" placeholder="Tenant's Signature" />
    </div>
    <div>
      <label htmlFor="tenantPrintName">Print Name:</label>
      <input type="text" id="tenantPrintName" placeholder="Tenant's Print Name" />
    </div>

    <button type="submit">Submit</button>
  </div>
);

export default Agreement;
