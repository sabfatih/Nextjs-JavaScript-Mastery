// path =    /api/users
export const GET = (req) => {
  // handle GET req for /api/users

  const users = [
    { id: 1, name: "John" },
    { id: 2, name: "Jane" },
    { id: 3, name: "Bob" },
  ];

  return new Response(JSON.stringify(users));
};
