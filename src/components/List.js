import data from './ListData.json';

export default function List(props) {
  const filterData = data.filter((el) => {
    if (props.data === '') {
      return el;
    } else {
      return el.text.toLowerCase().includes(props.input);
    }
  });
  return (
    <ul>
      {filterData.map((item) => (
        <li key={item.id} className="list">
          {item.text}
        </li>
      ))}
    </ul>
  );
}
