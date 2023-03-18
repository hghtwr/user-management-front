function CountTile(props) {
  return (
    <div className="box-content h-32 w-32 p-4 border-4">
      <div className="text-gray-600">
        <h2 class="font-bold text-center">{props.data?.countTitle}</h2>
        <div className="font-extrabold	text-4xl text-center">
          <p class="text-blue-400">{props.data?.countNumber}</p>
        </div>
        <div className="break-words text-center	">
          {props.data?.countDescription}
        </div>
      </div>
    </div>
  );
}

export default CountTile;
