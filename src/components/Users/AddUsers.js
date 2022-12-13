import Card from "../UI/Card";
import styles from "./AddUsers.module.css";
import Button from "../UI/Button";

function AddUsers(props) {
  const addUserHandler = (e) => {
    e.preventDefault();
  };

  const userChangeHandler = (e) => console.log(e.target.value);
  const ageChangeHandler = (e) => console.log(e.target.value);

  return (
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" onChange={userChangeHandler} />
        <label htmlFor="age">Age(Years)</label>
        <input id="age" type="number" onChange={ageChangeHandler} />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
}

export default AddUsers;
