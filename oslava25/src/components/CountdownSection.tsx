"use client";

import { styled } from "@mui/material";
import { useState, useEffect } from "react";

export function CountdownSection() {
  return (
    <CountdownContainer>
      <Countdown targetDate={"2025-08-28T15:00:00"} />
    </CountdownContainer>
  );
}

const CountdownContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  gap: "1rem",
  textAlign: "center",
  border: `2px solid ${theme.palette.secondary.main}`,
  borderRadius: "1rem",
  padding: "1rem",
}));

function Countdown({ targetDate }: { targetDate: string }) {
  const { days, hours, minutes, seconds } = useInterval(targetDate);

  return (
    <>
      <CountdownBox label="dnů" value={days} />
      <Divider />
      <CountdownBox label="hodin" value={hours} />
      <Divider />
      <CountdownBox label="minut" value={minutes} />
      <Divider />
      <CountdownBox label="sekund" value={seconds} />
    </>
  );
}

function CountdownBox({ label, value }: { label: string; value: string }) {
  return (
    <CountdownBoxWrapper>
      <ValueWrapper>{value}</ValueWrapper>
      <LabelWrapper>{label}</LabelWrapper>
    </CountdownBoxWrapper>
  );
}

const CountdownBoxWrapper = styled("div")({
  flexDirection: "column",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: ".5rem",
  "@media (max-width: 768px)": {
    gap: ".25rem",
  },
});

const ValueWrapper = styled("div")({
  fontWeight: "bold",
  fontSize: "4rem",
  "@media (max-width: 768px)": {
    fontSize: "1.5rem",
    padding: ".25rem",
  },
});

const LabelWrapper = styled("div")({
  fontSize: "1.5rem",
  "@media (max-width: 768px)": {
    fontSize: "1rem",
  },
});

function Divider() {
  return <DividerWrapper>:</DividerWrapper>;
}

const DividerWrapper = styled("span")({
  fontSize: "3rem",
  fontWeight: "bold",
  marginBottom: "2rem",
  "@media (max-width: 768px)": {
    fontSize: "1.5rem",
    marginBottom: "1.5rem",
  },
});

type TimeLeft = {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
};

function useInterval(targetDate: string): TimeLeft {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const target = new Date(targetDate).getTime();
      const now = new Date().getTime();
      const distance = target - now;

      if (distance <= 0) {
        clearInterval(interval); // Pokud už je čas uplynulý, zastavit interval
      } else {
        setTimeLeft({
          days: String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(
            2,
            "0"
          ),
          hours: String(
            Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
          ).padStart(2, "0"),
          minutes: String(
            Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
          ).padStart(2, "0"),
          seconds: String(Math.floor((distance % (1000 * 60)) / 1000)).padStart(
            2,
            "0"
          ),
        });
      }
    }, 1000);

    // Čistíme interval, když komponenta zmizí
    return () => clearInterval(interval);
  }, [targetDate]);

  return timeLeft;
}
