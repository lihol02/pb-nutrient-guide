import { useState } from 'react'
import './App.css'

const nutrients = [
  {
    id: 'calcium',
    name: 'Calcium',
    description:
      'Calcium is needed for bones and teeth and also supports other functions in the body. Plant-based sources vary in calcium content and how well calcium is absorbed, so check food labels for specific products.',
    sources: [
      'Calcium-set tofu: check the label, because calcium content depends on how the tofu was made.',
      'Fortified plant drinks and plant-based yogurts: check the label for calcium content.',
      'Some vegetables, including kale and bok choy, provide calcium.',
    ],
    mealIdeas: [
      'Porridge made with a calcium-fortified plant drink, topped with fruit.',
      'Stir-fry calcium-set tofu with bok choy and serve with rice.',
      'Use a fortified plant-based yogurt in a fruit-and-oat bowl.',
    ],
    notes:
      'Fortification varies by brand. Check product labels rather than assuming that all plant drinks or tofu contain the same amount.',
  },
  {
    id: 'iron',
    name: 'Iron',
    description:
      'Iron is used to make hemoglobin, which carries oxygen in the blood. Plant foods provide non-heme iron. A person’s iron needs depend on factors such as age and life stage.',
    sources: [
      'Lentils, beans, chickpeas, and peas.',
      'Tofu and other soy foods.',
      'Pumpkin seeds and some other seeds.',
      'Some fortified cereals and grain products; check the label.',
    ],
    mealIdeas: [
      'Lentil and tomato stew served with bell pepper or another vitamin-C-rich food.',
      'A bean-and-tofu bowl with vegetables and citrus dressing.',
      'Fortified cereal with fruit; check the cereal label for iron.',
    ],
    notes:
      'Vitamin C in foods can improve absorption of non-heme iron. Meal ideas are examples, not a guarantee that someone is getting enough iron.',
  },
  {
    id: 'vitamin-d',
    name: 'Vitamin D',
    description:
      'Vitamin D helps the body absorb calcium and supports bone health. Few foods naturally contain much vitamin D. Some plant-based products are fortified, but fortification differs by product.',
    sources: [
      'Plant drinks or plant-based yogurts fortified with vitamin D; check the label.',
      'UV-exposed mushrooms may contain vitamin D; check product information.',
      'Some breakfast cereals or other foods may be fortified; check the label.',
    ],
    mealIdeas: [
      'Porridge made with a vitamin-D-fortified plant drink.',
      'A meal using UV-exposed mushrooms, if the product label confirms this.',
      'Check whether a fortified cereal and plant drink provide vitamin D.',
    ],
    notes:
      'Sun exposure, individual circumstances, and local public-health guidance affect vitamin D advice. This guide does not recommend a personal dose or supplement.',
  },
  {
    id: 'omega-3',
    name: 'Omega-3',
    description:
      'Omega-3 refers to several fatty acids. Flaxseed, chia seeds, and walnuts provide ALA, a plant omega-3 fatty acid. ALA is not the same as EPA or DHA; the body converts only some ALA into these long-chain omega-3s.',
    sources: [
      'Ground flaxseed (linseed).',
      'Chia seeds.',
      'Walnuts.',
      'Some oils, such as flaxseed oil, provide ALA; check product information and storage guidance.',
    ],
    mealIdeas: [
      'Add ground flaxseed to porridge or a smoothie.',
      'Make chia pudding with a plant drink and fruit.',
      'Add walnuts to a salad or breakfast bowl.',
    ],
    notes:
      'These examples provide ALA; they should not be described as direct equivalents to EPA or DHA. This guide does not give personalized intake or supplement advice.',
  },
  {
    id: 'iodine',
    name: 'Iodine',
    description:
      'Iodine is needed to make thyroid hormones. The iodine content of plant foods can vary with soil and growing conditions, so a food name alone may not indicate how much iodine it provides.',
    sources: [
      'Iodized salt can provide iodine; check the package to confirm it is iodized.',
      'Some foods are fortified with iodine; check product labels.',
      'Seaweed iodine content varies widely and can be very high, so it is not a predictable source.',
    ],
    mealIdeas: [
      'If using salt, choose iodized salt where available and follow local guidance on limiting salt.',
      'Check labels for foods fortified with iodine.',
      'Do not assume seaweed provides a consistent or appropriate amount of iodine.',
    ],
    notes:
      'More iodine is not always better, and high intakes can be harmful. This guide does not recommend increasing salt or using iodine supplements.',
  },
  {
    id: 'vitamin-b12',
    name: 'Vitamin B12',
    description:
      'Vitamin B12 supports normal blood-cell formation and nervous-system function. People eating a fully plant-based diet need a reliable B12 source, such as appropriately fortified foods and/or a suitable supplement, following qualified health guidance.',
    sources: [
      'Plant drinks or plant-based yogurts fortified with vitamin B12; check the label.',
      'Breakfast cereals fortified with vitamin B12; check the label.',
      'Nutritional yeast only when the product is specifically fortified with B12.',
    ],
    mealIdeas: [
      'Use a plant drink labelled as B12-fortified in porridge.',
      'Add B12-fortified nutritional yeast to a tofu scramble.',
      'Check that a cereal is specifically fortified with B12 before relying on it as a source.',
    ],
    notes:
      'Unfortified plant foods should not be assumed to provide a reliable source of B12. This app does not recommend a personal supplement or dose.',
  },
]

function App() {
  const [selectedNutrient, setSelectedNutrient] = useState(nutrients[0])
  const [page, setPage] = useState('guide')

  return (
    <main className="app">
      {page === 'about' ? (
        <section className="about-page">
          <button className="back-button" onClick={() => setPage('guide')}>
            ← Back to nutrient guide
          </button>

          <h1>About this website</h1>

          <p>
            The Plant-Based Nutrient Guide is a student prototype designed to
            help people explore plant-based food sources and practical meal
            ideas for selected nutrients.
          </p>

          <p>
            The guide covers calcium, iron, vitamin D, omega-3, iodine, and
            vitamin B12. Its purpose is to support exploration of nutrition
            information—not to promote one-size-fits-all dietary advice.
          </p>

          <h2>About the information</h2>

          <p>
            Nutrition information can vary by food, product, and individual
            needs. Check product labels and consult reliable sources when
            evaluating nutrition claims.
          </p>

          <p>
            Community submissions are user-contributed and have not been
            verified. This website is for general education only and does not
            provide personalized nutrition or medical advice.
          </p>
        </section>
      ) : page === 'privacy' ? (
        <section className="about-page">
          <button className="back-button" onClick={() => setPage('guide')}>
            ← Back to nutrient guide
          </button>

          <h1>Privacy policy</h1>

          <p>
            This student prototype does not ask users to create accounts or
            provide their names, email addresses, or other identifying
            information.
          </p>

          <h2>Community submissions</h2>

          <p>
            Sources and meal ideas submitted through the app are stored in its
            SQLite database and shown to other users. Please do not include
            personal, confidential, or sensitive information in a submission.
          </p>

          <h2>Data storage</h2>

          <p>
            In the current prototype, the database is stored by the app’s
            backend. Who can access stored submissions depends on where the app
            is hosted and how its database is managed.
          </p>

          <h2>Questions</h2>

          <p>
            This is a school project rather than a commercial service. Contact
            the student project owner with questions about the prototype’s data
            handling.
          </p>
        </section>
      ) : (
        <>
          <h1>Plant-Based Nutrient Guide</h1>
          <p>Select a nutrient to explore plant-based sources.</p>

          <div className="nutrient-buttons">
            {nutrients.map((nutrient) => (
              <button
                key={nutrient.id}
                onClick={() => setSelectedNutrient(nutrient)}
                aria-pressed={selectedNutrient.id === nutrient.id}
              >
                {nutrient.name}
              </button>
            ))}
          </div>

          <section className="nutrient-details">
            <h2>{selectedNutrient.name}</h2>

            <p>{selectedNutrient.description}</p>

            <h3>Plant-based sources</h3>
            <ul>
              {selectedNutrient.sources.map((source) => (
                <li key={source}>{source}</li>
              ))}
            </ul>

            <h3>Meal ideas</h3>
            <ul>
              {selectedNutrient.mealIdeas.map((idea) => (
                <li key={idea}>{idea}</li>
              ))}
            </ul>
          </section>
        </>
      )}

      <footer className="site-footer">
        <button className="footer-link" onClick={() => setPage('about')}>
          About this website
        </button>
        <span aria-hidden="true"> · </span>
        <button className="footer-link" onClick={() => setPage('privacy')}>
          Privacy policy
        </button>
      </footer>
    </main>
  )
}

export default App