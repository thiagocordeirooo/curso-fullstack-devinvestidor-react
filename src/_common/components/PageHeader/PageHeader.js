import PageHeaderView from "./PageHeaderView";

export default function PageHeader({ title, actionButton }) {
  return <PageHeaderView {...{ title, actionButton }} />;
}
