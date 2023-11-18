import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("the counter starts at 0", () => {
  render(<App />); // 컴포넌트 렌더링

  //screen object를 이용해서 원하는 엘레멘트에 접근(접근할 때  ID로 접근)
  // https://testing-library.com/docs/queries/about
  const counterElement = screen.getByTestId("counter");

  // id가 counter인 엘레멘트의 텍스트가 0인지 테스트
  // expect(counterElement).toBe(0);  ==> reaceived가 엘리먼트 전체로 실패하게 됨
  expect(counterElement).toHaveTextContent(0);
});

test("minus button has correct test", () => {
  render(<App />);

  const btnElement = screen.getByTestId("minus-btn");

  expect(btnElement).toHaveTextContent("-");
});

test("plus button has correct test", () => {
  render(<App />);

  const btnElement = screen.getByTestId("plus-btn");

  expect(btnElement).toHaveTextContent("+");
});

test("+버튼 클릭 시 카운터 1 증가", () => {
  render(<App />);

  const btnElement = screen.getByTestId("plus-btn");

  // 버튼 클릭 이벤트 발생
  fireEvent.click(btnElement);

  const counterElement = screen.getByTestId("counter");
  expect(counterElement).toHaveTextContent(1);
});

test("on/off 버튼 has Blue 컬러", () => {
  // https://github.com/testing-library/jest-dom : matcher 확인
  render(<App />);
  const btnElement = screen.getByTestId("on/off-btn");
  expect(btnElement).toHaveStyle({ backgroundColor: "blue" }); // CSS 테스트
});

test("on/off 클릭 시 +,- 버튼 Disalbe", () => {
  render(<App />);
  const onOffBtnElement = screen.getByTestId("on/off-btn");
  fireEvent.click(onOffBtnElement);

  const plusBtnElement = screen.getByTestId("plus-btn");
  expect(plusBtnElement).toBeDisabled();
});
