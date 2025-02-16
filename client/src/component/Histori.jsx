import React from "react";

const Histori = ({ backgroundColor, textColor }) => {
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
                History
              </a>
            </li>
            <li>
              <a
                href="#section2"
                className={`text-blue-500 hover:underline ${textColor}`}
              >
                types
              </a>
            </li>
            <li>
              <a
                href="#section3"
                className={`text-blue-500 hover:underline ${textColor}`}
              >
                Museums
              </a>
            </li>
          </ul>
        </nav>

        <div id="section1" className="mb-10">
          <div className="flex flex-col items-center">
            <h2 className={`text-3xl font-bold mb-4 ${textColor}`}>
              The History and Regions of Persian Carpet Weaving
            </h2>
            <img
              src="../../public/images/grandma.webp"
              alt="Section 1"
              className="rounded-lg shadow-lg mb-4"
            />
            <p className={`text-gray-700 text-center ${textColor}`}>
              Carpet weaving in Iran has a history of over 2,500 years, making
              it one of the most significant aspects of Persian art and culture.
              Ancient Persian carpets were highly valued for their intricate
              designs, fine craftsmanship, and use of natural dyes. The oldest
              known Persian carpet, the Pazyryk Carpet, dating back to the 5th
              century BCE, showcases the long-standing tradition of this art
              form. Over centuries, Persian carpets evolved, reflecting the
              artistic, cultural, and historical influences of different
              dynasties, especially during the Safavid era (16th–18th
              centuries), when carpet weaving flourished and reached new levels
              of excellence. Persian carpets are renowned for their elaborate
              floral, geometric, and pictorial patterns, each carrying deep
              symbolic meanings. These carpets are meticulously hand-knotted
              using high-quality wool and silk, ensuring their durability and
              unique beauty. Traditional carpet designs often represent Persian
              poetry, gardens, and historical narratives, making them more than
              just floor coverings—they are works of art. The combination of
              craftsmanship, creativity, and centuries-old techniques has
              established Persian carpets as some of the most sought-after and
              valuable textiles in the world. Several provinces in Iran are
              famous for their carpet production, each with its own distinctive
              weaving style. Tabriz, Isfahan, Kashan, and Qom are known for
              their fine silk and wool carpets with delicate, intricate
              patterns. Kerman and Yazd produce vibrant carpets with floral
              motifs, while Mashhad is recognized for its rich red and blue
              color schemes. Hamadan, Bijar, and Arak create durable, thick
              carpets with bold designs, reflecting their regional heritage.
              Each area’s unique techniques contribute to the diversity and
              global recognition of Persian carpets. Today, Persian carpets
              remain a symbol of luxury, tradition, and artistic mastery.
              Despite modern production methods, handwoven Persian carpets
              continue to be highly valued worldwide. Collectors and enthusiasts
              seek these carpets not only for their aesthetic appeal but also
              for their historical and cultural significance. The legacy of
              Persian carpet weaving lives on, preserving Iran’s rich heritage
              and craftsmanship for future generations.
            </p>
          </div>
        </div>

        <div id="section2" className="mb-10">
          <div className="flex flex-col items-center">
            <h2 className={`text-3xl font-bold mb-4 ${textColor}`}>
              Types of Persian Carpet Styles
            </h2>
            <img
              src="../../public/images/type.webp"
              alt="Section 2"
              className="rounded-lg shadow-lg mb-4"
            />
            <p className={`text-gray-700 text-center ${textColor}`}>
              Persian carpets are known for their rich diversity in styles,
              patterns, and weaving techniques, each reflecting the cultural
              heritage of different regions in Iran. The main styles of Persian
              carpets can be categorized into city (workshop) carpets, tribal
              (nomadic) carpets, village carpets, and prayer rugs, each with
              distinct characteristics. These styles vary in knotting
              techniques, color palettes, motifs, and materials used, making
              Persian carpets unique masterpieces of craftsmanship. City Carpets
              (Workshop Carpets) are some of the finest Persian rugs, produced
              in established weaving centers like Tabriz, Isfahan, Kashan, and
              Qom. These carpets are made in organized workshops by highly
              skilled artisans who follow detailed designs drawn by master
              designers. City carpets often feature intricate floral and
              arabesque patterns, fine silk or wool materials, and precise
              knotting, making them luxurious and elegant. Their designs are
              symmetrical and detailed, demonstrating the highest level of
              craftsmanship. Tribal (Nomadic) Carpets, woven by nomadic groups
              such as the Qashqai, Bakhtiari, Baluchi, and Turkmen, are distinct
              in their bold geometric patterns and vibrant colors. Unlike city
              carpets, which follow pre-drawn patterns, tribal carpets are woven
              from memory, reflecting the weaver’s creativity and personal
              experiences. These carpets often feature symbols representing
              nature, animals, and tribal life, making each piece a unique and
              meaningful artwork. They are usually made with hand-spun wool and
              natural dyes, giving them a warm and authentic look. Village
              Carpets, crafted in rural areas, blend characteristics of both
              city and tribal carpets. Regions such as Hamadan, Bijar, and Arak
              are known for producing durable and practical village carpets with
              strong knotting techniques and bold designs. Unlike city carpets,
              village rugs are not as finely detailed but are admired for their
              rustic charm and artistic spontaneity. They often include floral,
              medallion, or geometric patterns with vibrant colors, reflecting
              the local culture and weaving traditions. Prayer Rugs are another
              important style of Persian carpets, often used for religious
              purposes. These rugs are designed with mihrab (arch-shaped)
              patterns that indicate the direction of prayer. They are usually
              smaller in size, highly detailed, and woven with high-quality silk
              or wool. Many prayer rugs feature elegant motifs inspired by
              Persian architecture and calligraphy. These carpets hold both
              spiritual and artistic significance, making them cherished pieces
              in Persian carpet weaving. Persian carpets, with their variety of
              styles, represent centuries of tradition, skill, and cultural
              identity. Whether created in a royal workshop, a rural village, or
              by a nomadic tribe, each carpet tells a unique story and carries
              the artistic heritage of Iran.
            </p>
          </div>
        </div>

        <div id="section3">
          <div className="flex flex-col items-center">
            <h2 className={`text-3xl font-bold mb-4 ${textColor}`}>
              Persian Carpet Museums in Iran
            </h2>
            <img
              src="../../public/images/hall.webp"
              alt="Section 3"
              className="rounded-lg shadow-lg mb-4"
            />
            <p className={`text-gray-700 text-center ${textColor}`}>
              Iran, as the birthplace of some of the world’s most exquisite
              carpets, is home to several museums dedicated to preserving and
              showcasing the rich history of Persian carpet weaving. These
              museums house rare and historically significant carpets that
              highlight the evolution of weaving techniques, artistic styles,
              and cultural influences over centuries. Visitors can admire
              masterpieces woven by skilled artisans from different periods and
              regions, each with its own story and intricate design. One of the
              most famous museums is the Carpet Museum of Iran, located in
              Tehran. This museum, founded in 1976, displays an extensive
              collection of Persian carpets from the Safavid, Qajar, and Pahlavi
              periods. It holds over 150 unique carpets, including rare silk and
              wool pieces woven in major carpet-producing cities like Tabriz,
              Isfahan, Kashan, and Kerman. The museum’s architecture, designed
              to resemble a carpet loom, adds to the experience of exploring
              Iran’s carpet heritage. Another important collection is found in
              the Tabriz Carpet Museum, which specializes in Azerbaijani-style
              carpets. Tabriz, known for its high-quality carpet weaving, has
              produced some of the finest Persian rugs, and the museum features
              remarkable pieces dating back centuries. Many of the carpets
              displayed in this museum are characterized by detailed floral
              motifs, hunting scenes, and intricate medallion patterns that
              reflect the artistic mastery of Tabriz weavers. The Isfahan Carpet
              Museum, located in the historic city of Isfahan, showcases carpets
              from the Safavid period, a golden age of Persian carpet-making.
              Many of the carpets in this museum feature elaborate central
              medallion designs, symmetrical floral patterns, and a rich color
              palette of blues, reds, and golds. Some of these carpets were once
              part of royal collections and are considered priceless examples of
              Persian art. Other notable museums preserving Persian carpets
              include the Kashan Carpet Museum, known for its finely knotted
              silk carpets, and the Kerman Carpet Exhibition, where visitors can
              see vibrant and finely detailed carpets famous for their unique
              designs. These museums not only serve as cultural centers but also
              as places where historians, researchers, and carpet enthusiasts
              can study the legacy of Persian carpet weaving. The carpets in
              these museums represent centuries of craftsmanship and remain a
              testament to Iran’s artistic heritage.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Histori;
