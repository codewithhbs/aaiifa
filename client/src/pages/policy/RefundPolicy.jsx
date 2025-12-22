import React from "react";
import "./policy.css";
const RefundPolicy = () => {
  return (
    <div className="policy-container">
      <h1 className="policy-title">Refund and Cancellation Policy</h1>

      <p className="policy-intro">
        This Refund and Cancellation Policy outlines how you can cancel or seek
        a refund for a product or service that you have purchased through our
        Platform.
      </p>

      <div className="policy-section">
        <h2>1. Cancellations</h2>
        <p>
          Cancellations will only be considered if the request is made within{" "}
          <strong>1 day</strong> of placing the order. However, cancellation
          requests may not be entertained if the orders have been communicated
          to such sellers or merchant(s) listed on the Platform and they have
          initiated the process of shipping them, or the product is out for
          delivery. In such an event, you may choose to reject the product at
          the doorstep.
        </p>
      </div>

      <div className="policy-section">
        <h2>2. Perishable Items</h2>
        <p>
          aaiifa does not accept cancellation requests for perishable items like
          flowers, eatables, etc. However, refund or replacement can be made if
          the user establishes that the quality of the product delivered is not
          good.
        </p>
      </div>

      <div className="policy-section">
        <h2>3. Damaged or Defective Items</h2>
        <p>
          In case of receipt of damaged or defective items, please report to our
          customer service team. The request will be entertained once the
          seller or merchant listed on the Platform has checked and determined
          the same at its own end. This should be reported within{" "}
          <strong>1 day</strong> of receipt of products.
        </p>
      </div>

      <div className="policy-section">
        <h2>4. Product Not as Expected</h2>
        <p>
          If you feel that the product received is not as shown on the site or
          as per your expectations, you must bring it to the notice of our
          customer service within <strong>1 day</strong> of receiving the
          product. The customer service team, after reviewing your complaint,
          will take an appropriate decision.
        </p>
      </div>

      <div className="policy-section">
        <h2>5. Warranty Issues</h2>
        <p>
          For complaints regarding products that come with a manufacturer
          warranty, please refer the issue directly to the manufacturer.
        </p>
      </div>

      <div className="policy-section">
        <h2>6. Refund Process</h2>
        <p>
          In case of any refunds approved by aaiifa, it will take{" "}
          <strong>1 day</strong> for the refund to be processed to you.
        </p>
      </div>

      <div className="policy-footer">
        <p>
          For any queries related to this policy, please contact our customer
          support team.
        </p>
      </div>
    </div>
  );
};

export default RefundPolicy;
