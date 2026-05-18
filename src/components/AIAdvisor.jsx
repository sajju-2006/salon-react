import { useState } from 'react'

const questions = [
  {
    id: 'gender',
    question: 'Who are we styling today?',
    options: ['Male', 'Female', 'Non-binary / Prefer not to say']
  },
  {
    id: 'faceShape',
    question: 'What is your face shape?',
    options: ['Oval', 'Round', 'Square', 'Heart', 'Diamond', 'Not sure']
  },
  {
    id: 'hairType',
    question: 'What is your hair type?',
    options: ['Straight', 'Wavy', 'Curly', 'Coily / Kinky']
  },
  {
    id: 'lifestyle',
    question: 'What best describes your lifestyle?',
    options: ['Corporate / Professional', 'Creative / Artistic', 'Casual / Relaxed', 'Active / Sporty']
  },
  {
    id: 'maintenance',
    question: 'How much time do you spend on hair daily?',
    options: ['Under 5 minutes', '5–15 minutes', '15–30 minutes', '30+ minutes']
  },
  {
    id: 'goal',
    question: 'What is your main goal?',
    options: ['Fresh look, keep it similar', 'Bold transformation', 'Fix damage / health focus', 'Special occasion glam']
  }
]

export default function AIAdvisor() {
  const [step, setStep] = useState(0) // 0 = intro, 1-6 = questions, 7 = result
  const [answers, setAnswers] = useState({})
  const [loading, setLoading] = useState(false)
  const [recommendation, setRecommendation] = useState(null)
  const [error, setError] = useState(null)

  const currentQuestion = questions[step - 1]
  const totalSteps = questions.length

  const handleAnswer = (option) => {
    const newAnswers = { ...answers, [currentQuestion.id]: option }
    setAnswers(newAnswers)
    if (step < totalSteps) {
      setStep(step + 1)
    } else {
      getRecommendation(newAnswers)
    }
  }

  const getRecommendation = async (finalAnswers) => {
    setStep(totalSteps + 1)
    setLoading(true)
    setError(null)
    try {
      const prompt = `You are an expert hair stylist and beauty consultant at Rangpuri, a premium luxury salon. 
      
A client has answered the following questions:
- Gender: ${finalAnswers.gender}
- Face shape: ${finalAnswers.faceShape}
- Hair type: ${finalAnswers.hairType}
- Lifestyle: ${finalAnswers.lifestyle}
- Daily hair time: ${finalAnswers.maintenance}
- Main goal: ${finalAnswers.goal}

Give a personalized, expert style recommendation. Format your response EXACTLY as JSON with these keys:
{
  "headline": "A catchy 5-7 word title for their recommended look",
  "style": "Name of the recommended hairstyle (2-4 words)",
  "description": "2-3 sentences describing why this style suits them perfectly",
  "services": ["Service 1", "Service 2", "Service 3"],
  "tips": ["Tip 1", "Tip 2", "Tip 3"],
  "colorSuggestion": "One sentence color recommendation if applicable"
}
Return ONLY the JSON, no other text.`

      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 1000,
          messages: [{ role: 'user', content: prompt }]
        })
      })

      const data = await response.json()
      const text = data.content?.[0]?.text || ''
      const clean = text.replace(/```json|```/g, '').trim()
      const parsed = JSON.parse(clean)
      setRecommendation(parsed)
    } catch (err) {
      setError('Something went wrong. Please try again.')
    }
    setLoading(false)
  }

  const reset = () => {
    setStep(0)
    setAnswers({})
    setRecommendation(null)
    setError(null)
    setLoading(false)
  }

  return (
    <section className="ai-advisor" id="ai-advisor">
      <div className="container">
        <div className="ai-advisor-header">
          <span className="section-label">Powered by AI</span>
          <h2 className="section-title">Your Personal Style Advisor</h2>
          <div className="gold-line center"></div>
          <p className="section-subtitle">
            Answer 6 quick questions and get a personalized style recommendation
            crafted by AI, just for you.
          </p>
        </div>

        <div className="ai-card">

          {/* INTRO */}
          {step === 0 && (
            <div className="ai-intro">
              <div className="ai-intro-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="40" height="40">
                  <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z"/>
                  <path d="M12 16v-4M12 8h.01"/>
                </svg>
              </div>
              <h3>Ready to find your perfect look?</h3>
              <p>Our AI stylist will analyze your features and lifestyle to recommend the ideal cut, style, and treatments — personalized just for you.</p>
              <div className="ai-intro-features">
                <span>✦ 6 quick questions</span>
                <span>✦ Instant AI analysis</span>
                <span>✦ Expert recommendations</span>
              </div>
              <button className="btn btn-primary" onClick={() => setStep(1)}>
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
                </svg>
                Start My Style Quiz
              </button>
            </div>
          )}

          {/* QUESTIONS */}
          {step >= 1 && step <= totalSteps && (
            <div className="ai-question-wrap">
              {/* Progress bar */}
              <div className="ai-progress">
                <div className="ai-progress-bar" style={{ width: `${((step - 1) / totalSteps) * 100}%` }}></div>
              </div>
              <div className="ai-step-label">Question {step} of {totalSteps}</div>

              <h3 className="ai-question">{currentQuestion.question}</h3>

              <div className="ai-options">
                {currentQuestion.options.map((option) => (
                  <button
                    key={option}
                    className="ai-option"
                    onClick={() => handleAnswer(option)}
                  >
                    {option}
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="9 18 15 12 9 6"/>
                    </svg>
                  </button>
                ))}
              </div>

              {step > 1 && (
                <button className="ai-back" onClick={() => setStep(step - 1)}>
                  ← Back
                </button>
              )}
            </div>
          )}

          {/* LOADING */}
          {step > totalSteps && loading && (
            <div className="ai-loading">
              <div className="ai-spinner"></div>
              <h3>Analyzing your style profile...</h3>
              <p>Our AI is crafting your personalized recommendation</p>
            </div>
          )}

          {/* ERROR */}
          {error && (
            <div className="ai-error">
              <p>{error}</p>
              <button className="btn btn-primary" onClick={reset}>Try Again</button>
            </div>
          )}

          {/* RESULT */}
          {recommendation && !loading && (
            <div className="ai-result">
              <div className="ai-result-badge">✦ Your Perfect Look</div>
              <h3 className="ai-result-headline">{recommendation.headline}</h3>
              <div className="ai-result-style">{recommendation.style}</div>
              <p className="ai-result-desc">{recommendation.description}</p>

              {recommendation.colorSuggestion && (
                <div className="ai-result-color">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 2C8 2 5 5 5 9c0 4 7 13 7 13s7-9 7-13c0-4-3-7-7-7z"/>
                  </svg>
                  <span>{recommendation.colorSuggestion}</span>
                </div>
              )}

              <div className="ai-result-sections">
                <div className="ai-result-section">
                  <h4>Recommended Services</h4>
                  <ul>
                    {recommendation.services?.map((s, i) => (
                      <li key={i}>
                        <span className="ai-bullet">✦</span> {s}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="ai-result-section">
                  <h4>Pro Styling Tips</h4>
                  <ul>
                    {recommendation.tips?.map((t, i) => (
                      <li key={i}>
                        <span className="ai-bullet">✦</span> {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="ai-result-actions">
                <a href="#contact" className="btn btn-primary">Book This Look</a>
                <button className="btn btn-outline-dark" onClick={reset}>Try Again</button>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  )
}