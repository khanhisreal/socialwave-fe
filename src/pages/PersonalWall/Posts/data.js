const posts = [
  {
    id: 1,
    image: "https://picsum.photos/1920/1080?random=1",
    caption:
      "Exploring the hidden gems of the city—who knew a simple walk could be so refreshing?",
    username: "John Doe",
    likes: 132,
    comments: [
      {
        id: 1,
        avatar: "https://randomuser.me/api/portraits/men/1.jpg",
        name: "James Smith",
        text: "Looks like an amazing place!",
        timestamp: "5 hours ago",
      },
      {
        id: 2,
        avatar: "https://randomuser.me/api/portraits/women/2.jpg",
        name: "Emily Johnson",
        text: "Adding this to my must-visit list!",
        timestamp: "2 hours ago",
      },
    ],
  },
  {
    id: 2,
    image: "https://picsum.photos/1920/1080?random=2",
    caption:
      "Coding late into the night—sometimes the best ideas come when the world is asleep.",
    username: "John Doe",
    likes: 178,
    comments: [
      {
        id: 1,
        avatar: "https://randomuser.me/api/portraits/women/3.jpg",
        name: "Sophia Brown",
        text: "So relatable! Night coding sessions hit differently.",
        timestamp: "8 hours ago",
      },
      {
        id: 2,
        avatar: "https://randomuser.me/api/portraits/men/4.jpg",
        name: "Michael Davis",
        text: "Dark mode and coffee, the perfect combo.",
        timestamp: "1 hour ago",
      },
    ],
  },
  {
    id: 3,
    image: "https://picsum.photos/1920/1080?random=3",
    caption:
      "Finally perfected my homemade pizza recipe. Crispy crust, melty cheese—pure bliss!",
    username: "John Doe",
    likes: 210,
    comments: [
      {
        id: 1,
        avatar: "https://randomuser.me/api/portraits/men/5.jpg",
        name: "William Martinez",
        text: "That looks delicious! Recipe, please?",
        timestamp: "3 hours ago",
      },
      {
        id: 2,
        avatar: "https://randomuser.me/api/portraits/women/6.jpg",
        name: "Olivia Garcia",
        text: "Pizza night at your place when?",
        timestamp: "30 minutes ago",
      },
    ],
  },
  {
    id: 4,
    image: "https://picsum.photos/1920/1080?random=4",
    caption: "A morning without coffee is like a day without sunshine.",
    username: "John Doe",
    likes: 165,
    comments: [
      {
        id: 1,
        avatar: "https://randomuser.me/api/portraits/women/7.jpg",
        name: "Isabella Rodriguez",
        text: "Coffee first, everything else later!",
        timestamp: "7 hours ago",
      },
      {
        id: 2,
        avatar: "https://randomuser.me/api/portraits/men/8.jpg",
        name: "James Wilson",
        text: "Preach! ☕",
        timestamp: "2 hours ago",
      },
    ],
  },
  {
    id: 5,
    image: "https://picsum.photos/1920/1080?random=5",
    caption: "Sunset hikes are my therapy. Nature never fails to amaze me.",
    username: "John Doe",
    likes: 189,
    comments: [
      {
        id: 1,
        avatar: "https://randomuser.me/api/portraits/men/9.jpg",
        name: "Benjamin Moore",
        text: "Absolutely stunning view!",
        timestamp: "4 hours ago",
      },
      {
        id: 2,
        avatar: "https://randomuser.me/api/portraits/women/10.jpg",
        name: "Charlotte Taylor",
        text: "Hiking is the best stress reliever.",
        timestamp: "1 hour ago",
      },
    ],
  },
  {
    id: 6,
    image: "https://picsum.photos/1920/1080?random=6",
    caption:
      "Trying my hand at painting today. Turns out, it's both relaxing and frustrating at the same time.",
    username: "John Doe",
    likes: 154,
    comments: [
      {
        id: 1,
        avatar: "https://randomuser.me/api/portraits/women/11.jpg",
        name: "Amelia Anderson",
        text: "I feel you! Painting can be so therapeutic.",
        timestamp: "6 hours ago",
      },
      {
        id: 2,
        avatar: "https://randomuser.me/api/portraits/men/12.jpg",
        name: "Henry Thomas",
        text: "Can't wait to see your masterpiece!",
        timestamp: "2 hours ago",
      },
    ],
  },
  {
    id: 7,
    image: "https://picsum.photos/1920/1080?random=7",
    caption: "Just finished a 10k run. Feeling exhausted but accomplished!",
    username: "John Doe",
    likes: 202,
    comments: [
      {
        id: 1,
        avatar: "https://randomuser.me/api/portraits/men/13.jpg",
        name: "Alexander Jackson",
        text: "Great job! Keep it up!",
        timestamp: "5 hours ago",
      },
      {
        id: 2,
        avatar: "https://randomuser.me/api/portraits/women/14.jpg",
        name: "Mia White",
        text: "You're an inspiration!",
        timestamp: "1 hour ago",
      },
    ],
  },
  {
    id: 8,
    image: "https://picsum.photos/1920/1080?random=8",
    caption: "Baking cookies on a rainy day. The house smells amazing!",
    username: "John Doe",
    likes: 175,
    comments: [
      {
        id: 1,
        avatar: "https://randomuser.me/api/portraits/women/15.jpg",
        name: "Evelyn Harris",
        text: "Yum! Save some for me!",
        timestamp: "3 hours ago",
      },
      {
        id: 2,
        avatar: "https://randomuser.me/api/portraits/men/16.jpg",
        name: "Daniel Martin",
        text: "Nothing beats freshly baked cookies.",
        timestamp: "30 minutes ago",
      },
    ],
  },
  {
    id: 9,
    image: "https://picsum.photos/1920/1080?random=9",
    caption: "Spent the day at the beach. Sun, sand, and waves—perfect!",
    username: "John Doe",
    likes: 220,
    comments: [
      {
        id: 1,
        avatar: "https://randomuser.me/api/portraits/men/17.jpg",
        name: "Matthew Thompson",
        text: "Looks like paradise!",
        timestamp: "4 hours ago",
      },
      {
        id: 2,
        avatar: "https://randomuser.me/api/portraits/women/18.jpg",
        name: "Avery Martinez",
        text: "I wish I was there!",
        timestamp: "1 hour ago",
      },
    ],
  },
  {
    id: 10,
    image: "https://picsum.photos/1920/1080?random=10",
    caption: "Reading a good book by the fireplace. Cozy vibes.",
    username: "John Doe",
    likes: 145,
    comments: [
      {
        id: 1,
        avatar: "https://randomuser.me/api/portraits/women/19.jpg",
        name: "Harper Robinson",
        text: "Sounds like the perfect evening.",
        timestamp: "2 hours ago",
      },
      {
        id: 2,
        avatar: "https://randomuser.me/api/portraits/men/20.jpg",
        name: "Jack Clark",
        text: "What book are you reading?",
        timestamp: "1 hour ago",
      },
    ],
  },
  {
    id: 11,
    image: "https://picsum.photos/1920/1080?random=11",
    caption:
      "Gardening is my new favorite hobby. Watching things grow is so rewarding.",
    username: "John Doe",
    likes: 160,
    comments: [
      {
        id: 1,
        avatar: "https://randomuser.me/api/portraits/men/21.jpg",
        name: "Sebastian Lewis",
        text: "Gardening is so therapeutic!",
        timestamp: "5 hours ago",
      },
      {
        id: 2,
        avatar: "https://randomuser.me/api/portraits/women/22.jpg",
        name: "Ella Walker",
        text: "Can't wait to see your garden!",
        timestamp: "2 hours ago",
      },
    ],
  },
  {
    id: 12,
    image: "https://picsum.photos/1920/1080?random=12",
    caption:
      "Just booked my next travel adventure. Excited to explore new places!",
    username: "John Doe",
    likes: 190,
    comments: [
      {
        id: 1,
        avatar: "https://randomuser.me/api/portraits/women/23.jpg",
        name: "Grace Hall",
        text: "Safe travels! Can't wait to see your photos.",
        timestamp: "6 hours ago",
      },
      {
        id: 2,
        avatar: "https://randomuser.me/api/portraits/men/24.jpg",
        name: "Henry Allen",
        text: "Traveling is the best way to learn.",
        timestamp: "3 hours ago",
      },
    ],
  },
  {
    id: 13,
    image: "https://picsum.photos/1920/1080?random=13",
    caption:
      "Cooking up a storm in the kitchen today. Homemade meals are the best.",
    username: "John Doe",
    likes: 175,
    comments: [
      {
        id: 1,
        avatar: "https://randomuser.me/api/portraits/men/25.jpg",
        name: "Liam Young",
        text: "Homemade meals always taste better.",
        timestamp: "4 hours ago",
      },
      {
        id: 2,
        avatar: "https://randomuser.me/api/portraits/women/26.jpg",
        name: "Avery King",
        text: "What's on the menu?",
        timestamp: "1 hour ago",
      },
    ],
  },
  {
    id: 14,
    image: "https://picsum.photos/1920/1080?random=14",
    caption: "Weekend getaway to the mountains. Fresh air and beautiful views.",
    username: "John Doe",
    likes: 205,
    comments: [
      {
        id: 1,
        avatar: "https://randomuser.me/api/portraits/women/27.jpg",
        name: "Scarlett Wright",
        text: "The mountains are calling!",
        timestamp: "7 hours ago",
      },
      {
        id: 2,
        avatar: "https://randomuser.me/api/portraits/men/28.jpg",
        name: "Owen Lopez",
        text: "Looks so peaceful.",
        timestamp: "2 hours ago",
      },
    ],
  },
  {
    id: 15,
    image: "https://picsum.photos/1920/1080?random=15",
    caption: "Learning to play the guitar. It's challenging but so much fun!",
    username: "John Doe",
    likes: 180,
    comments: [
      {
        id: 1,
        avatar: "https://randomuser.me/api/portraits/men/29.jpg",
        name: "Lucas Hill",
        text: "Keep practicing! You'll get there.",
        timestamp: "5 hours ago",
      },
      {
        id: 2,
        avatar: "https://randomuser.me/api/portraits/women/30.jpg",
        name: "Zoe Scott",
        text: "Music is the best therapy.",
        timestamp: "1 hour ago",
      },
    ],
  },
  {
    id: 16,
    image: "https://picsum.photos/1920/1080?random=16",
    caption: "Enjoying a quiet evening with a cup of tea and a good movie.",
    username: "John Doe",
    likes: 140,
    comments: [
      {
        id: 1,
        avatar: "https://randomuser.me/api/portraits/women/31.jpg",
        name: "Lily Green",
        text: "Sounds like a perfect evening.",
        timestamp: "3 hours ago",
      },
      {
        id: 2,
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        name: "Mason Adams",
        text: "What movie are you watching?",
        timestamp: "1 hour ago",
      },
    ],
  },
  {
    id: 17,
    image: "https://picsum.photos/1920/1080?random=17",
    caption: "Just finished a challenging puzzle. Feeling accomplished!",
    username: "John Doe",
    likes: 165,
    comments: [
      {
        id: 1,
        avatar: "https://randomuser.me/api/portraits/men/33.jpg",
        name: "Ethan Baker",
        text: "Puzzles are so satisfying to complete.",
        timestamp: "4 hours ago",
      },
      {
        id: 2,
        avatar: "https://randomuser.me/api/portraits/women/34.jpg",
        name: "Chloe Gonzalez",
        text: "Great job! What's next?",
        timestamp: "2 hours ago",
      },
    ],
  },
  {
    id: 18,
    image: "https://picsum.photos/1920/1080?random=18",
    caption: "Spent the day volunteering at the animal shelter. So rewarding!",
    username: "John Doe",
    likes: 190,
    comments: [
      {
        id: 1,
        avatar: "https://randomuser.me/api/portraits/women/35.jpg",
        name: "Aubrey Nelson",
        text: "Volunteering is the best way to give back.",
        timestamp: "6 hours ago",
      },
      {
        id: 2,
        avatar: "https://randomuser.me/api/portraits/men/36.jpg",
        name: "Logan Carter",
        text: "The animals are lucky to have you!",
        timestamp: "3 hours ago",
      },
    ],
  },
];

export default function fetchPosts() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(posts);
    }, 50);
  });
}
