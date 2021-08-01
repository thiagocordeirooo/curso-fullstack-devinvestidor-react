import { useHistory } from "react-router-dom";
import DashboardCardView from "./DashboardCardView";

const DashboardCard = ({ title, value, icon, color, path }) => {
  const history = useHistory();

  const handleClick = () => history.push(`${path}`);

  return <DashboardCardView {...{ title, value, icon, color, handleClick }} />;
};

export default DashboardCard;
