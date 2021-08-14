import PageHeaderView from './PageHeaderView';

const PageHeader = ({ title, actionButton }) => {
  document.title = `Task Organizze - ${title}`;

  return <PageHeaderView {...{ title, actionButton }} />;
};

export default PageHeader;
