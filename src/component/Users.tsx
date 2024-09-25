import { useGetAllUsersQuery } from "../app/service/user.service";

const Users = () => {
  const { data, isError, isLoading, isSuccess } = useGetAllUsersQuery({});

  if (isError) {
    return <p>we got error while fetching users!</p>;
  }

  if (isLoading) {
    return <p>fetching users...!</p>;
  }

  return (
    <>
      <h2 style={{ paddingLeft: "30px" }}>our sponsors</h2>
      <ul style={{ listStyle: "none" }}>
        {data.map((u: unknown) => (
          <li>{u.name}</li>
        ))}
      </ul>
    </>
  );
};

export default Users;
