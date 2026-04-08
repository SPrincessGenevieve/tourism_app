import React from "react"

export default function PrivacyContent() {
  return (
    <div className="flex flex-col gap-4">
      <p>
        <strong>Last Updated:</strong> April 1, 2026
      </p>
      <p>
        We value your privacy. This explains how we collect, use, and protect
        your data.
      </p>

      <h3 className="font-semibold">1. Information We Collect</h3>
      <ul className="ml-5 list-disc">
        <li>Personal info: name, email, phone</li>
        <li>Booking details: travel preferences, destinations</li>
        <li>Payment info: via secure third-party processors</li>
        <li>Device/usage data: IP, browser type</li>
      </ul>

      <h3 className="font-semibold">2. How We Use Your Information</h3>
      <ul className="ml-5 list-disc">
        <li>Process bookings and payments</li>
        <li>Communicate about reservations</li>
        <li>Improve services and website experience</li>
        <li>Send updates/promotions if opted-in</li>
      </ul>

      <h3 className="font-semibold">3. Sharing of Information</h3>
      <p>
        We do not sell your data. May share with travel partners, payment
        processors, or as required by law.
      </p>

      <h3 className="font-semibold">4. Data Security</h3>
      <p>
        We take reasonable steps to protect data but no system is fully secure.
      </p>

      <h3 className="font-semibold">5. Cookies</h3>
      <p>We use cookies for browsing experience and analytics.</p>

      <h3 className="font-semibold">6. Your Rights</h3>
      <p>
        You may access, correct, delete your personal info, or opt-out of
        marketing.
      </p>

      <h3 className="font-semibold">7. Third-Party Links</h3>
      <p>We are not responsible for linked third-party privacy policies.</p>

      <h3 className="font-semibold">8. Changes to Policy</h3>
      <p>Policy updates may occur. Continued use = acceptance.</p>

      <h3 className="font-semibold">9. Contact Us</h3>
      <p>Email: example@gmail.com</p>
    </div>
  )
}
