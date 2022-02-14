const List = (props) => {
  return (
    <>
      <div className="ul">
        <div className="list">{props.value}</div>
        <button
          className="btn_red"
          onClick={() => {
            return props.del(props.id);
          }}
        >
          Delete
        </button>
      </div>
    </>
  );
};

export default List;
