import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { fetchBlogPosts } from '../utils/blogUtils';

function BlogList() {
  const { t, i18n } = useTranslation();
  const [allPosts, setAllPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlogPosts()
      .then(setAllPosts)
      .finally(() => setLoading(false));
  }, []);

  const posts = allPosts.filter(post => post.lang === i18n.language);

  return (
    <div className="blog-page">
      <div className="container">
        <div className="blog-header">
          <Link to="/" className="blog-back-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
            {t('blog.backHome')}
          </Link>
          <h1 className="section-title">{t('blog.title')}</h1>
          <p className="blog-subtitle">{t('blog.subtitle')}</p>
        </div>

        {loading ? (
          <div className="blog-loading">
            <div className="blog-loading-spinner" />
          </div>
        ) : posts.length === 0 ? (
          <p className="blog-empty">{t('blog.noPosts')}</p>
        ) : (
          <div className="blog-grid">
            {posts.map((post) => (
              <Link to={`/blog/${post.slug}`} className="blog-card glass-card" key={post.slug}>
                <div className="blog-card-body">
                  <span className="blog-card-date">{post.date}</span>
                  <h2>{post.title}</h2>
                  <p>{post.summary}</p>
                  <div className="tech-tags">
                    {post.tags.map((tag) => (
                      <span className="tag" key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default BlogList;
