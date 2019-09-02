const { createFilePath } = require("gatsby-source-filesystem");

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const BlogPostTemplate = require.resolve("./src/templates/blog-post.js");
  const BlogPostShareImage = require.resolve(
    "./src/templates/blog-post-share-image.js"
  );
  const PageTemplate = require.resolve("./src/templates/page.js");
  const PostsBytagTemplate = require.resolve("./src/templates/tags.js");
  const ListPostsTemplate = require.resolve(
    "./src/templates/blog-list-template.js"
  );

  // ADD
  const PostsByAllTagTemplate = require.resolve(
    "./src/templates/blog-list-tag-all-template.js"
  );
  const PostsByAllDateTemplate = require.resolve(
    "./src/templates/blog-list-date-all-template.js"
  );

  const allMarkdownQuery = await graphql(`
    {
      allMarkdown: allMdx(
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 1000
      ) {
        edges {
          node {
            fileAbsolutePath
            frontmatter {
              title
              slug
              tags
            }
          }
        }
      }
    }
  `);

  if (allMarkdownQuery.errors) {
    reporter.panic(allMarkdownQuery.errors);
  }

  const postPerPageQuery = await graphql(`
    {
      site {
        siteMetadata {
          postsPerPage
        }
      }
    }
  `);

  const markdownFiles = allMarkdownQuery.data.allMarkdown.edges;

  const posts = markdownFiles.filter(item =>
    item.node.fileAbsolutePath.includes("/content/posts/")
  );

  // generate paginated post list
  const postsPerPage = postPerPageQuery.data.site.siteMetadata.postsPerPage;
  const nbPages = Math.ceil(posts.length / postsPerPage);

  Array.from({ length: nbPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/` : `/pages/${i + 1}`,
      component: ListPostsTemplate,
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        currentPage: i + 1,
        nbPages: nbPages
      }
    });
  });

  // generate blog posts
  posts.forEach((post, index, posts) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node;
    const next = index === 0 ? null : posts[index - 1].node;

    createPage({
      path: post.node.frontmatter.slug,
      component: BlogPostTemplate,
      context: {
        slug: post.node.frontmatter.slug,
        previous,
        next
      }
    });

    // generate post share images (dev only)
    if (process.env.gatsby_executing_command.includes("develop")) {
      createPage({
        path: `${post.node.frontmatter.slug}/image_tw`,
        component: BlogPostShareImage,
        context: {
          slug: post.node.frontmatter.slug,
          width: 440,
          height: 220,
          type: "twitter"
        }
      });
      createPage({
        path: `${post.node.frontmatter.slug}/image_fb`,
        component: BlogPostShareImage,
        context: {
          slug: post.node.frontmatter.slug,
          width: 1200,
          height: 630,
          type: "facebook"
        }
      });
    }
  });

  // generate pages
  markdownFiles
    .filter(item => item.node.fileAbsolutePath.includes("/content/pages/"))
    .forEach(page => {
      createPage({
        path: page.node.frontmatter.slug,
        component: PageTemplate,
        context: {
          slug: page.node.frontmatter.slug
        }
      });
    });

  // generate tags
  markdownFiles
    .filter(item => item.node.frontmatter.tags !== null)
    .reduce(
      (acc, cur) => [...new Set([...acc, ...cur.node.frontmatter.tags])],
      []
    )
    .forEach(uniqTag => {
      createPage({
        path: `tags/${uniqTag}`,
        component: PostsBytagTemplate,
        context: {
          tag: uniqTag
        }
      });
    });

  // ADD All Tags
  posts.forEach((post, index, posts) => {
    createPage({
      path: "all-tag-posts",
      component: PostsByAllTagTemplate,
      context: {
        limit: 1000,
        skip: 0
      }
    });
  });

  posts.forEach((post, index, posts) => {
    createPage({
      path: "all-date-posts",
      component: PostsByAllDateTemplate,
      context: {
        limit: 1000,
        skip: 0
      }
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value
    });
  }
};
