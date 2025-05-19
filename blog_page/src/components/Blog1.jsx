import React, { useState, useEffect } from 'react';

const Blog1 = () => {
      const [email, setEmail] = useState("");
      const [subscribed, setSubscribed] = useState(false);
      const [loading, setLoading] = useState(false);

        // HANDELING THE SUBSCRIBE BUTTON
  const handleSubscribe = async () => {
    if (!email.trim()) return alert("Please enter a valid email!");

    setLoading(true);

    const formData = new FormData();
    formData.append("access_key", "4e9faa02-cb51-4253-98e6-b5794f4ece3a"); // Replace with your Web3Forms API Key
    formData.append("subject", "New Subscription");
    formData.append("from_name", "Subscription Form");
    formData.append("message", `New user subscribed: ${email}`);
    formData.append("reply_to", email);
    formData.append("redirect", "");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setSubscribed(true);
        setTimeout(() => {
          setEmail(""); // Clear input field
          setSubscribed(false); // Reset button state
        }, 3000); // Reset form after 3 seconds
      } else {
        alert("Failed to subscribe. Try again!");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
    <div className="relative w-full h-64 md:h-80 lg:h-96 bg-gray-900 overflow-hidden">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-70"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80')" }}
      ></div>
      
      {/* Content overlay */}
      <div className="relative h-full flex flex-col justify-center items-start p-6 md:p-10 lg:p-16 text-white">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight mb-2">
          The AI Illusion: B2B Marketers Need
        </h1>
        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4">
          Better Questions, Not More Hype
        </h2>
        <p className="text-sm md:text-base opacity-90">
          May 2, 2025 8:00:00 AM
        </p>
      </div>
    </div>

    {/* content */}
       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Gradient header section */}
        <div className="bg-[#000e54] p-6 md:p-8">
          <p className="text-white text-sm md:text-base font-semibold tracking-wider mb-1">
            Let's Talk About AI in B2B Marketing —
          </p>
          <h2 className="text-2xl md:text-4xl font-semibold text-white">
            Minus the Hype
          </h2>
        </div>

        {/* Content section */}
        <div className="p-6 md:p-8 lg:p-10 space-y-6">
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
            We need to talk about AI. Not the glossy, "next-gen" kind you see in vendor decks and flooding your inbox with promises of effortless pipeline growth. That version is exhausting and honestly, it's making it harder to spot what is actually useful.
          </p>

          <div className="border-l-4 border-[#000e54] pl-4 md:pl-6 py-2">
            <p className="text-gray-800 text-base md:text-lg italic">
              So we hosted a real conversation at Compare Bazaar. — Katrina Gonzalez led the discussion with Ben Luck (Chief Data Scientist) and Michael McGoldrick (Global VP of Marketing) on using AI and intent data without getting burned.
            </p>
          </div>
        </div>
      </div>
    </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 md:pb-20">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Header with accent bar */}
        <div className="border-l-8 border-[#000e54] bg-gray-50 p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
            Here's what stood out:
          </h2>
        </div>

        {/* Content section */}
        <div className="p-6 md:p-8 lg:p-10 space-y-6">
          {/* Numbered insight */}
          <div className="flex items-start">
            <div className="flex-shrink-0 bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center font-semibold mr-4 mt-1">
              1
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Bad Data = Bad AI
              </h3>
              <p className="text-gray-700 mb-4">
                Ben said it best: <span className="italic">"You can't make good predictions with bad inputs."</span> If your AI is running on outdated, third-party data, you're not targeting - you're guessing. Bad data makes your AI blind.
              </p>
              <p className="text-gray-700">
                First-party data is cleaner, fresher, and far more predictive. That's what gives AI the juice to spot who's actually in-market.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex-shrink-0 bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center font-semibold mr-4 mt-1">
              2
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
               Watch out for AI-washing
              </h3>
                <p className="text-gray-700">
               It’s rules dressed up as rocket science.  </p>
              <p className="text-gray-700 mb-4">
                Michael called this out hard — and he’s right.Too many vendors are just slapping “AI” on basic automation and hoping you won’t ask questions. If a platform can’t tell you how its models are trained or what data it learns from, chances are it’s not real AI. 
              </p>
            
            </div>
          </div>


           <div className="flex items-start">
            <div className="flex-shrink-0 bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center font-semibold mr-4 mt-1">
              3
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
               Budgets are shrinking. Buying committees are growing.
              </h3>
              <p className="text-gray-700 mb-4">
                Which means... your targeting must get smarter. You don’t have the luxury of broad, generic campaigns anymore. You need relevance. Precision. Confidence that you’re putting dollars behind the right accounts.  </p>
              <p className="text-gray-700">       
That’s where AI and behavioral intent data work best — but only when the data is real, and the model learns in real time. 
              </p>
            </div>
          </div>




        </div>
      </div>
    </div>


        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 md:pb-20">
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl shadow-lg overflow-hidden border border-gray-100">
        
        {/* Header section */}
        <div className="bg-white p-6 md:p-8 border-b border-gray-200">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
            So, what now?
          </h2>
          <p className="text-gray-600 mt-2">
            If you're trying to figure out what to actually do with AI (and not just talk about it), start here:
          </p>
        </div>

        {/* Action items */}
        <div className="p-6 md:p-8 lg:p-10 space-y-6">
          <div className="space-y-4">
            {/* Action item 1 */}
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-[#000e54] text-white rounded-full w-6 h-6 flex items-center justify-center font-semibold mr-4 mt-1">
                1
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Use first-party data
                </h3>
                <p className="text-gray-700">
                  It's your most valuable asset for accurate AI predictions
                </p>
              </div>
            </div>

            {/* Action item 2 */}
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-[#000e54] text-white rounded-full w-6 h-6 flex items-center justify-center font-semibold mr-4 mt-1">
                2
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Ask your vendors real questions
                </h3>
                <p className="text-gray-700">
                  Demand transparency about how their AI actually works
                </p>
              </div>
            </div>

            {/* Action item 3 */}
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-[#000e54] text-white rounded-full w-6 h-6 flex items-center justify-center font-semibold mr-4 mt-1">
                3
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Ignore the buzzwords
                </h3>
                <p className="text-gray-700">
                  Focus on measurable results rather than marketing claims
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>




         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
  <div className="flex flex-col lg:flex-row gap-12">
    {/* Final Thoughts - Left Side */}
    <div className="lg:w-1/2">
      <div className="text-left">
        <h2 className="text-3xl  font-semibold text-gray-900 mb-6">
          Final Thoughts
        </h2>
        
        <div className="prose prose-lg md:prose-xl text-gray-700 mb-8">
          <p className="text-base leading-relaxed mb-6">
            AI isn't the silver bullet — but it can give you a serious edge if you stay sharp. The marketers winning right now aren't chasing hype. They ask sharper questions, read clearer signals and use AI to scale what works.
          </p>
          
          <p className="text-base leading-relaxed mb-6">
            That's where we're focused at <span className="font-semibold text-[#ff8633]">Compare Bazaar</span>: fewer assumptions, smarter execution, and real outcomes.
          </p>
          
          <p className="text-base leading-relaxed font-semibold text-gray-900">
            Because in a world full of noise, clarity is your best competitive advantage.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mt-10">
          {['AI Marketing', 'B2B Strategy', 'Data-Driven', 'Marketing Tech', 'First-Party Data'].map((tag) => (
            <span 
              key={tag}
              className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>

    {/* Subscribe Form - Right Side */}
    <div className="lg:w-1/2">
      <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 h-full">
        <h3 className="text-3xl  font-semibold text-gray-900 mb-4">
          Subscribe
        </h3>
        <p className="text-gray-600 text-base mb-6">
          Subscribe to the very latest B2B lead gen updates — only the best bits, none of the fluff!
        </p>
        
        <div className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">
              Email*
            </label>
            <input
              type="email"
              id="email"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
            />
          </div>
          
          <div className="flex items-center">
            <label htmlFor="subscribe" className="ml-2 block text-sm text-gray-700">
              <span className="font-semibold">Subscribe</span> to our newsletter
            </label>
          </div>
          
          <button
            onClick={handleSubscribe}
            disabled={loading}
            className="w-full bg-[#ff8633] cursor-pointer text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-all duration-200 transform hover:scale-[1.02] mt-4 disabled:opacity-70 disabled:hover:scale-100"
          >
            {loading ? "Subscribing..." : subscribed ? "Subscribed ✅" : "Subscribe"}
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

    
    </>
  );
};

export default Blog1;