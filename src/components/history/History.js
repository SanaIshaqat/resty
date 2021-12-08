function History({ history, handleApiCall }) {
  return (
    <div>
      <h3>History Log:</h3>
      <ul>
        {history &&
          history.map((data, index) => {
            return (
              <li key={index}>
                <b > Method :{data.method}</b>
             <br/>
               <b> URL: </b>{data.url}
                <br/>
                <b onClick={() => handleApiCall(data)}>Display Results:</b>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default History;