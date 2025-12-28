import { Slide } from '@/components/SlideView'
import dynamic from 'next/dynamic'

// Dynamically import interactive components (client-side only)
const AgentFlowDiagram = dynamic(() => import('@/components/AgentFlowDiagram'), { ssr: false })
const CodePlayground = dynamic(() => import('@/components/CodePlayground'), { ssr: false })
const Quiz = dynamic(() => import('@/components/Quiz'), { ssr: false })

export const chapter3Slides: Slide[] = [
  // Slide 1: Welcome
  {
    id: 'welcome',
    type: 'intro',
    title: 'Chapter 3',
    content: (
      <div className="flex flex-col items-center justify-center h-full text-center space-y-6">
        <div className="text-6xl mb-4">🧠</div>
        <h1 className="text-5xl font-bold text-black mb-4">
          Chapter 3
        </h1>
        <h2 className="text-3xl font-semibold text-black mb-6">
          Fundamentals of Large Language Models
        </h2>
        <div className="inline-block px-6 py-3 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full mb-4">
          <p className="text-lg font-semibold text-blue-700">
            From N-gram to GPT: Understanding the AI Brain
          </p>
        </div>
        <div className="mt-4 max-w-2xl">
          <p className="text-xl text-black leading-relaxed">
            Explore how large language models evolved from simple statistical methods to
            the powerful Transformer architecture that drives modern AI agents
          </p>
        </div>
        <div className="flex justify-center gap-8 text-sm text-black pt-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🧠</span>
            <span>Model Evolution</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">🔍</span>
            <span>Attention Mechanism</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">⚙️</span>
            <span>Tokenization</span>
          </div>
        </div>
      </div>
    )
  },

  // Slide 2: Learning Objectives
  {
    id: 'objectives',
    type: 'content',
    title: 'What You\'ll Learn',
    content: (
      <div className="space-y-6">
        <p className="text-xl text-black mb-8">
          This chapter covers the foundational knowledge needed to understand how modern
          agents work, with a deep dive into large language models as their core component.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border-l-4 border-blue-500">
            <h3 className="text-lg font-bold text-black mb-3">📚 Model Evolution</h3>
            <ul className="space-y-2 text-black">
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">•</span>
                <span>Statistical models (N-gram) → Neural networks (RNN, LSTM)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">•</span>
                <span>Transformer architecture: self-attention & parallel processing</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">•</span>
                <span>Decoder-Only models (GPT, Llama) for generation</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border-l-4 border-purple-500">
            <h3 className="text-lg font-bold text-black mb-3">🛠️ Practical Skills</h3>
            <ul className="space-y-2 text-black">
              <li className="flex items-start gap-2">
                <span className="text-purple-500 mt-1">•</span>
                <span>Prompt engineering: zero-shot, few-shot, Chain-of-Thought</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-500 mt-1">•</span>
                <span>Tokenization with BPE algorithm</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-500 mt-1">•</span>
                <span>Model selection & deployment strategies</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-teal-50 p-6 rounded-xl border-l-4 border-green-500">
            <h3 className="text-lg font-bold text-black mb-3">⚡ Core Concepts</h3>
            <ul className="space-y-2 text-black">
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">•</span>
                <span>Word embeddings capture semantic relationships</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">•</span>
                <span>Multi-head attention enables parallel context understanding</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">•</span>
                <span>Scaling laws predict model performance improvements</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl border-l-4 border-orange-500">
            <h3 className="text-lg font-bold text-black mb-3">⚠️ Limitations</h3>
            <ul className="space-y-2 text-black">
              <li className="flex items-start gap-2">
                <span className="text-orange-500 mt-1">•</span>
                <span>Model hallucinations: fabricating non-existent facts</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 mt-1">•</span>
                <span>Knowledge cutoff & training data biases</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 mt-1">•</span>
                <span>Mitigation: RAG, multi-step reasoning, external tools</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  },

  // Slide 3: N-gram Language Models
  {
    id: 'ngram',
    type: 'content',
    title: 'Statistical Language Models: N-gram',
    content: (
      <div className="space-y-6">
        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl">
          <h3 className="text-xl font-bold text-blue-900 mb-3">What is a Language Model?</h3>
          <p className="text-black text-lg">
            Calculate the probability of a word sequence appearing. A good language model tells us
            what sentences are fluent and natural.
          </p>
        </div>

        <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
          <h4 className="font-bold text-black mb-4">The Markov Assumption (N-gram Idea)</h4>
          <p className="text-black mb-4">
            Instead of considering the entire history, assume a word's probability depends only
            on the previous <strong>N-1</strong> words.
          </p>

          <div className="space-y-4">
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg">
              <p className="font-semibold text-purple-900 mb-2">Bigram (N=2): Look at 1 previous word</p>
              <p className="font-mono text-sm text-black">
                P(w<sub>i</sub> | w<sub>1</sub>,...,w<sub>i-1</sub>) ≈ P(w<sub>i</sub> | w<sub>i-1</sub>)
              </p>
            </div>

            <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-4 rounded-lg">
              <p className="font-semibold text-cyan-900 mb-2">Trigram (N=3): Look at 2 previous words</p>
              <p className="font-mono text-sm text-black">
                P(w<sub>i</sub> | w<sub>1</sub>,...,w<sub>i-1</sub>) ≈ P(w<sub>i</sub> | w<sub>i-2</sub>, w<sub>i-1</sub>)
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-red-50 border-2 border-red-300 p-4 rounded-xl">
            <h4 className="font-bold text-red-900 mb-2">❌ Fatal Flaws</h4>
            <ul className="space-y-2 text-black">
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">1.</span>
                <span><strong>Data Sparsity:</strong> Unseen sequences get probability = 0</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">2.</span>
                <span><strong>No Generalization:</strong> Can't understand "robot learns" if only saw "agent learns"</span>
              </li>
            </ul>
          </div>

          <div className="bg-green-50 border-2 border-green-300 p-4 rounded-xl">
            <h4 className="font-bold text-green-900 mb-2">✅ Why It Mattered</h4>
            <ul className="space-y-2 text-black">
              <li className="flex items-start gap-2">
                <span className="text-green-500">•</span>
                <span>Simple and interpretable</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500">•</span>
                <span>Foundation for understanding language modeling</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500">•</span>
                <span>Led to neural network innovations</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center text-black italic mt-4">
          Next slide: See N-gram in action with a Bigram calculator! 👉
        </div>
      </div>
    )
  },

  // Slide 4: Bigram Calculator (CodePlayground)
  {
    id: 'bigram-demo',
    type: 'interactive',
    title: 'Try It: Bigram Probability Calculator',
    content: (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-xl">
          <h3 className="text-2xl font-bold mb-2">📊 Interactive Bigram Demo</h3>
          <p className="text-lg opacity-90">
            Calculate sentence probability using the Markov assumption. This code demonstrates
            how statistical language models estimate P(sentence) by multiplying conditional probabilities.
          </p>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg">
          <p className="text-black">
            <strong>Corpus:</strong> "datawhale agent learns datawhale agent works"<br/>
            <strong>Goal:</strong> Calculate P("datawhale agent learns") using Bigram model
          </p>
        </div>

        <CodePlayground
          language="python"
          initialCode={`import collections

# Example corpus from Chapter 3
corpus = "datawhale agent learns datawhale agent works"
tokens = corpus.split()
total_tokens = len(tokens)

# --- Step 1: Calculate P(datawhale) ---
count_datawhale = tokens.count('datawhale')
p_datawhale = count_datawhale / total_tokens
print(f"Step 1: P(datawhale) = {count_datawhale}/{total_tokens} = {p_datawhale:.3f}")

# --- Step 2: Calculate P(agent|datawhale) ---
bigrams = list(zip(tokens, tokens[1:]))
bigram_counts = collections.Counter(bigrams)
count_datawhale_agent = bigram_counts[('datawhale', 'agent')]
p_agent_given_datawhale = count_datawhale_agent / count_datawhale
print(f"Step 2: P(agent|datawhale) = {count_datawhale_agent}/{count_datawhale} = {p_agent_given_datawhale:.3f}")

# --- Step 3: Calculate P(learns|agent) ---
count_agent_learns = bigram_counts[('agent', 'learns')]
count_agent = tokens.count('agent')
p_learns_given_agent = count_agent_learns / count_agent
print(f"Step 3: P(learns|agent) = {count_agent_learns}/{count_agent} = {p_learns_given_agent:.3f}")

# --- Finally: Multiply the probabilities ---
p_sentence = p_datawhale * p_agent_given_datawhale * p_learns_given_agent
print(f"\\nFinal: P('datawhale agent learns') ≈ {p_sentence:.3f}")`}
        />

        <div className="bg-blue-50 p-4 rounded-lg">
          <p className="text-sm text-black">
            💡 <strong>Try modifying:</strong> Change the corpus or target sentence to see how probabilities change!
          </p>
        </div>
      </div>
    )
  },

  // Slide 5: Word Embeddings
  {
    id: 'embeddings',
    type: 'content',
    title: 'Neural Network Language Models: Word Embeddings',
    content: (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-green-500 to-teal-600 text-white p-6 rounded-xl">
          <h3 className="text-2xl font-bold mb-2">🎯 The Big Idea</h3>
          <p className="text-lg">
            Represent words with <strong>continuous vectors</strong> instead of discrete symbols.
            Semantically similar words have vectors that are close together in space!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
            <h4 className="text-xl font-bold text-black mb-4">How It Works</h4>
            <ol className="space-y-3 text-black">
              <li className="flex items-start gap-3">
                <span className="bg-green-500 text-white font-bold rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">1</span>
                <div>
                  <strong>Build Semantic Space:</strong> Create high-dimensional vector space
                  (e.g., 300-1000 dimensions)
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-green-500 text-white font-bold rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">2</span>
                <div>
                  <strong>Map Words to Vectors:</strong> Each word gets a unique position
                  (vector) in this space
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-green-500 text-white font-bold rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">3</span>
                <div>
                  <strong>Learn from Context:</strong> Neural network learns to predict next
                  word, adjusting vectors to capture meaning
                </div>
              </li>
            </ol>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border-2 border-purple-300">
            <h4 className="text-xl font-bold text-purple-900 mb-4">Measuring Similarity</h4>
            <div className="bg-white p-4 rounded-lg mb-4">
              <p className="font-mono text-sm text-black mb-2">
                similarity(a⃗, b⃗) = cos(θ) = (a⃗·b⃗) / (|a⃗||b⃗|)
              </p>
              <p className="text-xs text-black">Cosine Similarity Formula</p>
            </div>
            <ul className="space-y-2 text-black">
              <li className="flex items-center gap-2">
                <span className="text-green-500 font-bold">cos = 1:</span>
                <span>Identical direction (perfect match)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-yellow-500 font-bold">cos = 0:</span>
                <span>Orthogonal (unrelated)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-red-500 font-bold">cos = -1:</span>
                <span>Opposite direction (antonyms)</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-yellow-100 to-orange-100 border-l-4 border-yellow-500 p-6 rounded-r-xl">
          <h4 className="text-lg font-bold text-yellow-900 mb-3">🤯 Famous Example: Semantic Arithmetic</h4>
          <p className="text-black text-lg mb-2">
            <code className="bg-white px-2 py-1 rounded">vector("King") - vector("Man") + vector("Woman") ≈ vector("Queen")</code>
          </p>
          <p className="text-black">
            This shows embeddings capture abstract concepts like "gender" and "royalty"!
          </p>
        </div>

        <div className="text-center text-black italic">
          Next slide: See word embedding arithmetic in action! 👉
        </div>
      </div>
    )
  },

  // Slide 6: Word Embeddings Demo (CodePlayground)
  {
    id: 'embeddings-demo',
    type: 'interactive',
    title: 'Try It: King - Man + Woman = Queen',
    content: (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-purple-500 to-pink-600 text-white p-6 rounded-xl">
          <h3 className="text-2xl font-bold mb-2">✨ Word Embedding Magic</h3>
          <p className="text-lg opacity-90">
            Word embeddings capture semantic relationships. This famous example shows how vector
            arithmetic can perform semantic "translation": King - Man + Woman ≈ Queen.
          </p>
        </div>

        <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded-r-lg">
          <p className="text-black">
            <strong>Key Insight:</strong> If embeddings learn that [King - Man] captures the
            concept of "royalty minus male gender," then adding "Woman" should give us the
            female equivalent of royalty: Queen!
          </p>
        </div>

        <CodePlayground
          language="python"
          initialCode={`import numpy as np

# Simplified 2D word vectors (in practice, these are 300-1000 dimensions)
embeddings = {
    "king": np.array([0.9, 0.8]),
    "queen": np.array([0.9, 0.2]),
    "man": np.array([0.7, 0.9]),
    "woman": np.array([0.7, 0.3])
}

def cosine_similarity(vec1, vec2):
    """Calculate cosine similarity between two vectors"""
    dot_product = np.dot(vec1, vec2)
    norm_product = np.linalg.norm(vec1) * np.linalg.norm(vec2)
    return dot_product / norm_product

# Semantic arithmetic: king - man + woman
result_vec = embeddings["king"] - embeddings["man"] + embeddings["woman"]

# Calculate similarity with "queen"
sim = cosine_similarity(result_vec, embeddings["queen"])

print(f"Result vector (king - man + woman): {result_vec}")
print(f"Queen vector: {embeddings['queen']}")
print(f"Cosine similarity: {sim:.4f}")
print(f"\\nPerfect match! This shows embeddings capture abstract concepts like 'royalty' and 'gender'.")`}
        />

        <div className="bg-green-50 p-4 rounded-lg">
          <p className="text-sm text-black">
            🎯 <strong>Challenge:</strong> Modify the embeddings to create your own semantic relationships
            (e.g., "Paris - France + Germany = Berlin")
          </p>
        </div>
      </div>
    )
  },

  // Slide 7: RNN and LSTM
  {
    id: 'rnn-lstm',
    type: 'content',
    title: 'Recurrent Neural Networks: Adding Memory',
    content: (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white p-6 rounded-xl">
          <h3 className="text-2xl font-bold mb-2">🔄 The Problem with Fixed Windows</h3>
          <p className="text-lg">
            N-gram and neural language models can only look at a <strong>fixed number</strong> of
            previous words. But understanding language often requires looking back arbitrarily far!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white border-2 border-blue-300 rounded-xl p-6">
            <h4 className="text-xl font-bold text-blue-900 mb-4">💡 RNN: The "Memory" Solution</h4>
            <div className="space-y-4">
              <p className="text-black">
                <strong>Core Idea:</strong> Introduce a <span className="bg-blue-100 px-2 py-1 rounded">hidden state</span> vector
                that acts as short-term memory
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm text-black">At each time step <em>t</em>:</p>
                <ol className="list-decimal list-inside space-y-1 text-black mt-2">
                  <li>Read current word embedding</li>
                  <li>Combine with previous hidden state</li>
                  <li>Generate new hidden state (memory)</li>
                  <li>Pass to next time step</li>
                </ol>
              </div>
              <div className="bg-green-100 border-l-4 border-green-500 p-3 rounded-r">
                <p className="text-sm text-green-900">
                  ✅ <strong>Benefit:</strong> Can process sequences of <em>any length</em>
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white border-2 border-red-300 rounded-xl p-6">
            <h4 className="text-xl font-bold text-red-900 mb-4">⚠️ RNN Problem: Vanishing Gradients</h4>
            <div className="space-y-4">
              <p className="text-black">
                When sequences are <strong>very long</strong>, gradients become extremely small
                during backpropagation → can't learn long-distance dependencies
              </p>
              <div className="bg-red-50 p-4 rounded-lg">
                <p className="font-semibold text-red-900 mb-2">Example Failure:</p>
                <p className="text-sm text-black">
                  "The <span className="bg-yellow-200">agent</span> who works at Datawhale and has
                  extensive experience in machine learning and natural language processing
                  <span className="bg-yellow-200">learns</span> quickly."
                </p>
                <p className="text-xs text-black mt-2">
                  RNN struggles to connect "agent" with "learns" across many words
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-300 p-6 rounded-xl">
          <h4 className="text-xl font-bold text-purple-900 mb-4">🚀 LSTM: Long Short-Term Memory</h4>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg">
              <h5 className="font-bold text-purple-700 mb-2">Forget Gate 🚪</h5>
              <p className="text-sm text-black">
                Decides what to <em>discard</em> from previous cell state
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h5 className="font-bold text-purple-700 mb-2">Input Gate 📥</h5>
              <p className="text-sm text-black">
                Decides what <em>new information</em> to store in cell state
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h5 className="font-bold text-purple-700 mb-2">Output Gate 📤</h5>
              <p className="text-sm text-black">
                Decides what to <em>output</em> based on cell state
              </p>
            </div>
          </div>
          <div className="mt-4 bg-purple-100 p-3 rounded-lg">
            <p className="text-sm text-purple-900">
              💪 <strong>Result:</strong> LSTM solves vanishing gradients and can learn
              dependencies across hundreds of time steps!
            </p>
          </div>
        </div>

        <div className="text-center text-black italic">
          But RNNs still process sequentially... Next: The Transformer revolution! 👉
        </div>
      </div>
    )
  },

  // Slide 8: Transformer Overview
  {
    id: 'transformer-intro',
    type: 'content',
    title: 'Transformer: Attention Is All You Need',
    content: (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white p-8 rounded-xl">
          <h3 className="text-3xl font-bold mb-3">🎯 The Revolutionary Idea (2017)</h3>
          <p className="text-xl opacity-90">
            Replace recurrence with <strong>pure attention</strong> → Achieve <strong>parallel
            processing</strong> and <strong>unlimited context</strong>
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-red-50 border-2 border-red-300 rounded-xl p-6">
            <h4 className="text-xl font-bold text-red-900 mb-4">❌ RNN Bottleneck</h4>
            <ul className="space-y-3 text-black">
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">•</span>
                <span><strong>Sequential Processing:</strong> Must wait for step t-1 before computing step t</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">•</span>
                <span><strong>No Parallelization:</strong> Can't use GPUs effectively</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">•</span>
                <span><strong>Slow Training:</strong> Long sequences take forever</span>
              </li>
            </ul>
          </div>

          <div className="bg-green-50 border-2 border-green-300 rounded-xl p-6">
            <h4 className="text-xl font-bold text-green-900 mb-4">✅ Transformer Solution</h4>
            <ul className="space-y-3 text-black">
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold">•</span>
                <span><strong>Parallel Processing:</strong> All tokens computed simultaneously</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold">•</span>
                <span><strong>Direct Connections:</strong> Any token can attend to any other token</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold">•</span>
                <span><strong>Scalable:</strong> Efficient GPU utilization, faster training</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white border-2 border-blue-300 rounded-xl p-6">
          <h4 className="text-xl font-bold text-blue-900 mb-4">🏗️ Encoder-Decoder Architecture</h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-5 rounded-lg">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-3xl">📖</span>
                <h5 className="text-lg font-bold text-blue-900">Encoder: "Understand"</h5>
              </div>
              <p className="text-black mb-3">
                Reads entire input sequence and generates rich contextual representations for each token
              </p>
              <div className="bg-white p-3 rounded border border-blue-200">
                <p className="text-sm text-black mb-1">Components (×N layers):</p>
                <ul className="text-sm text-black space-y-1">
                  <li>• Multi-Head Self-Attention</li>
                  <li>• Feed-Forward Network (FFN)</li>
                  <li>• Add & Norm (residual + layer norm)</li>
                </ul>
              </div>
            </div>

            <div className="bg-purple-50 p-5 rounded-lg">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-3xl">✍️</span>
                <h5 className="text-lg font-bold text-purple-900">Decoder: "Generate"</h5>
              </div>
              <p className="text-black mb-3">
                References encoder output and previously generated tokens to produce next word
              </p>
              <div className="bg-white p-3 rounded border border-purple-200">
                <p className="text-sm text-black mb-1">Components (×N layers):</p>
                <ul className="text-sm text-black space-y-1">
                  <li>• Masked Self-Attention (causal)</li>
                  <li>• Cross-Attention (to encoder)</li>
                  <li>• Feed-Forward Network (FFN)</li>
                  <li>• Add & Norm (×3)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-yellow-100 to-orange-100 border-l-4 border-yellow-500 p-5 rounded-r-xl">
          <p className="text-lg text-black">
            <strong>📝 Original Use Case:</strong> Machine Translation (English → French)<br/>
            <strong>🚀 Modern Impact:</strong> Foundation of GPT, BERT, T5, and all modern LLMs
          </p>
        </div>

        <div className="text-center text-black italic">
          Next slides: Explore the architecture visually! 👉
        </div>
      </div>
    )
  },

  // Slide 9: Transformer Architecture Diagram (AgentFlowDiagram)
  {
    id: 'transformer-diagram',
    type: 'interactive',
    title: 'Transformer Architecture: Visual Breakdown',
    content: (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-xl">
          <h3 className="text-2xl font-bold mb-2">🏗️ Complete Transformer Architecture</h3>
          <p className="text-lg opacity-90">
            The Transformer model (2017) revolutionized NLP by replacing recurrence with attention.
            Click nodes to understand each component's role in the architecture.
          </p>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg mb-4">
          <p className="text-black">
            💡 <strong>Interactive Tip:</strong> Click any node to see detailed explanations.
            Notice the <strong>parallel paths</strong> for Encoder (left) and Decoder (right).
          </p>
        </div>

        <AgentFlowDiagram
          title="Transformer: Attention Is All You Need"
          description="Encoder understands input, Decoder generates output, all powered by multi-head attention"
          nodes={[
            {
              id: 'input',
              type: 'input',
              label: 'Input Tokens',
              description: 'Tokenized input sequence (e.g., ["Hello", "world", "!"])',
              position: { x: 100, y: 0 }
            },
            {
              id: 'embed-enc',
              label: 'Token Embedding',
              description: 'Convert tokens to dense vectors (e.g., 512 dimensions)',
              position: { x: 100, y: 100 }
            },
            {
              id: 'pos-enc',
              label: '+ Positional Encoding',
              description: 'Add position info via sine/cosine functions: PE(pos, 2i) = sin(pos/10000^(2i/d_model))',
              position: { x: 100, y: 200 }
            },
            {
              id: 'enc-layer',
              label: 'Encoder Layer ×N',
              description: 'Stack of N=6 identical layers. Each has: Multi-Head Self-Attention → Add&Norm → FFN → Add&Norm',
              position: { x: 100, y: 300 }
            },
            {
              id: 'self-attn-enc',
              label: 'Multi-Head Self-Attention',
              description: 'Each token attends to all tokens. Learns contextual relationships (e.g., "it" refers to "agent")',
              position: { x: 50, y: 420 }
            },
            {
              id: 'ffn-enc',
              label: 'Feed-Forward Network',
              description: 'FFN(x) = max(0, xW1+b1)W2+b2. Expands to 4x dimensions then shrinks back',
              position: { x: 150, y: 420 }
            },
            {
              id: 'enc-output',
              label: 'Encoder Output',
              description: 'Contextual representations for entire input sequence',
              position: { x: 100, y: 540 }
            },
            {
              id: 'dec-input',
              label: 'Output Tokens (shifted)',
              description: 'Decoder input: previous outputs shifted right (during training)',
              position: { x: 400, y: 0 }
            },
            {
              id: 'embed-dec',
              label: 'Token Embedding',
              description: 'Same embedding layer as encoder (weights shared)',
              position: { x: 400, y: 100 }
            },
            {
              id: 'pos-dec',
              label: '+ Positional Encoding',
              description: 'Same positional encoding as encoder',
              position: { x: 400, y: 200 }
            },
            {
              id: 'dec-layer',
              label: 'Decoder Layer ×N',
              description: 'Stack of N=6 layers. Each has: Masked Self-Attention → Add&Norm → Cross-Attention → Add&Norm → FFN → Add&Norm',
              position: { x: 400, y: 300 }
            },
            {
              id: 'masked-attn',
              label: 'Masked Self-Attention',
              description: 'Prevents attending to future tokens (autoregressive). Only looks at previous positions.',
              position: { x: 340, y: 420 }
            },
            {
              id: 'cross-attn',
              label: 'Cross-Attention',
              description: 'Decoder attends to encoder output. Query from decoder, Key & Value from encoder.',
              position: { x: 440, y: 420 }
            },
            {
              id: 'ffn-dec',
              label: 'Feed-Forward Network',
              description: 'Same FFN structure as encoder',
              position: { x: 400, y: 520 }
            },
            {
              id: 'linear',
              label: 'Linear Layer',
              description: 'Projects to vocabulary size (e.g., 50,000 dimensions)',
              position: { x: 400, y: 620 }
            },
            {
              id: 'softmax',
              type: 'output',
              label: 'Softmax → Probabilities',
              description: 'Convert logits to probability distribution over vocabulary',
              position: { x: 400, y: 720 }
            }
          ]}
          edges={[
            { id: 'e1', source: 'input', target: 'embed-enc', animated: true },
            { id: 'e2', source: 'embed-enc', target: 'pos-enc', animated: true },
            { id: 'e3', source: 'pos-enc', target: 'enc-layer', animated: true },
            { id: 'e4', source: 'enc-layer', target: 'self-attn-enc', label: 'Layer details', animated: true },
            { id: 'e5', source: 'enc-layer', target: 'ffn-enc', animated: true },
            { id: 'e6', source: 'ffn-enc', target: 'enc-output', animated: true },
            { id: 'e7', source: 'dec-input', target: 'embed-dec', animated: true },
            { id: 'e8', source: 'embed-dec', target: 'pos-dec', animated: true },
            { id: 'e9', source: 'pos-dec', target: 'dec-layer', animated: true },
            { id: 'e10', source: 'dec-layer', target: 'masked-attn', label: 'Layer details', animated: true },
            { id: 'e11', source: 'dec-layer', target: 'cross-attn', animated: true },
            { id: 'e12', source: 'enc-output', target: 'cross-attn', label: 'K, V from encoder', animated: true },
            { id: 'e13', source: 'cross-attn', target: 'ffn-dec', animated: true },
            { id: 'e14', source: 'ffn-dec', target: 'linear', animated: true },
            { id: 'e15', source: 'linear', target: 'softmax', animated: true }
          ]}
          height={800}
        />

        <div className="bg-green-50 p-4 rounded-lg mt-4">
          <p className="text-sm text-black">
            🔍 <strong>Key Insight:</strong> Notice how information flows in parallel through
            the encoder (all tokens at once), then the decoder uses cross-attention to
            "consult" the encoder's understanding while generating!
          </p>
        </div>
      </div>
    )
  },

  // Slide 10: Self-Attention Mechanism (AgentFlowDiagram)
  {
    id: 'attention-mechanism',
    type: 'interactive',
    title: 'Self-Attention: Query, Key, Value',
    content: (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white p-6 rounded-xl">
          <h3 className="text-2xl font-bold mb-2">🔍 How Self-Attention Works</h3>
          <p className="text-lg opacity-90">
            Self-attention allows each token to "attend" to all other tokens with learned weights.
            The formula: <code className="bg-white/20 px-2 py-1 rounded">Attention(Q,K,V) = softmax(QK^T/√d_k)V</code>
          </p>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg">
          <p className="text-black">
            <strong>Example Sentence:</strong> "The agent learns because <strong className="bg-yellow-200 px-1">it</strong> is intelligent"<br/>
            <strong>Goal:</strong> When processing "it," self-attention helps the model realize
            "it" refers to "agent" by assigning high attention weight to "agent"
          </p>
        </div>

        <AgentFlowDiagram
          title="Self-Attention Mechanism Breakdown"
          description="Example: Processing the word 'agent' in sentence 'The agent learns because it is intelligent'"
          nodes={[
            {
              id: 'token',
              type: 'input',
              label: 'Token: "agent"',
              description: 'Current token embedding vector (512-d)',
              position: { x: 300, y: 0 }
            },
            {
              id: 'wq',
              label: 'Query (Q)',
              description: 'Q = Token × W^Q. Represents "What am I looking for?" Used to query other tokens.',
              position: { x: 100, y: 120 }
            },
            {
              id: 'wk',
              label: 'Key (K)',
              description: 'K = Token × W^K. Represents "What do I contain?" Indexed by queries from other tokens.',
              position: { x: 300, y: 120 }
            },
            {
              id: 'wv',
              label: 'Value (V)',
              description: 'V = Token × W^V. Represents "What information do I provide?" The actual content returned.',
              position: { x: 500, y: 120 }
            },
            {
              id: 'all-k',
              label: 'All Keys in Sentence',
              description: 'K vectors from ["The", "agent", "learns", "because", "it", "is", "intelligent"]',
              position: { x: 200, y: 250 }
            },
            {
              id: 'scores',
              label: 'Attention Scores',
              description: 'Score = Q·K^T / √d_k for each word. Higher score = more relevant. Example: Q_"it" has high score with K_"agent"',
              position: { x: 200, y: 370 }
            },
            {
              id: 'weights',
              label: 'Attention Weights',
              description: 'Weights = softmax(Scores). Sum to 1.0. Distribution: [0.05, 0.6, 0.1, 0.05, 0.1, 0.05, 0.05] (agent gets 60%!)',
              position: { x: 200, y: 490 }
            },
            {
              id: 'all-v',
              label: 'All Values in Sentence',
              description: 'V vectors from all tokens. Each contains semantic information.',
              position: { x: 450, y: 370 }
            },
            {
              id: 'weighted-sum',
              label: 'Weighted Sum',
              description: 'Output = Σ(weight_i × V_i). Combines information from all tokens, weighted by relevance.',
              position: { x: 350, y: 610 }
            },
            {
              id: 'output',
              type: 'output',
              label: 'Context-Aware Representation',
              description: 'New representation of "agent" incorporating global context. Now "knows" about "learns", "intelligent", etc.',
              position: { x: 350, y: 730 }
            }
          ]}
          edges={[
            { id: 'e1', source: 'token', target: 'wq', label: '×W^Q', animated: true },
            { id: 'e2', source: 'token', target: 'wk', label: '×W^K', animated: true },
            { id: 'e3', source: 'token', target: 'wv', label: '×W^V', animated: true },
            { id: 'e4', source: 'wq', target: 'scores', label: 'Q', animated: true },
            { id: 'e5', source: 'all-k', target: 'scores', label: 'K^T', animated: true },
            { id: 'e6', source: 'scores', target: 'weights', label: 'softmax(·/√d_k)', animated: true },
            { id: 'e7', source: 'wv', target: 'all-v', animated: true },
            { id: 'e8', source: 'weights', target: 'weighted-sum', label: 'α', animated: true },
            { id: 'e9', source: 'all-v', target: 'weighted-sum', label: 'V', animated: true },
            { id: 'e10', source: 'weighted-sum', target: 'output', animated: true }
          ]}
          height={800}
        />

        <div className="bg-purple-50 p-4 rounded-lg mt-4">
          <p className="text-sm text-black">
            💡 <strong>Why Multi-Head?</strong> Using h=8 heads means running this process 8 times
            in parallel with different W^Q, W^K, W^V matrices. Each head learns to focus on
            different relationships (syntax, semantics, anaphora, etc.)!
          </p>
        </div>
      </div>
    )
  },

  // Slide 11: Decoder-Only Architecture
  {
    id: 'decoder-only',
    type: 'content',
    title: 'Decoder-Only: The GPT Simplification',
    content: (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-green-600 to-teal-700 text-white p-8 rounded-xl">
          <h3 className="text-3xl font-bold mb-3">💡 The Simplification Insight</h3>
          <p className="text-xl opacity-90">
            "Isn't the core task of language to <strong>predict the next most likely word</strong>?"<br/>
            — OpenAI's GPT philosophy
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white border-2 border-gray-300 rounded-xl p-6">
            <h4 className="text-xl font-bold text-black mb-4">Original Transformer</h4>
            <div className="space-y-3 text-black">
              <div className="bg-blue-50 p-3 rounded">
                <p className="font-semibold text-blue-900">Encoder</p>
                <p className="text-sm">"Understand the entire input first"</p>
              </div>
              <div className="text-center">↓</div>
              <div className="bg-purple-50 p-3 rounded">
                <p className="font-semibold text-purple-900">Decoder</p>
                <p className="text-sm">"Generate output consulting encoder"</p>
              </div>
              <div className="bg-yellow-50 p-3 rounded mt-3">
                <p className="text-sm text-black">
                  <strong>Use Case:</strong> Translation (understand source → generate target)
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-teal-50 border-2 border-green-400 rounded-xl p-6">
            <h4 className="text-xl font-bold text-green-900 mb-4">GPT: Decoder-Only ✨</h4>
            <div className="space-y-3">
              <div className="bg-green-100 p-4 rounded-lg">
                <p className="font-semibold text-green-900 mb-2">Just Decoder Layers</p>
                <p className="text-sm text-black">
                  Stack of decoder layers with <strong>masked self-attention</strong>
                </p>
              </div>
              <div className="bg-white border-2 border-green-300 p-4 rounded-lg">
                <p className="font-semibold text-green-900 mb-2">Autoregressive Generation</p>
                <ol className="text-sm text-black space-y-1 list-decimal list-inside">
                  <li>Start: "Datawhale Agent is"</li>
                  <li>Predict: "a" (add to input)</li>
                  <li>New input: "Datawhale Agent is a"</li>
                  <li>Predict: "powerful" (add to input)</li>
                  <li>Repeat until [STOP] token</li>
                </ol>
              </div>
              <div className="bg-yellow-50 p-3 rounded">
                <p className="text-sm text-black">
                  <strong>Use Case:</strong> Generation (dialogue, writing, code, reasoning)
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-purple-50 border-2 border-purple-300 rounded-xl p-6">
          <h4 className="text-xl font-bold text-purple-900 mb-4">🎭 Masked Self-Attention: The Key Trick</h4>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <p className="text-black mb-3">
                During training, decoder sees the full target sequence. <strong>Masking</strong> ensures
                position <em>i</em> can only attend to positions ≤ <em>i</em> (not future tokens).
              </p>
              <div className="bg-white p-3 rounded border border-purple-200">
                <p className="text-xs text-black mb-2">Attention Score Matrix (before softmax):</p>
                <pre className="text-xs font-mono text-black">
{`[  2.3  -∞   -∞   -∞  ]   ← position 0
[  1.1  3.4  -∞   -∞  ]   ← position 1
[  0.8  2.1  4.2  -∞  ]   ← position 2
[  1.5  1.9  2.7  3.8 ]   ← position 3`}
                </pre>
                <p className="text-xs text-black mt-2">
                  -∞ values become 0 after softmax → no future peeking!
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-4 rounded-lg">
              <h5 className="font-bold text-orange-900 mb-3">Why Decoder-Only Won</h5>
              <ul className="space-y-2 text-black">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">✓</span>
                  <span><strong>Simpler Architecture:</strong> Fewer components, easier to scale</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">✓</span>
                  <span><strong>Unified Objective:</strong> "Predict next word" works for everything</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">✓</span>
                  <span><strong>Perfect for Generation:</strong> Dialogue, code, reasoning all = next-word prediction</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">✓</span>
                  <span><strong>Massive Scale:</strong> GPT-4, Llama 3, Claude — all Decoder-Only!</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-100 to-purple-100 border-l-4 border-blue-500 p-5 rounded-r-xl">
          <p className="text-lg text-black">
            🚀 <strong>Impact:</strong> Decoder-Only architecture opened the era of foundation models.
            GPT-3 (175B params), GPT-4 (rumored 1.7T params), Llama 3.1 (405B params) — all use this design!
          </p>
        </div>
      </div>
    )
  },

  // Slide 12: Prompt Engineering
  {
    id: 'prompting',
    type: 'content',
    title: 'Prompt Engineering: Talking to LLMs',
    content: (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-6 rounded-xl">
          <h3 className="text-2xl font-bold mb-2">💬 What is Prompt Engineering?</h3>
          <p className="text-lg opacity-90">
            The art and science of designing precise prompts to guide LLMs to produce expected responses.
            For agents, good prompts enable efficient collaboration and task decomposition.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-blue-50 border-2 border-blue-300 rounded-xl p-5">
            <h4 className="text-lg font-bold text-blue-900 mb-3">Zero-shot</h4>
            <p className="text-sm text-black mb-3">
              Direct instruction, no examples
            </p>
            <div className="bg-white p-3 rounded border border-blue-200 text-xs font-mono text-black">
              Text: Datawhale's AI Agent course is excellent!<br/>
              Sentiment:
            </div>
            <p className="text-xs text-black mt-2">
              Model relies on pre-trained knowledge
            </p>
          </div>

          <div className="bg-purple-50 border-2 border-purple-300 rounded-xl p-5">
            <h4 className="text-lg font-bold text-purple-900 mb-3">One-shot</h4>
            <p className="text-sm text-black mb-3">
              1 example to show format
            </p>
            <div className="bg-white p-3 rounded border border-purple-200 text-xs font-mono text-black">
              Text: Service too slow.<br/>
              Sentiment: Negative<br/><br/>
              Text: Course is excellent!<br/>
              Sentiment:
            </div>
            <p className="text-xs text-black mt-2">
              Model learns output style
            </p>
          </div>

          <div className="bg-pink-50 border-2 border-pink-300 rounded-xl p-5">
            <h4 className="text-lg font-bold text-pink-900 mb-3">Few-shot</h4>
            <p className="text-sm text-black mb-3">
              2-5 examples for better understanding
            </p>
            <div className="bg-white p-3 rounded border border-pink-200 text-xs font-mono text-black">
              [Example 1: Negative]<br/>
              [Example 2: Neutral]<br/>
              [Example 3: Positive]<br/><br/>
              Text: Course is excellent!<br/>
              Sentiment:
            </div>
            <p className="text-xs text-black mt-2">
              Model grasps nuances, boundaries
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-yellow-50 to-orange-50 border-2 border-yellow-400 rounded-xl p-6">
          <h4 className="text-xl font-bold text-orange-900 mb-4">🧠 Chain-of-Thought (CoT) Prompting</h4>
          <p className="text-black mb-4">
            For complex reasoning tasks, guide the model to "think step by step" before answering
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg border-2 border-red-200">
              <p className="font-semibold text-red-900 mb-2">❌ Without CoT</p>
              <div className="text-sm text-black space-y-2">
                <p className="font-mono bg-gray-100 p-2 rounded">
                  Q: A team won 60% of 80 games, then won 12 of 15 games. Total winning %?
                </p>
                <p className="font-mono bg-gray-100 p-2 rounded">
                  A: 65%  ← <span className="text-red-600">Wrong!</span>
                </p>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg border-2 border-green-300">
              <p className="font-semibold text-green-900 mb-2">✅ With CoT</p>
              <div className="text-sm text-black space-y-1">
                <p className="font-mono bg-gray-100 p-2 rounded text-xs">
                  Q: Same question. <strong>Please think step by step.</strong>
                </p>
                <p className="font-mono bg-gray-100 p-2 rounded text-xs">
                  A: Step 1: 80 × 60% = 48 wins<br/>
                  Step 2: Total = 95 games, 60 wins<br/>
                  Step 3: 60/95 ≈ <strong>63.16%</strong> ✓
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border-2 border-indigo-300 rounded-xl p-6">
          <h4 className="text-xl font-bold text-indigo-900 mb-4">🎯 Advanced Techniques</h4>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-indigo-50 p-4 rounded-lg">
              <h5 className="font-bold text-indigo-800 mb-2">🎭 Role-Playing</h5>
              <p className="text-sm text-black">
                "You are a senior Python expert. Explain GIL to a beginner..."
              </p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h5 className="font-bold text-purple-800 mb-2">📋 In-Context Examples</h5>
              <p className="text-sm text-black">
                Show exact input-output format for complex tasks (JSON extraction, etc.)
              </p>
            </div>
            <div className="bg-pink-50 p-4 rounded-lg">
              <h5 className="font-bold text-pink-800 mb-2">🎚️ Sampling Parameters</h5>
              <p className="text-sm text-black">
                Temperature (randomness), Top-p (nucleus), Top-k (truncation)
              </p>
            </div>
            <div className="bg-cyan-50 p-4 rounded-lg">
              <h5 className="font-bold text-cyan-800 mb-2">📝 Instruction Tuning</h5>
              <p className="text-sm text-black">
                Modern models (ChatGPT, Claude) trained to follow instructions directly
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  },

  // Slide 13: Tokenization
  {
    id: 'tokenization',
    type: 'content',
    title: 'Tokenization: From Text to Numbers',
    content: (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white p-6 rounded-xl">
          <h3 className="text-2xl font-bold mb-2">🔢 Why Tokenization?</h3>
          <p className="text-lg opacity-90">
            Computers only understand numbers. Tokenization converts text sequences into numerical
            sequences that LLMs can process, balancing vocabulary size with semantic expression.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-red-50 border-2 border-red-300 rounded-xl p-5">
            <h4 className="text-lg font-bold text-red-900 mb-3">❌ Word-Based</h4>
            <div className="bg-white p-3 rounded mb-3 text-sm text-black">
              <code>["Hello", "world", "!"]</code>
            </div>
            <div className="space-y-2 text-sm text-black">
              <p className="flex items-start gap-2">
                <span className="text-red-500">•</span>
                <span><strong>Vocabulary Explosion:</strong> Millions of words</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-red-500">•</span>
                <span><strong>OOV Problem:</strong> Can't handle unseen words (e.g., "DatawhaleAgent")</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-red-500">•</span>
                <span><strong>No Morphology:</strong> "look", "looks", "looking" are unrelated</span>
              </p>
            </div>
          </div>

          <div className="bg-yellow-50 border-2 border-yellow-300 rounded-xl p-5">
            <h4 className="text-lg font-bold text-yellow-900 mb-3">⚠️ Character-Based</h4>
            <div className="bg-white p-3 rounded mb-3 text-sm text-black">
              <code>["H","e","l","l","o"]</code>
            </div>
            <div className="space-y-2 text-sm text-black">
              <p className="flex items-start gap-2">
                <span className="text-yellow-600">✓</span>
                <span><strong>Small Vocab:</strong> ~100 characters</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-yellow-600">✓</span>
                <span><strong>No OOV:</strong> Can represent any word</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-red-500">•</span>
                <span><strong>Loss of Meaning:</strong> Individual chars lack semantics</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-red-500">•</span>
                <span><strong>Inefficient:</strong> Long sequences, slow learning</span>
              </p>
            </div>
          </div>

          <div className="bg-green-50 border-2 border-green-400 rounded-xl p-5">
            <h4 className="text-lg font-bold text-green-900 mb-3">✅ Subword (BPE)</h4>
            <div className="bg-white p-3 rounded mb-3 text-sm text-black">
              <code>["Token", "ization"]</code>
            </div>
            <div className="space-y-2 text-sm text-black">
              <p className="flex items-start gap-2">
                <span className="text-green-500">✓</span>
                <span><strong>Balanced Vocab:</strong> 30k-50k tokens (manageable)</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-green-500">✓</span>
                <span><strong>Handles Rare Words:</strong> "DatawhaleAgent" → ["Data", "whale", "Agent"]</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-green-500">✓</span>
                <span><strong>Semantic Subwords:</strong> "Token", "ization" have meaning</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-green-500">✓</span>
                <span><strong>Efficient:</strong> Shorter sequences, faster training</span>
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-300 rounded-xl p-6">
          <h4 className="text-xl font-bold text-blue-900 mb-4">🧩 Byte-Pair Encoding (BPE) Algorithm</h4>
          <div className="space-y-4">
            <p className="text-black">
              <strong>Core Idea:</strong> Start with characters, iteratively merge the most
              frequent adjacent token pairs until vocabulary reaches target size.
            </p>
            <div className="bg-white p-4 rounded-lg border border-blue-200">
              <p className="font-semibold text-blue-900 mb-2">Algorithm Steps:</p>
              <ol className="space-y-2 text-sm text-black list-decimal list-inside">
                <li><strong>Initialize:</strong> Vocabulary = all unique characters in corpus</li>
                <li><strong>Count Pairs:</strong> Find frequency of all adjacent token pairs</li>
                <li><strong>Merge Best:</strong> Merge the most frequent pair into new token, add to vocabulary</li>
                <li><strong>Repeat:</strong> Go to step 2 until vocab size reaches threshold (e.g., 50k)</li>
              </ol>
            </div>
            <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-4 rounded-lg">
              <p className="text-sm text-purple-900 mb-2">
                <strong>Example:</strong> Corpus = {'{'}&#34;hug&#34;, &#34;pug&#34;, &#34;pun&#34;, &#34;bun&#34;{'}'}
              </p>
              <p className="text-xs text-black">
                Initial: [h, u, g, p, u, g, p, u, n, b, u, n, &lt;/w&gt;]<br/>
                Merge 1: (u, g) → "ug" (appears 2x)<br/>
                Merge 2: (ug, &lt;/w&gt;) → "ug&lt;/w&gt;" (appears 2x)<br/>
                Merge 3: (u, n) → "un" (appears 2x)<br/>
                Merge 4: (un, &lt;/w&gt;) → "un&lt;/w&gt;" (appears 2x)<br/>
                <span className="text-purple-700">Final vocab size: 10 tokens</span>
              </p>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg">
          <p className="text-sm text-black">
            <strong>🔍 Fun Fact:</strong> GPT models use BPE. BERT uses WordPiece (similar).
            Llama uses SentencePiece (treats spaces as normal characters). All are subword algorithms!
          </p>
        </div>

        <div className="text-center text-black italic">
          Next slide: See BPE in action with live code! 👉
        </div>
      </div>
    )
  },

  // Slide 14: BPE Tokenization Demo (CodePlayground)
  {
    id: 'bpe-demo',
    type: 'interactive',
    title: 'Try It: Byte-Pair Encoding Tokenizer',
    content: (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white p-6 rounded-xl">
          <h3 className="text-2xl font-bold mb-2">🧩 Interactive BPE Demo</h3>
          <p className="text-lg opacity-90">
            BPE is the tokenization algorithm used by GPT models. It iteratively merges the most
            frequent adjacent token pairs to build a vocabulary, balancing size with semantic expression.
          </p>
        </div>

        <div className="bg-cyan-50 border-l-4 border-cyan-500 p-4 rounded-r-lg">
          <p className="text-black">
            <strong>Mini Corpus:</strong> "hug", "pug", "pun", "bun" (4 words)<br/>
            <strong>Goal:</strong> Build vocabulary through 4 merge operations<br/>
            <strong>Outcome:</strong> Unseen word "bug" tokenizes as ["b", "ug"]
          </p>
        </div>

        <CodePlayground
          language="python"
          initialCode={`import re, collections

def get_stats(vocab):
    """Count token pair frequencies"""
    pairs = collections.defaultdict(int)
    for word, freq in vocab.items():
        symbols = word.split()
        for i in range(len(symbols)-1):
            pairs[symbols[i],symbols[i+1]] += freq
    return pairs

def merge_vocab(pair, v_in):
    """Merge token pairs"""
    v_out = {}
    bigram = re.escape(' '.join(pair))
    p = re.compile(r'(?<!\\S)' + bigram + r'(?!\\S)')
    for word in v_in:
        w_out = p.sub(''.join(pair), word)
        v_out[w_out] = v_in[word]
    return v_out

# Mini corpus from Chapter 3: "hug", "pug", "pun", "bun"
vocab = {'h u g </w>': 1, 'p u g </w>': 1, 'p u n </w>': 1, 'b u n </w>': 1}
num_merges = 4

print("Initial vocabulary:", list(vocab.keys()))
print("=" * 50)

for i in range(num_merges):
    pairs = get_stats(vocab)
    if not pairs:
        break
    best = max(pairs, key=pairs.get)
    vocab = merge_vocab(best, vocab)
    print(f"Merge {i+1}: {best} -> {''.join(best)}")
    print(f"New vocab: {list(vocab.keys())}")
    print("-" * 50)

print("\\nFinal: Unseen word 'bug' tokenizes as: ['b', 'ug']")`}
        />

        <div className="bg-green-50 p-4 rounded-lg">
          <p className="text-sm text-black">
            🎯 <strong>Experiment:</strong> Try changing the corpus or number of merges to see how
            the vocabulary evolves! What happens if you add "bug" to the corpus?
          </p>
        </div>
      </div>
    )
  },

  // Slide 15: Model Selection & Scaling Laws
  {
    id: 'selection-scaling',
    type: 'content',
    title: 'Model Selection & Scaling Laws',
    content: (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-purple-600 to-pink-700 text-white p-6 rounded-xl">
          <h3 className="text-2xl font-bold mb-2">🎯 Choosing the Right Model</h3>
          <p className="text-lg opacity-90">
            Not "biggest = best"! Model selection balances performance, cost, speed, deployment,
            and task requirements. Understand scaling laws to predict improvements.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-blue-50 border-2 border-blue-300 rounded-xl p-5">
            <h4 className="text-xl font-bold text-blue-900 mb-4">🏢 Closed-Source Models</h4>
            <div className="space-y-3 text-sm text-black">
              <div className="bg-white p-3 rounded border-l-4 border-green-500">
                <p className="font-bold text-green-900">OpenAI GPT Series</p>
                <p className="text-xs">GPT-4 Turbo, GPT-4o: Cutting-edge multimodal, RLHF aligned</p>
              </div>
              <div className="bg-white p-3 rounded border-l-4 border-purple-500">
                <p className="font-bold text-purple-900">Anthropic Claude</p>
                <p className="text-xs">Claude 3.5 Sonnet: Safety-focused, long context (200K), instruction-following</p>
              </div>
              <div className="bg-white p-3 rounded border-l-4 border-blue-500">
                <p className="font-bold text-blue-900">Google Gemini</p>
                <p className="text-xs">Gemini 1.5 Pro: Native multimodal, 2M token context window</p>
              </div>
              <div className="bg-white p-3 rounded border-l-4 border-orange-500">
                <p className="font-bold text-orange-900">Domestic: DeepSeek, Qwen</p>
                <p className="text-xs">Strong Chinese capabilities, competitive pricing</p>
              </div>
            </div>
            <div className="bg-green-50 p-3 rounded mt-4">
              <p className="text-xs text-green-900">
                ✅ <strong>Pros:</strong> State-of-the-art performance, easy API access, no infrastructure<br/>
                ❌ <strong>Cons:</strong> Cost per token, data sent to 3rd party, rate limits
              </p>
            </div>
          </div>

          <div className="bg-purple-50 border-2 border-purple-300 rounded-xl p-5">
            <h4 className="text-xl font-bold text-purple-900 mb-4">🌐 Open-Source Models</h4>
            <div className="space-y-3 text-sm text-black">
              <div className="bg-white p-3 rounded border-l-4 border-blue-500">
                <p className="font-bold text-blue-900">Meta Llama 3.1</p>
                <p className="text-xs">405B flagship + 70B/8B: Excellent base models, permissive license</p>
              </div>
              <div className="bg-white p-3 rounded border-l-4 border-teal-500">
                <p className="font-bold text-teal-900">Mistral AI</p>
                <p className="text-xs">Mixture of Experts (MoE): Small size, high performance, multilingual</p>
              </div>
              <div className="bg-white p-3 rounded border-l-4 border-pink-500">
                <p className="font-bold text-pink-900">Alibaba Qwen 2.5</p>
                <p className="text-xs">0.5B - 72B range: Top Chinese support, code + math strong</p>
              </div>
              <div className="bg-white p-3 rounded border-l-4 border-green-500">
                <p className="font-bold text-green-900">Tsinghua ChatGLM</p>
                <p className="text-xs">Bilingual optimization, efficient fine-tuning (LoRA, P-Tuning)</p>
              </div>
            </div>
            <div className="bg-green-50 p-3 rounded mt-4">
              <p className="text-xs text-green-900">
                ✅ <strong>Pros:</strong> Full control, data privacy, customizable (fine-tuning), one-time cost<br/>
                ❌ <strong>Cons:</strong> GPU infrastructure, deployment complexity, maintenance
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-cyan-50 to-blue-50 border-2 border-cyan-400 rounded-xl p-6">
          <h4 className="text-xl font-bold text-cyan-900 mb-4">📊 Scaling Laws: The Power-Law Magic</h4>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <p className="text-black mb-3">
                <strong>Key Discovery (2020):</strong> Model performance (measured by Loss) has
                predictable power-law relationships with 3 factors:
              </p>
              <ul className="space-y-2 text-sm text-black">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-500 font-bold">1.</span>
                  <span><strong>Model Parameters (N):</strong> Bigger models → lower loss (smoother curves in log-log plot)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-500 font-bold">2.</span>
                  <span><strong>Training Data (D):</strong> More data → better generalization</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-500 font-bold">3.</span>
                  <span><strong>Compute (C):</strong> More GPU-hours → systematic improvements</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg border-2 border-cyan-300">
              <p className="font-semibold text-cyan-900 mb-2">Chinchilla Law (2022 Correction)</p>
              <p className="text-sm text-black mb-2">
                For given compute budget, <strong>optimal models are smaller but trained
                with much more data</strong>
              </p>
              <div className="bg-yellow-50 p-3 rounded">
                <p className="text-xs text-black">
                  Example: Chinchilla (70B params, 1.4T tokens) outperforms GPT-3 (175B params, 300B tokens)
                  because 4× more training data compensates for smaller size!
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-yellow-100 to-orange-100 border-l-4 border-yellow-500 p-5 rounded-r-xl">
          <h4 className="text-lg font-bold text-orange-900 mb-3">✨ Capability Emergence</h4>
          <p className="text-black">
            When models reach certain scale thresholds (tens to hundreds of billions of params),
            they suddenly exhibit <strong>new capabilities</strong>:
          </p>
          <ul className="text-sm text-black space-y-1 mt-2">
            <li>• <strong>Chain-of-Thought:</strong> Multi-step reasoning emerges at 100B+ scale</li>
            <li>• <strong>Instruction Following:</strong> Zero-shot task completion improves dramatically</li>
            <li>• <strong>Code Generation:</strong> Syntactically correct, semantically meaningful code</li>
            <li>• <strong>In-Context Learning:</strong> Few-shot adaptation without fine-tuning</li>
          </ul>
        </div>
      </div>
    )
  },

  // Slide 16: Limitations & Solutions
  {
    id: 'limitations',
    type: 'content',
    title: 'LLM Limitations & Mitigation Strategies',
    content: (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-red-600 to-orange-700 text-white p-6 rounded-xl">
          <h3 className="text-2xl font-bold mb-2">⚠️ Understanding LLM Limitations</h3>
          <p className="text-lg opacity-90">
            LLMs are powerful but not perfect. Knowing their limitations helps build reliable,
            robust agent systems with appropriate safeguards and mitigation strategies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-red-50 border-2 border-red-400 rounded-xl p-6">
            <h4 className="text-xl font-bold text-red-900 mb-4">🎭 Model Hallucination</h4>
            <div className="space-y-4">
              <p className="text-black">
                LLMs generate content that <strong>contradicts facts, user input, or context</strong>,
                often with high confidence
              </p>
              <div className="bg-white p-4 rounded-lg border border-red-300">
                <p className="font-semibold text-red-900 mb-2">Types of Hallucinations:</p>
                <ul className="space-y-2 text-sm text-black">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500">•</span>
                    <span><strong>Factual:</strong> "Einstein won Nobel Prize in 1922" (actually 1921)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500">•</span>
                    <span><strong>Faithfulness:</strong> Summary contradicts source text meaning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500">•</span>
                    <span><strong>Intrinsic:</strong> Output contradicts own prompt/input</span>
                  </li>
                </ul>
              </div>
              <div className="bg-yellow-50 p-3 rounded border-l-4 border-yellow-500">
                <p className="text-sm text-black">
                  <strong>Why?</strong> Autoregressive generation predicts "next most likely token"
                  without fact-checking. Training data may contain errors. Complex reasoning chains
                  can derail.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-orange-50 border-2 border-orange-400 rounded-xl p-6">
            <h4 className="text-xl font-bold text-orange-900 mb-4">📅 Other Limitations</h4>
            <div className="space-y-3">
              <div className="bg-white p-4 rounded-lg border-l-4 border-blue-500">
                <p className="font-semibold text-blue-900 mb-1">Knowledge Cutoff</p>
                <p className="text-sm text-black">
                  Models only know data up to training cutoff date. Events after that date are unknown
                  (e.g., GPT-4 cutoff: April 2023 → doesn't know about events in 2024)
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg border-l-4 border-purple-500">
                <p className="font-semibold text-purple-900 mb-1">Training Data Bias</p>
                <p className="text-sm text-black">
                  Models reflect biases in training data (gender, racial, cultural stereotypes).
                  Can perpetuate societal prejudices if not mitigated.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg border-l-4 border-pink-500">
                <p className="font-semibold text-pink-900 mb-1">Arithmetic Weakness</p>
                <p className="text-sm text-black">
                  Poor at precise calculations. "What's 347 × 89?" often gets wrong answer
                  (should use calculator tool!)
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg border-l-4 border-red-500">
                <p className="font-semibold text-red-900 mb-1">Context Length Limits</p>
                <p className="text-sm text-black">
                  Fixed context windows (4K - 2M tokens). Long documents may exceed limit,
                  requiring chunking strategies.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-teal-50 border-2 border-green-400 rounded-xl p-6">
          <h4 className="text-xl font-bold text-green-900 mb-4">✅ Mitigation Strategies</h4>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg border-2 border-green-300">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">🔍</span>
                <h5 className="font-bold text-green-900">RAG (Retrieval-Augmented Generation)</h5>
              </div>
              <p className="text-sm text-black mb-2">
                Retrieve relevant info from external knowledge base <em>before</em> generation
              </p>
              <div className="bg-green-50 p-2 rounded text-xs text-black">
                User Query → Search Docs → Inject Context → LLM generates fact-based answer
              </div>
              <p className="text-xs text-green-900 mt-2">
                ✓ Reduces hallucination, provides citations
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg border-2 border-blue-300">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">🧠</span>
                <h5 className="font-bold text-blue-900">Multi-Step Reasoning</h5>
              </div>
              <p className="text-sm text-black mb-2">
                Guide model to break down complex tasks into verifiable steps
              </p>
              <div className="bg-blue-50 p-2 rounded text-xs text-black">
                Chain-of-Thought + Self-Verification at each step → fewer errors propagate
              </div>
              <p className="text-xs text-blue-900 mt-2">
                ✓ Improves reasoning accuracy, interpretable
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg border-2 border-purple-300">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">🔧</span>
                <h5 className="font-bold text-purple-900">External Tools</h5>
              </div>
              <p className="text-sm text-black mb-2">
                Let model call specialized tools for precise tasks
              </p>
              <div className="bg-purple-50 p-2 rounded text-xs text-black">
                Search engines (up-to-date info), Calculators (exact math), Code interpreters (execution)
              </div>
              <p className="text-xs text-purple-900 mt-2">
                ✓ Offload tasks LLMs are weak at
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="bg-white p-4 rounded-lg border-2 border-yellow-300">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl">👥</span>
                <h5 className="font-bold text-yellow-900">RLHF (Human Feedback)</h5>
              </div>
              <p className="text-xs text-black">
                Fine-tune models with human preferences to reduce harmful outputs and improve alignment
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg border-2 border-pink-300">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl">📊</span>
                <h5 className="font-bold text-pink-900">Uncertainty Estimation</h5>
              </div>
              <p className="text-xs text-black">
                Train models to express confidence levels ("I'm not sure..." for uncertain answers)
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-100 to-cyan-100 border-l-4 border-blue-500 p-5 rounded-r-xl">
          <p className="text-black">
            💡 <strong>For Agent Developers:</strong> Combine multiple strategies! Use RAG for
            knowledge grounding, Chain-of-Thought for reasoning tasks, external tools for precise
            operations, and RLHF-tuned models for safety. <strong>Defense in depth!</strong>
          </p>
        </div>
      </div>
    )
  },

  // Slide 17: Quiz
  {
    id: 'quiz',
    type: 'interactive',
    title: 'Knowledge Check: LLM Fundamentals',
    content: (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-6 rounded-xl">
          <h3 className="text-2xl font-bold mb-2">📝 Chapter 3 Knowledge Check</h3>
          <p className="text-lg opacity-90">
            Test your understanding of language models, transformers, attention mechanisms,
            tokenization, and LLM limitations. Pass with 70% to unlock next chapter!
          </p>
        </div>

        <Quiz
          chapterId={3}
          title="Chapter 3 Knowledge Check"
          questions={[
            {
              id: 'q1',
              type: 'multiple-choice' as const,
              question: 'What is the core limitation of N-gram language models that neural networks solve?',
              options: [
                { id: 'a', text: 'Computational complexity', isCorrect: false },
                { id: 'b', text: 'Data sparsity and poor generalization - cannot handle unseen word combinations', isCorrect: true },
                { id: 'c', text: 'Inability to process long sequences', isCorrect: false },
                { id: 'd', text: 'Lack of parallel processing', isCorrect: false }
              ],
              explanation: 'N-gram models treat words as discrete symbols. If a word sequence never appeared in training data, probability = 0. They cannot generalize to semantically similar words (e.g., "robot learns" vs "agent learns").',
              points: 10
            },
            {
              id: 'q2',
              type: 'multiple-choice' as const,
              question: 'In the attention mechanism formula Attention(Q,K,V) = softmax(QK^T/√d_k)V, what does the √d_k scaling factor prevent?',
              options: [
                { id: 'a', text: 'Attention weights from summing to more than 1', isCorrect: false },
                { id: 'b', text: 'Gradients from becoming too small (vanishing) due to large dot products', isCorrect: true },
                { id: 'c', text: 'Overfitting to training data', isCorrect: false },
                { id: 'd', text: 'Negative attention scores', isCorrect: false }
              ],
              explanation: 'QK^T produces dot products that grow with dimension d_k. Large values → softmax saturates → tiny gradients. Dividing by √d_k keeps values stable for effective training.',
              points: 15
            },
            {
              id: 'q3',
              type: 'multiple-choice' as const,
              question: 'What is the purpose of Multi-Head Attention (using h=8 heads instead of h=1)?',
              options: [
                { id: 'a', text: 'Reduce computational cost by parallelizing attention', isCorrect: false },
                { id: 'b', text: 'Allow the model to attend to different types of relationships simultaneously (e.g., syntax, semantics)', isCorrect: true },
                { id: 'c', text: 'Increase the vocabulary size the model can handle', isCorrect: false },
                { id: 'd', text: 'Enable longer context windows', isCorrect: false }
              ],
              explanation: 'Each head learns to focus on different aspects (subject-verb, anaphora, sentiment). h=8 heads = 8 "experts" examining the sentence from different perspectives. Final output concatenates all heads.',
              points: 15
            },
            {
              id: 'q4',
              type: 'multiple-choice' as const,
              question: 'Why does Transformer use Positional Encoding instead of position embeddings?',
              options: [
                { id: 'a', text: 'Self-attention is order-invariant - without position info, "agent learns" = "learns agent"', isCorrect: true },
                { id: 'b', text: 'To reduce model parameters', isCorrect: false },
                { id: 'c', text: 'To enable parallel processing', isCorrect: false },
                { id: 'd', text: 'To handle variable-length sequences', isCorrect: false }
              ],
              explanation: 'Self-attention computes relationships regardless of position. PE adds sine/cosine waves so tokens at different positions get unique vectors: PE(pos,2i)=sin(pos/10000^(2i/d_model)).',
              points: 15
            },
            {
              id: 'q5',
              type: 'multiple-choice' as const,
              question: 'In BPE tokenization, what determines which token pair to merge next?',
              options: [
                { id: 'a', text: 'The pair with the highest frequency in the corpus', isCorrect: true },
                { id: 'b', text: 'Random selection for diversity', isCorrect: false },
                { id: 'c', text: 'The pair with the longest combined length', isCorrect: false },
                { id: 'd', text: 'Semantic similarity between the tokens', isCorrect: false }
              ],
              explanation: 'BPE is greedy: iteratively merge the most frequent adjacent token pair. Example: if ("u","g") appears 2x and ("u","n") appears 2x, merge one, recount, repeat until vocabulary reaches target size.',
              points: 10
            },
            {
              id: 'q6',
              type: 'multiple-choice' as const,
              question: 'What is the role of the Feed-Forward Network (FFN) in each Transformer layer?',
              options: [
                { id: 'a', text: 'Aggregate information across the sequence', isCorrect: false },
                { id: 'b', text: 'Extract higher-order features from the attention output via non-linear transformation', isCorrect: true },
                { id: 'c', text: 'Generate the final output probabilities', isCorrect: false },
                { id: 'd', text: 'Normalize layer activations', isCorrect: false }
              ],
              explanation: 'FFN applies to each position independently: FFN(x) = max(0, xW1+b1)W2+b2. Expands to d_ff=4×d_model, then shrinks back. Extracts non-linear features after attention aggregation.',
              points: 10
            },
            {
              id: 'q7',
              type: 'multiple-choice' as const,
              question: 'True or False: In Decoder self-attention, "masking" prevents tokens from attending to future positions, ensuring autoregressive generation.',
              options: [
                { id: 'true', text: 'True', isCorrect: true },
                { id: 'false', text: 'False', isCorrect: false }
              ],
              explanation: 'TRUE! During training, decoder sees full target sequence. Masking ensures position i can only attend to positions ≤i (not future tokens). This mimics autoregressive inference where we generate left-to-right.',
              points: 10
            },
            {
              id: 'q8',
              type: 'multiple-choice' as const,
              question: 'Why are word embeddings better than one-hot encoding for neural language models?',
              options: [
                { id: 'a', text: 'One-hot vectors are too large (vocabulary size) and treat words as isolated symbols with no semantic relationships', isCorrect: true },
                { id: 'b', text: 'Word embeddings are faster to compute', isCorrect: false },
                { id: 'c', text: 'One-hot encoding requires more training data', isCorrect: false },
                { id: 'd', text: 'Embeddings enable character-level modeling', isCorrect: false }
              ],
              explanation: 'One-hot: [0,0,1,0,...] for "agent", [0,1,0,0,...] for "robot". No similarity! Embeddings: dense vectors where similar words are close (cosine similarity). Captures semantics + reduces dimensions.',
              points: 15
            }
          ]}
          passingScore={70}
        />
      </div>
    )
  },

  // Slide 18: Summary
  {
    id: 'summary',
    type: 'summary',
    title: 'Chapter 3: Key Takeaways',
    content: (
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold gradient-text mb-4">
            🎓 You've Mastered LLM Fundamentals!
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            From statistical models to modern transformers, you now understand the AI brain
            that powers intelligent agents
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border-2 border-blue-300">
            <h3 className="text-xl font-bold text-blue-900 mb-4">📚 Model Evolution</h3>
            <ul className="space-y-2 text-black">
              <li className="flex items-start gap-2">
                <span className="text-blue-500 font-bold">✓</span>
                <span><strong>N-gram → Neural Networks:</strong> From discrete symbols to continuous embeddings</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 font-bold">✓</span>
                <span><strong>RNN/LSTM → Transformer:</strong> From sequential to parallel processing</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 font-bold">✓</span>
                <span><strong>Encoder-Decoder → Decoder-Only:</strong> Simplification for generation tasks</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border-2 border-purple-300">
            <h3 className="text-xl font-bold text-purple-900 mb-4">🔍 Core Mechanisms</h3>
            <ul className="space-y-2 text-black">
              <li className="flex items-start gap-2">
                <span className="text-purple-500 font-bold">✓</span>
                <span><strong>Self-Attention:</strong> Query-Key-Value mechanism for context modeling</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-500 font-bold">✓</span>
                <span><strong>Multi-Head Attention:</strong> 8 experts examining different relationships</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-500 font-bold">✓</span>
                <span><strong>Positional Encoding:</strong> Sine/cosine waves preserve token order</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-teal-50 p-6 rounded-xl border-2 border-green-300">
            <h3 className="text-xl font-bold text-green-900 mb-4">🛠️ Practical Skills</h3>
            <ul className="space-y-2 text-black">
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold">✓</span>
                <span><strong>Prompt Engineering:</strong> Zero/few-shot, Chain-of-Thought, role-playing</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold">✓</span>
                <span><strong>Tokenization:</strong> BPE balances vocab size with semantic expression</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold">✓</span>
                <span><strong>Model Selection:</strong> Closed-source (API) vs open-source (deployment)</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl border-2 border-orange-300">
            <h3 className="text-xl font-bold text-orange-900 mb-4">⚠️ Limitations & Solutions</h3>
            <ul className="space-y-2 text-black">
              <li className="flex items-start gap-2">
                <span className="text-orange-500 font-bold">✓</span>
                <span><strong>Hallucinations:</strong> Mitigate with RAG, multi-step reasoning, tools</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 font-bold">✓</span>
                <span><strong>Knowledge Cutoff:</strong> Use retrieval for up-to-date information</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 font-bold">✓</span>
                <span><strong>Scaling Laws:</strong> Performance improves predictably with N, D, C</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white p-8 rounded-xl">
          <h3 className="text-2xl font-bold mb-4">🚀 Next Steps: Building Agents</h3>
          <p className="text-lg mb-4">
            You now have the foundational knowledge to understand how agents "think" using LLMs.
            In the next chapter, we'll explore <strong>classic agent paradigms</strong> like
            ReAct, Plan-and-Solve, and Reflection.
          </p>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="bg-white/10 p-3 rounded-lg">
              <p className="font-bold">Chapter 4</p>
              <p className="text-white/80">Classic Agent Paradigms</p>
            </div>
            <div className="bg-white/10 p-3 rounded-lg">
              <p className="font-bold">Chapter 5</p>
              <p className="text-white/80">Low-Code Platforms</p>
            </div>
            <div className="bg-white/10 p-3 rounded-lg">
              <p className="font-bold">Chapter 6</p>
              <p className="text-white/80">Agent Frameworks</p>
            </div>
          </div>
        </div>

        <div className="text-center pt-6">
          <p className="text-black italic">
            🎉 Congratulations on completing Chapter 3! Ready to build your first agent? →
          </p>
        </div>
      </div>
    )
  }
]
