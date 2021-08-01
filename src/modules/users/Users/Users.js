import UsersView from "./UsersView";
import { useContext } from "react";
import { UsersContext } from "./context/UsersContext";

export default function Users() {
  const { userDialog, setUserDialog } = useContext(UsersContext);

  const handleNew = () => setUserDialog({ open: true });

  return <UsersView {...{ handleNew, userDialog }} />;
}
