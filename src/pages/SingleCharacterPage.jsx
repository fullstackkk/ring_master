import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useService from "../helpers/Service";

function SingleCharacterPage() {
  const [character, setCharacter] = useState([]);
  const { id } = useParams();

  const { getCharacterById } = useService();

  useEffect(() => {
    console.log(id);
    // if (id === 0) return;
    // getCharacterById(id).then((res) => {
    //   setCharacter(res);
    // });
  }, [id]);

  return (
    <div>
      <h1>{character.name}</h1>
    </div>
  );
}

export default SingleCharacterPage;
