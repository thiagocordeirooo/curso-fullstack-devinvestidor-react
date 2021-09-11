const formatter = new Intl.DateTimeFormat('pt-BR', { dateStyle: 'short', timeStyle: 'short' });

const formatDate = (date) => formatter.format(date);

export default formatDate;
