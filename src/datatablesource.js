export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },

  {
    field: "email",
    headerName: "Email",
    width: 230,
  },
  {
    field: "age",
    headerName: "Age",
    width: 210,
  },

  {
    field: "status",
    headerName: "Status",
    width: 260,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

export const userRows = [
  {
    id: 1,
    username: "Jhon snow",
    img: "https://www.comingsoon.net/assets/uploads/2022/06/Jon-Snow.jpeg",
    status: "active",
    email: "john@gmail.com",
    age: 35,
  },
  {
    id: 2,
    username: "virat",
    img: "https://www.comingsoon.net/assets/uploads/2022/06/Jon-Snow.jpeg",
    status: "pending",
    email: "virat@gmail.com",
    age: 35,
  },
  {
    id: 3,
    username: "kartik",
    img: "https://www.comingsoon.net/assets/uploads/2022/06/Jon-Snow.jpeg",
    status: "passive",
    email: "kartik@gmail.com",
    age: 35,
  },
  {
    id: 4,
    username: "kunal",
    img: "https://www.comingsoon.net/assets/uploads/2022/06/Jon-Snow.jpeg",
    status: "pending",
    email: "kunal@gmail.com",
    age: 35,
  },
  {
    id: 5,
    username: "Rahul",
    img: "https://www.comingsoon.net/assets/uploads/2022/06/Jon-Snow.jpeg",
    status: "active",
    email: "rahul@gmail.com",
    age: 35,
  },
  {
    id: 6,
    username: "Shivam",
    img: "https://www.comingsoon.net/assets/uploads/2022/06/Jon-Snow.jpeg",
    status: "active",
    email: "shivam@gmail.com",
    age: 35,
  },
  {
    id: 7,
    username: "Sunnny",
    img: "https://www.comingsoon.net/assets/uploads/2022/06/Jon-Snow.jpeg",
    status: "active",
    email: "sunny@gmail.com",
    age: 35,
  },
  {
    id: 8,
    username: "Kushal",
    img: "https://www.comingsoon.net/assets/uploads/2022/06/Jon-Snow.jpeg",
    status: "active",
    email: "kushal@gmail.com",
    age: 35,
  },
  {
    id: 9,
    username: "Tommy",
    img: "https://www.comingsoon.net/assets/uploads/2022/06/Jon-Snow.jpeg",
    status: "active",
    email: "tommy@gmail.com",
    age: 35,
  },
  {
    id: 10,
    username: "Sushant",
    img: "https://www.comingsoon.net/assets/uploads/2022/06/Jon-Snow.jpeg",
    status: "active",
    email: "sushant@gmail.com",
    age: 35,
  },
];
