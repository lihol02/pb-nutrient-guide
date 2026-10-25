import { useEffect, useState } from 'react'
import './App.css'

const nhsVeganReference = {
  author: 'National Health Service',
  date: '2026, June 5',
  title: 'The vegan diet',
  site: 'NHS',
  url: 'https://www.nhs.uk/live-well/eat-well/how-to-eat-a-balanced-diet/the-vegan-diet/',
}

const nutrients = [
  {
    id: 'calcium',
    name: 'Calcium',
    description:
      'Calcium is a mineral needed to build and maintain bones and teeth. It also has roles in muscle contraction, nerve signaling, blood clotting, and other normal body functions. Plant-based diets can provide calcium, but the amount available varies substantially by food and product. Calcium-set tofu and fortified products can be especially useful; some vegetables also provide calcium.',
    sources: [
      'Calcium-fortified plant drinks and plant-based yogurts. Check the nutrition label: fortification and serving sizes vary by brand.',
      'Calcium-set tofu. The calcium content depends on the coagulant and the product; check the label rather than assuming all tofu is calcium-rich.',
      'Lower-oxalate leafy greens such as bok choy, kale, collard greens, and turnip greens. These are useful sources, though amounts per serving vary.',
      'Beans, almonds, tahini, and sesame seeds can contribute calcium as part of an overall diet, but their calcium content and absorption vary.',
      'Spinach contains calcium, but much of it is poorly absorbed because of its oxalate content. Do not rely on spinach as a main calcium source.',
    ],
    mealIdeas: [
      'Make oatmeal with a calcium-fortified plant drink; check the label for calcium per serving.',
      'Stir-fry calcium-set tofu with bok choy or kale and serve with rice.',
      'Build a bowl with beans, greens, and a tahini dressing.',
      'Serve fruit with a fortified plant-based yogurt, checking its nutrition label.',
    ],
    notes:
      'Calcium content varies by brand, recipe, and serving size. Check labels for fortified foods and tofu, and include more than one calcium source across meals. Spinach and some other high-oxalate foods should not be treated as equivalent to lower-oxalate greens for calcium. This guide does not set a personal calcium target or recommend supplements.',
    references: [nhsVeganReference],
  },
  {
    id: 'iron',
    name: 'Iron',
    description:
      'Iron is needed to make hemoglobin, the protein in red blood cells that carries oxygen, and it also has other roles in the body. Plant foods contain non-heme iron. How much iron a person needs depends on factors such as age, growth, menstruation, pregnancy, and health. Eating a variety of iron-containing plant foods is useful, but food examples alone cannot show whether a person is getting enough.',
    sources: [
      'Lentils, beans, chickpeas, peas, and other pulses.',
      'Tofu, tempeh, and other soy foods.',
      'Pumpkin seeds, sesame seeds, tahini, nuts, and some dried fruit.',
      'Whole grains and grain products, such as oats and wholegrain bread.',
      'Breakfast cereals and other grain products fortified with iron; check the label because fortification varies.',
      'Some vegetables, including dark leafy greens, can contribute iron.',
    ],
    mealIdeas: [
      'Serve lentil stew with tomatoes and bell pepper, or another vitamin-C-rich food.',
      'Make a tofu-and-bean bowl with cabbage, broccoli, or citrus dressing.',
      'Top oatmeal with pumpkin seeds and fruit.',
      'Choose an iron-fortified cereal and serve it with fruit; check the cereal label for iron.',
    ],
    notes:
      'Vitamin C eaten in the same meal can improve absorption of non-heme iron. Tea and coffee can reduce absorption when consumed with a meal, so people concerned about iron intake may choose to have them between meals. These are practical considerations, not a reason to avoid nutritious foods. Iron needs differ widely, and excess iron from supplements can be harmful; do not use this guide to diagnose deficiency or choose a supplement dose. A healthcare professional can assess concerns with appropriate tests.',
    references: [
      {
        author: 'Harvard T.H. Chan School of Public Health',
        date: '2023, March',
        title: 'Iron',
        site: 'The Nutrition Source',
        url: 'https://nutritionsource.hsph.harvard.edu/iron/',
      },
      nhsVeganReference,
    ],
  },
  {
    id: 'vitamin-d',
    name: 'Vitamin D',
    description:
      'Vitamin D helps the body absorb calcium and supports bone health. Few foods naturally contain much vitamin D, so fortified foods may be useful. The amount of vitamin D in fortified products and UV-exposed mushrooms varies; check the label or product information. Sunlight also contributes to vitamin D production, but this varies with season, location, skin tone, clothing, and time outdoors.',
    sources: [
      'Plant drinks and plant-based yogurts fortified with vitamin D; check the label for the amount per serving.',
      'UV-exposed mushrooms, if the product information confirms vitamin D content. Ordinary mushrooms should not automatically be assumed to provide much.',
      'Fortified breakfast cereals, spreads, or other foods where available; check the label.',
      'A vitamin D supplement may be recommended in some circumstances, but the appropriate advice depends on the person and local public-health guidance.',
    ],
    mealIdeas: [
      'Make porridge with a plant drink whose label confirms vitamin D fortification.',
      'Use UV-exposed mushrooms in a pasta, grain bowl, or stir-fry when product information lists vitamin D.',
      'Check whether a fortified cereal and plant drink provide vitamin D as part of a varied breakfast.',
      'Use fortified plant-based yogurt in a fruit bowl, checking its label for vitamin D.',
    ],
    notes:
      'Fortification differs across products and countries. Check that the vitamin D source is suitable for a vegan diet, since some products may use an animal-derived form. Sun exposure is not a precise way to estimate vitamin D intake, and increasing unprotected exposure carries skin risks. This guide does not recommend a personal dose or supplement; follow local guidance or ask a healthcare professional.',
    references: [
      {
        author: 'Harvard T.H. Chan School of Public Health',
        date: '2023, March',
        title: 'Vitamin D',
        site: 'The Nutrition Source',
        url: 'https://nutritionsource.hsph.harvard.edu/vitamin-d/',
      },
      nhsVeganReference,
    ],
  },
  {
    id: 'omega-3',
    name: 'Omega-3',
    description:
      'Omega-3 is a family of fatty acids, not a single nutrient. Flaxseed, chia seeds, walnuts, and some oils provide alpha-linolenic acid (ALA), an essential plant omega-3 that must come from food. ALA is different from EPA and DHA: the body can convert some ALA into EPA and DHA, but conversion is limited and varies. Algal oil is a direct, vegan source of EPA and DHA, but it is a supplement rather than a meal ingredient.',
    sources: [
      'Ground flaxseed (linseed), which provides ALA.',
      'Chia seeds, which provide ALA.',
      'Walnuts, which provide ALA.',
      'Hemp seeds, canola oil, and soybean oil, which also provide ALA.',
      'Algal oil supplements provide EPA and/or DHA directly; check the product label and seek professional advice if considering a supplement.',
    ],
    mealIdeas: [
      'Stir ground flaxseed into oatmeal, cereal, or a smoothie.',
      'Make chia pudding with a plant drink and fruit.',
      'Add walnuts to a salad, grain bowl, or breakfast.',
      'Sprinkle hemp seeds over soup, roasted vegetables, or a bean bowl.',
      'Use canola or soybean oil in cooking where it suits the recipe.',
    ],
    notes:
      'Label plant-based ALA foods as sources of ALA, not as direct sources of EPA or DHA. Flaxseed oil is rich in ALA, but it is not a direct EPA/DHA source; follow the product’s storage and cooking guidance. Needs vary by age and life stage. This guide does not set a personal intake target or recommend an algal-oil dose.',
    references: [
      {
        author: 'Harvard T.H. Chan School of Public Health',
        date: 'n.d.',
        title: 'Omega-3 fatty acids: An essential contribution',
        site: 'The Nutrition Source',
        retrieved: 'October 25, 2026',
        url: 'https://nutritionsource.hsph.harvard.edu/what-should-you-eat/fats-and-cholesterol/types-of-fat/omega-3-fats/',
      },
      nhsVeganReference,
    ],
  },
  {
    id: 'iodine',
    name: 'Iodine',
    description:
      'Iodine is needed to make thyroid hormones, which help regulate growth and many body processes. The iodine content of plant foods can vary with soil and growing conditions, and the iodine content of fortified foods varies by country and brand. Some plant-based diets may need particular attention to reliable iodine sources.',
    sources: [
      'Iodized salt, where available. Check the package to confirm that the salt is iodized; specialty salts are not necessarily iodized.',
      'Foods fortified with iodine, if available; check the label because fortification practices differ by country and product.',
      'Some breads are fortified with iodine in certain countries; check local product information rather than assuming all bread contains it.',
      'Seaweed contains iodine, but amounts vary greatly by type and product. Kelp can contain very high amounts and is not a predictable everyday source.',
    ],
    mealIdeas: [
      'If you already use salt, choose iodized salt where available while still following local advice to limit salt.',
      'Check labels for iodine in plant drinks, bread, or other fortified foods sold in your region.',
      'Do not assume a small serving of seaweed provides a consistent amount of iodine.',
      'Avoid using kelp or seaweed supplements as a casual way to add iodine.',
    ],
    notes:
      'More iodine is not always better: excessive intake can harm thyroid function. Do not increase salt intake to obtain iodine, and do not assume that seaweed provides a predictable or appropriate amount. People who are pregnant, have thyroid conditions, or take medication affecting the thyroid should seek individualized guidance before using iodine supplements or concentrated seaweed products.',
    references: [
      {
        author: 'Harvard T.H. Chan School of Public Health',
        date: '2023, March',
        title: 'Iodine',
        site: 'The Nutrition Source',
        url: 'https://nutritionsource.hsph.harvard.edu/iodine/',
      },
    ],
  },
  {
    id: 'vitamin-b12',
    name: 'Vitamin B12',
    description:
      'Vitamin B12 supports normal red blood cell formation and nervous-system function. It occurs naturally mainly in animal foods; plant foods should not be assumed to contain reliable B12 unless they are fortified. People eating a fully plant-based diet need a dependable B12 source, such as appropriately fortified foods and/or a suitable supplement.',
    sources: [
      'Plant drinks and plant-based yogurts fortified with vitamin B12; check the label and serving size.',
      'Breakfast cereals fortified with B12; check the label because not all cereals are fortified.',
      'Nutritional yeast only when the specific product is fortified with B12.',
      'A suitable B12 supplement is another reliable option for a fully plant-based diet; this guide does not specify a product or dose.',
    ],
    mealIdeas: [
      'Use a plant drink labelled as B12-fortified in porridge or a smoothie.',
      'Add B12-fortified nutritional yeast to a tofu scramble, soup, or pasta.',
      'Choose a breakfast cereal specifically labelled as B12-fortified.',
      'Build meals around fortified foods if using them, while checking labels and serving sizes.',
    ],
    notes:
      'Unfortified plant foods—including ordinary mushrooms, fermented foods, and nutritional yeast that is not specifically fortified—should not be relied on as a B12 source. A fully plant-based diet needs a consistent, reliable source; occasional use of fortified foods may not be enough depending on the products and amounts. People with absorption problems, certain medical conditions, or relevant medications may need personalized advice. This guide does not recommend a supplement dose.',
    references: [
      {
        author: 'Harvard T.H. Chan School of Public Health',
        date: '2023, March',
        title: 'Vitamin B12',
        site: 'The Nutrition Source',
        url: 'https://nutritionsource.hsph.harvard.edu/vitamin-b12/',
      },
      nhsVeganReference,
    ],
  },
]

function App() {
  const [selectedNutrient, setSelectedNutrient] = useState(nutrients[0])
  const [page, setPage] = useState('guide')
  const [submissions, setSubmissions] = useState([])
  const [submissionType, setSubmissionType] = useState('source')
  const [submissionText, setSubmissionText] = useState('')
  const [submissionStatus, setSubmissionStatus] = useState('')
  const [isLoadingSubmissions, setIsLoadingSubmissions] = useState(false)
  const [editingId, setEditingId] = useState(null)
  const [editType, setEditType] = useState('source')
  const [editText, setEditText] = useState('')

  useEffect(() => {
    loadSubmissions(selectedNutrient.id)
  }, [])

  async function loadSubmissions(nutrientId) {
    setIsLoadingSubmissions(true)
    setSubmissionStatus('')

    try {
      const response = await fetch(
        `http://localhost:5220/api/nutrients/${nutrientId}/submissions`
      )

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`)
      }

      const data = await response.json()
      setSubmissions(data)
    } catch (error) {
      console.error('Could not load submissions:', error)
      setSubmissionStatus(
        'Could not load community submissions. Check that the API is running.'
      )
    } finally {
      setIsLoadingSubmissions(false)
    }
  }

  function startEditing(item) {
    setEditingId(item.id)
    setEditType(item.type)
    setEditText(item.text)
    setSubmissionStatus('')
  }

  function cancelEditing() {
    setEditingId(null)
    setEditText('')
  }

  async function saveEdit(id) {
    const text = editText.trim()

    if (text.length < 2 || text.length > 500) {
      setSubmissionStatus('Text must be between 2 and 500 characters.')
      return
    }

    try {
      const response = await fetch(`http://localhost:5220/api/submissions/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: editType, text }),
      })

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`)
      }

      setEditingId(null)
      setEditText('')
      setSubmissionStatus('Submission updated.')
      await loadSubmissions(selectedNutrient.id)
    } catch (error) {
      console.error('Could not update submission:', error)
      setSubmissionStatus('Could not update the submission.')
    }
  }

  async function deleteSubmission(id) {
    if (!window.confirm('Delete this community submission?')) {
      return
    }

    try {
      const response = await fetch(`http://localhost:5220/api/submissions/${id}`, {
        method: 'DELETE',
      })

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`)
      }

      setSubmissionStatus('Submission deleted.')
      await loadSubmissions(selectedNutrient.id)
    } catch (error) {
      console.error('Could not delete submission:', error)
      setSubmissionStatus('Could not delete the submission.')
    }
  }

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
      ) : page === 'blogs' ? (
        <section className="about-page">
          <button className="back-button" onClick={() => setPage('guide')}>
            ← Back to nutrient guide
          </button>

          <h1>Cooking &amp; baking blogs</h1>

          <p>
            These blogs share vegan recipes, cooking inspiration, and practical
            ideas for plant-based meals. The Norwegian, Swedish, and Danish
            sites offer resources in their respective languages, while the
            English-language blogs provide a wider range of recipe collections.
            They’re useful for everyday cooking and meal inspiration; they focus
            on food rather than serving as medical or individualized nutrition
            advice.
          </p>

          <h2>Norwegian</h2>
          <ul>
            <li>
              <a href="https://marihult.no/" target="_blank" rel="noreferrer">
                Mari Hult
              </a>
            </li>
            <li>
              <a
                href="http://www.veganmisjonen.com/"
                target="_blank"
                rel="noreferrer"
              >
                Veganmisjonen
              </a>
            </li>
          </ul>

          <h2>Swedish</h2>
          <ul>
            <li>
              <a href="https://javligtgott.se/" target="_blank" rel="noreferrer">
                Jävligt Gott
              </a>
            </li>
          </ul>

          <h2>Danish</h2>
          <ul>
            <li>
              <a href="https://madmedgloed.dk/" target="_blank" rel="noreferrer">
                Mad med Glød
              </a>
            </li>
            <li>
              <a href="https://maanebarnet.org/" target="_blank" rel="noreferrer">
                Månebarnet
              </a>
            </li>
            <li>
              <a
                href="https://plantepusherne.dk/"
                target="_blank"
                rel="noreferrer"
              >
                PlantePusherne
              </a>
            </li>
            <li>
              <a
                href="https://veganske-opskrifter.dk/"
                target="_blank"
                rel="noreferrer"
              >
                Veganske Opskrifter
              </a>
            </li>
          </ul>

          <h2>English</h2>
          <ul>
            <li>
              <a
                href="https://itdoesnttastelikechicken.com/"
                target="_blank"
                rel="noreferrer"
              >
                It Doesn’t Taste Like Chicken
              </a>
            </li>
            <li>
              <a
                href="https://mydarlingvegan.com/"
                target="_blank"
                rel="noreferrer"
              >
                My Darling Vegan
              </a>
            </li>
            <li>
              <a href="https://www.noracooks.com/" target="_blank" rel="noreferrer">
                Nora Cooks
              </a>
            </li>
            <li>
              <a
                href="https://rainbowplantlife.com/"
                target="_blank"
                rel="noreferrer"
              >
                Rainbow Plant Life
              </a>
            </li>
            <li>
              <a
                href="https://simpleveganblog.com/"
                target="_blank"
                rel="noreferrer"
              >
                Simple Vegan Blog
              </a>
            </li>
            <li>
              <a href="https://thefirstmess.com/" target="_blank" rel="noreferrer">
                The First Mess
              </a>
            </li>
            <li>
              <a href="https://www.veganricha.com/" target="_blank" rel="noreferrer">
                Vegan Richa
              </a>
            </li>
            <li>
              <a
                href="https://www.worldofvegan.com/"
                target="_blank"
                rel="noreferrer"
              >
                World of Vegan
              </a>
            </li>
          </ul>
        </section>
      ) : (
        <>
          <h1>Plant-Based Nutrient Guide</h1>
          <p>Select a nutrient to explore plant-based sources</p>

          <div className="nutrient-buttons">
            {nutrients.map((nutrient) => (
              <button
                key={nutrient.id}
                onClick={() => {
                  setSelectedNutrient(nutrient)
                  loadSubmissions(nutrient.id)
                }}
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

            <p className="cooking-blogs-link">
              Looking for recipe inspiration?{' '}
              <button className="footer-link"
                onClick={() => {
                  setPage('blogs')
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }}>
                Cooking &amp; baking blogs
              </button>
            </p>

            <h3>References</h3>
            <ul className="references-list">
              {selectedNutrient.references.map((reference) => (
                <li key={reference.url}>
                  {reference.author}. ({reference.date}).{' '}
                  <em>{reference.title}</em>.{' '}
                  {reference.site && `${reference.site}. `}
                  {reference.retrieved &&
                    `Retrieved ${reference.retrieved}, from `}
                  <a href={reference.url} target="_blank" rel="noreferrer">
                    {reference.url}
                  </a>
                </li>
              ))}
            </ul>

            <h3>Community-contributed sources</h3>
            {isLoadingSubmissions ? (
              <p>Loading submissions…</p>
            ) : (
              <ul>
                {submissions
                  .filter((item) => item.type === 'source')
                  .map((item) => (
                    <li key={item.id}>
                      {editingId === item.id ? (
                        <div className="submission-edit">
                          <select
                            value={editType}
                            onChange={(event) => setEditType(event.target.value)}
                            aria-label="Submission type"
                          >
                            <option value="source">Food source</option>
                            <option value="meal">Meal idea</option>
                          </select>

                          <textarea
                            value={editText}
                            onChange={(event) => setEditText(event.target.value)}
                            minLength={2}
                            maxLength={500}
                            aria-label="Edit submission"
                          />

                          <button type="button" onClick={() => saveEdit(item.id)}>
                            Save
                          </button>
                          <button type="button" onClick={cancelEditing}>
                            Cancel
                          </button>
                        </div>
                      ) : (
                        <>
                          <>
                            <span>{item.text}</span>

                            <button
                              className="submission-action"
                              type="button"
                              onClick={() => startEditing(item)}
                            >
                              Edit
                            </button>

                            <button
                              className="submission-action submission-delete"
                              type="button"
                              onClick={() => deleteSubmission(item.id)}
                            >
                              Delete
                            </button>
                          </>
                        </>
                      )}
                    </li>
                  ))}
              </ul>
            )}

            <h3>Community-contributed meal ideas</h3>
            {isLoadingSubmissions ? (
              <p>Loading submissions…</p>
            ) : (
              <ul>
                {submissions
                  .filter((item) => item.type === 'meal')
                  .map((item) => (
                    <li key={item.id}>
                      {editingId === item.id ? (
                        <div className="submission-edit">
                          <select
                            value={editType}
                            onChange={(event) => setEditType(event.target.value)}
                            aria-label="Submission type"
                          >
                            <option value="source">Food source</option>
                            <option value="meal">Meal idea</option>
                          </select>

                          <textarea
                            value={editText}
                            onChange={(event) => setEditText(event.target.value)}
                            minLength={2}
                            maxLength={500}
                            aria-label="Edit submission"
                          />

                          <button type="button" onClick={() => saveEdit(item.id)}>
                            Save
                          </button>
                          <button type="button" onClick={cancelEditing}>
                            Cancel
                          </button>
                        </div>
                      ) : (
                        <>
                          <>
                            <span>{item.text}</span>

                            <button
                              className="submission-action"
                              type="button"
                              onClick={() => startEditing(item)}
                            >
                              Edit
                            </button>

                            <button
                              className="submission-action submission-delete"
                              type="button"
                              onClick={() => deleteSubmission(item.id)}
                            >
                              Delete
                            </button>
                          </>
                        </>
                      )}
                    </li>
                  ))}
              </ul>
            )}

            <p aria-live="polite">{submissionStatus}</p>

            <h3>Suggest a source or meal idea</h3>
            <form
              onSubmit={async (event) => {
                event.preventDefault()
                setSubmissionStatus('')

                const text = submissionText.trim()
                if (text.length < 2 || text.length > 500) {
                  setSubmissionStatus('Please enter between 2 and 500 characters.')
                  return
                }

                try {
                  const response = await fetch(
                    `http://localhost:5220/api/nutrients/${selectedNutrient.id}/submissions`,
                    {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify({ type: submissionType, text }),
                    }
                  )

                  if (!response.ok) {
                    throw new Error(`Request failed with status ${response.status}`)
                  }

                  setSubmissionText('')
                  setSubmissionStatus('Submission added.')
                  await loadSubmissions(selectedNutrient.id)
                } catch (error) {
                  console.error('Could not submit entry:', error)
                  setSubmissionStatus(
                    'Could not submit your entry. Check that the API is running.'
                  )
                }
              }}
            >
              <label htmlFor="submission-type">Type</label>
              <select
                id="submission-type"
                value={submissionType}
                onChange={(event) => setSubmissionType(event.target.value)}
              >
                <option value="source">Food source</option>
                <option value="meal">Meal idea</option>
              </select>

              <label htmlFor="submission-text">Your suggestion</label>
              <textarea
                id="submission-text"
                value={submissionText}
                onChange={(event) => setSubmissionText(event.target.value)}
                minLength={2}
                maxLength={500}
                required
              />

              <button type="submit">Submit suggestion</button>
            </form>

            <p aria-live="polite">{submissionStatus}</p>
            <p>Community submissions are user-contributed and have not been verified.</p>
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