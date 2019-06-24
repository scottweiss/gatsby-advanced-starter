import React from "react";
import { Link } from "gatsby";
import PostTags from "../PostTags/PostTags";

class PostListing extends React.Component {
  getPostList() {
    const postList = [];
    this.props.postEdges.forEach(postEdge => {
      postList.push({
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        cover: postEdge.node.frontmatter.cover,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.fields.date,
        displaydate:  postEdge.node.frontmatter.displaydate, 
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead,
        byline: postEdge.node.frontmatter.byline 
      });
    });
    return postList;
  }
  render() {
    const postList = this.getPostList();
    return (
      <div className="post-listing__list">
        {/* Your post list here. */
        postList.map(post => (
          <Link className="post-listing c-card d-block" to={post.path} key={post.title}>
          <header>
            <h1 className="post-listing__title">{post.title}</h1>
            <p>{post.byline}</p>
            <PostTags tags={post.tags} />
            <p className="m-0 post-listing__meta"><i class="fas fa-calendar fa-fw mr-2 post-listing__meta-icon"></i>{post.displaydate}</p>
            <p className="m-0 post-listing__meta"><i class="fas fa-book-open fa-fw mr-2 post-listing__meta-icon"></i>{post.timeToRead} minutes</p>
           
          </header>
           
          </Link>
        ))}
      </div>
    );
  }
}

export default PostListing;
