// ***useContext demo***-------------------------------------------------------------
// import React, {useContext} from "react";
// import {CountContext} from "../../Children2";
// import {Button, Spacer} from "@heroui/react";

// export default function Children3() {
//   const {count, text, setText} = useContext(CountContext)!;
//   return (
//     <div>
//       Children3
//       <div>{count}</div>
//       <div>{text}</div>
//       <Spacer y={2} />
//       <Button onPress={() => setText("Dat")}>Append B</Button>
//     </div>
//   );
// }

// ***Redux demo***-------------------------------------------------------------
//Redux: Coi states nam trong context boc ngoai ung dung => tat ca component deu access duoc vao redux.
//Bo state ben ngoai de tat ca component co the access vao data cua redux dc. => tan dung suc manh cua useContext
// import React, {useContext} from "react";
// import {CountContext} from "../../Children2";
// import {Button, Spacer} from "@heroui/react";
// import {setOnion, useAppDispatch} from "@/redux";

// export default function Children3() {
//   const dispatch = useAppDispatch();

//   return (
//     <div>
//       Children3
//       <Button onPress={() => dispatch(setOnion(10))}>Click me</Button>
//     </div>
//   );
// }

// ***SWR demo***-------------------------------------------------------------
// - useSWR: Xai nhieu nhat - nhe nhat. Va no ok. Axios - pho bien qua.
//   + fetch api (thay the useEffect - cui bap. Chicken.)
//   + caching (co cache)
//   + revalidate - goi la api khi nao:
//     - rot mang - co mang lai -> goi api lai
//     - qua tab khac - ve tab nay lai -> goi api lai
//     - de tu doc
//   + fetch api 1 cai khoa hoc hon.

// import React, {useState} from "react";
// import useSWR from "swr";
// import axios from "axios";

// export default function Children3() {
//   const [ditto, setDitto] = useState("");
//   const swr = useSWR("DITTO", async () => {
//     const res = await axios.get("https://pokeapi.co/api/v2/pokemon/ditto");
//     setDitto(JSON.stringify(res.data));
//   });

//   return (
//     <div>
//       Children3
//       <div>{ditto}</div>
//     </div>
//   );
// }
"use client";
import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
  Spinner,
  getKeyValue,
} from "@heroui/react";
import useSWR from "swr";
import axios from "axios";
import {fetcher} from "@/lib/fetcher";

export default function App() {
  const [page, setPage] = React.useState(1);

  //   const {data, isLoading} = useSWR(
  //     //tham số đầu tiên là key
  //     //nếu key mà thay đổi thì các em gọi api/dependency array
  //     //nếu key đã trùng trong quá khứ, thì em sẽ lấy data trong cache ra
  //     //thay vì fetch lại api
  //     `https://swapi.py4e.com/api/people?page=${page}`,

  //     //tham số thứ 2 là fetcher function, nhận key làm tham số
  //     //fetch api trả về data
  //     async (url) => {
  //       const res = await axios.get(url);
  //       return res.data;
  //     },
  //     //config
  //     {
  //       keepPreviousData: true,
  //       revalidateIfStale: true,
  //       revalidateOnMount: true,
  //       revalidateOnReconnect: true,
  //     }
  //   );

  //*** KHÔNG DÙNG LIB *** */
  // const {data, isLoading} = useSWR(
  //   //key
  //   ["PAGINATION", page],
  //   //fetcher function
  //   async ([_, page]) => {
  //     const res = await axios.get(
  //       `https://swapi.py4e.com/api/people?page=${page}`
  //     );
  //     return res.data;
  //   },
  //   //config
  //   {
  //     keepPreviousData: true,
  //     revalidateIfStale: true,
  //     revalidateOnMount: true,
  //     revalidateOnReconnect: true,
  //   }
  // );

  const { data, isLoading } = useSWR(
    //key
    ["PAGINATION", page],
    //fetcher function
    async ([_, page]: [string, number]) => {
      const url = `https://swapi.py4e.com/api/people?page=${page}`;
      return fetcher(url);
    },
    //config
    {
      keepPreviousData: true,
      revalidateIfStale: true,
      revalidateOnMount: true,
      revalidateOnReconnect: true,
    }
  );

  const rowsPerPage = 10;

  const pages = React.useMemo(() => {
    return data?.count ? Math.ceil(data.count / rowsPerPage) : 0;
  }, [data?.count, rowsPerPage]);

  const loadingState =
    isLoading || data?.results.length === 0 ? "loading" : "idle";

  return (
    <Table
      aria-label="Example table with client async pagination"
      bottomContent={
        pages > 0 ? (
          <div className="flex w-full justify-center">
            <Pagination
              isCompact
              showControls
              showShadow
              color="primary"
              page={page}
              total={pages}
              onChange={(page) => setPage(page)}
            />
          </div>
        ) : null
      }
    >
      <TableHeader>
        <TableColumn key="name">Name</TableColumn>
        <TableColumn key="height">Height</TableColumn>
        <TableColumn key="mass">Mass</TableColumn>
        <TableColumn key="birth_year">Birth year</TableColumn>
      </TableHeader>
      <TableBody
        items={data?.results ?? []}
        loadingContent={<Spinner />}
        loadingState={loadingState}
      >
        {(item) => (
          <TableRow>
            {(columnKey) => (
              <TableCell>{getKeyValue(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
