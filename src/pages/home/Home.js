import React, { useState, useEffect } from "react";
import "./style.css";
import image from "../../assets/images/generativeAI.png"




function Home() {
  return (
    <>
    <div className="body">
    <section class="hero-section">
   <div class="hero-container">
    <div class="grid">
      <div class="hero-content">
        <div class="text">
          <h1 class="title">BLUETICK CONSULTANTS</h1>
          <p class="subtitle">Founded in 2017</p>
          <p class="description">
            Bluetick Consultants is a technology-driven firm that has made a significant impact in the Indian and US startup ecosystems. We specialize in <b>Transforming Enterprises</b> with cutting-edge, scalable, and privacy-focused Generative AI Solutions.
          </p>
          
          <a href="https://www.bluetickconsultants.com/generative-ai.html" target="_blank" rel="noopener noreferrer" className="button">
            <button type="button">Explore</button>
          </a>
         
        </div>
      </div>
      <div class="hero-image-container">
        <img
          alt="Hero Image"
          class="hero-image"
          src={image}
        />
      </div>
    </div>
  </div>
</section>



{/* Ofeer Section */}


<section className="what-we-offer-section">
      <div className="offer-container">
        <h2>What We Offer</h2>
        <div className="offer-items-wrapper"> 
        <div className="offer-item">
  
          <h3>Explore AI Opportunities for Your Enterprise</h3>
          <p>
            Unlock the potential of generative AI by identifying tailored opportunities for integration within
            your organization, ensuring a strategic and efficient approach to AI implementation.
          </p>
        </div>

        <div className="offer-item">
          <h3>Design AI Trust Layer</h3>
          <p>
            Prioritize data security and build trust in generative AI applications with a dedicated trust
            layer, emphasizing privacy-focused solutions that safeguard both organizational and
            customer data.
          </p>
        </div>

        <div className="offer-item">
          <h3>Scalability-Focused Solutions</h3>
          <p>
            Streamline and optimize business processes with comprehensive workflow automation,
            ensuring seamless integration of AI technologies from inception to execution for increased
            efficiency and productivity.
          </p>
        </div>

        <div className="offer-item">
          <h3>End to end Workflow Automation</h3>
          <p>
            Implement cutting-edge, scalable generative AI solutions that not only meet current
            organizational needs but also adapt and grow with the evolving demands of your enterprise,
            providing a future-proof approach to AI integration.
          </p>
        </div>
      </div>
      </div>
    </section>




{/* Blog Section */}

<section className="blogs-section">
  <div className="blog-container">
    <h2>Explore and Enjoy Our Blogs</h2>
    <div className="blog-items-wrapper"> {/* New wrapping div */}
      <div className="blog-item">
        <h3>Speaking SQL: Turning Natural Language into Database Dialogues</h3>
        <p>
          Bridging Language and Data in the Enterprise Sphere: In the realm of enterprise data
          management, SQL databases have long stood as the backbone, housing vast quantities of
          invaluable information. As enterprises increasingly lean on business intelligence (BI) tools to
          extract insights from these data repositories, the quest for more intuitive and accessible
          querying methods<b>. . . . . . .</b>
        </p>
        <a href="https://www.bluetickconsultants.com/speaking-sql-turning-natural-language-into-database-dialogues.html" target="_blank" rel="noopener noreferrer">Read More</a>
      </div>

      <div className="blog-item">
        <h3>Beyond Basics: Elevating AI with Reinforcement Learning from Human Feedback</h3>
        <p>
          Reinforcement Learning from Human Feedback (RLHF) was arguably the key behind the
          success of ChatGPT, marking a significant advancement in AI's ability to understand and
          engage in human language. This method, vital for fine-tuning language models, addresses
          the complexities and nuances of communication, ensuring AI interactions are natural and
          intuitive. It navigates the challenges of<b>. . . . . . .</b>
        </p>
        <a href="https://www.bluetickconsultants.com/beyond-basics-elevating-ai-with-reinforcement-learningfrom-human-feedback.html" target="_blank" rel="noopener noreferrer">Read More</a>
      </div>

      <div className="blog-item">
        <h3>The Fine Art of Tuning: Parameter-Efficient Fine-Tuning</h3>
        <p>
          Welcome to our exploration of the fascinating world of large language models! As many of
          you are aware, the scale of these models has skyrocketed recently. Take, for instance,
          GPT-4, which boasts a staggering 1.8 trillion parameters. The desire to fine-tune these
          behemoths with custom datasets is growing, yet it poses significant<b>. . . . . . .</b>
        </p>
        <a href="https://www.bluetickconsultants.com/the-fine-art-of-tuning-parameter-efficient-fine-tuning.html" target="_blank" rel="noopener noreferrer">Read More</a>
      </div>

      <div className="blog-item">
        <h3>PrivAIcy Matters: Balancing Privacy, Price, and Performance</h3>
        <p>
          Welcome to the enthralling universe of Generative AI! Recognized as a realm of artificial
          intelligence algorithms with the magic to conjure fresh content based on available data, this
          technology has unassumingly become the new frontier for a plethora of industries, including
          tech, banking, and media<b>. . . . . . .</b>
        </p>
        <a href="https://www.bluetickconsultants.com/privaicy-matters-balancing-privacy-price-and-performance-in-in-house-llm-deployments.html" target="_blank" rel="noopener noreferrer">Read More</a>
      </div>
    </div>
  </div>
</section>

    </div>

    </>
  )
}

export default Home