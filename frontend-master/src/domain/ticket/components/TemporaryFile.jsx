// import { toDate } from "date-fns";
// import { useEffect, useState } from "react";
// import { Presenter } from "./days";

// const Calendar = () => {
//   // 현재 날짜를 초기 상태로 갖는다.
//   const nowDate = toDate(Date.now(), { timeZone: "Asia/Seoul" }); // toDate는 date-fns-tz의 timeZone 관련 util 함수이다.
//   // 2.
//   const [selectedYearAndMonth, setSelectedYearAndMonth] = useState({
//     year: nowDate.getFullYear(),
//     month: nowDate.getMonth(),
//   });
//   // 3.
//   const [selectedTimestamp, setSelectedTimestamp] = useState(
//     nowDate.setHours(0, 0, 0, 0)
//   );

//   // '<' 클릭 시
//   const handleLeftClick = () => {
//     // 1월일 땐 year 1 감소, month는 12월로 설정한다.
//     if (selectedYearAndMonth.month === 0) {
//       return setSelectedYearAndMonth((prev) => ({
//         year: prev.year - 1,
//         month: 11,
//       }));
//     }
//     // month 1 감소
//     setSelectedYearAndMonth((prev) => ({ ...prev, month: prev.month - 1 }));
//   };

//   // '>' 클릭 시
//   const handleRightClick = () => {
//     // 12월일 땐 year 1 증가, month는 1월로 설정한다.
//     if (selectedYearAndMonth.month === 11) {
//       return setSelectedYearAndMonth((prev) => ({
//         year: prev.year + 1,
//         month: 0,
//       }));
//     }
//     // month 1 증가
//     setSelectedYearAndMonth((prev) => ({ ...prev, month: prev.month + 1 }));
//   };

//   // 날짜 클릭 시
//   const handleDayClick = (timestamp) => () => {
//     setSelectedTimestamp(timestamp);
//   };

//   // '오늘' 클릭 시
//   const handleTodayClick = () => {
//     setSelectedTimestamp(nowDate.setHours(0, 0, 0, 0));
//     setSelectedYearAndMonth({
//       year: nowDate.getFullYear(),
//       month: nowDate.getMonth(),
//     });
//   };

//   // 3-2.
//   useEffect(() => {
//     const selectedDate = toDate(selectedTimestamp, { timeZone: "Asia/Seoul" });
//     setSelectedYearAndMonth({
//       year: selectedDate.getFullYear(),
//       month: selectedDate.getMonth(),
//     });
//   }, [selectedTimestamp]);

//   return (
//     <Presenter
//       selectedYearAndMonth={selectedYearAndMonth}
//       selectedTimestamp={selectedTimestamp}
//       onLeftClick={handleLeftClick}
//       onRightClick={handleRightClick}
//       onTodayClick={handleTodayClick}
//       onDayClick={handleDayClick}
//     />
//   );
// };

// export default Calendar;

// interface Props {
//   selectedYearAndMonth: YearAndMonthType;
//   selectedTimestamp: number;
//   onLeftClick: () => void;
//   onRightClick: () => void;
//   onTodayClick: () => void;
//   onDayClick: (timestamp: number) => () => void;
// }

// import {
//   getTimestampListForCalendar,
//   isCurrentMonth,
// } from "../utils/dateUtils";

// export const Presenter = ({
//   selectedYearAndMonth,
//   selectedTimestamp,
//   onLeftClick,
//   onRightClick,
//   onTodayClick,
//   onDayClick,
// }) => (
//   <Wrapper>
//     <Header>
//       <Btn onClick={onLeftClick}>
//         <Back width={24} height={24} />
//       </Btn>
//       <Center>
//         <Typo>
//           // 달력 타이틀
//           {selectedYearAndMonth.year}년 {selectedYearAndMonth.month + 1}월
//         </Typo>
//         <TodayBtn onClick={onTodayClick}>
//           <Typo>오늘</Typo>
//         </TodayBtn>
//       </Center>
//       <Btn onClick={onRightClick}>
//         <Forward width={24} height={24} />
//       </Btn>
//     </Header>

//     <Calendar>
//       // 월 ~ 일
//       <KoreanDays>
//         {Object.values(KoreanDayEnum).map((koreanDay) => (
//           <Cell key={koreanDay}>
//             <Typo>{koreanDay}</Typo>
//           </Cell>
//         ))}
//       </KoreanDays>
//       // 날짜 영역, grid로 구현했다.
//       <Days>
//         {getTimestampListForCalendar(
//           selectedYearAndMonth.year,
//           selectedYearAndMonth.month
//         ).map((timestamp) => (
//           // 5.
//           <Day
//             key={timestamp}
//             // selected 여부
//             isSelected={timestamp === selectedTimestamp}
//             // 오늘 여부
//             isToday={isToday(timestamp)}
//             // 이번 달 여부
//             isCurrentMonth={isCurrentMonth(
//               timestamp,
//               selectedYearAndMonth.month
//             )}
//             onClick={onDayClick(timestamp)}
//           >
//             <Typo
//               // 5.
//               color={
//                 // selected된 날짜는 white font
//                 timestamp === selectedTimestamp
//                   ? Colors.white
//                   : // 이번 달이면 black font
//                   isCurrentMonth(timestamp, selectedYearAndMonth.month)
//                   ? Colors.black
//                   : // 다른 달이면 gray font
//                     Colors.gray
//               }
//             >
//               // 날짜
//               {toDate(timestamp, { timeZone: "Asia/Seoul" }).getDate()}
//             </Typo>
//           </Day>
//         ))}
//       </Days>
//     </Calendar>
//   </Wrapper>
// );
// // 5. styled component를 사용 중이다.
// const Day = styled(Cell)<{
//   isSelected: boolean;
//   isToday: boolean;
//   isCurrentMonth: boolean;
// }>`
//   cursor: pointer;
//   ${props =>
//     // selected된 경우 green circle로 표시한다.
//     props.isSelected &&
//     `background: ${Colors.green};
// border-radius: 50%;
// `}
//   ${props =>
//     // 오늘이지만 selected 되지 않은 경우 gray circle로 표시한다.
//     props.isToday &&
//     !props.isSelected &&
//     `border: 2px solid ${Colors.gray};
// border-radius: 50%;
// `}
// `;
