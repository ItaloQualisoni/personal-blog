module.exports = (coll) => {
  const posts = [...coll.getFilteredByGlob('_site/posts/*.md')];

  return posts.reverse();
};
