module.exports = {
  title: 'Blog Qualisoni',
  description: 'Eleventy starter project to create a blog',
  keywords: ['eleventy', 'template', 'simple', 'clean'],
  // your site url without trailing slash
  url: 'https://blog.qualisoni.tk',
  // how many posts you want to show for each page
  paginate: 6,
  // if you want to add disqus to your site
  // disqusShortname: "your-shortname"
  feed : {
    subtitle: "I am learning how to develop a blog",
    filename: "feed.xml",
    path: "/feed/feed.xml",
    id: "https://qualisoni-dev.netlify.app/"
  },
  jsonfeed: {
    path: "/feed/feed.json",
    url: "https://qualisoni-dev.netlify.app/feed/feed.json"
  },
};
