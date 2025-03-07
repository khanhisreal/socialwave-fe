const posts = [
  {
    postId: 1,
    user: [
      {
        userId: 1,
        name: "John Doe",
        userName: "@johndoe",
        avatarImageSource: "https://randomuser.me/api/portraits/men/1.jpg",
      },
    ],
    imageSource: "https://picsum.photos/3840/2160?random=1",
    caption: "Enjoying the sunset at the beach!",
    likeCount: 120,
    createTime: "2025-03-05T12:30:00",
    updateTime: "2025-03-05T12:45:00",
  },
  {
    postId: 2,
    user: [
      {
        userId: 2,
        name: "Jane Smith",
        userName: "@janesmith",
        avatarImageSource: "https://randomuser.me/api/portraits/women/2.jpg",
      },
    ],
    imageSource: "https://picsum.photos/3840/2160?random=2",
    caption: "Delicious homemade pasta 🍝",
    likeCount: 85,
    createTime: "2025-03-04T18:15:00",
    updateTime: "2025-03-04T18:30:00",
  },
  {
    postId: 3,
    user: [
      {
        userId: 3,
        name: "Alice Johnson",
        userName: "@alicejohnson",
        avatarImageSource: "https://randomuser.me/api/portraits/women/3.jpg",
      },
    ],
    imageSource: "https://picsum.photos/3840/2160?random=3",
    caption: "Morning coffee with a view ☕🌄",
    likeCount: 95,
    createTime: "2025-03-03T07:45:00",
    updateTime: "2025-03-03T08:00:00",
  },
  {
    postId: 4,
    user: [
      {
        userId: 4,
        name: "Michael Brown",
        userName: "@michaelbrown",
        avatarImageSource: "https://randomuser.me/api/portraits/men/4.jpg",
      },
    ],
    imageSource: "https://picsum.photos/3840/2160?random=4",
    caption: "Hiking adventure! 🏔️",
    likeCount: 150,
    createTime: "2025-03-02T14:20:00",
    updateTime: "2025-03-02T14:35:00",
  },
  {
    postId: 5,
    user: [
      {
        userId: 5,
        name: "Emily Davis",
        userName: "@emilydavis",
        avatarImageSource: "https://randomuser.me/api/portraits/women/5.jpg",
      },
    ],
    imageSource: "https://picsum.photos/3840/2160?random=5",
    caption: "New painting I just finished 🎨",
    likeCount: 200,
    createTime: "2025-03-01T10:10:00",
    updateTime: "2025-03-01T10:25:00",
  },
  ...Array.from({ length: 15 }, (_, i) => ({
    postId: i + 6,
    user: [
      {
        userId: i + 6,
        name: `User ${i + 6}`,
        userName: `@user${i + 6}`,
        avatarImageSource: `https://randomuser.me/api/portraits/men/${(i + 6) % 10}.jpg`,
      },
    ],
    imageSource: `https://picsum.photos/3840/2160?random=${i + 6}`,
    caption: `Random caption ${i + 6}`,
    likeCount: Math.floor(Math.random() * 200) + 50,
    createTime: `2025-03-${String(5 - Math.floor(i / 3)).padStart(2, '0')}T${String(12 - (i % 6)).padStart(2, '0')}:00:00`,
    updateTime: `2025-03-${String(5 - Math.floor(i / 3)).padStart(2, '0')}T${String(12 - (i % 6) + 1).padStart(2, '0')}:00:00`,
  }))
];

export default posts;
