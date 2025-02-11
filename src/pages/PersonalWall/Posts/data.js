const posts = Array.from({ length: 90 }, (_, index) => ({
  id: index + 1,
  image: `https://picsum.photos/1920/1080?random=${index + 1}`,
  title: `Post Title ${index + 1}`,
  author: "John Doe",
  likes: Math.floor(Math.random() * 200) + 50,
  comments: [
    {
      id: 1,
      avatar: `https://randomuser.me/api/portraits/${index % 2 === 0 ? "men" : "women"}/${(index % 50) + 1}.jpg`,
      name: `User ${index * 2 + 1}`,
      text: "This is a great post!",
      timestamp: `${Math.floor(Math.random() * 24) + 1} hours ago`,
    },
    {
      id: 2,
      avatar: `https://randomuser.me/api/portraits/${index % 2 !== 0 ? "men" : "women"}/${(index % 50) + 2}.jpg`,
      name: `User ${index * 2 + 2}`,
      text: "Really interesting content!",
      timestamp: `${Math.floor(Math.random() * 24) + 1} hours ago`,
    },
  ],
}));

export default function fetchPosts() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(posts);
    }, 50);
  });
}