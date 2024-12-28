"use client";

import { setSettings } from "@/app/redux/game.slice";
import { Settings } from "@/app/types";
import client from "@/app/utils/client";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const GameSettings = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const gql = `
      query {
        settings {
          flow,
          currency,
          result_screen
        }
      }
    `;

      const data = (await client.query(gql)) as {
        settings: Settings;
      };

      dispatch(setSettings(data.settings));
    })();
  }, [dispatch]);

  return null;
};

export default GameSettings;
