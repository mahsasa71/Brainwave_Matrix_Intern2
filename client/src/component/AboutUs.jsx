const AboutUs = ({ backgroundColor, textColor }) => {
  return (
    <section className={`py-10 ${backgroundColor}`}>
      <div className="container mx-auto px-6">
        <nav className="mb-10">
          <ul className="flex justify-center space-x-4">
            <li>
              <a
                href="#section1"
                className={`text-blue-500 hover:underline ${textColor}`}
              >
                Exporting
              </a>
            </li>
            <li>
              <a
                href="#section2"
                className={`text-blue-500 hover:underline ${textColor}`}
              >
                Abroad
              </a>
            </li>
            <li>
              <a
                href="#section3"
                className={`text-blue-500 hover:underline ${textColor}`}
              >
                Discount
              </a>
            </li>
          </ul>
        </nav>

        <div id="section1" className="mb-10">
          <div className="flex flex-col items-center">
            <h2 className={`text-3xl font-bold mb-4 ${textColor}`}>
              Exporting Persian Carpets to International Markets
            </h2>
            <img
              src="../../public/images/export.webp"
              alt="Section 1"
              className="rounded-lg shadow-lg mb-4"
            />
            <p className={`text-gray-700 text-center ${textColor}`}>
              The export of Persian carpets to foreign countries is a
              well-organized process that involves careful handling, packaging,
              and logistics. Since Persian carpets are valuable and delicate,
              they require special attention during shipment. The first step is
              quality inspection, where experts ensure that the carpets meet
              international standards. Once approved, the carpets are carefully
              cleaned, rolled, and wrapped in protective layers to prevent
              damage. Some high-end silk carpets may even be packed in
              custom-made boxes to maintain their pristine condition. After
              packaging, the carpets are shipped through different
              transportation methods, depending on the destination. Air freight
              is the fastest and safest option, often used for luxury carpets
              being sent to exclusive buyers or exhibitions. However, for bulk
              shipments, sea freight is a more economical choice, allowing large
              quantities of rugs to be transported worldwide. International
              shipping companies ensure that the carpets are handled with care,
              providing climate-controlled storage and protection against
              moisture or excessive pressure. To successfully export Persian
              carpets, customs regulations and certifications must be met. Each
              country has specific import requirements, including duties, taxes,
              and restrictions on natural materials. Iranian exporters obtain
              the necessary documents, such as certificates of authenticity,
              origin, and compliance with international trade laws. Many carpets
              are shipped to major markets like the United States, Europe,
              China, and the Middle East, where they are highly valued for their
              artistic and historical significance. The export of Persian
              carpets not only contributes to Iran’s economy but also helps
              preserve the country’s rich cultural heritage on a global scale.
              You said:
            </p>
          </div>
        </div>

        <div id="section2" className="mb-10">
          <div className="flex flex-col items-center">
            <h2 className={`text-3xl font-bold mb-4 ${textColor}`}>
              Opening a Persian Carpet Store Abroad
            </h2>
            <img
              src="../../public/images/Abroad.webp"
              alt="Section 2"
              className="rounded-lg shadow-lg mb-4"
            />
            <p className={`text-gray-700 text-center ${textColor}`}>
              Expanding a Persian carpet business to international markets by
              opening a branch abroad is a strategic move that requires careful
              planning and execution. The first step is choosing the right
              location, ideally in cities with a high demand for luxury handmade
              goods, such as Dubai, London, New York, or Paris. The target
              market should include collectors, interior designers, and art
              enthusiasts who appreciate the craftsmanship and cultural value of
              Persian rugs. A well-designed store in a prime location can
              attract customers who seek authentic, high-quality carpets. Once
              the location is secured, the next step is establishing a reliable
              supply chain to ensure a steady flow of Persian carpets from Iran.
              This involves working with skilled artisans, carpet dealers, and
              export companies to transport rugs safely and efficiently. Proper
              documentation, including import permits, certificates of
              authenticity, and compliance with local regulations, is essential
              for smooth operations. Additionally, maintaining quality control
              is crucial to preserve the reputation of Persian carpets as
              premium, handcrafted artworks. Marketing and branding play a key
              role in the success of an international Persian carpet store.
              Engaging with the local community through exhibitions,
              collaborations with designers, and participation in cultural
              events can help build a strong customer base. An online presence
              with e-commerce options allows global customers to explore and
              purchase carpets easily. Providing personalized services, such as
              interior consultation and custom rug orders, enhances customer
              experience and loyalty. A well-established branch not only boosts
              sales but also promotes Persian carpet heritage on an
              international scale.
            </p>
          </div>
        </div>

        <div id="section3">
          <div className="flex flex-col items-center">
            <h2 className={`text-3xl font-bold mb-4 ${textColor}`}>
              Special Referral Discount at Our Persian Carpet Store
            </h2>
            <img
              src="../../public/images/discount.webp"
              alt="Section 3"
              className="rounded-lg shadow-lg mb-4"
            />
            <p className={`text-gray-700 text-center ${textColor}`}>
              We appreciate our customers and believe that sharing the beauty of
              Persian carpets should be rewarded! That’s why we offer a special
              discount when you refer a friend or family member to our store.
              When your referral makes a purchase, both you and your friend will
              receive an exclusive discount on your next purchase. This is our
              way of thanking you for spreading the word about our high-quality,
              handcrafted carpets. Enjoy beautiful Persian rugs while saving
              more—refer, shop, and save together! Visit our store or contact us
              for more details on this exciting offer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
