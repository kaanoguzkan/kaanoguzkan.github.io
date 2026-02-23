import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Markdown from 'react-markdown';
import rehypeSanitize from 'rehype-sanitize';
import { fetchBlogPosts } from '../utils/blogUtils';

function BlogPost() {
  const { slug } = useParams();
  const { t, i18n } = useTranslation();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlogPosts()
      .then((posts) => {
        const found = posts.find(p => p.slug === slug && p.lang === i18n.language)
          || posts.find(p => p.slug === slug);
        setPost(found || null);
      })
      .finally(() => setLoading(false));
  }, [slug, i18n.language]);

  useEffect(() => {
    if (post) {
      document.title = `${post.title} | S. Kaan Oguzkan`;
    }
    return () => {
      document.title = 'S. Kaan Oguzkan | Software Engineer & CS Student';
    };
  }, [post]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (loading) {
    return (
      <div className="blog-page">
        <div className="container">
          <div className="blog-loading">
            <div className="blog-loading-spinner" />
          </div>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="blog-page">
        <div className="container">
          <div className="blog-header">
            <Link to="/blog" className="blog-back-link">
              <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
              {t('blog.backToBlog')}
            </Link>
            <h1>{t('blog.notFound')}</h1>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="blog-page">
      <div className="container">
        <article className="blog-post">
          <div className="blog-post-header">
            <Link to="/blog" className="blog-back-link">
              <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
              {t('blog.backToBlog')}
            </Link>
            <span className="blog-post-date">{post.date}</span>
            <h1>{post.title}</h1>
            <div className="tech-tags">
              {post.tags.map((tag) => (
                <span className="tag" key={tag}>{tag}</span>
              ))}
            </div>
          </div>

          <div className="blog-post-content">
            <Markdown rehypePlugins={[rehypeSanitize]}>{post.content}</Markdown>
          </div>
        </article>
      </div>
    </div>
  );
}

export default BlogPost;
