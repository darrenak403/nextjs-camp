"use client";

import {Button, Input, Spacer} from "@heroui/react";
import Children2 from "./Children2";
import {FormExample} from "./FormExample";
import LoginModal from "./LoginModal";
import SignUpModal from "./SignUpModal";
import {AppButton, AppCard, AppCardBody} from "@/components";
import {ButtonGroup} from "@/components";
import {ToolTipTile} from "@/components";
import {MyNavbar} from "@/components/shared/Navbar/Navbar";

// import {useState} from "react";
// import {MyButton} from "@/components/styled/MyButton";
// import {setCarrot, useAppDispatch, useAppSelector} from "@/redux";
// import {Button, Calendar, InputOtp} from "@heroui/react";

// export default function Home() {
//   const carrot = useAppSelector((state) => state.plant.carrot);
//   const potato = useAppSelector((state) => state.plant.potato);
//   const dispatch = useAppDispatch();

//   return (
//     <div>
//       {carrot}
//       <Button onPress={() => dispatch(() => dispatch(setCarrot(carrot + 1)))}>
//         Grow Carrot
//       </Button>
//       <Calendar />
//       <InputOtp value="" length={6} onChange={() => {}} />
//       <MyButton>Data</MyButton>
//     </div>
//   );
// }

// ***useState demo***-------------------------------------------------------------
// import {useState} from "react";

// export default function Home() {
//   const [count, setCount] = useState(0);
//   const [text, setText] = useState("");
//   return (
//     <div>
//       <div>{count}</div>
//       <Button onPress={() => setCount(count + 1)}>Increment count</Button>

//       <Spacer y={4} />

//       <div>{text}</div>
//       {/* <Button onPress={() => setText(text + "A")}>Append Hello</Button> */}
//       <Button onPress={() => setText((prev) => prev + "A")}>Append A</Button>
//     </div>
//   );
// }

// ***useEffect demo*** && Debounce function --------------------------------------------
// import {useEffect, useState} from "react";

// export default function Home() {
//   const [count, setCount] = useState(0);
//   const [text, setText] = useState("");

//   //dependency array
//   //Nếu giá trị trong dependency array thay đổi thì hàm trong useEffect sẽ được gọi lại
//   //Khi mà deps array thay đổi thì hàm sẽ được gọi
//   //Trước khi mà deps thay đổi lần nữa thì clean function nó sẽ gọi trước khi hàm gọi lại
//   useEffect(() => {
//     // setCount(count + 1);
//     // ***DEBOUNCE FUNCTION***
//     const debounceFn = setTimeout(() => {
//       fetch("https://pokeapi.co/api/v2/pokemon/ditto")
//         .then((res) => res.json())
//         .then((data) => alert(JSON.stringify(data)));
//     }, 1000);
//     //clean function
//     //useEffect return về 1 function thì function đó sẽ được gọi là clean function
//     return () => {
//       clearTimeout(debounceFn);
//       console.log("clean up", count);
//     };
//   }, [text]);
//   return (
//     <div>
//       {/* <div>{count}</div>
//       <Button onPress={() => setCount(count + 1)}>Increment count</Button>

//       <Spacer y={4} />

//       <div>{text}</div>
//       {/* <Button onPress={() => setText(text + "A")}>Append Hello</Button> */}
//       {/* <Button onPress={() => setText((prev) => prev + "A")}>Append A</Button> */}
//       <Input value={text} onValueChange={setText} />
//     </div>
//   );
// }

// ***useRef demo***-------------------------------------------------------------
// import {use, useEffect, useRef, useState} from "react";

// export default function Home() {
//   //useRef thì nó thay đổi giá trị và nó không re-render lại component
//   //thường sẽ được sử dụng vào 2 mục đích:
//   // 1. Truy cập trực tiếp vào DOM elements, xử lí logic
//   // 2. Giữ giá trị mà không cần re-render

//   const divRef = useRef<HTMLDivElement | null>(null);
//   // useEffect(() => {
//   //   if (divRef.current) {
//   //     divRef.current.innerHTML = "Hello useRef";
//   //   }
//   // }, []);

//   const preventFirstRender = useRef(false);
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     if (!preventFirstRender.current) {
//       preventFirstRender.current = true;
//       return;
//     }
//     if (divRef.current) {
//       divRef.current.innerHTML = `Hello World! Count: ${count}`;
//     }
//   }, [count]);
//   return (
//     <div>
//       <div ref={divRef}></div>
//       <Button onPress={() => setCount((prev) => prev + 1)}>
//         Increment count
//       </Button>
//     </div>
//   );
// }

// ***useContext***-------------------------------------------------------------
//useContext: QUan trong nhat. Chia nho code ra thanh cac component con de de xu ly. CHIA NHO - gap van de o hook.
//Hook o thang nay khong access dc thang kia va nguoc lai => useContext de no share hooks giau cac thang.
//Share data giua ca dong ho nha luong.
//Context => chia nho code ra de code cho suong, quang tat ca cac code vao 1 file.

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 dark:bg-gray-900  dark:text-gray-100">
      <MyNavbar />
      {/* <FormExample /> */}
      <AppButton kind="rainbow">Click me</AppButton>

      <hr />

      <ButtonGroup numButtons={5} />

      <br />

      <ToolTipTile
        size="md"
        title="Example Title"
        tooltip="This is a tooltip"
      />

      <br />

      <ToolTipTile size="lg" title="Another Title" tooltip="Another tooltip" />

      <AppCard flag={false}>
        <AppCardBody>1231231</AppCardBody>
      </AppCard>
      <div>
        <LoginModal /> {/* Modal phải được render ở đây */}
        <SignUpModal /> {/* Modal phải được render ở đây */}
      </div>
    </div>
  );
}
