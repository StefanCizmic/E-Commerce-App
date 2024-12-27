import React from "react";
import "./ShippingPolicy.css";

export const ShippingPolicy = () => {
  return (
    <div className="shipping-policy">
      <h1>Shipping Policy</h1>
      <div className="order-processing">
        <h3>Order Processing</h3>
        <p>
          All orders are processed and shipped from our warehouse in the United
          States.
        </p>
        <p>
          Typically, orders with items in stock are processed within 1-2
          business days, though this timeframe is not guaranteed. If your order
          includes pre-order items, we will ship everything together once all
          items are available. Additional details about pre-orders can be found
          below.
        </p>
        <p>
          Please note that exclusive merchandise may ship separately, usually
          taking about 3-4 business days for processing, but this is also not
          guaranteed.
        </p>
        <p>
          Estimated shipping times shown at checkout begin once the order has
          been dispatched. You will receive tracking information via email once
          your order is on its way.
        </p>
      </div>
      <div className="shipping-methods">
        <h3>Shipping Methods</h3>
        <p>
          We offer a range of shipping options based on your location, with
          costs calculated at checkout.
        </p>
        <p>
          As mentioned, estimated shipping times start from the point of
          dispatch, not from when the order is placed. While we strive to meet
          these timelines, occasional delays may occur due to factors beyond our
          control.
        </p>
        <p>
          Please be aware that delivery to a PO Box is only available via USPS;
          UPS and DHL cannot deliver to PO Boxes. If you enter a PO Box for a
          UPS or DHL order, we will hold your shipment until a residential
          address is confirmed, which may delay processing.
        </p>
      </div>
      <div className="pre-order">
        <h3>Pre-order</h3>
        <p>
          Pre-orders will be shipped as soon as we receive our stock, usually on
          the day before the official release date. However, delays can happen.
          If any delays occur, we will notify you within 2 business days
          following the release date. Check the item listing for any updated
          release dates.
        </p>
        <p>
          Orders containing both in-stock and pre-order items will be shipped
          together once all items are ready. Unfortunately, we cannot send
          orders separately.
        </p>
      </div>
      <div className="international-shipping">
        <h3>International Shipping</h3>
        <p>
          All international orders are shipped via DHL Worldwide Express. For
          orders outside the United States (excluding UK orders under £135 GBP),
          we do not collect taxes or duties at checkout. These orders are
          shipped DDU (Delivered Duty Unpaid), meaning that any applicable taxes
          will be collected by the shipping provider during transit. It is the
          customers responsibility to pay any customs fees.
        </p>
        <p>
          For UK orders valued under £135 GBP, we do collect tax at checkout, so
          no additional charges are required upon delivery. For orders over this
          amount, taxes will be collected by the shipping provider during
          shipment.
        </p>
      </div>
      <div className="return-policy">
        <h3>Return Policy</h3>
        <p>
          If a package is returned to us due to an incorrect or insufficient
          address, we can only issue a refund after the package has been
          received back at our warehouse and processed. Refunds cannot be
          initiated before this occurs.
        </p>
      </div>
      <div className="lost-mail">
        <h3>Lost Mail</h3>
        <p>
          If a package has not had any tracking updates for 15 business days, or
          is classified as "Dead Mail," we will consider it lost and can issue a
          replacement or refund. Until then, we recommend monitoring the
          tracking status for updates. Please reach out to us if you have any
          concerns.
        </p>
      </div>
      <div className="not-received">
        <h3>Marked as Delivered but Not Received</h3>
        <p>
          First, please verify that the shipping address you provided is
          correct. We cannot be held responsible for items delivered to an
          incorrect address.
        </p>
        <p>
          If your address is accurate, please check with your local carrier or
          post office for further assistance. Carriers occasionally update
          tracking information prematurely, so it's worth checking with
          neighbors as well.
        </p>
        <p>
          For USPS shipments, a missing mail search must be completed before we
          can take any further action. Your local post office will guide you
          through this process. Refunds or replacements cannot be processed
          until the package is officially declared lost.
        </p>
        <p>
          For issues with any other shipping providers, please contact us at{" "}
          <span
            className="contact-via-mail"
            onClick={() => (window.location = "mailto:harmonyrecords@gmail.co")}
          >
            [harmonyrecords@gmail.com]
          </span>
          .
        </p>
      </div>
    </div>
  );
};
