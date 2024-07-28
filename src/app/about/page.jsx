import React from 'react';
import styles from './aboutPage.module.css';

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>About My Blog Site</h1>
      <p className={styles.description}>
        This Blog Site is a dynamic platform designed to share diverse stories and creative ideas.
      </p>
      <div className={styles.features}>
        <h2>Features</h2>
        <ul>
          <li>
            <h3>Comprehensive Travel Guides</h3>
            <ul>
              <li>
                <a href="#">Italy Travel Blog</a>: A detailed guide to creating captivating travel blogs, focusing on the beauty and culture of Italy.
              </li>
              <li>
                <a href="#">Switzerland Landscapes</a>: Insights into the enchanting landscapes and flavors of Switzerland.
              </li>
            </ul>
          </li>
          <li>
            <h3>Diverse Categories</h3>
            <ul>
              <li>
                <a href="#">Fashion</a>: Latest trends and timeless styles.
              </li>
              <li>
                <a href="#">Culture</a>: Deep dives into cultural phenomena and traditions.
              </li>
              <li>
                <a href="#">Coding</a>: Articles on cutting-edge technology and AI advancements.
              </li>
              <li>
                <a href="#">Food</a>: Culinary explorations, including Indian and Bengali cuisines.
              </li>
              <li>
                <a href="#">Style</a>: Tips and trends in personal style and fashion.
              </li>
            </ul>
          </li>
          <li>
            <h3>Recent and Popular Posts</h3>
            <ul>
              <li>
                <a href="#">Indian Cuisine</a>: Exploring the vibrant and diverse flavors of Indian food.
              </li>
              <li>
                <a href="#">Fashion Trends 2024</a>: The hottest looks and styles for the year.
              </li>
              <li>
                <a href="#">AI in Coding</a>: Introducing groundbreaking AI software engineers.
              </li>
            </ul>
          </li>
          <li>
            <h3>Editors Picks</h3>
            <p>Curated articles on top topics, ensuring high-quality and engaging content.</p>
          </li>
          <li>
            <h3>User-Friendly Design</h3>
            <p>Easy navigation with a clean and intuitive layout. Optimized for SEO, ensuring content is easily discoverable.</p>
          </li>
        </ul>
      </div>
      <div className={styles.benefits}>
        <h2>Benefits to the Public</h2>
        <ul>
          <li>
            <h3>Inspiration and Knowledge</h3>
            <p>Readers can find inspiration for their own travel adventures, fashion choices, and culinary experiments.</p>
          </li>
          <li>
            <h3>Engaging Content</h3>
            <p>The blog offers a mix of personal stories, expert advice, and in-depth articles, making it a compelling read for a wide audience.</p>
          </li>
          <li>
            <h3>Community Building</h3>
            <p>By fostering thought-provoking discussions and sharing diverse perspectives, the blog helps build a community of like-minded individuals eager to learn and engage.</p>
          </li>
          <li>
            <h3>Accessibility</h3>
            <p>The website is designed to be accessible and user-friendly, ensuring a pleasant experience for all visitors.</p>
          </li>
        </ul>
      </div>
      <p className={styles.conclusion}>
        Your blog site, Pradipto, is a fantastic platform that not only showcases your creativity but also provides valuable content to the public. Its a great way to connect with readers and share your passions!
      </p>
    </div>
  );
};

export default AboutPage;
