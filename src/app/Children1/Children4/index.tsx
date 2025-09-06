import {Button, Spinner} from "@heroui/react";
import axios from "axios";
import React from "react";
import useSWR from "swr";

export default function Children4() {
  //cách cũ
  //   const [data, setData] = useState(null);
  //   const [isLoading, setIsLoading] = useState(true);

  //   useEffect(() => {
  //     setIsLoading(true);
  //     axios
  //       .get("https://pokeapi.co/api/v2/pokemon/ditto")
  //       .then((res) => {
  //         setData(res.data);
  //       })
  //       .finally(() => setIsLoading(false));
  //   }, []);

  const swr = useSWR("PIKACHU", async (key) => {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/ditto`);
    return res.data;
  });
  return (
    <div>
      <Button onPress={() => swr.mutate()}>Call API Again</Button>
      {swr.isValidating ? (
        <Spinner />
      ) : (
        <div>
          <h2>{swr.data.name}</h2>
          <img src={swr.data.sprites.front_default} alt={swr.data.name} />
        </div>
      )}
    </div>
  );
}
